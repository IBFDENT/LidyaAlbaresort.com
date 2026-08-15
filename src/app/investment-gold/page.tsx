import type { Metadata } from "next";
import PublicCmsSection from "@/components/PublicCmsSection";
import InvestmentGoldContent from "./InvestmentGoldContent";

export const metadata: Metadata = {
  title: "Investment Gold — LIDYA JEWELLERY",
  description:
    "999.9 fine gold bars and sovereign coins from 1 gram to a full kilo — certified, sealed and ready to be held as a private, portable store of value.",
};

export default function InvestmentGoldPage() {
  return (
    <>
      <InvestmentGoldContent />
      <PublicCmsSection section="investment" eyebrow="LIDYA Investment" title="Current investment information" />
    </>
  );
}
