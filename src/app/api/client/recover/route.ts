import { NextRequest, NextResponse } from "next/server";

import { getSupabaseAuthConfig } from "@/lib/client-auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = String(body.email || "").trim().toLowerCase();
    const captchaToken = String(body.captchaToken || "").trim();

    if (!email) {
      return NextResponse.json({ error: "Enter your email address." }, { status: 400 });
    }

    if (!captchaToken) {
      return NextResponse.json({ error: "Security verification is missing." }, { status: 400 });
    }

    const { url, anonKey } = getSupabaseAuthConfig();
    const redirectTo = `${request.nextUrl.origin}/client/reset-password`;

    const authResponse = await fetch(`${url}/auth/v1/recover?redirect_to=${encodeURIComponent(redirectTo)}`, {
      method: "POST",
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        gotrue_meta_security: {
          captcha_token: captchaToken,
        },
      }),
      cache: "no-store",
    });

    if (!authResponse.ok) {
      const payload = await authResponse.json().catch(() => ({}));
      return NextResponse.json(
        { error: payload?.msg || payload?.error_description || "Password recovery is temporarily unavailable." },
        { status: authResponse.status }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "If this email belongs to a LIDYA account, a secure recovery link has been sent.",
    });
  } catch (error) {
    console.error("Client recovery error", error);
    return NextResponse.json({ error: "Password recovery is temporarily unavailable." }, { status: 500 });
  }
}
