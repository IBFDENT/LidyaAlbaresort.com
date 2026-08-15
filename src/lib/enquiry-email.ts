type EnquiryEmailPayload = {
  id: string;
  type: "general" | "service" | "appointment";
  name: string;
  email: string;
  phone?: string | null;
  subject?: string | null;
  message?: string | null;
  preferredContact?: string | null;
  selectedServices?: string[];
  locale?: string | null;
  source?: string | null;
};

type SingleEmailResult = {
  sent: boolean;
  error?: string;
};

export type EnquiryEmailDeliveryResult = {
  client: SingleEmailResult;
  admin: SingleEmailResult;
};

type SendOptions = {
  sendClient?: boolean;
  sendAdmin?: boolean;
};

const TYPE_LABELS: Record<EnquiryEmailPayload["type"], string> = {
  general: "General enquiry",
  service: "Service request",
  appointment: "Private appointment",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function sendResendEmail(input: {
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<SingleEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { sent: false, error: "RESEND_API_KEY is not configured." };

  const from = process.env.LIDYA_FROM_EMAIL || "LIDYA Jewellery <onboarding@resend.dev>";

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: Array.isArray(input.to) ? input.to : [input.to],
        subject: input.subject,
        html: input.html,
        ...(input.replyTo ? { reply_to: input.replyTo } : {}),
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      const detail = await response.text();
      return { sent: false, error: detail.slice(0, 1500) || `Email provider returned ${response.status}.` };
    }

    return { sent: true };
  } catch (error) {
    return { sent: false, error: error instanceof Error ? error.message : "Email delivery failed." };
  }
}

export async function sendEnquiryEmails(
  payload: EnquiryEmailPayload,
  options: SendOptions = {}
): Promise<EnquiryEmailDeliveryResult> {
  const shouldSendClient = options.sendClient !== false;
  const shouldSendAdmin = options.sendAdmin !== false;
  const reference = payload.id.slice(0, 8).toUpperCase();
  const typeLabel = TYPE_LABELS[payload.type];
  const services = payload.selectedServices?.filter(Boolean) || [];

  const clientHtml = `
    <div style="font-family:Arial,sans-serif;background:#f7f3ec;padding:32px;color:#1b0b20">
      <div style="max-width:640px;margin:0 auto;background:#fff;padding:36px;border:1px solid #e5dccd">
        <p style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#a98242;margin:0 0 16px">LIDYA Jewellery · Since 1989</p>
        <h1 style="font-size:28px;font-weight:500;margin:0 0 18px">Thank you, ${escapeHtml(payload.name)}.</h1>
        <p style="line-height:1.7;color:#5c5360">We have received your ${typeLabel.toLowerCase()}. A member of the LIDYA team will review it and contact you personally.</p>
        <div style="margin:26px 0;padding:18px;background:#f7f3ec">
          <p style="margin:0 0 8px"><strong>Reference:</strong> ${reference}</p>
          <p style="margin:0 0 8px"><strong>Request:</strong> ${typeLabel}</p>
          ${payload.subject ? `<p style="margin:0 0 8px"><strong>Subject:</strong> ${escapeHtml(payload.subject)}</p>` : ""}
          ${services.length ? `<p style="margin:0"><strong>Services:</strong> ${services.map(escapeHtml).join(", ")}</p>` : ""}
        </div>
        <p style="line-height:1.7;color:#5c5360">Your reference confirms that the request has been stored in our system. If your request is urgent, you can also contact LIDYA directly by telephone or WhatsApp through the website.</p>
        <p style="margin-top:28px;color:#a98242">LIDYA Jewellery · Alba Resort · Antalya</p>
      </div>
    </div>`;

  const clientResult = shouldSendClient
    ? await sendResendEmail({
        to: payload.email,
        subject: `LIDYA — We received your ${typeLabel.toLowerCase()} · ${reference}`,
        html: clientHtml,
      })
    : { sent: true };

  const notificationEmail = process.env.LIDYA_NOTIFICATION_EMAIL || "info@lidyaalbaresort.com";
  const adminHtml = `
    <div style="font-family:Arial,sans-serif;padding:28px;color:#1b0b20">
      <h2>New ${typeLabel}</h2>
      <p><strong>Reference:</strong> ${reference}</p>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      ${payload.phone ? `<p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>` : ""}
      ${payload.preferredContact ? `<p><strong>Preferred contact:</strong> ${escapeHtml(payload.preferredContact)}</p>` : ""}
      ${payload.subject ? `<p><strong>Subject:</strong> ${escapeHtml(payload.subject)}</p>` : ""}
      ${services.length ? `<p><strong>Services:</strong> ${services.map(escapeHtml).join(", ")}</p>` : ""}
      ${payload.message ? `<p><strong>Message:</strong><br>${escapeHtml(payload.message).replace(/\n/g, "<br>")}</p>` : ""}
      <p><strong>Locale:</strong> ${escapeHtml(payload.locale || "unknown")}</p>
      <p><strong>Source:</strong> ${escapeHtml(payload.source || "website")}</p>
    </div>`;

  const adminResult = shouldSendAdmin
    ? await sendResendEmail({
        to: notificationEmail,
        subject: `LIDYA ${typeLabel} · ${payload.name} · ${reference}`,
        html: adminHtml,
        replyTo: payload.email,
      })
    : { sent: true };

  return { client: clientResult, admin: adminResult };
}
