import { NextRequest, NextResponse } from "next/server";

import { requireAdminRequest } from "@/lib/admin-auth";
import { supabaseRest } from "@/lib/supabaseAdmin";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const admin = await requireAdminRequest(request);
    if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const type = request.nextUrl.searchParams.get("type")?.trim();
    const status = request.nextUrl.searchParams.get("status")?.trim();
    const query = ["select=*", "order=created_at.desc"];

    if (type && ["general", "service", "appointment"].includes(type)) {
      query.push(`type=eq.${encodeURIComponent(type)}`);
    }
    if (status && ["new", "in_progress", "resolved", "archived"].includes(status)) {
      query.push(`status=eq.${encodeURIComponent(status)}`);
    }

    const enquiries = await supabaseRest<unknown[]>("enquiries", { query: query.join("&") });
    return NextResponse.json({ enquiries });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to load enquiries." }, { status: 500 });
  }
}
