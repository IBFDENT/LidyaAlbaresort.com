import { pageMetadata } from "@/lib/seo-metadata";

export const metadata = pageMetadata({
  title: "Jewellery Collections",
  description: "Explore LIDYA Jewellery collections in Antalya — pearls, wedding rings, brilliant-set jewellery, signature design and bespoke creations.",
  path: "/collections",
  keywords: ["jewellery collections Antalya", "LIDYA collections", "fine jewellery Turkey", "luxury jewellery Manavgat"],
});

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
