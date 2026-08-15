import { NextRequest, NextResponse } from "next/server";
import {
  getSupabaseAuthConfig,
  setAdminSessionCookies,
  verifyAdminAccessToken,
} from "@/lib/admin-auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "");

    if (!email || !password) {
      return NextResponse.json({ error: "Zadajte email a heslo." }, { status: 400 });
    }

    const { url, anonKey } = getSupabaseAuthConfig();
    const authResponse = await fetch(`${url}/auth/v1/token?grant_type=password`, {
      method: "POST",
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      cache: "no-store",
    });

    const payload = await authResponse.json();
    if (!authResponse.ok || !payload?.access_token) {
      return NextResponse.json({ error: "Nesprávny email alebo heslo." }, { status: 401 });
    }

    const admin = await verifyAdminAccessToken(payload.access_token);
    if (!admin) {
      return NextResponse.json({ error: "Tento účet nemá oprávnenie na administráciu." }, { status: 403 });
    }

    const response = NextResponse.json({
      ok: true,
      user: {
        email: admin.user.email,
        name: admin.profile.full_name,
        role: admin.profile.role,
      },
    });

    setAdminSessionCookies(
      response,
      payload.access_token,
      payload.refresh_token,
      payload.expires_in || 3600
    );

    return response;
  } catch (error) {
    console.error("Admin login error", error);
    return NextResponse.json({ error: "Prihlásenie momentálne nie je dostupné." }, { status: 500 });
  }
}
