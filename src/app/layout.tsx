import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import { LanguageProvider } from "@/components/LanguageProvider";
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
  title: "LIDYA JEWELRY — Since 1989 | Handcrafted Fine Jewellery",
  description:
    "LIDYA JEWELRY — handcrafted jewellery, timeless design and personal service since 1989. Boutiques in Manavgat and the Alba hotels, Antalya.",
  openGraph: {
    title: "LIDYA JEWELRY — Jewellery of lasting value",
    description:
      "Handcrafted jewellery, timeless design and personal service since 1989.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${manrope.variable} antialiased`}>
        <LanguageProvider>
          {children}
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}