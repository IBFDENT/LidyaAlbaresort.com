import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import CookieConsent from "@/components/CookieConsent";
import EmailProtection from "@/components/EmailProtection";
import { LanguageProvider } from "@/components/LanguageProvider";
import SiteProtection from "@/components/SiteProtection";
import { supabaseRest } from "@/lib/supabaseAdmin";

import "./globals.css";

const cormorant = Cormorant_Garamond({ subsets:["latin"], weight:["300","400","500","600"], style:["normal","italic"], variable:"--font-cormorant", display:"swap" });
const manrope = Manrope({ subsets:["latin"], weight:["300","400","500","600","700"], variable:"--font-manrope", display:"swap" });

const fallbackTitle = "LIDYA Jewellery | Fine Jewellery & Watches in Antalya";
const fallbackDescription = "Discover LIDYA Jewellery at Alba Resort in Antalya, Turkey — fine jewellery, diamonds, gold, watches, bespoke design and personal service since 1989.";

type SeoEntry = { title:string; slug:string; subtitle:string|null; body:string|null; metadata:Record<string,unknown> };

export async function generateMetadata(): Promise<Metadata> {
  let entry: SeoEntry | undefined;
  try {
    const rows = await supabaseRest<SeoEntry[]>("admin_entries", { query:"select=title,slug,subtitle,body,metadata&section=eq.seo&status=in.(published,active)&slug=eq.global&limit=1" });
    entry = rows[0];
  } catch { /* keep safe production defaults */ }
  const title = entry?.title || fallbackTitle;
  const description = entry?.subtitle || entry?.body || fallbackDescription;
  const canonical = String(entry?.metadata?.meta1 || "/");
  const keywords = String(entry?.metadata?.meta2 || "").split(",").map((v)=>v.trim()).filter(Boolean);
  return {
    metadataBase: new URL("https://www.lidyaalbaresort.com"), title, description, keywords: keywords.length ? keywords : undefined,
    alternates:{ canonical },
    robots:{ index:true, follow:true, googleBot:{ index:true, follow:true, "max-image-preview":"large", "max-snippet":-1, "max-video-preview":-1 } },
    openGraph:{ title, description, type:"website", url:canonical, siteName:"LIDYA Jewellery" },
  };
}

export default function RootLayout({ children }: Readonly<{ children:React.ReactNode }>) {
  return <html lang="en"><body className={`${cormorant.variable} ${manrope.variable} antialiased`}><LanguageProvider><SiteProtection/><EmailProtection/>{children}<CookieConsent/></LanguageProvider></body></html>;
}
