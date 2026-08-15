import { NextRequest, NextResponse } from "next/server";

import { requireAdminRequest } from "@/lib/admin-auth";
import { supabaseRest } from "@/lib/supabaseAdmin";

export const dynamic = "force-dynamic";

type ProductPayload = {
  name?: string;
  slug?: string;
  category?: string;
  collection?: string | null;
  description?: string | null;
  price?: number | null;
  currency?: string;
  image_url?: string | null;
  status?: "draft" | "published";
  featured?: boolean;
  sort_order?: number;
};

function normalizeSlug(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function GET(request: NextRequest) {
  try {
    const admin = await requireAdminRequest(request);
    if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const search = request.nextUrl.searchParams.get("search")?.trim();
    const category = request.nextUrl.searchParams.get("category")?.trim();
    const filters = ["select=*", "order=sort_order.asc,updated_at.desc"];

    if (search) {
      filters.push(`or=(name.ilike.*${encodeURIComponent(search)}*,category.ilike.*${encodeURIComponent(search)}*)`);
    }
    if (category) {
      filters.push(`category=eq.${encodeURIComponent(category)}`);
    }

    const products = await supabaseRest<unknown[]>("products", {
      query: filters.join("&"),
    });

    return NextResponse.json({ products });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to load products." },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const admin = await requireAdminRequest(request);
    if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const payload = (await request.json()) as ProductPayload;

    if (!payload.name?.trim() || !payload.category?.trim()) {
      return NextResponse.json({ error: "Name and category are required." }, { status: 400 });
    }

    const product = {
      name: payload.name.trim(),
      slug: normalizeSlug(payload.slug?.trim() || payload.name),
      category: payload.category.trim(),
      collection: payload.collection?.trim() || null,
      description: payload.description?.trim() || null,
      price: typeof payload.price === "number" ? payload.price : null,
      currency: payload.currency?.trim().toUpperCase() || "EUR",
      image_url: payload.image_url?.trim() || null,
      status: payload.status === "published" ? "published" : "draft",
      featured: Boolean(payload.featured),
      sort_order: Number.isFinite(payload.sort_order) ? Number(payload.sort_order) : 0,
      updated_at: new Date().toISOString(),
    };

    const rows = await supabaseRest<unknown[]>("products", {
      method: "POST",
      body: product,
      prefer: "return=representation",
    });

    return NextResponse.json({ product: rows[0] }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to create product." },
      { status: 500 }
    );
  }
}
