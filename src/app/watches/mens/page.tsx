import type { Metadata } from "next";
import MensWatchesContent from "./MensWatchesContent";

export const metadata: Metadata = {
  title: "Men's Watches — LIDYA JEWELLERY",
  description:
    "Discover men's watches selected for character, proportion, precision and enduring style at LIDYA JEWELLERY.",
};

export default function MensWatchesPage() {
  return <MensWatchesContent />;
}