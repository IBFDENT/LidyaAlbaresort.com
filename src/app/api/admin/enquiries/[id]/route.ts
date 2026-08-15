import { NextRequest, NextResponse } from "next/server";

import { requireAdminRequest } from "@/lib/admin-auth";
import { supabaseRest } from "@/lib/supabaseAdmin";

type Payload = {
  status?: "new" | "in_progress" | "resolved" | "archived";
};

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const admin = await requireAdminRequest(request);
    if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await context.params;
    const payload = (await request.json()) as Payload;
    if (!payload.status || !["new", "in_progress", "resolved", "archived"].includes(payload.status)) {
      return NextResponse.json({ error: "Invalid status." }, { status: 400 });
    }

    const rows = await supabaseRest<unknown[]>("enquiries", {
      method: "PATCH",
      query: `id=eq.${encodeURIComponent(id)}`,
      body: { status: payload.status, updated_at: new Date().toISOString() },
      prefer: "return=representation",
    });

    if (!rows.length) return NextResponse.json({ error: "Enquiry not found." }, { status: 404 });
    return NextResponse.json({ enquiry: rows[0] });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to update enquiry." }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const admin = await requireAdminRequest(request);
    if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const { id } = await context.params;
    await supabaseRest<void>("enquiries", { method: "DELETE", query: `id=eq.${encodeURIComponent(id)}` });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to delete enquiry." }, { status: 500 });
  }
}
