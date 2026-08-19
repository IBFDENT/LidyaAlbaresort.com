import { NextRequest, NextResponse } from "next/server";
import { CLIENT_ACCESS_COOKIE, getSupabaseAuthConfig } from "@/lib/client-auth";
import { requireClientRequest } from "@/lib/client-user";

const MIME_EXT: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};

export async function POST(request: NextRequest) {
  try {
    const user = await requireClientRequest(request);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const accessToken = request.cookies.get(CLIENT_ACCESS_COOKIE)?.value;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!accessToken || !serviceKey) {
      return NextResponse.json({ error: "Upload momentálne nie je dostupný." }, { status: 500 });
    }

    const form = await request.formData();
    const file = form.get("avatar");
    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Vyberte profilovú fotografiu." }, { status: 400 });
    }

    const ext = MIME_EXT[file.type];
    if (!ext) {
      return NextResponse.json({ error: "Povolené sú JPG, PNG a WEBP obrázky." }, { status: 400 });
    }
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "Fotografia môže mať maximálne 5 MB." }, { status: 400 });
    }

    const { url, anonKey } = getSupabaseAuthConfig();
    const objectPath = `${user.id}/avatar.${ext}`;
    const bytes = new Uint8Array(await file.arrayBuffer());

    const upload = await fetch(`${url}/storage/v1/object/client-avatars/${objectPath}`, {
      method: "POST",
      headers: {
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
        "Content-Type": file.type,
        "x-upsert": "true",
      },
      body: bytes,
      cache: "no-store",
    });

    if (!upload.ok) {
      const detail = await upload.text();
      console.error("Avatar upload failed", detail);
      return NextResponse.json({ error: "Fotografiu sa nepodarilo nahrať." }, { status: 500 });
    }

    const avatarUrl = `${url}/storage/v1/object/public/client-avatars/${objectPath}?v=${Date.now()}`;
    const authUpdate = await fetch(`${url}/auth/v1/user`, {
      method: "PUT",
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: { ...(user.user_metadata || {}), avatar_url: avatarUrl },
      }),
      cache: "no-store",
    });

    const payload = await authUpdate.json();
    if (!authUpdate.ok) {
      return NextResponse.json({ error: payload?.msg || "Profilovú fotografiu sa nepodarilo uložiť." }, { status: authUpdate.status });
    }

    return NextResponse.json({ user: payload, avatarUrl });
  } catch (error) {
    console.error("Client avatar error", error);
    return NextResponse.json({ error: "Fotografiu sa nepodarilo nahrať." }, { status: 500 });
  }
}
