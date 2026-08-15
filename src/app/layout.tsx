import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import CookieConsent from "@/components/CookieConsent";
import EmailProtection from "@/components/EmailProtection";
import { LanguageProvider } from "@/components/LanguageProvider";
import SiteProtection from "@/components/SiteProtection";
import { supabaseRest } from "@/lib/supabaseAdmin";

import "./globals.css";

const cormorant = Cormorant_Garamond({ subsets:["latin"], weight:["300","400","500","600"], style:["normal","italic"], variable:"--font-cormorant", display:"swap" });
const manrope = Manrope({ subsets:["latin"], weight:["300","400","500","600","700"], variable:"--font-manrope", display:"swap" });

const SITE_URL = "https://www.lidyaalbaresort.com";
const fallbackTitle = "LIDYA Jewellery | Fine Jewellery, Diamonds & Watches in Antalya";
const fallbackDescription = "Discover LIDYA Jewellery at Alba Resort in Antalya, Türkiye — fine jewellery, diamonds, investment gold, luxury watches, bespoke design and personal service since 1989.";
const fallbackKeywords = [
  "LIDYA Jewellery",
  "jewellery Antalya",
  "jewellery Manavgat",
  "jewellery Side Turkey",
  "fine jewellery",
  "diamonds Antalya",
  "investment gold Turkey",
  "luxury watches Antalya",
  "bespoke jewellery",
  "Alba Resort jewellery",
];

type SeoEntry = { title:string; slug:string; subtitle:string|null; body:string|null; metadata:Record<string,unknown> };

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#18091d",
  colorScheme: "light dark",
};

export async function generateMetadata(): Promise<Metadata> {
  let entry: SeoEntry | undefined;
  try {
    const rows = await supabaseRest<SeoEntry[]>("admin_entries", { query:"select=title,slug,subtitle,body,metadata&section=eq.seo&status=in.(published,active)&slug=eq.global&limit=1" });
    entry = rows[0];
  } catch { /* keep safe production defaults */ }

  const title = entry?.title || fallbackTitle;
  const description = entry?.subtitle || entry?.body || fallbackDescription;
  const canonical = String(entry?.metadata?.meta1 || "/");
  const keywordsFromCms = String(entry?.metadata?.meta2 || "").split(",").map((v)=>v.trim()).filter(Boolean);
  const verification = process.env.GOOGLE_SITE_VERIFICATION?.trim();

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: title, template: "%s | LIDYA Jewellery" },
    description,
    applicationName: "LIDYA Jewellery",
    authors: [{ name: "LIDYA Jewellery" }],
    creator: "LIDYA Jewellery",
    publisher: "LIDYA Jewellery",
    category: "Fine Jewellery",
    keywords: keywordsFromCms.length ? keywordsFromCms : fallbackKeywords,
    alternates: { canonical },
    icons: {
      icon: [{ url: "/icon.png", type: "image/png" }],
      apple: [{ url: "/apple-icon.png", type: "image/png" }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_GB",
      url: canonical,
      siteName: "LIDYA Jewellery",
      images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: "LIDYA Jewellery — Alba Resort, Antalya" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/hero.jpg"],
    },
    verification: verification ? { google: verification } : undefined,
    referrer: "origin-when-cross-origin",
  };
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["JewelryStore", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: "LIDYA Jewellery",
  alternateName: "LIDYA Jewellery Alba Resort",
  url: SITE_URL,
  logo: `${SITE_URL}/images/lidya-logo.png`,
  image: `${SITE_URL}/images/hero.jpg`,
  description: fallbackDescription,
  foundingDate: "1989",
  email: "info@lidyaalbaresort.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Çolaklı, Tilkiler Mevkii, Erhan Demir Blv. No:4",
    postalCode: "07600",
    addressLocality: "Manavgat",
    addressRegion: "Antalya",
    addressCountry: "TR",
  },
  areaServed: ["Antalya", "Manavgat", "Side", "Türkiye"],
  sameAs: [
    "https://www.instagram.com/tanirzafer",
    "https://www.facebook.com/lidyaalbajewellery/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "LIDYA Jewellery",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: ["en", "de", "tr", "sk", "cs", "hu", "pl", "ru", "nl", "da", "fi", "sv", "fr", "it", "es"],
};

export default function RootLayout({ children }: Readonly<{ children:React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${manrope.variable} antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <LanguageProvider><SiteProtection/><EmailProtection/>{children}<CookieConsent/></LanguageProvider>
      </body>
    </html>
  );
}
