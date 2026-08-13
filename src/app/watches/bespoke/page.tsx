import type { Metadata } from "next";
import BespokeWatchesContent from "./BespokeWatchesContent";

export const metadata: Metadata = {
  title: "Bespoke Watches — LIDYA JEWELLERY",
  description:
    "Discover the 25-step LIDYA bespoke watchmaking process — from the first hand-drawn sketch and technical construction to final inspection, certification and personal delivery.",
};

export default function BespokeWatchesPage() {
  return <BespokeWatchesContent />;
}