import MaintenanceMode from "@/components/MaintenanceMode";
import { pageMetadata } from "@/lib/seo-metadata";

export const metadata = pageMetadata({
  title: "Fine Jewellery, Diamonds & Watches in Antalya",
  description: "LIDYA Jewellery at Alba Resort in Antalya — fine jewellery, diamonds, investment gold, luxury watches, bespoke design and personal service since 1989.",
  path: "/",
  keywords: ["LIDYA Jewellery", "jewellery Antalya", "jewellery Manavgat", "diamonds Antalya", "luxury watches Antalya", "investment gold Antalya"],
});

export default function Home() {
  return <MaintenanceMode />;
}
