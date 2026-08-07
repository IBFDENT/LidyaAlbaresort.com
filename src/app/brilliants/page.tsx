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
  title: "Brilliants — LIDYA JEWELRY",
  description:
    "The Brilliants collection from LIDYA JEWELRY — signature brilliant-cut pieces chosen for maximum fire and sparkle.",
};

// NOTE for Ferino: hero/craft copy below is a first draft so the page is
// complete and live — swap in your own positioning once photos arrive.
export default function BrilliantsPage() {
  return (
    <>
      <Header />
      <main>
        <CategoryHero
          eyebrow="Brilliants"
          title="The Brilliants Collection"
          lead="A signature line built around the brilliant cut itself — the shape prized above all others for the way it captures and returns light. Each piece is chosen for maximum fire and sparkle."
          icon={<GemClusterIcon />}
          showPlaceholder={false}
        />

        <CategoryGallery
          icon={<GemClusterIcon />}
          items={[
            { image: "/images/brilliants/brilliant-01.jpg", caption: "Solitaire Ring", alt: "Brilliant-cut solitaire engagement ring" },
            { image: "/images/brilliants/brilliant-02.jpg", caption: "Stud Earrings", alt: "Brilliant-cut diamond stud earrings" },
            { image: "/images/brilliants/brilliant-03.jpg", alt: "Six-prong brilliant-cut solitaire ring" },
            { image: "/images/brilliants/brilliant-04.jpg", caption: "Eternity Band", alt: "Brilliant-cut diamond eternity band" },
            { image: "/images/brilliants/brilliant-05.jpg", caption: "Pendant", alt: "Brilliant-cut diamond pendant necklace" },
            { image: "/images/brilliants/brilliant-06.jpg", caption: "Tennis Bracelet", alt: "Brilliant-cut diamond tennis bracelet" },
            { image: "/images/brilliants/brilliant-07.jpg", alt: "Brilliant-cut diamond eternity band, angled view" },
            { image: "/images/brilliants/brilliant-08.jpg", alt: "Brilliant-cut diamond pendant with pavé bail" },
            { image: "/images/brilliants/brilliant-09.jpg", caption: "Teardrop Halo", alt: "Pear-cut diamond halo pendant" },
            { image: "/images/brilliants/brilliant-10.jpg", caption: "The Set", alt: "Matching brilliant-cut ring, earrings and necklace set" },
          ]}
        />

        <CategoryCraft
          eyebrow="Why Brilliants"
          title="What sets this collection apart"
          points={[
            {
              title: "The Cut",
              description:
                "Brilliant-cut stones with 57–58 facets, engineered to maximise light return over every other shape.",
            },
            {
              title: "Selection",
              description:
                "Only stones meeting our house standard for fire and scintillation make it into the collection.",
            },
            {
              title: "Craftsmanship",
              description:
                "Set by hand in Manavgat, with settings designed to let the cut do the work.",
            },
            {
              title: "Rarity",
              description:
                "Small-batch pieces, not mass produced — built to be worn, not just kept.",
            },
          ]}
        />

        <CategoryCTA
          title="Discover the Brilliants collection"
          sub="Book a private appointment at one of our boutiques to view current pieces in person."
        />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
