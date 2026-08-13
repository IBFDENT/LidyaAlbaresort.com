import type { Metadata } from "next";

import SportGenderWatchesContent from "../SportGenderWatchesContent";

export const metadata: Metadata = {
  title: "Women's Sport Watches — LIDYA JEWELLERY",
  description:
    "Discover women's sport watches selected for dynamic design, comfort, performance and individual character at LIDYA JEWELLERY.",
};

export default function WomensSportWatchesPage() {
  return (
    <SportGenderWatchesContent gender="womens" />
  );
}