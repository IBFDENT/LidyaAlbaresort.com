import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        <Contact />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}