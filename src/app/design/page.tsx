import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import CategoryHero from "@/components/category/CategoryHero";
import CategoryCTA from "@/components/category/CategoryCTA";
import PlaceholderImage from "@/components/category/PlaceholderImage";
import { BlossomIcon, SunIcon, LeafIcon, SnowflakeIcon } from "@/components/category/icons";
import { LOCALE } from "@/lib/i18n";
import { localized } from "@/lib/content";
import { DESIGN_TEXT, SEASONS } from "@/lib/design";

export const metadata: Metadata = {
  title: "Design — LIDYA JEWELRY",
  description:
    "Designed and handcrafted in-house at LIDYA JEWELRY — a new collection every season. Discover the Spring, Summer, Autumn and Winter collections.",
};

// One icon per season, in the same order as SEASONS.
const SEASON_ICONS = {
  spring: BlossomIcon,
  summer: SunIcon,
  autumn: LeafIcon,
  winter: SnowflakeIcon,
} as const;

export default function DesignPage() {
  const t = (key: keyof typeof DESIGN_TEXT) => localized(DESIGN_TEXT[key], LOCALE);

  return (
    <>
      <Header />
      <main>
        <CategoryHero
          eyebrow={t("heroEyebrow")}
          title={t("heroTitle")}
          lead={t("heroLead")}
          icon={<BlossomIcon />}
          showPlaceholder={false}
        />

        <section className="py-20">
          <div className="mx-auto max-w-[1320px] px-6">
            <div className="max-w-xl mb-14">
              <span className="block mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold">
                {t("sectionEyebrow")}
              </span>
              <h2 className="text-4xl md:text-5xl">{t("sectionTitle")}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SEASONS.map((season) => {
                const Icon = SEASON_ICONS[season.id];
                return (
                  <div
                    key={season.id}
                    className="overflow-hidden rounded bg-brand-white shadow-[0_12px_30px_-14px_rgba(27,11,32,0.18)]"
                  >
                    <div className="relative aspect-[4/3]">
                      {season.image ? (
                        <Image
                          src={season.image}
                          alt={season.imageAlt ?? localized(season.name, LOCALE)}
                          fill
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="object-cover"
                        />
                      ) : (
                        <PlaceholderImage icon={<Icon />} className="h-full w-full" />
                      )}
                    </div>
                    <div className="p-7">
                      <p className="text-sm text-grey leading-relaxed">
                        {localized(season.description, LOCALE)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <CategoryCTA title={t("ctaTitle")} sub={t("ctaSub")} />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
