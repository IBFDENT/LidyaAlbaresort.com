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
        />

        <CategoryGallery
          icon={<GemClusterIcon />}
          items={[
            { caption: "Signature" },
            {},
            {},
            { caption: "Statement" },
            {},
            { caption: "Everyday Brilliance" },
            {},
            {},
            { caption: "Limited Edition" },
            {},
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
          sub="Photography for this collection is being prepared. Book a private appointment at one of our boutiques to view current pieces."
        />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
