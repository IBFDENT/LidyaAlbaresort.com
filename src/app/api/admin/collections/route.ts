import { NextRequest, NextResponse } from "next/server";
import { requireAdminRequest } from "@/lib/admin-auth";
import { supabaseRest } from "@/lib/supabaseAdmin";

export const dynamic = "force-dynamic";

type CollectionPayload = {
  name?: string;
  slug?: string;
  type?: string;
  description?: string | null;
  hero_image_url?: string | null;
  status?: "draft" | "published";
  featured?: boolean;
  sort_order?: number;
};

function normalizeSlug(value: string) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export async function GET(request: NextRequest) {
  try {
    const admin = await requireAdminRequest(request);
    if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const collections = await supabaseRest<unknown[]>("collections", { query: "select=*&order=sort_order.asc,updated_at.desc" });
    return NextResponse.json({ collections });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to load collections." }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const admin = await requireAdminRequest(request);
    if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const payload = (await request.json()) as CollectionPayload;
    if (!payload.name?.trim()) return NextResponse.json({ error: "Name is required." }, { status: 400 });
    const item = {
      name: payload.name.trim(),
      slug: normalizeSlug(payload.slug?.trim() || payload.name),
      type: payload.type?.trim() || "jewellery",
      description: payload.description?.trim() || null,
      hero_image_url: payload.hero_image_url?.trim() || null,
      status: payload.status === "published" ? "published" : "draft",
      featured: Boolean(payload.featured),
      sort_order: Number(payload.sort_order) || 0,
      updated_at: new Date().toISOString(),
    };
    const rows = await supabaseRest<unknown[]>("collections", { method: "POST", body: item, prefer: "return=representation" });
    return NextResponse.json({ collection: rows[0] }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to create collection." }, { status: 500 });
  }
}
