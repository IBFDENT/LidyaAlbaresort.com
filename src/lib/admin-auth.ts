import { NextRequest, NextResponse } from "next/server";
import { supabaseRest } from "@/lib/supabaseAdmin";

export const ADMIN_ACCESS_COOKIE = "lidya_admin_access";
export const ADMIN_REFRESH_COOKIE = "lidya_admin_refresh";

const DEFAULT_SUPABASE_URL = "https://xhvqngmijcrnrrjqwels.supabase.co";
const DEFAULT_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhodnFuZ21pamNybnJyanF3ZWxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYwMzUzNjIsImV4cCI6MjEwMTYxMTM2Mn0.MRtl07KTPBA5CaiX0KaYmZBB9ta_3mzOJOIHheQoPeM";

type SupabaseUser = {
  id: string;
  email?: string;
  user_metadata?: Record<string, unknown>;
};

type AdminProfile = {
  id: string;
  email: string | null;
  full_name: string | null;
  role: "admin" | "staff" | "client";
};

export function getSupabaseAuthConfig() {
  const url = process.env.SUPABASE_URL || DEFAULT_SUPABASE_URL;
  const anonKey =
    process.env.SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    DEFAULT_SUPABASE_ANON_KEY;

  return { url: url.replace(/\/$/, ""), anonKey };
}

export function setAdminSessionCookies(
  response: NextResponse,
  accessToken: string,
  refreshToken?: string,
  expiresIn = 3600
) {
  const secure = process.env.NODE_ENV === "production";

  response.cookies.set(ADMIN_ACCESS_COOKIE, accessToken, {
    httpOnly: true,
    secure,
    sameSite: "lax",
    path: "/",
    maxAge: Math.max(60, expiresIn - 30),
  });

  if (refreshToken) {
    response.cookies.set(ADMIN_REFRESH_COOKIE, refreshToken, {
      httpOnly: true,
      secure,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });
  }
}

export function clearAdminSessionCookies(response: NextResponse) {
  response.cookies.set(ADMIN_ACCESS_COOKIE, "", { httpOnly: true, path: "/", maxAge: 0 });
  response.cookies.set(ADMIN_REFRESH_COOKIE, "", { httpOnly: true, path: "/", maxAge: 0 });
}

async function fetchSupabaseUser(accessToken: string): Promise<SupabaseUser | null> {
  const { url, anonKey } = getSupabaseAuthConfig();
  const response = await fetch(`${url}/auth/v1/user`, {
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${accessToken}`,
    },
    cache: "no-store",
  });

  if (!response.ok) return null;
  return response.json();
}

async function getAdminProfile(userId: string): Promise<AdminProfile | null> {
  const rows = await supabaseRest<AdminProfile[]>("profiles", {
    query: `select=id,email,full_name,role&id=eq.${encodeURIComponent(userId)}&limit=1`,
  });

  const profile = rows[0] ?? null;
  if (!profile || !["admin", "staff"].includes(profile.role)) return null;
  return profile;
}

export async function verifyAdminAccessToken(accessToken: string) {
  const user = await fetchSupabaseUser(accessToken);
  if (!user?.id) return null;

  const profile = await getAdminProfile(user.id);
  if (!profile) return null;

  return { user, profile };
}

export async function requireAdminRequest(request: NextRequest) {
  const accessToken = request.cookies.get(ADMIN_ACCESS_COOKIE)?.value;
  if (!accessToken) return null;
  return verifyAdminAccessToken(accessToken);
}
