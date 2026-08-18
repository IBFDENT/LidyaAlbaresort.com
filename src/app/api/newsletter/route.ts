import { NextRequest, NextResponse } from "next/server";

import { sendResendEmail } from "@/lib/enquiry-email";
import { renderLidyaEmail } from "@/lib/lidya-email-template";
import { supabaseRest } from "@/lib/supabaseAdmin";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function welcomeEmailHtml() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lidyaalbaresort.com";

  return renderLidyaEmail({
    preheader: "Welcome to the LIDYA Private List — private previews, invitations and stories from Alba Resort.",
    eyebrow: "The Private List",
    title: "Welcome to a quieter side of LIDYA.",
    intro: "You are now part of the LIDYA Private List — created for clients who prefer to discover exceptional pieces before the wider world does.",
    body: [
      "From time to time, we will share selected collection previews, jewellery stories, investment insights and private invitations from Alba Resort.",
      "Communication will remain considered, selective and personal — in the same spirit in which LIDYA has served its clients since 1989.",
    ],
    cta: { label: "Discover LIDYA", href: siteUrl },
    closing: "Welcome to LIDYA.",
    note: "You are receiving this message because you joined the LIDYA Private List through our website.",
  });
}

async function sendWelcomeEmail(email: string) {
  return sendResendEmail({
    to: email,
    subject: "Welcome to the LIDYA Private List",
    html: welcomeEmailHtml(),
  });
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
      const welcome = await sendWelcomeEmail(email);
      return NextResponse.json({ success: true, reactivated: true, welcomeEmailSent: welcome.sent });
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

    const welcome = await sendWelcomeEmail(email);
    return NextResponse.json({ success: true, welcomeEmailSent: welcome.sent });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to subscribe." },
      { status: 500 }
    );
  }
}
