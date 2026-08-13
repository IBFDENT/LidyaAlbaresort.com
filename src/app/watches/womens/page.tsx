import type { Metadata } from "next";
import WomensWatchesContent from "./WomensWatchesContent";

export const metadata: Metadata = {
  title: "Women's Watches — LIDYA JEWELLERY",
  description:
    "Discover women's watches selected for elegance, proportion, craftsmanship and individual character at LIDYA JEWELLERY.",
};

export default function WomensWatchesPage() {
  return <WomensWatchesContent />;
}