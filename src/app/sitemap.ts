import type { MetadataRoute } from "next";

const baseUrl = "https://www.lidyaalbaresort.com";

const routes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/collections", priority: 0.95, changeFrequency: "weekly" },
  { path: "/pearls", priority: 0.85, changeFrequency: "monthly" },
  { path: "/wedding-rings", priority: 0.85, changeFrequency: "monthly" },
  { path: "/signature-style", priority: 0.85, changeFrequency: "monthly" },
  { path: "/brilliants", priority: 0.9, changeFrequency: "monthly" },
  { path: "/diamonds", priority: 0.9, changeFrequency: "monthly" },
  { path: "/design", priority: 0.8, changeFrequency: "monthly" },
  { path: "/bespoke", priority: 0.9, changeFrequency: "monthly" },
  { path: "/watches", priority: 0.95, changeFrequency: "weekly" },
  { path: "/watches/mens", priority: 0.82, changeFrequency: "monthly" },
  { path: "/watches/womens", priority: 0.82, changeFrequency: "monthly" },
  { path: "/watches/sport", priority: 0.82, changeFrequency: "monthly" },
  { path: "/watches/sport/womens", priority: 0.78, changeFrequency: "monthly" },
  { path: "/watches/gold", priority: 0.82, changeFrequency: "monthly" },
  { path: "/watches/brilliants", priority: 0.82, changeFrequency: "monthly" },
  { path: "/watches/diamonds", priority: 0.82, changeFrequency: "monthly" },
  { path: "/watches/bespoke", priority: 0.82, changeFrequency: "monthly" },
  { path: "/investment-gold", priority: 0.9, changeFrequency: "monthly" },
  { path: "/investment-diamonds", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services", priority: 0.85, changeFrequency: "monthly" },
  { path: "/boutiques", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.75, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.85, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.25, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.25, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
