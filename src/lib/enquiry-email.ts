import { renderLidyaEmail } from "@/lib/lidya-email-template";

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

const CLIENT_COPY: Record<EnquiryEmailPayload["type"], {
  eyebrow: string;
  title: (name: string) => string;
  intro: string;
  body: string[];
  subject: (reference: string) => string;
}> = {
  general: {
    eyebrow: "Private Client Care",
    title: (name) => `Thank you, ${name}.`,
    intro: "Your message has reached LIDYA Jewellery and has been safely recorded in our private client system.",
    body: [
      "A member of the LIDYA team will review your enquiry personally and contact you with the attention it deserves.",
    ],
    subject: (reference) => `LIDYA — We received your enquiry · ${reference}`,
  },
  service: {
    eyebrow: "Jewellery & Watch Service",
    title: () => "Your piece deserves personal attention.",
    intro: "We have received your service request and a member of the LIDYA team will review the details personally.",
    body: [
      "From inspection and care to restoration and specialist work, every request is handled individually before the next step is confirmed with you.",
    ],
    subject: (reference) => `LIDYA — Service request received · ${reference}`,
  },
  appointment: {
    eyebrow: "Private Appointment",
    title: () => "Your private appointment request is with us.",
    intro: "We have received your request for a private LIDYA appointment at Alba Resort.",
    body: [
      "Our team will contact you personally to confirm the most suitable time and any details that will help us prepare for your visit.",
    ],
    subject: (reference) => `LIDYA — Private appointment request · ${reference}`,
  },
};

export async function sendResendEmail(input: {
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<SingleEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { sent: false, error: "RESEND_API_KEY is not configured." };

  const from = process.env.LIDYA_FROM_EMAIL || "LIDYA Jewellery <info@lidyaalbaresort.com>";

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
  const clientCopy = CLIENT_COPY[payload.type];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lidyaalbaresort.com";

  const clientHtml = renderLidyaEmail({
    preheader: `${typeLabel} ${reference} has been received by LIDYA Jewellery.`,
    eyebrow: clientCopy.eyebrow,
    title: clientCopy.title(payload.name),
    intro: clientCopy.intro,
    body: clientCopy.body,
    details: [
      { label: "Reference", value: reference },
      { label: "Request", value: typeLabel },
      { label: "Subject", value: payload.subject },
      { label: "Services", value: services.length ? services.join(", ") : null },
      { label: "Preferred contact", value: payload.preferredContact },
    ],
    cta: { label: "Visit LIDYA", href: siteUrl },
    closing: "Personal service, considered in every detail.",
    note: "Your reference confirms that the request has been stored in our system. If your request is urgent, please contact LIDYA directly by telephone or WhatsApp through the website.",
  });

  const clientResult = shouldSendClient
    ? await sendResendEmail({
        to: payload.email,
        subject: clientCopy.subject(reference),
        html: clientHtml,
      })
    : { sent: true };

  const notificationEmail = process.env.LIDYA_NOTIFICATION_EMAIL || "info@lidyaalbaresort.com";
  const adminHtml = renderLidyaEmail({
    preheader: `New ${typeLabel.toLowerCase()} from ${payload.name}.`,
    eyebrow: "LIDYA Client Desk · Internal",
    title: `New ${typeLabel.toLowerCase()}`,
    intro: `${payload.name} has submitted a new request through the LIDYA website.`,
    details: [
      { label: "Reference", value: reference },
      { label: "Client", value: payload.name },
      { label: "Email", value: payload.email },
      { label: "Phone", value: payload.phone },
      { label: "Preferred contact", value: payload.preferredContact },
      { label: "Subject", value: payload.subject },
      { label: "Services", value: services.length ? services.join(", ") : null },
      { label: "Message", value: payload.message },
      { label: "Locale", value: payload.locale || "unknown" },
      { label: "Source", value: payload.source || "website" },
    ],
    note: `Reply directly to this email to answer ${payload.email}.`,
  });

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
