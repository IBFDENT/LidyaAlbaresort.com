import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import CategoryHero from "@/components/category/CategoryHero";
import CategoryGallery from "@/components/category/CategoryGallery";
import CategoryCraft from "@/components/category/CategoryCraft";
import CategoryCTA from "@/components/category/CategoryCTA";
import { DiamondIcon } from "@/components/category/icons";

export const metadata: Metadata = {
  title: "Diamonds — LIDYA JEWELRY",
  description:
    "Certified diamond jewellery selected for cut, colour, clarity and carat — set by hand at LIDYA JEWELRY, or held loose as a private, portable store of value.",
};

export default function DiamondsPage() {
  return (
    <>
      <Header />
      <main>
        <CategoryHero
          eyebrow="Diamonds"
          title="For Moments of Lasting Value"
          lead="Formed under pressure over billions of years, a diamond has always stood for what endures. Every stone we offer is independently graded by GIA or IGI, then set by hand in designs meant to be worn and passed down — or kept loose, as one of the most private and portable ways to hold value."
          icon={<DiamondIcon />}
        />

        <CategoryGallery
          icon={<DiamondIcon />}
          items={[
            { caption: "Solitaire" },
            {},
            {},
            { caption: "Halo" },
            {},
            { caption: "Pavé" },
            {},
            {},
            { caption: "Three-Stone" },
            {},
          ]}
        />

        <CategoryCraft
          eyebrow="The Four Cs"
          title="What determines a diamond's beauty and worth"
          points={[
            {
              title: "Cut",
              description:
                "Proportions and finish that decide how a diamond captures and returns light — the most important C.",
            },
            {
              title: "Colour",
              description:
                "Graded from colourless to light yellow; the closer to colourless, the rarer and more valuable.",
            },
            {
              title: "Clarity",
              description:
                "The presence, or absence, of natural inclusions when examined under magnification.",
            },
            {
              title: "Carat",
              description:
                "The diamond's weight — larger stones of equal quality are exponentially rarer.",
            },
          ]}
        />

        <CategoryCTA
          title="Speak with us about diamonds"
          sub="Photography for this collection is being prepared. Book a private appointment to view current pieces, or to discuss certified loose stones for investment purposes."
        />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
