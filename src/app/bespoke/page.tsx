import type { Metadata } from "next";
import BespokeContent from "./BespokeContent";

export const metadata: Metadata = {
  title: "Bespoke — LIDYA JEWELRY",
  description:
    "Bespoke jewellery commissions at LIDYA JEWELRY — from first consultation and sketch to casting, setting, polishing and delivery, all handcrafted in our own workshop.",
};

export default function BespokePage() {
  return <BespokeContent />;
}