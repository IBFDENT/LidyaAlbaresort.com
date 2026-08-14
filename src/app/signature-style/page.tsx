import type { Metadata } from "next";
import SignatureStyleContent from "./SignatureStyleContent";

export const metadata: Metadata = {
  title: "Signature Style — LIDYA JEWELLERY",
  description:
    "Discover distinctive jewellery selected for individuality, proportion and character at LIDYA JEWELLERY.",
};

export default function SignatureStylePage() {
  return <SignatureStyleContent />;
}