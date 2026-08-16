import { ImageResponse } from "next/og";
import {
  DEFAULT_LOCALE,
  internationalSeoCopy,
  isLocale,
  PUBLIC_ROUTES,
  SHARE_IMAGE,
  SITE_URL,
  type PublicRoute,
} from "@/lib/international-seo";

export const runtime = "edge";

function isPublicRoute(value: string): value is PublicRoute {
  return (PUBLIC_ROUTES as readonly string[]).includes(value);
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const rawLocale = url.searchParams.get("locale") || DEFAULT_LOCALE;
  const rawPath = url.searchParams.get("path") || "/";
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const path = isPublicRoute(rawPath) ? rawPath : "/";
  const { title, description } = internationalSeoCopy(locale, path);
  const background = `${SITE_URL}${SHARE_IMAGE[path]}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#16091c",
          color: "#f7f1e8",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <img
          src={background}
          alt=""
          width="1200"
          height="630"
          style={{
            position: "absolute",
            inset: 0,
            width: "1200px",
            height: "630px",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(90deg, rgba(20,7,24,0.94) 0%, rgba(20,7,24,0.82) 42%, rgba(20,7,24,0.30) 72%, rgba(20,7,24,0.12) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 64,
            top: 46,
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 42,
              fontWeight: 700,
              letterSpacing: "2px",
              color: "#d2aa62",
            }}
          >
            LIDYA
          </div>
          <div style={{ width: 54, height: 1, background: "#d2aa62", display: "flex" }} />
          <div
            style={{
              display: "flex",
              fontSize: 14,
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "rgba(247,241,232,0.78)",
            }}
          >
            Jewellery · Since 1989
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: 64,
            bottom: 62,
            width: 670,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              marginBottom: 18,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#d2aa62",
            }}
          >
            Alba Resort · Antalya · Türkiye
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 46,
              lineHeight: 1.08,
              fontWeight: 600,
              letterSpacing: "-1.5px",
              color: "#fffaf3",
            }}
          >
            {title.replace(" | LIDYA Jewellery", "").replace("LIDYA Jewellery | ", "")}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              maxWidth: 620,
              fontSize: 20,
              lineHeight: 1.42,
              color: "rgba(247,241,232,0.78)",
            }}
          >
            {description.length > 170 ? `${description.slice(0, 167)}…` : description}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 16,
              letterSpacing: "1px",
              color: "#d2aa62",
            }}
          >
            lidyaalbaresort.com
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 46,
            bottom: 42,
            display: "flex",
            padding: "10px 14px",
            border: "1px solid rgba(210,170,98,0.65)",
            background: "rgba(20,7,24,0.58)",
            fontSize: 12,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#f7f1e8",
          }}
        >
          {locale}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
      },
    }
  );
}
