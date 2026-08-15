import { NextRequest, NextResponse } from "next/server";
import { requireAdminRequest } from "@/lib/admin-auth";
import { supabaseRest } from "@/lib/supabaseAdmin";

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

export async function PATCH(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const admin = await requireAdminRequest(request);
    if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const { id } = await context.params;
    const payload = (await request.json()) as CollectionPayload;
    const update: Record<string, unknown> = { updated_at: new Date().toISOString() };
    if (payload.name !== undefined) update.name = payload.name.trim();
    if (payload.slug !== undefined) update.slug = normalizeSlug(payload.slug);
    if (payload.type !== undefined) update.type = payload.type.trim();
    if (payload.description !== undefined) update.description = payload.description?.trim() || null;
    if (payload.hero_image_url !== undefined) update.hero_image_url = payload.hero_image_url?.trim() || null;
    if (payload.status !== undefined) update.status = payload.status;
    if (payload.featured !== undefined) update.featured = Boolean(payload.featured);
    if (payload.sort_order !== undefined) update.sort_order = Number(payload.sort_order) || 0;
    const rows = await supabaseRest<unknown[]>("collections", { method: "PATCH", query: `id=eq.${encodeURIComponent(id)}`, body: update, prefer: "return=representation" });
    if (!rows.length) return NextResponse.json({ error: "Collection not found." }, { status: 404 });
    return NextResponse.json({ collection: rows[0] });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to update collection." }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const admin = await requireAdminRequest(request);
    if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const { id } = await context.params;
    await supabaseRest<void>("collections", { method: "DELETE", query: `id=eq.${encodeURIComponent(id)}` });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to delete collection." }, { status: 500 });
  }
}
