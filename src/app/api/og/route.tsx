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
  const { title } = internationalSeoCopy(locale, path);
  const background = `${SITE_URL}${SHARE_IMAGE[path]}`;
  const cleanTitle = title.replace(" | LIDYA Jewellery", "").replace("LIDYA Jewellery | ", "");

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
          color: "#fffaf3",
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
            objectPosition: path === "/" ? "54% center" : "center",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(90deg, rgba(13,5,17,0.97) 0%, rgba(17,7,22,0.94) 34%, rgba(17,7,22,0.82) 52%, rgba(17,7,22,0.30) 74%, rgba(17,7,22,0.10) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(180deg, rgba(8,3,11,0.18) 0%, rgba(8,3,11,0.03) 46%, rgba(8,3,11,0.38) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 58,
            top: 48,
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 43,
              fontWeight: 800,
              letterSpacing: "2px",
              color: "#d2aa62",
              textShadow: "0 3px 14px rgba(0,0,0,0.35)",
            }}
          >
            LIDYA
          </div>
          <div style={{ width: 48, height: 1, margin: "0 18px", background: "#d2aa62", display: "flex" }} />
          <div
            style={{
              display: "flex",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "rgba(255,250,243,0.92)",
            }}
          >
            Jewellery · Since 1989
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: 58,
            bottom: 52,
            width: 640,
            display: "flex",
            flexDirection: "column",
            padding: "30px 34px 28px",
            borderLeft: "3px solid #d2aa62",
            background: "rgba(18,7,23,0.72)",
            boxShadow: "0 22px 60px rgba(0,0,0,0.28)",
          }}
        >
          <div
            style={{
              display: "flex",
              marginBottom: 15,
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "3.4px",
              textTransform: "uppercase",
              color: "#d2aa62",
            }}
          >
            Alba Resort · Antalya · Türkiye
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 565,
              fontSize: cleanTitle.length > 42 ? 39 : 46,
              lineHeight: 1.08,
              fontWeight: 750,
              letterSpacing: "-1.2px",
              color: "#fffaf3",
              textShadow: "0 3px 18px rgba(0,0,0,0.55)",
            }}
          >
            {cleanTitle}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: "0.4px",
              color: "rgba(255,250,243,0.88)",
            }}
          >
            Fine jewellery · Diamonds · Watches · Bespoke service
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 16,
              fontWeight: 700,
              color: "#d2aa62",
            }}
          >
            lidyaalbaresort.com
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 42,
            bottom: 38,
            display: "flex",
            padding: "10px 14px",
            border: "1px solid rgba(210,170,98,0.72)",
            background: "rgba(17,7,22,0.78)",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#fffaf3",
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
