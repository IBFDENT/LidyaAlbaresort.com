import type { Metadata } from "next";
import TermsContent from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms & Conditions — LIDYA JEWELLERY",
  description:
    "Terms and Conditions governing the use of the LIDYA JEWELLERY website, enquiries, appointments, services and related communications.",
};

export default function TermsPage() {
  return <TermsContent />;
}