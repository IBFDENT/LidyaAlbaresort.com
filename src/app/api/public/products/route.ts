import { NextRequest, NextResponse } from "next/server";

import { supabaseRest } from "@/lib/supabaseAdmin";

export const dynamic = "force-dynamic";

type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  collection: string | null;
  description: string | null;
  price: number | null;
  currency: string;
  image_url: string | null;
  featured: boolean;
  sort_order: number;
};

export async function GET(request: NextRequest) {
  try {
    const category = request.nextUrl.searchParams.get("category")?.trim();
    const query = [
      "select=id,name,slug,category,collection,description,price,currency,image_url,featured,sort_order",
      "status=eq.published",
      "order=featured.desc,sort_order.asc,updated_at.desc",
    ];
    if (category) query.push(`category=eq.${encodeURIComponent(category)}`);

    const products = await supabaseRest<Product[]>("products", { query: query.join("&") });
    return NextResponse.json(
      { products },
      { headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" } }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to load products." },
      { status: 500 }
    );
  }
}
