import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.SUPABASE_URL || "https://xhvqngmijcrnrrjqwels.supabase.co";
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.SUPABASE_ANON_KEY ||
  "sb_publishable_2qX2onjbdEWzZcabUB3odA_-EkrLHeh";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as { email?: string; locale?: string; source?: string };
    const email = payload.email?.trim().toLowerCase() || "";

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const response = await fetch(`${SUPABASE_URL}/rest/v1/newsletter_subscribers`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        email,
        status: "active",
        source: payload.source?.trim() || "footer",
        locale: payload.locale?.trim() || null,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      const text = await response.text();
      if (response.status === 409 || text.includes("newsletter_subscribers_email_normalized_key")) {
        return NextResponse.json({ success: true, duplicate: true });
      }
      throw new Error(text || "Unable to subscribe.");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to subscribe." },
      { status: 500 }
    );
  }
}
