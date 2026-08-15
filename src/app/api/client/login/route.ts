import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAuthConfig, setClientSessionCookies } from "@/lib/client-auth";

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
    if (!authResponse.ok) {
      return NextResponse.json(
        { error: payload?.error_description || payload?.msg || "Prihlásenie sa nepodarilo." },
        { status: authResponse.status }
      );
    }

    const response = NextResponse.json({ ok: true, user: payload.user });
    setClientSessionCookies(response, payload.access_token, payload.refresh_token, payload.expires_in || 3600);
    return response;
  } catch (error) {
    console.error("Client login error", error);
    return NextResponse.json({ error: "Prihlásenie momentálne nie je dostupné." }, { status: 500 });
  }
}
