import { NextResponse } from "next/server";

export const CLIENT_ACCESS_COOKIE = "lidya_client_access";
export const CLIENT_REFRESH_COOKIE = "lidya_client_refresh";

export function getSupabaseAuthConfig() {
  const url = process.env.SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error("Supabase auth environment variables are not configured.");
  }

  return { url: url.replace(/\/$/, ""), anonKey };
}

export function setClientSessionCookies(
  response: NextResponse,
  accessToken: string,
  refreshToken?: string,
  expiresIn = 3600
) {
  const secure = process.env.NODE_ENV === "production";

  response.cookies.set(CLIENT_ACCESS_COOKIE, accessToken, {
    httpOnly: true,
    secure,
    sameSite: "lax",
    path: "/",
    maxAge: Math.max(60, expiresIn - 30),
  });

  if (refreshToken) {
    response.cookies.set(CLIENT_REFRESH_COOKIE, refreshToken, {
      httpOnly: true,
      secure,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });
  }
}

export function clearClientSessionCookies(response: NextResponse) {
  response.cookies.set(CLIENT_ACCESS_COOKIE, "", { httpOnly: true, path: "/", maxAge: 0 });
  response.cookies.set(CLIENT_REFRESH_COOKIE, "", { httpOnly: true, path: "/", maxAge: 0 });
}
