"use client";

import Image from "next/image";
import ProtectedEmail from "@/components/ProtectedEmail";
import { usePublicCmsEntry } from "@/lib/usePublicCms";

export default function MaintenanceMode() {
  const cms = usePublicCmsEntry("content", "maintenance");
  const eyebrow = String(cms?.metadata?.meta1 || "Since 1989 · Alba Resort · Antalya");
  const footerNote = String(cms?.metadata?.meta2 || "Full website launching soon");
  const title = cms?.title || "We are refining your LIDYA experience.";
  const body = cms?.body || "Our new online experience is currently being prepared. LIDYA Jewellery continues to welcome clients for fine jewellery, diamonds, gold, luxury watches, bespoke jewellery and jewellery service in Side, Manavgat and Antalya, Turkey.";

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#120513] px-6 py-16 text-[#f7f0e8]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(203,169,101,0.16),transparent_34%),radial-gradient(circle_at_15%_85%,rgba(92,24,86,0.35),transparent_36%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d2b06c]/60 to-transparent" />

      <section className="relative z-10 mx-auto w-full max-w-5xl text-center">
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.5em] text-[#d2b06c]">
          {eyebrow}
        </p>

        <div className="mx-auto mt-8 flex justify-center">
          <Image
            src="/images/lidya-logo.png"
            alt="LIDYA Jewellery"
            width={720}
            height={280}
            priority
            className="h-auto w-[240px] object-contain sm:w-[300px] md:w-[360px]"
          />
        </div>
        <p className="mt-1 font-display text-4xl italic text-[#f7f0e8] sm:text-5xl md:text-6xl">
          Jewellery
        </p>

        <div className="mx-auto my-10 h-px w-24 bg-[#d2b06c]/65" />

        <h2 className="font-display text-3xl font-light sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#f7f0e8]/65 sm:text-base">
          {body}
        </p>

        <div className="mx-auto mt-10 grid max-w-3xl gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#f7f0e8]/55 sm:grid-cols-3">
          <span>Fine Jewellery</span>
          <span>Luxury Watches</span>
          <span>Diamonds & Gold</span>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ProtectedEmail
            className="inline-flex min-w-[230px] items-center justify-center border border-[#d2b06c]/70 bg-[#d2b06c] px-7 py-4 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#120513] transition hover:bg-[#e2c27f]"
            label="Contact LIDYA"
          />
          <a
            href="https://wa.me/905325672777"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[230px] items-center justify-center border border-[#f7f0e8]/20 px-7 py-4 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#f7f0e8] transition hover:border-[#d2b06c] hover:text-[#d2b06c]"
          >
            WhatsApp
          </a>
        </div>

        <p className="mt-12 text-[0.58rem] uppercase tracking-[0.28em] text-[#f7f0e8]/30">
          {footerNote}
        </p>
      </section>
    </main>
  );
}
