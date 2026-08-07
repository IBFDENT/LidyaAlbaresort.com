import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import CategoryHero from "@/components/category/CategoryHero";
import CategoryCTA from "@/components/category/CategoryCTA";
import InfoPanelSection from "@/components/category/InfoPanelSection";
import InfoPanel from "@/components/category/InfoPanel";
import { GemClusterIcon } from "@/components/category/icons";
import { LOCALE } from "@/lib/i18n";
import { localized } from "@/lib/content";
import {
  BESPOKE_TEXT,
  PHASE_1_STEPS,
  PHASE_2_STEPS,
  PHASE_3_STEPS,
  type BespokeStep,
} from "@/lib/bespoke";

export const metadata: Metadata = {
  title: "Bespoke — LIDYA JEWELRY",
  description:
    "Bespoke jewellery commissions at LIDYA JEWELRY — from first consultation and sketch to casting, setting, polishing and delivery, all handcrafted in our own workshop.",
};

// Every step image is 374×331 (cropped from the 4×3 process moodboard).
const IMG_W = 374;
const IMG_H = 331;

function renderSteps(steps: BespokeStep[], startNumber: number) {
  return steps.map((step, i) => (
    <InfoPanel
      key={step.image}
      number={String(startNumber + i).padStart(2, "0")}
      title={localized(step.title, LOCALE)}
      description={localized(step.description, LOCALE)}
      image={step.image}
      imageAlt={step.imageAlt}
      imageWidth={IMG_W}
      imageHeight={IMG_H}
    />
  ));
}

export default function BespokePage() {
  const t = (key: keyof typeof BESPOKE_TEXT) => localized(BESPOKE_TEXT[key], LOCALE);

  return (
    <>
      <Header />
      <main>
        <CategoryHero
          eyebrow={t("heroEyebrow")}
          title={t("heroTitle")}
          lead={t("heroLead")}
          icon={<GemClusterIcon />}
          showPlaceholder={false}
        />

        <InfoPanelSection eyebrow={t("phase1Eyebrow")} title={t("phase1Title")}>
          {renderSteps(PHASE_1_STEPS, 1)}
        </InfoPanelSection>

        <InfoPanelSection eyebrow={t("phase2Eyebrow")} title={t("phase2Title")}>
          {renderSteps(PHASE_2_STEPS, 4)}
        </InfoPanelSection>

        <InfoPanelSection eyebrow={t("phase3Eyebrow")} title={t("phase3Title")}>
          {renderSteps(PHASE_3_STEPS, 9)}
        </InfoPanelSection>

        <CategoryCTA title={t("ctaTitle")} sub={t("ctaSub")} />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
