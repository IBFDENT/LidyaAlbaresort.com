import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Materials from "@/components/Materials";

export default function MaterialsPage() {
  return (
    <>
      <Header />
      <main className="bg-plum-dark pt-[92px] md:pt-[100px]">
        <Materials />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
