import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/international-seo";

/**
 * Production robots policy.
 *
 * Public pages and the sitemap must remain crawlable for Google Search
 * Console and search engines. Private/admin/API surfaces stay excluded.
 */
export default function robots(): MetadataRoute.Robots {
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
