import { pageMetadata } from "@/lib/seo-metadata";

export const metadata = pageMetadata({
  title: "Jewellery & Watch Service in Antalya",
  description: "Professional jewellery and watch care at LIDYA — cleaning, polishing, repairs, adjustments, stone setting, redesign and bespoke service in Manavgat, Antalya.",
  path: "/services",
  keywords: ["jewellery repair Antalya", "watch service Antalya", "jewellery cleaning Manavgat", "LIDYA service"],
});

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
