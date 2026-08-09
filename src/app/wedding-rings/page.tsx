import type { Metadata } from "next";
import WeddingRingsContent from "./WeddingRingsContent";

export const metadata: Metadata = {
  title: "Wedding Rings — LIDYA JEWELLERY",
  description:
    "Wedding rings in platinum and 18k gold, selected for comfort, proportion and lasting wear at LIDYA JEWELLERY.",
};

export default function WeddingRingsPage() {
  return <WeddingRingsContent />;
}