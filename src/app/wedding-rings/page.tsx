import type { Metadata } from "next";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

import CategoryGallery from "@/components/category/CategoryGallery";
import CategoryCraft from "@/components/category/CategoryCraft";
import CategoryCTA from "@/components/category/CategoryCTA";

import { RingIcon } from "@/components/category/icons";

export const metadata: Metadata = {
  title: "Wedding Rings — LIDYA JEWELLERY",
  description:
    "Wedding rings in platinum and 18k gold, selected for comfort, proportion and lasting wear at LIDYA JEWELLERY.",
};

export default function WeddingRingsPage() {
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="relative min-h-[820px] overflow-hidden bg-ivory pt-36 md:min-h-[900px] md:pt-40 lg:min-h-[940px] lg:pt-44">
          {/* HERO IMAGE */}
          <Image
            src="/images/wedding-rings/hero-weddingsrings.png"
            alt="LIDYA wedding ring collection arranged on champagne fabric and natural stone"
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
                    <RingIcon />
                  </span>

                  <span className="text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-gold">
                    Wedding Rings
                  </span>
                </div>

                <h1
                  className="mt-7 max-w-[860px] font-display text-5xl leading-[0.92] tracking-[-0.035em] md:text-6xl lg:text-[5.8rem]"
                  style={{ color: "#1B0B20" }}
                >
                  Made for One Promise.
                  <span className="block">Worn for a Lifetime.</span>
                </h1>
              </div>

              {/* RIGHT */}
              <div className="lg:col-span-4 lg:pb-2">
                <p className="max-w-md text-sm leading-7 text-[#645E5A] md:text-base">
                  A wedding ring becomes part of everyday life — worn through
                  ordinary days, milestones and everything in between. At LIDYA,
                  we focus on proportion, comfort and enduring craftsmanship, so
                  the rings you choose together still feel right years from now.
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
                    A Lifetime Together
                  </span>
                </div>

                <div className="lg:col-span-9">
                  <p
                    className="max-w-[1000px] font-display text-3xl italic leading-tight md:text-4xl lg:text-5xl"
                    style={{ color: "#1B0B20" }}
                  >
                    Chosen together.
                    <span style={{ color: "#A98242" }}>
                      {" "}
                      Worn for a lifetime.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COLLECTION GALLERY */}
        <CategoryGallery
          icon={<RingIcon />}
          eyebrow="The Wedding Collection"
          title="Wedding rings made for"
          titleAccent="a lifetime together."
          description="From timeless gold bands to diamond-set and contemporary designs, each pair is chosen with attention to proportion, comfort and the way it feels on the hand."
          itemLabel="Wedding Collection"
          closingText="Two rings. One promise."
          closingAccent="A lifetime still to come."
          items={[
            {
              image: "/images/wedding-rings/ring-01.jpg",
              caption: "Classic Pair",
              alt: "Brushed gold band and pavé diamond band together",
            },
            {
              image: "/images/wedding-rings/ring-02.jpg",
              caption: "Two-Tone Pavé",
              alt: "White gold and rose gold pavé diamond wedding bands",
            },
            {
              image: "/images/wedding-rings/ring-03.jpg",
              caption: "Solitaire Accent",
              alt: "Platinum bands, one set with a single bezel diamond",
            },
            {
              image: "/images/wedding-rings/ring-04.jpg",
              caption: "Woven Rose Gold",
              alt: "Rose gold bands, one with a woven textured pattern",
            },
            {
              image: "/images/wedding-rings/ring-05.jpg",
              caption: "Diamond Eternity",
              alt: "White gold bands, one set with a full diamond eternity band",
            },
            {
              image: "/images/wedding-rings/ring-06.jpg",
              caption: "Yellow Gold Pair",
              alt: "Yellow gold bands, one with a single diamond accent",
            },
            {
              image: "/images/wedding-rings/ring-07.jpg",
              caption: "Tri-Colour Set",
              alt: "White and rose gold bands with pavé diamonds",
            },
            {
              image: "/images/wedding-rings/ring-08.jpg",
              caption: "Grooved Band",
              alt: "Yellow gold grooved band with a rose gold pavé diamond band",
            },
            {
              image: "/images/wedding-rings/ring-09.jpg",
              caption: "Twisted Pavé",
              alt: "Yellow gold grooved band with a twisted rose gold diamond band",
            },
            {
              image: "/images/wedding-rings/ring-10.jpg",
              caption: "Rose & White Gold",
              alt: "White gold band with a rose gold groove and twisted pavé band",
            },
          ]}
        />

        {/* CRAFT / QUALITY */}
        <CategoryCraft
          eyebrow="Made to Live With You"
          title="The details that matter when a ring is worn every day"
          description="A wedding ring becomes part of everyday life. Comfort, proportion, material and personal detail matter because this is a piece designed to stay with you for years."
          closingText="Made for the wedding day."
          closingAccent="Designed for every day after."
          points={[
            {
              title: "Proportion",
              description:
                "Width, profile and weight should feel balanced on the hand. The right ring has presence without ever feeling like it is competing with the person wearing it.",
            },
            {
              title: "Comfort",
              description:
                "A wedding ring is not made for an occasion alone. Its inner profile, edges and fit are considered for the countless ordinary hours in which it will be worn.",
            },
            {
              title: "Material",
              description:
                "Platinum and 18k white, yellow or rose gold each bring a different tone, weight and character. The choice should suit both your style and the way you intend to wear the ring.",
            },
            {
              title: "Personal Detail",
              description:
                "A date, initials or a private message can turn a beautiful ring into something that belongs only to the two people who chose it.",
            },
          ]}
        />

        {/* PRIVATE VIEWING CTA */}
        <CategoryCTA
          title="Choose the rings you will live with every day"
          sub="Visit us together for a private appointment and explore proportions, metals, finishes and details until the right pair feels unmistakably yours."
        />
      </main>

      <Footer />

      <FloatingActions />
    </>
  );
}