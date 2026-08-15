import type { Metadata } from "next";

const SITE_URL = "https://www.lidyaalbaresort.com";

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
  const image = input.image || "/images/hero.jpg";

  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords,
    alternates: { canonical },
    robots: input.noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: input.title,
      description: input.description,
      url: canonical,
      type: "website",
      siteName: "LIDYA Jewellery",
      images: [{ url: image, alt: input.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [image],
    },
  };
}
