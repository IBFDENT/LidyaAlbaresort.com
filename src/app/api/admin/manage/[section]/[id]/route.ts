import { NextRequest, NextResponse } from "next/server";
import { requireAdminRequest } from "@/lib/admin-auth";
import { supabaseRest } from "@/lib/supabaseAdmin";

const ALLOWED = new Set(["investment","services","travel","content","media","languages","seo","messages","settings"]);

function slugify(value: string) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export async function PATCH(request: NextRequest, context: { params: Promise<{ section: string; id: string }> }) {
  const admin = await requireAdminRequest(request);
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { section, id } = await context.params;
  if (!ALLOWED.has(section)) return NextResponse.json({ error: "Unknown section" }, { status: 404 });
  try {
    const body = await request.json();
    const update: Record<string, unknown> = { updated_at: new Date().toISOString() };
    if (body.title !== undefined) update.title = String(body.title).trim();
    if (body.slug !== undefined) update.slug = slugify(String(body.slug));
    if (body.subtitle !== undefined) update.subtitle = String(body.subtitle).trim() || null;
    if (body.body !== undefined) update.body = String(body.body).trim() || null;
    if (body.status !== undefined && ["draft","published","active","archived"].includes(body.status)) update.status = body.status;
    if (body.metadata !== undefined && body.metadata && typeof body.metadata === "object") update.metadata = body.metadata;
    if (body.sort_order !== undefined) update.sort_order = Number(body.sort_order) || 0;

    const rows = await supabaseRest<unknown[]>("admin_entries", {
      method: "PATCH",
      query: `id=eq.${encodeURIComponent(id)}&section=eq.${encodeURIComponent(section)}`,
      body: update,
      prefer: "return=representation",
    });
    if (!rows.length) return NextResponse.json({ error: "Záznam sa nenašiel." }, { status: 404 });
    return NextResponse.json({ entry: rows[0] });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to update entry." }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, context: { params: Promise<{ section: string; id: string }> }) {
  const admin = await requireAdminRequest(request);
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { section, id } = await context.params;
  if (!ALLOWED.has(section)) return NextResponse.json({ error: "Unknown section" }, { status: 404 });
  try {
    await supabaseRest<void>("admin_entries", {
      method: "DELETE",
      query: `id=eq.${encodeURIComponent(id)}&section=eq.${encodeURIComponent(section)}`,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to delete entry." }, { status: 500 });
  }
}
