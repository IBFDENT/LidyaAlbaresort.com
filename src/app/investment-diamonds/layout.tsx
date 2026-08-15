import { pageMetadata } from "@/lib/seo-metadata";

export const metadata = pageMetadata({
  title: "Investment Diamonds in Antalya",
  description: "Discover certified investment diamonds at LIDYA Jewellery in Antalya with guidance on carat, colour, clarity, cut, certification and long-term value.",
  path: "/investment-diamonds",
  keywords: ["investment diamonds Antalya", "certified diamonds Turkey", "GIA diamonds Antalya", "LIDYA diamonds"],
});

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
