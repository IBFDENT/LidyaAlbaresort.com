import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/international-seo";

/**
 * Production robots policy.
 *
 * Public pages, sitemap and the public Open Graph image endpoint must remain
 * crawlable. Private/admin/client/API surfaces stay excluded.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/api/og"],
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
