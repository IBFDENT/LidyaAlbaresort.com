import { NextRequest, NextResponse } from "next/server";

import { supabaseRest } from "@/lib/supabaseAdmin";

export const dynamic = "force-dynamic";

const PUBLIC_SECTIONS = new Set(["investment", "services", "travel", "content", "media", "seo"]);

type CmsEntry = {
  id: string;
  section: string;
  title: string;
  slug: string;
  subtitle: string | null;
  body: string | null;
  status: "draft" | "published" | "active" | "archived";
  metadata: Record<string, unknown>;
  sort_order: number;
};

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ section: string }> }
) {
  try {
    const { section } = await context.params;
    if (!PUBLIC_SECTIONS.has(section)) {
      return NextResponse.json({ error: "Unknown public CMS section." }, { status: 404 });
    }

    const slug = request.nextUrl.searchParams.get("slug")?.trim();
    const query = [
      "select=id,section,title,slug,subtitle,body,status,metadata,sort_order",
      `section=eq.${encodeURIComponent(section)}`,
      "status=in.(published,active)",
      "order=sort_order.asc,updated_at.desc",
    ];

    if (slug) query.push(`slug=eq.${encodeURIComponent(slug)}`);

    const entries = await supabaseRest<CmsEntry[]>("admin_entries", {
      query: query.join("&"),
    });

    return NextResponse.json(
      { entries },
      {
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to load public CMS content." },
      { status: 500 }
    );
  }
}
