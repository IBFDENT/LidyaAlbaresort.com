import type { MetadataRoute } from "next";

const baseUrl = "https://www.lidyaalbaresort.com";

export default function robots(): MetadataRoute.Robots {
  const indexingEnabled = process.env.SEO_INDEXING_ENABLED === "true";

  if (!indexingEnabled) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
      sitemap: `${baseUrl}/sitemap.xml`,
      host: baseUrl,
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/admin/",
          "/client",
          "/client/",
          "/api/",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
