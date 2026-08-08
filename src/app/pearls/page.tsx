import type { Metadata } from "next";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

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
        <section className="relative min-h-[820px] overflow-hidden bg-ivory pt-36 md:min-h-[900px] md:pt-40 lg:min-h-[940px] lg:pt-44">
          {/* HERO IMAGE */}
          <Image
            src="/images/pearls/hero-pearls.png"
            alt="LIDYA pearl jewellery collection arranged on champagne silk"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* LIGHT CINEMATIC OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F3EB]/92 via-[#F7F3EB]/42 to-transparent" />

          {/* SUBTLE AMBIENT LIGHT */}
          <div className="pointer-events-none absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-brand-white/18 blur-3xl" />

          <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
            {/* HERO CONTENT */}
            <div className="grid gap-12 pb-20 lg:grid-cols-12 lg:items-end lg:pb-28">
              {/* LEFT */}
              <div className="lg:col-span-8">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center text-gold">
                    <PearlIcon />
                  </span>

                  <span className="text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-gold">
                    Pearls
                  </span>
                </div>

                <h1
                  className="mt-7 max-w-[800px] font-display text-5xl leading-[0.92] tracking-[-0.035em] md:text-6xl lg:text-[5.8rem]"
                  style={{ color: "#1B0B20" }}
                >
                  Nature&apos;s
                  <span className="block">Most Patient</span>
                  <span className="block">Jewel</span>
                </h1>
              </div>

              {/* RIGHT */}
              <div className="lg:col-span-4 lg:pb-2">
                <p className="max-w-md text-sm leading-7 text-[#645E5A] md:text-base">
                  Created slowly, layer by layer, a pearl carries a beauty no
                  machine can reproduce. No two are ever exactly alike. At
                  LIDYA, we choose pearls for the depth of their lustre, the
                  harmony of their colour and the quiet elegance that reveals
                  itself the moment they meet the skin.
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
                    Quiet luxury
                  </span>
                </div>

                <div className="lg:col-span-9">
                  <p
                    className="max-w-[1000px] font-display text-3xl italic leading-tight md:text-4xl lg:text-5xl"
                    style={{ color: "#1B0B20" }}
                  >
                    Formed slowly by nature.
                    <span style={{ color: "#A98242" }}>
                      {" "}
                      Chosen carefully by hand.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

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