import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import CategoryHero from "@/components/category/CategoryHero";
import CategoryGallery from "@/components/category/CategoryGallery";
import CategoryCraft from "@/components/category/CategoryCraft";
import CategoryCTA from "@/components/category/CategoryCTA";
import { RingIcon } from "@/components/category/icons";

export const metadata: Metadata = {
  title: "Wedding Rings — LIDYA JEWELRY",
  description:
    "Wedding rings crafted in platinum and gold, fitted, engraved and finished by hand at LIDYA JEWELRY since 1989.",
};

export default function WeddingRingsPage() {
  return (
    <>
      <Header />
      <main>
        <CategoryHero
          eyebrow="Wedding Rings"
          title="A Promise, Made to Last a Lifetime"
          lead="Worn every day for a lifetime, a wedding ring has to earn its place. We craft ours to fit precisely, wear comfortably and hold their shape and shine for decades to come."
          icon={<RingIcon />}
          image="/images/wedding-rings/ring-01.jpg"
          imageAlt="A pair of gold wedding rings, one brushed and one set with pavé diamonds"
        />

        <CategoryGallery
          icon={<RingIcon />}
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

        <CategoryCraft
          eyebrow="Our Service"
          title="Fitted, engraved and cared for long after the wedding day"
          points={[
            {
              title: "Metal Choice",
              description:
                "Platinum, and 18k white, yellow or rose gold — each with its own weight, tone and durability.",
            },
            {
              title: "Comfort Fit",
              description:
                "An interior curve that sits gently on the finger, designed for rings worn without pause, every day.",
            },
            {
              title: "Engraving",
              description:
                "A date, a name, a private word — engraved inside the band by hand in our workshop.",
            },
            {
              title: "Lifetime Sizing",
              description:
                "Fingers change over the years. We resize and adjust the rings we make for as long as you own them.",
            },
          ]}
        />

        <CategoryCTA
          title="Design your wedding rings together"
          sub="Photography for this collection is being prepared. Book a private appointment at one of our boutiques to view current pieces."
        />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
