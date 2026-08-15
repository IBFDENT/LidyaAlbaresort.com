import { pageMetadata } from "@/lib/seo-metadata";

export const metadata = pageMetadata({
  title: "Bespoke Jewellery in Antalya",
  description: "Create one-of-a-kind bespoke jewellery with LIDYA in Antalya — from concept and design to craftsmanship, stone setting and final presentation.",
  path: "/bespoke",
  keywords: ["bespoke jewellery Antalya", "custom jewellery Turkey", "custom ring Antalya", "LIDYA bespoke"],
});

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
