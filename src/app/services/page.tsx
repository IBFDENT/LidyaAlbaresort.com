import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Services from "@/components/Services";
import ServiceSelectionAutoScroll from "@/components/ServiceSelectionAutoScroll";
import PublicCmsSection from "@/components/PublicCmsSection";
import EnquiryForm from "@/components/EnquiryForm";

export default function ServicesPage() {
  return (
    <>
      <Header tone="light" />

      <main className="bg-brand-white pt-[72px] md:pt-[80px]">
        <ServiceSelectionAutoScroll />
        <Services />
        <EnquiryForm defaultType="service" showTypeSelector={false} source="services-page" />
        <PublicCmsSection section="services" eyebrow="LIDYA Service" title="Current service information" />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}
