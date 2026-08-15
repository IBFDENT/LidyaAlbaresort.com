import Header from "@/components/Header";
import Collections from "@/components/Collections";
import PublicCollectionsCms from "@/components/PublicCollectionsCms";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function CollectionsPage() {
  return (
    <>
      <Header />

      <main className="bg-ivory">
        <div className="h-[88px] bg-plum-dark" aria-hidden="true" />
        <Collections />
        <PublicCollectionsCms />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}
