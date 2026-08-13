import type { Metadata } from "next";
import SportWatchesContent from "./SportWatchesContent";

export const metadata: Metadata = {
  title: "Sport Watches — LIDYA JEWELLERY",
  description:
    "Discover men's and women's sport watches selected for performance, precision, comfort and individual character at LIDYA JEWELLERY.",
};

export default function SportWatchesPage() {
  return <SportWatchesContent />;
}