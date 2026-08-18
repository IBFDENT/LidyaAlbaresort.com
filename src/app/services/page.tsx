import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Services from "@/components/Services";
import ServiceResendBridge from "@/components/ServiceResendBridge";
import PublicCmsSection from "@/components/PublicCmsSection";

export default function ServicesPage() {
  return (
    <>
      <Header tone="light" />

      <main className="bg-brand-white pt-[72px] md:pt-[80px]">
        <Services />
        <ServiceResendBridge />
        <PublicCmsSection section="services" eyebrow="LIDYA Service" title="Current service information" />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}
