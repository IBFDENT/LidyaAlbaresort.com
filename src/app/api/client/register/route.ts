import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAuthConfig, setClientSessionCookies } from "@/lib/client-auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "");
    const phone = String(body.phone || "").trim();
    const captchaToken = String(body.captchaToken || "").trim();

    if (!name || !email || password.length < 8) {
      return NextResponse.json(
        { error: "Vyplňte meno, platný email a heslo s minimálne 8 znakmi." },
        { status: 400 }
      );
    }

    if (!captchaToken) {
      return NextResponse.json({ error: "Bezpečnostné overenie chýba." }, { status: 400 });
    }

    const { url, anonKey } = getSupabaseAuthConfig();
    const redirectTo = `${request.nextUrl.origin}/client/login?confirmed=1`;

    const authResponse = await fetch(`${url}/auth/v1/signup`, {
      method: "POST",
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        data: {
          full_name: name,
          phone,
          role: "client",
        },
        gotrue_meta_security: {
          captcha_token: captchaToken,
        },
      }),
      cache: "no-store",
    });

    const payload = await authResponse.json();

    if (!authResponse.ok) {
      return NextResponse.json(
        { error: payload?.msg || payload?.error_description || "Registrácia sa nepodarila." },
        { status: authResponse.status }
      );
    }

    const response = NextResponse.json({
      ok: true,
      emailConfirmationRequired: !payload.access_token,
      message: payload.access_token
        ? "Registrácia bola úspešná."
        : "Registrácia bola úspešná. Na email sme odoslali potvrdzovací odkaz.",
    });

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
    console.error("Client registration error", error);
    return NextResponse.json({ error: "Registrácia momentálne nie je dostupná." }, { status: 500 });
  }
}
