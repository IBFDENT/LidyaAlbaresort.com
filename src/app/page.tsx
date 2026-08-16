import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import Materials from "@/components/Materials";
import Services from "@/components/Services";
import About from "@/components/About";
import Boutiques from "@/components/Boutiques";
import Transfer from "@/components/Transfer";
import CoppaBeachClub from "@/components/CoppaBeachClub";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata = pageMetadata({
  title: "Fine Jewellery, Diamonds & Watches in Antalya",
  description: "LIDYA Jewellery at Alba Resort in Antalya — fine jewellery, diamonds, investment gold, luxury watches, bespoke design and personal service since 1989.",
  path: "/",
  keywords: ["LIDYA Jewellery", "jewellery Antalya", "jewellery Manavgat", "diamonds Antalya", "luxury watches Antalya", "investment gold Antalya"],
});

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Collections />
        <Materials />
        <Services />
        <About />
        <Boutiques />
        <Transfer />
        <CoppaBeachClub />
        <Contact />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}
