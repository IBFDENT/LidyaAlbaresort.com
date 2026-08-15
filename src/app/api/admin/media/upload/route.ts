import { NextRequest, NextResponse } from "next/server";

import { requireAdminRequest } from "@/lib/admin-auth";
import { supabaseRest } from "@/lib/supabaseAdmin";

export const dynamic = "force-dynamic";

const MAX_SIZE = 15 * 1024 * 1024;
const ALLOWED = new Set(["image/jpeg","image/png","image/webp","image/gif","image/avif","video/mp4","application/pdf"]);

function safeName(name: string) {
  const parts = name.split(".");
  const ext = parts.length > 1 ? `.${parts.pop()!.toLowerCase().replace(/[^a-z0-9]/g, "")}` : "";
  const base = parts.join(".").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80) || "asset";
  return `${base}-${Date.now()}${ext}`;
}

export async function POST(request: NextRequest) {
  const admin = await requireAdminRequest(request);
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const form = await request.formData();
    const file = form.get("file");
    const alt = String(form.get("alt") || "").trim().slice(0, 300);
    if (!(file instanceof File)) return NextResponse.json({ error: "Vyberte súbor." }, { status: 400 });
    if (!ALLOWED.has(file.type)) return NextResponse.json({ error: "Nepodporovaný typ súboru." }, { status: 400 });
    if (file.size <= 0 || file.size > MAX_SIZE) return NextResponse.json({ error: "Súbor musí mať maximálne 15 MB." }, { status: 400 });

    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) throw new Error("Supabase storage is not configured.");

    const name = safeName(file.name);
    const path = `website/${new Date().getUTCFullYear()}/${name}`;
    const upload = await fetch(`${url.replace(/\/$/, "")}/storage/v1/object/lidya-media/${path}`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": file.type,
        "x-upsert": "false",
      },
      body: await file.arrayBuffer(),
      cache: "no-store",
    });
    if (!upload.ok) throw new Error((await upload.text()) || "Upload failed.");

    const publicUrl = `${url.replace(/\/$/, "")}/storage/v1/object/public/lidya-media/${path}`;
    const rows = await supabaseRest<unknown[]>("admin_entries", {
      method: "POST",
      body: {
        section: "media",
        title: file.name.slice(0, 180),
        slug: `media-${Date.now()}`,
        subtitle: alt || null,
        body: null,
        status: "active",
        metadata: { meta1: publicUrl, meta2: alt, mime: file.type, size: file.size, storage_path: path },
        sort_order: 0,
        updated_at: new Date().toISOString(),
      },
      prefer: "return=representation",
    });

    return NextResponse.json({ success: true, url: publicUrl, entry: rows[0] }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Upload failed." }, { status: 500 });
  }
}
