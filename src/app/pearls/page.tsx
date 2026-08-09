import type { Metadata } from "next";
import PearlsContent from "./PearlsContent";

export const metadata: Metadata = {
  title: "Pearls — LIDYA JEWELLERY",
  description:
    "Discover pearls selected for exceptional lustre, character and harmony at LIDYA JEWELLERY — timeless pieces chosen to be worn and treasured for years.",
};

export default function PearlsPage() {
  return <PearlsContent />;
}