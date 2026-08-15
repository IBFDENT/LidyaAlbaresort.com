import { NextRequest, NextResponse } from "next/server";

import { supabaseRest } from "@/lib/supabaseAdmin";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token")?.trim();
  if (!token) return NextResponse.redirect(new URL("/?newsletter=invalid", request.url));

  try {
    await supabaseRest("newsletter_subscribers", {
      method: "PATCH",
      query: `unsubscribe_token=eq.${encodeURIComponent(token)}`,
      body: { status: "unsubscribed", unsubscribed_at: new Date().toISOString(), updated_at: new Date().toISOString() },
      prefer: "return=minimal",
    });
    return NextResponse.redirect(new URL("/?newsletter=unsubscribed", request.url));
  } catch {
    return NextResponse.redirect(new URL("/?newsletter=error", request.url));
  }
}
