import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import About from "@/components/About";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="bg-plum-dark pt-[92px] md:pt-[100px]">
        <About />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}