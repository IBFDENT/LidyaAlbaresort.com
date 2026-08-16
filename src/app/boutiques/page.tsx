import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Boutiques from "@/components/Boutiques";
import PublicCmsSection from "@/components/PublicCmsSection";

export default function BoutiquesPage() {
  return (
    <>
      <Header tone="light" />

      <main className="bg-ivory pt-[92px] md:pt-[100px]">
        <Boutiques />
        <PublicCmsSection section="travel" eyebrow="LIDYA · Alba Resort" title="Visit & travel information" />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}
