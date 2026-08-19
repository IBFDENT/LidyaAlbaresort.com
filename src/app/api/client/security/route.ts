import { NextRequest, NextResponse } from "next/server";
import {
  clearClientSessionCookies,
  getSupabaseAuthConfig,
  setClientSessionCookies,
} from "@/lib/client-auth";
import { requireClientRequest } from "@/lib/client-user";

async function verifyPassword(email: string, password: string) {
  const { url, anonKey } = getSupabaseAuthConfig();
  const response = await fetch(`${url}/auth/v1/token?grant_type=password`, {
    method: "POST",
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    cache: "no-store",
  });
  const payload = await response.json();
  return { response, payload, url, anonKey };
}

export async function PATCH(request: NextRequest) {
  try {
    const user = await requireClientRequest(request);
    if (!user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await request.json();
    const currentPassword = String(body.currentPassword || "");
    const newPassword = String(body.newPassword || "");

    if (newPassword.length < 8) {
      return NextResponse.json({ error: "Nové heslo musí mať minimálne 8 znakov." }, { status: 400 });
    }

    const verified = await verifyPassword(user.email, currentPassword);
    if (!verified.response.ok || !verified.payload?.access_token) {
      return NextResponse.json({ error: "Aktuálne heslo nie je správne." }, { status: 400 });
    }

    const update = await fetch(`${verified.url}/auth/v1/user`, {
      method: "PUT",
      headers: {
        apikey: verified.anonKey,
        Authorization: `Bearer ${verified.payload.access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: newPassword }),
      cache: "no-store",
    });
    const payload = await update.json();
    if (!update.ok) {
      return NextResponse.json({ error: payload?.msg || payload?.message || "Heslo sa nepodarilo zmeniť." }, { status: update.status });
    }

    const response = NextResponse.json({ ok: true, message: "Heslo bolo bezpečne zmenené." });
    setClientSessionCookies(
      response,
      verified.payload.access_token,
      verified.payload.refresh_token,
      verified.payload.expires_in || 3600
    );
    return response;
  } catch (error) {
    console.error("Password change error", error);
    return NextResponse.json({ error: "Heslo sa nepodarilo zmeniť." }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const user = await requireClientRequest(request);
    if (!user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await request.json();
    const password = String(body.password || "");
    const confirmation = String(body.confirmation || "").trim().toUpperCase();
    if (confirmation !== "DELETE") {
      return NextResponse.json({ error: "Pre zmazanie účtu zadajte DELETE." }, { status: 400 });
    }

    const verified = await verifyPassword(user.email, password);
    if (!verified.response.ok) {
      return NextResponse.json({ error: "Heslo nie je správne." }, { status: 400 });
    }

    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!serviceKey) return NextResponse.json({ error: "Zmazanie účtu momentálne nie je dostupné." }, { status: 500 });

    const deletion = await fetch(`${verified.url}/auth/v1/admin/users/${encodeURIComponent(user.id)}`, {
      method: "DELETE",
      headers: { apikey: serviceKey, Authorization: `Bearer ${serviceKey}` },
      cache: "no-store",
    });
    if (!deletion.ok) {
      const detail = await deletion.text();
      console.error("Client deletion failed", detail);
      return NextResponse.json({ error: "Účet sa nepodarilo zmazať." }, { status: 500 });
    }

    const response = NextResponse.json({ ok: true });
    clearClientSessionCookies(response);
    return response;
  } catch (error) {
    console.error("Client deletion error", error);
    return NextResponse.json({ error: "Účet sa nepodarilo zmazať." }, { status: 500 });
  }
}
