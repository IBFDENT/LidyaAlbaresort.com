import type { Metadata } from "next";
import InvestmentDiamondsContent from "./InvestmentDiamondsContent";

export const metadata: Metadata = {
  title: "Investment Diamonds — LIDYA JEWELRY",
  description:
    "Certified, independently graded diamonds for private, portable, long-term investment — the Four Cs, additional value factors and what to look for, explained by LIDYA JEWELRY.",
};

export default function InvestmentDiamondsPage() {
  return <InvestmentDiamondsContent />;
}