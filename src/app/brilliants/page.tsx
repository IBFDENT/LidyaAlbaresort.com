import type { Metadata } from "next";
import BrilliantsContent from "./BrilliantsContent";

export const metadata: Metadata = {
  title: "Brilliants — LIDYA JEWELLERY",
  description:
    "Discover the Brilliants collection from LIDYA JEWELLERY — brilliant-cut diamond jewellery selected for exceptional light, fire and timeless elegance.",
};

export default function BrilliantsPage() {
  return <BrilliantsContent />;
}