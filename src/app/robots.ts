import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/international-seo";

export default function robots(): MetadataRoute.Robots {
  const indexingEnabled = process.env.SEO_INDEXING_ENABLED === "true";

  if (!indexingEnabled) {
    return {
      rules: [
        {
          userAgent: "*",
          disallow: "/",
        },
      ],
      sitemap: `${SITE_URL}/sitemap.xml`,
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
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
