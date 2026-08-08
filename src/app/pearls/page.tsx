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
  title: "Pearls — LIDYA JEWELLERY",
  description:
    "Discover pearls selected for exceptional lustre, character and harmony at LIDYA JEWELLERY — timeless pieces chosen to be worn and treasured for years.",
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
          lead="Created slowly, layer by layer, a pearl carries a beauty no machine can reproduce. No two are ever exactly alike. At LIDYA, we choose pearls for the depth of their lustre, the harmony of their colour and the quiet elegance that reveals itself the moment they meet the skin."
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
          eyebrow="The Beauty Is in the Detail"
          title="What gives a fine pearl its unmistakable presence"
          points={[
            {
              title: "Lustre",
              description:
                "A fine pearl seems to glow from within. Its surface reflects light with clarity and depth, creating the luminous presence that makes exceptional pearls immediately recognisable.",
            },
            {
              title: "Orient",
              description:
                "Beneath the surface, the finest pearls reveal subtle overtones of rose, silver, cream and green. This delicate play of colour gives every pearl its own individual character.",
            },
            {
              title: "Nacre",
              description:
                "Layer upon layer of nacre creates the depth, softness and lasting beauty of a pearl. Rich nacre gives a pearl the radiance that continues to reveal itself over time.",
            },
            {
              title: "Harmony",
              description:
                "A beautiful strand is never assembled by numbers alone. Pearls are carefully brought together for balance of size, colour, shape and lustre, so the finished piece feels naturally complete.",
            },
          ]}
        />

        {/* PRIVATE VIEWING CTA */}
        <CategoryCTA
          title="Discover the beauty of pearls in person"
          sub="Pearls reveal their true character in movement and light. Visit us privately and experience their lustre, colour and individuality for yourself."
        />
      </main>

      <Footer />

      <FloatingActions />
    </>
  );
}