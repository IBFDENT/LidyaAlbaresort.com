import { NextRequest, NextResponse } from "next/server";

import { requireAdminRequest } from "@/lib/admin-auth";
import { supabaseRest } from "@/lib/supabaseAdmin";

export const dynamic = "force-dynamic";

const ALLOWED = new Set(["investment","services","travel","content","media","languages","seo","messages","settings"]);

function slugify(value: string) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export async function GET(request: NextRequest, context: { params: Promise<{ section: string }> }) {
  const admin = await requireAdminRequest(request);
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { section } = await context.params;
  if (!ALLOWED.has(section)) return NextResponse.json({ error: "Unknown section" }, { status: 404 });
  try {
    const entries = await supabaseRest<unknown[]>("admin_entries", {
      query: `select=*&section=eq.${encodeURIComponent(section)}&order=sort_order.asc,updated_at.desc`,
    });
    return NextResponse.json({ entries });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to load entries." }, { status: 500 });
  }
}

export async function POST(request: NextRequest, context: { params: Promise<{ section: string }> }) {
  const admin = await requireAdminRequest(request);
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { section } = await context.params;
  if (!ALLOWED.has(section)) return NextResponse.json({ error: "Unknown section" }, { status: 404 });
  try {
    const body = await request.json();
    const title = String(body.title || "").trim();
    if (!title) return NextResponse.json({ error: "Názov je povinný." }, { status: 400 });
    const entry = {
      section,
      title,
      slug: slugify(String(body.slug || title)) || `entry-${Date.now()}`,
      subtitle: String(body.subtitle || "").trim() || null,
      body: String(body.body || "").trim() || null,
      status: ["draft","published","active","archived"].includes(body.status) ? body.status : "draft",
      metadata: body.metadata && typeof body.metadata === "object" ? body.metadata : {},
      sort_order: Number(body.sort_order) || 0,
      updated_at: new Date().toISOString(),
    };
    const rows = await supabaseRest<unknown[]>("admin_entries", { method: "POST", body: entry, prefer: "return=representation" });
    return NextResponse.json({ entry: rows[0] }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to create entry." }, { status: 500 });
  }
}
