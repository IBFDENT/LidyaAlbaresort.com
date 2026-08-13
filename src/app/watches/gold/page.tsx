import type { Metadata } from "next";
import GoldWatchesContent from "./GoldWatchesContent";

export const metadata: Metadata = {
  title: "Gold Watches — LIDYA JEWELLERY",
  description:
    "Discover gold watches selected for timeless presence, refined proportions and enduring character at LIDYA JEWELLERY.",
};

export default function GoldWatchesPage() {
  return <GoldWatchesContent />;
}