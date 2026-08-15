import type { Metadata } from "next";
import { notFound } from "next/navigation";

import HomePage from "@/app/page";
import AboutPage from "@/app/about/page";
import BespokePage from "@/app/bespoke/page";
import BoutiquesPage from "@/app/boutiques/page";
import BrilliantsPage from "@/app/brilliants/page";
import CollectionsPage from "@/app/collections/page";
import ContactPage from "@/app/contact/page";
import DesignPage from "@/app/design/page";
import DiamondsPage from "@/app/diamonds/page";
import InvestmentDiamondsPage from "@/app/investment-diamonds/page";
import InvestmentGoldPage from "@/app/investment-gold/page";
import PearlsPage from "@/app/pearls/page";
import PrivacyPage from "@/app/privacy/page";
import ServicesPage from "@/app/services/page";
import SignatureStylePage from "@/app/signature-style/page";
import TermsPage from "@/app/terms/page";
import WatchesPage from "@/app/watches/page";
import WatchesBespokePage from "@/app/watches/bespoke/page";
import WatchesBrilliantsPage from "@/app/watches/brilliants/page";
import WatchesChildrensPage from "@/app/watches/childrens/page";
import WatchesDiamondsPage from "@/app/watches/diamonds/page";
import WatchesGoldPage from "@/app/watches/gold/page";
import WatchesMensPage from "@/app/watches/mens/page";
import WatchesSportPage from "@/app/watches/sport/page";
import WatchesSportMensPage from "@/app/watches/sport/mens/page";
import WatchesSportWomensPage from "@/app/watches/sport/womens/page";
import WatchesWomensPage from "@/app/watches/womens/page";
import WeddingRingsPage from "@/app/wedding-rings/page";
import {
  internationalSeoCopy,
  isLocale,
  languageAlternates,
  localizedUrl,
  normalizePublicPath,
  OG_LOCALE,
  type PublicRoute,
} from "@/lib/international-seo";
import type { Locale } from "@/lib/i18n";

const pages: Record<PublicRoute, React.ComponentType> = {
  "/": HomePage,
  "/about": AboutPage,
  "/bespoke": BespokePage,
  "/boutiques": BoutiquesPage,
  "/brilliants": BrilliantsPage,
  "/collections": CollectionsPage,
  "/contact": ContactPage,
  "/design": DesignPage,
  "/diamonds": DiamondsPage,
  "/investment-diamonds": InvestmentDiamondsPage,
  "/investment-gold": InvestmentGoldPage,
  "/pearls": PearlsPage,
  "/privacy": PrivacyPage,
  "/services": ServicesPage,
  "/signature-style": SignatureStylePage,
  "/terms": TermsPage,
  "/watches": WatchesPage,
  "/watches/bespoke": WatchesBespokePage,
  "/watches/brilliants": WatchesBrilliantsPage,
  "/watches/childrens": WatchesChildrensPage,
  "/watches/diamonds": WatchesDiamondsPage,
  "/watches/gold": WatchesGoldPage,
  "/watches/mens": WatchesMensPage,
  "/watches/sport": WatchesSportPage,
  "/watches/sport/mens": WatchesSportMensPage,
  "/watches/sport/womens": WatchesSportWomensPage,
  "/watches/womens": WatchesWomensPage,
  "/wedding-rings": WeddingRingsPage,
};

type RouteParams = Promise<{ locale: string; slug?: string[] }>;

export async function generateMetadata({ params }: { params: RouteParams }): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) return { robots: { index: false, follow: false } };
  const locale = rawLocale as Locale;
  const path = normalizePublicPath(slug);
  if (!path) return { robots: { index: false, follow: false } };

  const { title, description } = internationalSeoCopy(locale, path);
  const canonical = localizedUrl(locale, path);
  const indexingEnabled = process.env.SEO_INDEXING_ENABLED === "true";

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: languageAlternates(path),
    },
    robots: indexingEnabled
      ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } }
      : { index: false, follow: false, nocache: true },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: OG_LOCALE[locale],
      alternateLocale: Object.values(OG_LOCALE).filter((value) => value !== OG_LOCALE[locale]),
      siteName: "LIDYA Jewellery",
      images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/hero.jpg"],
    },
  };
}

export default async function LocalizedPublicPage({ params }: { params: RouteParams }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const path = normalizePublicPath(slug);
  if (!path) notFound();
  const Page = pages[path];
  return <Page />;
}
