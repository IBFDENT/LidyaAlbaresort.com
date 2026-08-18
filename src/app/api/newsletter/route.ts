import { NextRequest, NextResponse } from "next/server";

import { sendResendEmail } from "@/lib/enquiry-email";
import { supabaseRest } from "@/lib/supabaseAdmin";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function welcomeEmailHtml() {
  return `
    <div style="font-family:Arial,sans-serif;background:#f7f3ec;padding:32px;color:#1b0b20">
      <div style="max-width:640px;margin:0 auto;background:#fff;padding:36px;border:1px solid #e5dccd">
        <p style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#a98242;margin:0 0 16px">LIDYA Jewellery · Private List</p>
        <h1 style="font-size:30px;font-weight:500;margin:0 0 18px">Welcome to the private list.</h1>
        <p style="line-height:1.8;color:#5c5360">You are now part of the LIDYA private list. From time to time, we will send selected collection previews, jewellery stories, investment insights and private invitations.</p>
        <p style="line-height:1.8;color:#5c5360">We keep communication selective and personal — in the same spirit as LIDYA Jewellery since 1989.</p>
        <p style="margin-top:28px;color:#a98242">LIDYA Jewellery · Alba Resort · Antalya</p>
      </div>
    </div>`;
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
