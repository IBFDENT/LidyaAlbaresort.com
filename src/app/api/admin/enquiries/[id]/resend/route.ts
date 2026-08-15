import { NextRequest, NextResponse } from "next/server";

import { requireAdminRequest } from "@/lib/admin-auth";
import { sendEnquiryEmails } from "@/lib/enquiry-email";
import { supabaseRest } from "@/lib/supabaseAdmin";

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
  confirmation_email_sent: boolean;
  confirmation_email_sent_at: string | null;
  confirmation_email_error: string | null;
  admin_notification_email_sent: boolean;
  admin_notification_email_sent_at: string | null;
  admin_notification_email_error: string | null;
};

export const dynamic = "force-dynamic";

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const admin = await requireAdminRequest(request);
    if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await context.params;
    const rows = await supabaseRest<EnquiryRow[]>("enquiries", {
      query: `select=*&id=eq.${encodeURIComponent(id)}&limit=1`,
    });
    const enquiry = rows[0];
    if (!enquiry) return NextResponse.json({ error: "Enquiry not found." }, { status: 404 });

    const sendClient = !enquiry.confirmation_email_sent;
    const sendAdmin = !enquiry.admin_notification_email_sent;

    if (!sendClient && !sendAdmin) {
      return NextResponse.json({ success: true, enquiry, message: "All enquiry emails have already been delivered." });
    }

    const attemptedAt = new Date().toISOString();
    const result = await sendEnquiryEmails({
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
    }, { sendClient, sendAdmin });

    const clientSent = enquiry.confirmation_email_sent || result.client.sent;
    const adminSent = enquiry.admin_notification_email_sent || result.admin.sent;

    const updatedRows = await supabaseRest<EnquiryRow[]>("enquiries", {
      method: "PATCH",
      query: `id=eq.${encodeURIComponent(enquiry.id)}`,
      body: {
        confirmation_email_sent: clientSent,
        confirmation_email_sent_at: enquiry.confirmation_email_sent_at || (result.client.sent ? attemptedAt : null),
        confirmation_email_error: clientSent ? null : result.client.error || enquiry.confirmation_email_error || "Confirmation email not sent.",
        admin_notification_email_sent: adminSent,
        admin_notification_email_sent_at: enquiry.admin_notification_email_sent_at || (result.admin.sent ? attemptedAt : null),
        admin_notification_email_error: adminSent ? null : result.admin.error || enquiry.admin_notification_email_error || "Admin notification email not sent.",
        email_last_attempt_at: attemptedAt,
        updated_at: attemptedAt,
      },
      prefer: "return=representation",
    });

    return NextResponse.json({
      success: true,
      enquiry: updatedRows[0],
      confirmationEmailSent: clientSent,
      adminNotificationSent: adminSent,
    });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to resend enquiry emails." }, { status: 500 });
  }
}
