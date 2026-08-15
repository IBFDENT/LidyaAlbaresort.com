import { NextRequest, NextResponse } from "next/server";

import { supabaseRest } from "@/lib/supabaseAdmin";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as { email?: string; locale?: string; source?: string; consent?: boolean };
    const email = payload.email?.trim().toLowerCase() || "";

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (payload.consent !== true) {
      return NextResponse.json({ error: "Consent is required to join the LIDYA Private List." }, { status: 400 });
    }

    const existing = await supabaseRest<Array<{ id: string; status: string }>>("newsletter_subscribers", {
      query: `select=id,status&email_normalized=eq.${encodeURIComponent(email)}&limit=1`,
    });

    if (existing[0]) {
      if (existing[0].status === "active") return NextResponse.json({ success: true, duplicate: true });
      await supabaseRest("newsletter_subscribers", {
        method: "PATCH",
        query: `id=eq.${existing[0].id}`,
        body: {
          status: "active",
          source: payload.source?.trim() || "footer",
          locale: payload.locale?.trim() || null,
          consent_at: new Date().toISOString(),
          unsubscribed_at: null,
          updated_at: new Date().toISOString(),
        },
        prefer: "return=minimal",
      });
      return NextResponse.json({ success: true, reactivated: true });
    }

    await supabaseRest("newsletter_subscribers", {
      method: "POST",
      body: {
        email,
        status: "active",
        source: payload.source?.trim() || "footer",
        locale: payload.locale?.trim() || null,
      },
      prefer: "return=minimal",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to subscribe." },
      { status: 500 }
    );
  }
}
