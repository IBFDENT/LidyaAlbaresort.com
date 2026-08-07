import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import CategoryHero from "@/components/category/CategoryHero";
import CategoryGallery from "@/components/category/CategoryGallery";
import CategoryCraft from "@/components/category/CategoryCraft";
import CategoryCTA from "@/components/category/CategoryCTA";
import { GemClusterIcon } from "@/components/category/icons";

export const metadata: Metadata = {
  title: "Investment Diamonds — LIDYA JEWELRY",
  description:
    "Certified, loose brilliant-cut diamonds for private, portable, long-term investment — alongside our Investment Gold service at LIDYA JEWELRY.",
};

export default function InvestmentDiamondsPage() {
  return (
    <>
      <Header />
      <main>
        <CategoryHero
          eyebrow="Investment Diamonds"
          title="Brilliance as a Store of Value"
          lead="Beyond jewellery, a certified loose diamond is one of the most private and portable ways to hold value. We source and certify brilliant-cut stones for clients who invest the way they collect — carefully."
          icon={<GemClusterIcon />}
        />

        <CategoryGallery
          icon={<GemClusterIcon />}
          items={[
            { caption: "GIA Certified" },
            {},
            {},
            { caption: "Loose Stones" },
            {},
            { caption: "Investment Grade" },
            {},
            {},
            { caption: "Portfolio" },
            {},
          ]}
        />

        <CategoryCraft
          eyebrow="Why Diamonds"
          title="A complement to Investment Gold, not a replacement"
          points={[
            {
              title: "Certification",
              description:
                "Every stone we offer is independently graded by GIA or IGI before it reaches a client.",
            },
            {
              title: "Portability",
              description:
                "A significant store of value that fits in a pocket — no other asset compresses so much worth into so little space.",
            },
            {
              title: "Privacy",
              description:
                "Ownership that doesn't require registration or public record, held entirely at the owner's discretion.",
            },
            {
              title: "Diversification",
              description:
                "A tangible complement to gold and other holdings, with a value history of its own.",
            },
          ]}
        />

        <CategoryCTA
          title="Speak with us about investment diamonds"
          sub="Photography for this collection is being prepared. Book a private appointment to discuss current availability and certification."
        />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
