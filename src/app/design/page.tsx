import type { Metadata } from "next";
import DesignContent from "./DesignContent";

export const metadata: Metadata = {
  title: "Design — LIDYA JEWELRY",
  description:
    "Designed and handcrafted in-house at LIDYA JEWELRY — a new collection every season. Discover the Spring, Summer, Autumn and Winter collections.",
};

export default function DesignPage() {
  return <DesignContent />;
}