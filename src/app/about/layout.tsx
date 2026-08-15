import { pageMetadata } from "@/lib/seo-metadata";

export const metadata = pageMetadata({
  title: "About LIDYA Jewellery",
  description: "Discover LIDYA Jewellery — fine jewellery, timeless design, craftsmanship and personal service in Antalya since 1989.",
  path: "/about",
  keywords: ["LIDYA Jewellery since 1989", "jewellery Antalya", "fine jewellery Manavgat"],
});

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
