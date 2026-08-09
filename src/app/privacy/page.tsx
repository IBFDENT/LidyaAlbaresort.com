import type { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy — LIDYA JEWELRY",
  description:
    "Privacy Policy for the LIDYA JEWELRY website, including information about personal data, cookies, communications and your privacy rights.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}