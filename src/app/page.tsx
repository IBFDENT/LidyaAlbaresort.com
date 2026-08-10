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