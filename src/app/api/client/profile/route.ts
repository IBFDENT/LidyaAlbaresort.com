import { NextRequest, NextResponse } from "next/server";
import { CLIENT_ACCESS_COOKIE, getSupabaseAuthConfig } from "@/lib/client-auth";
import { requireClientRequest } from "@/lib/client-user";

export async function PATCH(request: NextRequest) {
  try {
    const user = await requireClientRequest(request);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = (await request.json()) as {
      fullName?: string;
      phone?: string;
      email?: string;
      preferredLanguage?: string;
    };

    const fullName = body.fullName?.trim() || "";
    const phone = body.phone?.trim() || "";
    const email = body.email?.trim().toLowerCase() || user.email || "";
    const preferredLanguage = body.preferredLanguage?.trim() || "sk";

    if (fullName.length > 120 || phone.length > 40 || email.length > 254) {
      return NextResponse.json({ error: "Profile value is too long." }, { status: 400 });
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Zadajte platnú emailovú adresu." }, { status: 400 });
    }

    const accessToken = request.cookies.get(CLIENT_ACCESS_COOKIE)?.value;
    if (!accessToken) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { url, anonKey } = getSupabaseAuthConfig();
    const updatePayload: Record<string, unknown> = {
      data: {
        ...(user.user_metadata || {}),
        full_name: fullName,
        phone,
        preferred_language: preferredLanguage,
      },
    };

    const emailChanged = email !== (user.email || "").toLowerCase();
    if (emailChanged) updatePayload.email = email;

    const response = await fetch(`${url}/auth/v1/user`, {
      method: "PUT",
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatePayload),
      cache: "no-store",
    });

    const payload = await response.json();
    if (!response.ok) {
      return NextResponse.json(
        { error: payload?.msg || payload?.message || "Unable to update profile." },
        { status: response.status }
      );
    }

    return NextResponse.json({
      user: payload,
      emailChangePending: emailChanged,
      message: emailChanged
        ? "Profil bol uložený. Na nový email bol odoslaný potvrdzovací odkaz."
        : "Profil bol uložený.",
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to update profile." },
      { status: 500 }
    );
  }
}
