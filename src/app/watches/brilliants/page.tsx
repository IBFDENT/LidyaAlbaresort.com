import type { Metadata } from "next";
import BrilliantWatchesContent from "./BrilliantWatchesContent";

export const metadata: Metadata = {
  title: "Brilliant-set Watches — LIDYA JEWELLERY",
  description:
    "Discover brilliant-set watches selected for light, precision, refined stone setting and individual character at LIDYA JEWELLERY.",
};

export default function BrilliantWatchesPage() {
  return <BrilliantWatchesContent />;
}