import { NextRequest, NextResponse } from "next/server";

import { sendEnquiryEmails } from "@/lib/enquiry-email";
import { requireClientRequest } from "@/lib/client-user";
import { supabaseRest } from "@/lib/supabaseAdmin";

export const dynamic = "force-dynamic";

type Payload = {
  type?: "general" | "service" | "appointment";
  name?: string;
  email?: string;
  phone?: string;
  locale?: string;
  subject?: string;
  message?: string;
  preferredContact?: string;
  selectedServices?: string[];
  source?: string;
  consent?: boolean;
  website?: string;
};

type EnquiryRow = {
  id: string;
  type: "general" | "service" | "appointment";
  name: string;
  email: string;
  phone: string | null;
  locale: string | null;
  subject: string | null;
  message: string | null;
  preferred_contact: string | null;
  selected_services: string[];
  source: string;
};

function clean(value: unknown, max = 5000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function validEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as Payload;

    if (payload.website) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const signedInClient = await requireClientRequest(request);
    const type = payload.type && ["general", "service", "appointment"].includes(payload.type)
      ? payload.type
      : "general";
    const name = clean(payload.name, 140);
    const submittedEmail = clean(payload.email, 254).toLowerCase();
    const email = signedInClient?.email?.trim().toLowerCase() || submittedEmail;
    const phone = clean(payload.phone, 80);
    const locale = clean(payload.locale, 12);
    const subject = clean(payload.subject, 240);
    const message = clean(payload.message, 8000);
    const preferredContact = clean(payload.preferredContact, 140);
    const source = clean(payload.source, 120) || "website";
    const selectedServices = Array.isArray(payload.selectedServices)
      ? payload.selectedServices.map((item) => clean(item, 220)).filter(Boolean).slice(0, 50)
      : [];

    if (!name || !validEmail(email)) {
      return NextResponse.json({ error: "Please provide your name and a valid email address." }, { status: 400 });
    }

    if (!message) {
      return NextResponse.json({ error: "Please enter your message." }, { status: 400 });
    }

    if (!payload.consent) {
      return NextResponse.json({ error: "Consent is required to submit the request." }, { status: 400 });
    }

    if (type === "service" && selectedServices.length === 0) {
      return NextResponse.json({ error: "Please select at least one service." }, { status: 400 });
    }

    const rows = await supabaseRest<EnquiryRow[]>("enquiries", {
      method: "POST",
      body: {
        user_id: signedInClient?.id || null,
        type,
        status: "new",
        name,
        email,
        phone: phone || null,
        locale: locale || null,
        subject: subject || null,
        message,
        preferred_contact: preferredContact || null,
        selected_services: selectedServices,
        source,
        consent_at: new Date().toISOString(),
      },
      prefer: "return=representation",
    });

    const enquiry = rows[0];
    if (!enquiry) throw new Error("The request could not be created.");

    const attemptedAt = new Date().toISOString();
    const emailResult = await sendEnquiryEmails({
      id: enquiry.id,
      type: enquiry.type,
      name: enquiry.name,
      email: enquiry.email,
      phone: enquiry.phone,
      locale: enquiry.locale,
      subject: enquiry.subject,
      message: enquiry.message,
      preferredContact: enquiry.preferred_contact,
      selectedServices: enquiry.selected_services,
      source: enquiry.source,
    });

    await supabaseRest<void>("enquiries", {
      method: "PATCH",
      query: `id=eq.${encodeURIComponent(enquiry.id)}`,
      body: {
        confirmation_email_sent: emailResult.client.sent,
        confirmation_email_sent_at: emailResult.client.sent ? attemptedAt : null,
        confirmation_email_error: emailResult.client.sent ? null : emailResult.client.error || "Confirmation email not sent.",
        admin_notification_email_sent: emailResult.admin.sent,
        admin_notification_email_sent_at: emailResult.admin.sent ? attemptedAt : null,
        admin_notification_email_error: emailResult.admin.sent ? null : emailResult.admin.error || "Admin notification email not sent.",
        email_last_attempt_at: attemptedAt,
        updated_at: attemptedAt,
      },
    });

    return NextResponse.json({
      success: true,
      reference: enquiry.id.slice(0, 8).toUpperCase(),
      confirmationEmailSent: emailResult.client.sent,
      adminNotificationSent: emailResult.admin.sent,
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to submit your request." },
      { status: 500 }
    );
  }
}
