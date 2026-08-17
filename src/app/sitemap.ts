import type { MetadataRoute } from "next";

import {
  PUBLIC_ROUTES,
  SEO_LOCALES,
  localizedUrl,
  type PublicRoute,
} from "@/lib/international-seo";

type SitemapEntryConfig = {
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const routeConfig: Record<PublicRoute, SitemapEntryConfig> = {
  "/": { priority: 1, changeFrequency: "weekly" },
  "/collections": { priority: 0.95, changeFrequency: "weekly" },
  "/pearls": { priority: 0.85, changeFrequency: "monthly" },
  "/wedding-rings": { priority: 0.85, changeFrequency: "monthly" },
  "/signature-style": { priority: 0.85, changeFrequency: "monthly" },
  "/brilliants": { priority: 0.9, changeFrequency: "monthly" },
  "/diamonds": { priority: 0.9, changeFrequency: "monthly" },
  "/design": { priority: 0.8, changeFrequency: "monthly" },
  "/bespoke": { priority: 0.9, changeFrequency: "monthly" },
  "/watches": { priority: 0.95, changeFrequency: "weekly" },
  "/watches/mens": { priority: 0.82, changeFrequency: "monthly" },
  "/watches/womens": { priority: 0.82, changeFrequency: "monthly" },
  "/watches/childrens": { priority: 0.76, changeFrequency: "monthly" },
  "/watches/sport": { priority: 0.82, changeFrequency: "monthly" },
  "/watches/sport/mens": { priority: 0.78, changeFrequency: "monthly" },
  "/watches/sport/womens": { priority: 0.78, changeFrequency: "monthly" },
  "/watches/gold": { priority: 0.82, changeFrequency: "monthly" },
  "/watches/brilliants": { priority: 0.82, changeFrequency: "monthly" },
  "/watches/diamonds": { priority: 0.82, changeFrequency: "monthly" },
  "/watches/bespoke": { priority: 0.82, changeFrequency: "monthly" },
  "/investment-gold": { priority: 0.9, changeFrequency: "monthly" },
  "/investment-diamonds": { priority: 0.9, changeFrequency: "monthly" },
  "/services": { priority: 0.85, changeFrequency: "monthly" },
  "/private-visit": { priority: 0.85, changeFrequency: "monthly" },
  "/boutiques": { priority: 0.8, changeFrequency: "monthly" },
  "/about": { priority: 0.75, changeFrequency: "monthly" },
  "/contact": { priority: 0.85, changeFrequency: "monthly" },
  "/privacy": { priority: 0.25, changeFrequency: "yearly" },
  "/terms": { priority: 0.25, changeFrequency: "yearly" },
};

/**
 * Production XML sitemap.
 *
 * Keep this route intentionally simple and dependency-light: every public
 * route is emitted once for every supported locale. hreflang alternates are
 * already declared in each page's metadata, so duplicating hundreds of
 * xhtml:link nodes in the sitemap is unnecessary and can make crawler
 * diagnostics harder.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return SEO_LOCALES.flatMap((locale) =>
    PUBLIC_ROUTES.map((path) => {
      const config = routeConfig[path];

      return {
        url: localizedUrl(locale, path),
        changeFrequency: config.changeFrequency,
        priority: config.priority,
      };
    }),
  );
}
