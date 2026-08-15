import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Boutiques from "@/components/Boutiques";

export default function BoutiquesPage() {
  return (
    <>
      <Header />

      <main className="bg-ivory pt-[92px] md:pt-[100px]">
        <Boutiques />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}