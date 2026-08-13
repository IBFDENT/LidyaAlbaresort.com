import type { Metadata } from "next";
import ChildrensWatchesContent from "./ChildrensWatchesContent";

export const metadata: Metadata = {
  title: "Children's Watches — LIDYA JEWELLERY",
  description:
    "Discover children's watches selected for comfort, clarity, character and everyday adventures at LIDYA JEWELLERY.",
};

export default function ChildrensWatchesPage() {
  return <ChildrensWatchesContent />;
}