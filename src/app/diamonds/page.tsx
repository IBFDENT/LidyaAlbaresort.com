import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import CategoryHero from "@/components/category/CategoryHero";
import CategoryCTA from "@/components/category/CategoryCTA";
import SummaryStrip from "@/components/category/SummaryStrip";
import InfoPanelSection from "@/components/category/InfoPanelSection";
import InfoPanel from "@/components/category/InfoPanel";
import {
  DiamondIcon,
  ShieldCheckIcon,
  TrendUpIcon,
  GlobeIcon,
  GemClusterIcon,
} from "@/components/category/icons";
import { LOCALE } from "@/lib/i18n";
import { localized } from "@/lib/content";
import {
  DIAMONDS_TEXT,
  FOUR_CS,
  FOUR_CS_IMAGES,
  BEYOND_FOUR_CS,
  BEYOND_FOUR_CS_IMAGES,
  INVESTMENT_PRINCIPLES,
  INVESTMENT_PRINCIPLES_IMAGES,
  SUMMARY_POINTS,
} from "@/lib/investmentDiamonds";

export const metadata: Metadata = {
  title: "Investment Diamonds — LIDYA JEWELRY",
  description:
    "Certified, independently graded diamonds for private, portable, long-term investment — the Four Cs, additional value factors and what to look for, explained by LIDYA JEWELRY.",
};

// Icons cycled across the summary strip's 5 short takeaways.
const SUMMARY_ICONS = [DiamondIcon, GemClusterIcon, ShieldCheckIcon, GlobeIcon, TrendUpIcon];

// NOTE on i18n: the title/description text below comes from investmentDiamonds.ts
// and is fully translated (7 locales). The supporting images next to each point
// are rich infographics with English text baked into the graphic itself — they
// currently render the same way regardless of LOCALE. Fine for now since the
// site only renders "en", but flag this before wiring up the language switcher:
// either commission localised versions of these graphics, or swap them out for
// simpler, code-drawn charts that pick up translated labels automatically.

export default function DiamondsPage() {
  const t = (key: keyof typeof DIAMONDS_TEXT) => localized(DIAMONDS_TEXT[key], LOCALE);

  return (
    <>
      <Header />
      <main>
        <CategoryHero
          eyebrow={t("heroEyebrow")}
          title={t("heroTitle")}
          lead={t("heroLead")}
          icon={<DiamondIcon />}
        />

        <InfoPanelSection eyebrow={t("fourCsEyebrow")} title={t("fourCsTitle")}>
          {FOUR_CS.map((p, i) => (
            <InfoPanel
              key={i}
              number={String(i + 1).padStart(2, "0")}
              title={localized(p.title, LOCALE)}
              description={localized(p.description, LOCALE)}
              image={FOUR_CS_IMAGES[i].image}
              imageWidth={FOUR_CS_IMAGES[i].imageWidth}
              imageHeight={FOUR_CS_IMAGES[i].imageHeight}
              imageAlt={FOUR_CS_IMAGES[i].imageAlt}
            />
          ))}
        </InfoPanelSection>

        <InfoPanelSection eyebrow={t("beyondEyebrow")} title={t("beyondTitle")}>
          {BEYOND_FOUR_CS.map((p, i) => (
            <InfoPanel
              key={i}
              number={String(i + 1).padStart(2, "0")}
              title={localized(p.title, LOCALE)}
              description={localized(p.description, LOCALE)}
              image={BEYOND_FOUR_CS_IMAGES[i].image}
              imageWidth={BEYOND_FOUR_CS_IMAGES[i].imageWidth}
              imageHeight={BEYOND_FOUR_CS_IMAGES[i].imageHeight}
              imageAlt={BEYOND_FOUR_CS_IMAGES[i].imageAlt}
            />
          ))}
        </InfoPanelSection>

        <InfoPanelSection eyebrow={t("principlesEyebrow")} title={t("principlesTitle")}>
          {INVESTMENT_PRINCIPLES.map((p, i) => (
            <InfoPanel
              key={i}
              number={String(i + 1).padStart(2, "0")}
              title={localized(p.title, LOCALE)}
              description={localized(p.description, LOCALE)}
              image={INVESTMENT_PRINCIPLES_IMAGES[i].image}
              imageWidth={INVESTMENT_PRINCIPLES_IMAGES[i].imageWidth}
              imageHeight={INVESTMENT_PRINCIPLES_IMAGES[i].imageHeight}
              imageAlt={INVESTMENT_PRINCIPLES_IMAGES[i].imageAlt}
            />
          ))}
        </InfoPanelSection>

        <SummaryStrip
          items={SUMMARY_POINTS.map((text, i) => {
            const Icon = SUMMARY_ICONS[i % SUMMARY_ICONS.length];
            return { icon: <Icon />, text: localized(text, LOCALE) };
          })}
        />

        <CategoryCTA title={t("ctaTitle")} sub={t("ctaSub")} />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
