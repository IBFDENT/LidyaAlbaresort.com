import type { Metadata } from "next";
import {
  DEFAULT_LOCALE,
  PUBLIC_ROUTES,
  SITE_URL,
  shareCardUrl,
  type PublicRoute,
} from "@/lib/international-seo";

const indexingEnabled = process.env.SEO_INDEXING_ENABLED !== "false";

function asPublicRoute(path: string): PublicRoute | null {
  return (PUBLIC_ROUTES as readonly string[]).includes(path) ? (path as PublicRoute) : null;
}

export function pageMetadata(input: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const path = input.path === "/" ? "/" : `/${input.path.replace(/^\/+|\/+$/g, "")}`;
  const canonical = `${SITE_URL}${path === "/" ? "" : path}`;
  const publicRoute = asPublicRoute(path);
  const image = publicRoute ? shareCardUrl(DEFAULT_LOCALE, publicRoute) : input.image || "/images/hero.png";
  const noIndex = input.noIndex === true || !indexingEnabled;

  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords,
    alternates: { canonical },
    robots: noIndex ? { index: false, follow: false, nocache: true } : { index: true, follow: true },
    openGraph: {
      title: input.title,
      description: input.description,
      url: canonical,
      type: "website",
      siteName: "LIDYA Jewellery",
      images: [{ url: image, width:1200, height:630, alt: input.title, type:"image/png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [image],
    },
  };
}
