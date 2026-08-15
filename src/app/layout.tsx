import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import CookieConsent from "@/components/CookieConsent";
import { LanguageProvider } from "@/components/LanguageProvider";
import SiteProtection from "@/components/SiteProtection";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lidyaalbaresort.com"),
  title: "LIDYA Jewellery | Fine Jewellery & Watches in Antalya",
  description:
    "Discover LIDYA Jewellery at Alba Resort in Antalya, Turkey — fine jewellery, diamonds, gold, watches, bespoke design and personal service since 1989.",
  alternates: {
    canonical: "/",
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
    title: "LIDYA Jewellery | Jewellery of Lasting Value",
    description:
      "Fine jewellery, diamonds, gold, watches and bespoke design at Alba Resort in Antalya, Turkey.",
    type: "website",
    url: "/",
    siteName: "LIDYA Jewellery",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${manrope.variable} antialiased`}
      >
        <LanguageProvider>
          <SiteProtection />
          {children}
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}
