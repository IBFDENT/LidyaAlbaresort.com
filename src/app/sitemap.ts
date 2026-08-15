import type { MetadataRoute } from "next";
import { languageAlternates, localizedUrl, PUBLIC_ROUTES, SEO_LOCALES, type PublicRoute } from "@/lib/international-seo";

const routeConfig: Record<PublicRoute, { priority:number; changeFrequency:MetadataRoute.Sitemap[number]["changeFrequency"] }> = {
  "/":{priority:1,changeFrequency:"weekly"},
  "/collections":{priority:.95,changeFrequency:"weekly"},
  "/pearls":{priority:.85,changeFrequency:"monthly"},
  "/wedding-rings":{priority:.85,changeFrequency:"monthly"},
  "/signature-style":{priority:.85,changeFrequency:"monthly"},
  "/brilliants":{priority:.9,changeFrequency:"monthly"},
  "/diamonds":{priority:.9,changeFrequency:"monthly"},
  "/design":{priority:.8,changeFrequency:"monthly"},
  "/bespoke":{priority:.9,changeFrequency:"monthly"},
  "/watches":{priority:.95,changeFrequency:"weekly"},
  "/watches/mens":{priority:.82,changeFrequency:"monthly"},
  "/watches/womens":{priority:.82,changeFrequency:"monthly"},
  "/watches/childrens":{priority:.76,changeFrequency:"monthly"},
  "/watches/sport":{priority:.82,changeFrequency:"monthly"},
  "/watches/sport/mens":{priority:.78,changeFrequency:"monthly"},
  "/watches/sport/womens":{priority:.78,changeFrequency:"monthly"},
  "/watches/gold":{priority:.82,changeFrequency:"monthly"},
  "/watches/brilliants":{priority:.82,changeFrequency:"monthly"},
  "/watches/diamonds":{priority:.82,changeFrequency:"monthly"},
  "/watches/bespoke":{priority:.82,changeFrequency:"monthly"},
  "/investment-gold":{priority:.9,changeFrequency:"monthly"},
  "/investment-diamonds":{priority:.9,changeFrequency:"monthly"},
  "/services":{priority:.85,changeFrequency:"monthly"},
  "/boutiques":{priority:.8,changeFrequency:"monthly"},
  "/about":{priority:.75,changeFrequency:"monthly"},
  "/contact":{priority:.85,changeFrequency:"monthly"},
  "/privacy":{priority:.25,changeFrequency:"yearly"},
  "/terms":{priority:.25,changeFrequency:"yearly"},
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return PUBLIC_ROUTES.flatMap((path) => {
    const config = routeConfig[path];
    const languages = languageAlternates(path);
    return SEO_LOCALES.map((locale) => ({
      url:localizedUrl(locale, path),
      lastModified,
      changeFrequency:config.changeFrequency,
      priority:config.priority,
      alternates:{ languages },
    }));
  });
}
