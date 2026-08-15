import { pageMetadata } from "@/lib/seo-metadata";

export const metadata = pageMetadata({
  title: "Pearl Jewellery in Antalya",
  description: "Discover LIDYA pearl jewellery in Antalya — elegant pearl necklaces, earrings, bracelets and refined sets selected for lustre, harmony and timeless beauty.",
  path: "/pearls",
  keywords: ["pearl jewellery Antalya", "pearls Turkey", "pearl necklace Antalya", "LIDYA pearls"],
});

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
