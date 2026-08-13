import type { Metadata } from "next";
import DiamondWatchesContent from "./DiamondWatchesContent";

export const metadata: Metadata = {
  title: "Diamond Watches — LIDYA JEWELLERY",
  description:
    "Discover diamond watches selected for exceptional stones, refined craftsmanship and distinctive jewellery character at LIDYA JEWELLERY.",
};

export default function DiamondWatchesPage() {
  return <DiamondWatchesContent />;
}