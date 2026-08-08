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
  title: "Brilliants — LIDYA JEWELLERY",
  description:
    "Discover the Brilliants collection from LIDYA JEWELLERY — brilliant-cut diamond jewellery selected for exceptional light, fire and timeless elegance.",
};

export default function BrilliantsPage() {
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <CategoryHero
          eyebrow="Brilliants"
          title="Where Light Becomes Jewellery"
          lead="The brilliant cut was created for one extraordinary purpose — to transform light into fire. Every stone in our collection is selected for the way it comes alive in motion, revealing flashes of brilliance with every movement."
          icon={<GemClusterIcon />}
          image="/images/brilliants/pearlswithbriliants.png"
          imageAlt="Diamond and pearl jewellery from the LIDYA Brilliants collection"
          collectionLabel="The Brilliants Collection"
          statementEyebrow="The Art of Light"
          statementText="Made to catch the light."
          statementAccent="Created to keep it."
        />

        {/* COLLECTION GALLERY */}
        <CategoryGallery
          icon={<GemClusterIcon />}
          eyebrow="The Brilliants Collection"
          title="Jewellery shaped by"
          titleAccent="light and brilliance."
          description="From timeless solitaires to diamond-set bracelets, earrings and pendants, each piece is selected for the way its stones interact with light — elegant at rest, extraordinary in motion."
          itemLabel="Brilliants Collection"
          closingText="Every movement catches the light."
          closingAccent="Every glance reveals something new."
          items={[
            {
              image: "/images/brilliants/brilliant-01.jpg",
              caption: "Solitaire Ring",
              alt: "Brilliant-cut solitaire diamond ring",
            },
            {
              image: "/images/brilliants/brilliant-02.jpg",
              caption: "Stud Earrings",
              alt: "Brilliant-cut diamond stud earrings",
            },
            {
              image: "/images/brilliants/brilliant-03.jpg",
              caption: "Classic Solitaire",
              alt: "Six-prong brilliant-cut solitaire diamond ring",
            },
            {
              image: "/images/brilliants/brilliant-04.jpg",
              caption: "Eternity Band",
              alt: "Brilliant-cut diamond eternity band",
            },
            {
              image: "/images/brilliants/brilliant-05.jpg",
              caption: "Diamond Pendant",
              alt: "Brilliant-cut diamond pendant necklace",
            },
            {
              image: "/images/brilliants/brilliant-06.jpg",
              caption: "Tennis Bracelet",
              alt: "Brilliant-cut diamond tennis bracelet",
            },
            {
              image: "/images/brilliants/brilliant-07.jpg",
              caption: "Eternity Detail",
              alt: "Brilliant-cut diamond eternity band shown at an angle",
            },
            {
              image: "/images/brilliants/brilliant-08.jpg",
              caption: "Pavé Pendant",
              alt: "Brilliant-cut diamond pendant with pavé-set bail",
            },
            {
              image: "/images/brilliants/brilliant-09.jpg",
              caption: "Teardrop Halo",
              alt: "Pear-shaped diamond pendant surrounded by a diamond halo",
            },
            {
              image: "/images/brilliants/brilliant-10.jpg",
              caption: "The Set",
              alt: "Matching diamond ring, earrings and necklace set",
            },
          ]}
        />

        {/* CRAFT / QUALITY */}
        <CategoryCraft
          eyebrow="The Beauty of Brilliance"
          title="True brilliance begins with the way a diamond meets the light"
          description="A beautiful diamond is more than its size. Cut, proportion, movement and setting work together to determine how vividly the stone returns light to the eye."
          closingText="Light reveals the brilliance."
          closingAccent="Time reveals its value."
          points={[
            {
              title: "Cut",
              description:
                "The proportions and facets of a brilliant-cut diamond determine how light travels through the stone and returns to the eye. A beautiful cut gives a diamond its unmistakable life.",
            },
            {
              title: "Fire",
              description:
                "As light moves through the diamond, it separates into flashes of colour. This play of spectral light gives a fine brilliant its captivating fire.",
            },
            {
              title: "Scintillation",
              description:
                "The flashes of light and contrast seen as the diamond, the wearer or the light source moves — the quality that makes a stone feel alive rather than simply bright.",
            },
            {
              title: "Setting",
              description:
                "A considered setting protects the stone while allowing light to reach it freely. The jewellery should frame the diamond, never compete with it.",
            },
          ]}
        />

        {/* PRIVATE VIEWING CTA */}
        <CategoryCTA
          title="Some brilliance has to be seen in person"
          sub="A photograph can capture a diamond's form, but not the way it comes alive in light. Discover the Brilliants collection during a private visit to one of our boutiques."
        />
      </main>

      <Footer />

      <FloatingActions />
    </>
  );
}