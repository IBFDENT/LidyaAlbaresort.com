import type { Metadata } from "next";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

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
        <section className="relative min-h-[820px] overflow-hidden bg-ivory pt-36 md:min-h-[900px] md:pt-40 lg:min-h-[940px] lg:pt-44">
          {/* HERO IMAGE */}
          <Image
            src="/images/brilliants/hero-brilliants.png"
            alt="LIDYA Brilliants diamond jewellery collection arranged on champagne fabric and natural stone"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* LIGHT CINEMATIC OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F3EB]/92 via-[#F7F3EB]/40 to-transparent" />

          {/* SUBTLE AMBIENT LIGHT */}
          <div className="pointer-events-none absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-brand-white/18 blur-3xl" />

          <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
            {/* HERO CONTENT */}
            <div className="grid gap-12 pb-20 lg:grid-cols-12 lg:items-end lg:pb-28">
              {/* LEFT */}
              <div className="lg:col-span-8">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center text-gold">
                    <GemClusterIcon />
                  </span>

                  <span className="text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-gold">
                    Brilliants
                  </span>
                </div>

                <h1
                  className="mt-7 max-w-[820px] font-display text-5xl leading-[0.92] tracking-[-0.035em] md:text-6xl lg:text-[5.8rem]"
                  style={{ color: "#1B0B20" }}
                >
                  Where Light
                  <span className="block">Becomes Jewellery</span>
                </h1>
              </div>

              {/* RIGHT */}
              <div className="lg:col-span-4 lg:pb-2">
                <p className="max-w-md text-sm leading-7 text-[#645E5A] md:text-base">
                  The brilliant cut was created for one extraordinary purpose —
                  to transform light into fire. Every stone in our collection
                  is selected for the way it comes alive in motion, revealing
                  flashes of brilliance with every movement.
                </p>

                <div className="mt-7 flex items-center gap-4">
                  <span className="h-px w-12 bg-gold" />

                  <span className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-plum-dark/50">
                    LIDYA · SINCE 1989
                  </span>
                </div>
              </div>
            </div>

            {/* HERO STATEMENT */}
            <div className="border-t border-plum-dark/10 py-12 md:py-16">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-3">
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
                    The Art of Light
                  </span>
                </div>

                <div className="lg:col-span-9">
                  <p
                    className="max-w-[1000px] font-display text-3xl italic leading-tight md:text-4xl lg:text-5xl"
                    style={{ color: "#1B0B20" }}
                  >
                    Made to catch the light.
                    <span style={{ color: "#A98242" }}>
                      {" "}
                      Created to keep it.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

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