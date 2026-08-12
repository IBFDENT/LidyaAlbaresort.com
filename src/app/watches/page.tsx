import type { Metadata } from "next";
import WatchesContent from "./WatchesContent";

export const metadata: Metadata = {
  title: "Luxury Watches — LIDYA JEWELLERY",
  description:
    "Discover watches at LIDYA JEWELRY — men's, women's, children's, gold, sport, brilliant-set, diamond and bespoke watches.",
};

export default function WatchesPage() {
  return <WatchesContent />;
}