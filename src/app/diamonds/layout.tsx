import { pageMetadata } from "@/lib/seo-metadata";

export const metadata = pageMetadata({
  title: "Diamonds in Antalya",
  description: "Discover diamonds at LIDYA Jewellery in Antalya — selected stones, diamond jewellery, certification guidance and personal consultation.",
  path: "/diamonds",
  keywords: ["diamonds Antalya", "diamond jewellery Turkey", "certified diamonds Manavgat", "LIDYA diamonds"],
});

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
