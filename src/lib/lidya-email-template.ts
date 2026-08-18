export type EmailDetail = {
  label: string;
  value?: string | null;
};

type EmailTemplateOptions = {
  preheader?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  body?: string[];
  details?: EmailDetail[];
  cta?: { label: string; href: string };
  closing?: string;
  note?: string;
};

export function escapeEmailHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function paragraph(value: string) {
  return `<p style="margin:0 0 18px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.8;color:#5f5661;">${escapeEmailHtml(value)}</p>`;
}

function detailRows(details: EmailDetail[]) {
  const rows = details.filter((item) => item.value?.trim());
  if (!rows.length) return "";

  return `
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:28px 0 30px;border-collapse:collapse;background:#f7f1e8;border:1px solid #eadfce;">
      <tr>
        <td style="padding:22px 24px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;">
            ${rows.map((item, index) => `
              <tr>
                <td valign="top" style="padding:${index ? "12px 0 0" : "0"};font-family:Arial,Helvetica,sans-serif;font-size:10px;line-height:1.4;letter-spacing:1.7px;text-transform:uppercase;color:#a88750;width:34%;">${escapeEmailHtml(item.label)}</td>
                <td valign="top" style="padding:${index ? "12px 0 0" : "0"};font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.55;color:#211523;">${escapeEmailHtml(item.value || "")}</td>
              </tr>`).join("")}
          </table>
        </td>
      </tr>
    </table>`;
}

function ctaButton(cta?: { label: string; href: string }) {
  if (!cta) return "";
  return `
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin:30px 0 8px;">
      <tr>
        <td bgcolor="#1a0a1f" style="border:1px solid #1a0a1f;">
          <a href="${escapeEmailHtml(cta.href)}" style="display:inline-block;padding:15px 24px;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:600;letter-spacing:1.8px;text-transform:uppercase;text-decoration:none;color:#f6ead6;">${escapeEmailHtml(cta.label)}</a>
        </td>
      </tr>
    </table>`;
}

export function renderLidyaEmail(options: EmailTemplateOptions) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lidyaalbaresort.com";
  const preheader = options.preheader || options.intro || options.title;
  const body = options.body || [];

  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="x-apple-disable-message-reformatting">
  <title>${escapeEmailHtml(options.title)}</title>
</head>
<body style="margin:0;padding:0;background:#160819;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeEmailHtml(preheader)}</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#160819" style="width:100%;background:#160819;border-collapse:collapse;">
    <tr>
      <td align="center" style="padding:34px 16px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:640px;border-collapse:collapse;background:#fffdf9;">
          <tr>
            <td align="center" style="padding:38px 32px 26px;background:#1a0a1f;">
              <a href="${siteUrl}" style="font-family:Georgia,'Times New Roman',serif;font-size:30px;line-height:1;letter-spacing:8px;text-decoration:none;color:#f3dfbd;">LIDYA</a>
              <div style="margin-top:11px;font-family:Arial,Helvetica,sans-serif;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#b99a68;">Jewellery · Alba Resort</div>
            </td>
          </tr>
          <tr><td style="height:2px;background:#b89761;font-size:0;line-height:0;">&nbsp;</td></tr>
          <tr>
            <td style="padding:48px 44px 42px;">
              ${options.eyebrow ? `<div style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:10px;line-height:1.4;letter-spacing:2.2px;text-transform:uppercase;color:#a88750;">${escapeEmailHtml(options.eyebrow)}</div>` : ""}
              <h1 style="margin:0 0 22px;font-family:Georgia,'Times New Roman',serif;font-size:34px;line-height:1.16;font-weight:400;color:#211523;">${escapeEmailHtml(options.title)}</h1>
              ${options.intro ? paragraph(options.intro) : ""}
              ${body.map(paragraph).join("")}
              ${detailRows(options.details || [])}
              ${ctaButton(options.cta)}
              ${options.closing ? `<p style="margin:30px 0 0;font-family:Georgia,'Times New Roman',serif;font-size:18px;line-height:1.6;color:#8e7041;">${escapeEmailHtml(options.closing)}</p>` : ""}
              ${options.note ? `<p style="margin:24px 0 0;padding-top:20px;border-top:1px solid #eee5d8;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.65;color:#8b818b;">${escapeEmailHtml(options.note)}</p>` : ""}
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:28px 32px 32px;background:#f4eee5;border-top:1px solid #e7dccd;">
              <div style="font-family:Georgia,'Times New Roman',serif;font-size:16px;letter-spacing:3px;color:#211523;">LIDYA</div>
              <div style="margin-top:9px;font-family:Arial,Helvetica,sans-serif;font-size:10px;line-height:1.7;letter-spacing:1.5px;text-transform:uppercase;color:#8a7d84;">Jewellery · Alba Resort · Antalya</div>
              <div style="margin-top:12px;font-family:Arial,Helvetica,sans-serif;font-size:10px;line-height:1.7;color:#9a8f96;">Private jewellery service since 1989</div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
