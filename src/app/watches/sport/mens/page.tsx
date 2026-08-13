import type { Metadata } from "next";

import SportGenderWatchesContent from "../SportGenderWatchesContent";

export const metadata: Metadata = {
  title: "Men's Sport Watches — LIDYA JEWELLERY",
  description:
    "Discover men's sport watches selected for performance, precision, comfort and individual character at LIDYA JEWELLERY.",
};

export default function MensSportWatchesPage() {
  return (
    <SportGenderWatchesContent gender="mens" />
  );
}