import { NextRequest, NextResponse } from "next/server";

import { requireAdminRequest } from "@/lib/admin-auth";
import { supabaseRest } from "@/lib/supabaseAdmin";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const admin = await requireAdminRequest(request);
    if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const subscribers = await supabaseRest<unknown[]>("newsletter_subscribers", {
      query: "select=*&order=created_at.desc",
    });

    return NextResponse.json({ subscribers });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to load subscribers." },
      { status: 500 }
    );
  }
}
