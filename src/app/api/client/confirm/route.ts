import { NextRequest, NextResponse } from "next/server";

import { getSupabaseAuthConfig, setClientSessionCookies } from "@/lib/client-auth";

const ALLOWED_TYPES = new Set(["signup", "email", "email_change", "recovery", "invite", "magiclink"]);

export async function GET(request: NextRequest) {
  const tokenHash = request.nextUrl.searchParams.get("token_hash")?.trim() || "";
  const type = request.nextUrl.searchParams.get("type")?.trim() || "email";

  if (!tokenHash || !ALLOWED_TYPES.has(type)) {
    return NextResponse.redirect(new URL("/client/login?confirmation_error=invalid", request.url));
  }

  try {
    const { url, anonKey } = getSupabaseAuthConfig();
    const verifyResponse = await fetch(`${url}/auth/v1/verify`, {
      method: "POST",
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token_hash: tokenHash, type }),
      cache: "no-store",
    });

    const payload = await verifyResponse.json();

    if (!verifyResponse.ok) {
      console.error("Client email confirmation failed", payload);
      const code = payload?.error_code === "otp_expired" ? "expired" : "invalid";
      return NextResponse.redirect(new URL(`/client/login?confirmation_error=${code}`, request.url));
    }

    const response = NextResponse.redirect(new URL("/client?confirmed=1", request.url));

    if (payload.access_token) {
      setClientSessionCookies(
        response,
        payload.access_token,
        payload.refresh_token,
        payload.expires_in || 3600
      );
    }

    return response;
  } catch (error) {
    console.error("Client email confirmation error", error);
    return NextResponse.redirect(new URL("/client/login?confirmation_error=unavailable", request.url));
  }
}
