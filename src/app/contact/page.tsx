import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import EnquiryForm from "@/components/EnquiryForm";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        <Contact />
        <EnquiryForm defaultType="appointment" showTypeSelector source="contact-page" />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}
