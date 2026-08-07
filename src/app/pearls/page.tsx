import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

import CategoryHero from "@/components/category/CategoryHero";
import CategoryGallery from "@/components/category/CategoryGallery";
import CategoryCraft from "@/components/category/CategoryCraft";
import CategoryCTA from "@/components/category/CategoryCTA";

import { PearlIcon } from "@/components/category/icons";

export const metadata: Metadata = {
  title: "Pearls — LIDYA JEWELRY",
  description:
    "Akoya, South Sea, Tahitian and freshwater pearls, hand-selected for their lustre and matched with care at LIDYA JEWELRY.",
};

export default function PearlsPage() {
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <CategoryHero
          eyebrow="Pearls"
          title="Nature's Most Patient Jewel"
          lead="A pearl is the only gem formed by a living creature, grown slowly and in silence over years. We select each one for its lustre, its orient and the quiet confidence it brings to whoever wears it."
          icon={<PearlIcon />}
          image="/images/pearls/pearl-01.jpg"
          imageAlt="Pearl strand necklace with a diamond-set gold clasp"
        />

        {/* COLLECTION GALLERY */}
        <CategoryGallery
          icon={<PearlIcon />}
          items={[
            {
              image: "/images/pearls/pearl-01.jpg",
              caption: "Strand Necklace",
              alt: "Pearl strand necklace with a diamond-set gold clasp",
            },
            {
              image: "/images/pearls/pearl-02.jpg",
              caption: "Pearl Pendant",
              alt: "Single pearl pendant with a diamond accent on a gold chain",
            },
            {
              image: "/images/pearls/pearl-03.jpg",
              caption: "Pendant Detail",
              alt: "Pearl and diamond pendant resting on natural stone",
            },
            {
              image: "/images/pearls/pearl-04.jpg",
              caption: "Pearl Bracelet",
              alt: "Pearl bracelet with a pavé gold and diamond bead",
            },
            {
              image: "/images/pearls/pearl-05.jpg",
              caption: "Adjustable Bracelet",
              alt: "Pearl bracelet with an adjustable gold chain clasp",
            },
            {
              image: "/images/pearls/pearl-06.jpg",
              caption: "Drop Earrings",
              alt: "Pearl drop earrings on diamond-set gold hoops",
            },
            {
              image: "/images/pearls/pearl-07.jpg",
              caption: "Stud Earrings",
              alt: "Pearl stud earrings with a diamond accent",
            },
            {
              image: "/images/pearls/pearl-08.jpg",
              caption: "Pearl Bangle",
              alt: "Gold bangle with a pearl and diamond charm",
            },
            {
              image: "/images/pearls/pearl-09.jpg",
              caption: "Clasp Detail",
              alt: "Close view of a pearl necklace's diamond-set clasp",
            },
            {
              image: "/images/pearls/pearl-10.jpg",
              caption: "Pearl Ring",
              alt: "Pearl ring with diamond-set leaf motifs in gold",
            },
          ]}
        />

        {/* CRAFT / QUALITY */}
        <CategoryCraft
          eyebrow="What We Look For"
          title="Four qualities that separate a fine pearl from an ordinary one"
          points={[
            {
              title: "Lustre",
              description:
                "The sharp, mirror-like reflection on the surface — the single clearest sign of a pearl's quality.",
            },
            {
              title: "Orient",
              description:
                "The soft rainbow shimmer beneath the surface, seen only in the finest natural and cultured pearls.",
            },
            {
              title: "Nacre Depth",
              description:
                "Thicker nacre means a pearl that will keep its glow for generations rather than dulling with age.",
            },
            {
              title: "Matching",
              description:
                "For strands and pairs, our workshop hand-matches every pearl for size, colour and lustre by eye.",
            },
          ]}
        />

        {/* PRIVATE VIEWING CTA */}
        <CategoryCTA
          title="See our pearls in person"
          sub="Experience the lustre, character and beauty of our pearls in person during a private visit to one of our boutiques."
        />
      </main>

      <Footer />

      <FloatingActions />
    </>
  );
}