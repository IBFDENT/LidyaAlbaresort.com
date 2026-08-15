import { pageMetadata } from "@/lib/seo-metadata";

export const metadata = pageMetadata({
  title: "Luxury Watches in Antalya",
  description: "Explore LIDYA luxury watches in Antalya — men's, women's, sport, gold, brilliant-set, diamond and bespoke watch collections.",
  path: "/watches",
  keywords: ["luxury watches Antalya", "gold watches Turkey", "diamond watches Antalya", "LIDYA watches"],
});

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
