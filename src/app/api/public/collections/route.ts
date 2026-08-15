import { NextResponse } from "next/server";

import { supabaseRest } from "@/lib/supabaseAdmin";

export const dynamic = "force-dynamic";

type Collection = {
  id: string;
  name: string;
  slug: string;
  type: string;
  description: string | null;
  hero_image_url: string | null;
  status: "draft" | "published";
  featured: boolean;
  sort_order: number;
};

export async function GET() {
  try {
    const collections = await supabaseRest<Collection[]>("collections", {
      query: "select=id,name,slug,type,description,hero_image_url,status,featured,sort_order&status=eq.published&order=sort_order.asc,updated_at.desc",
    });

    return NextResponse.json(
      { collections },
      { headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" } }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to load collections." },
      { status: 500 }
    );
  }
}
