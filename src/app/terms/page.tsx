import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export const metadata: Metadata = {
  title: "Terms & Conditions — LIDYA JEWELLERY",
  description:
    "Terms and Conditions governing the use of the LIDYA JEWELLERY website, enquiries, appointments, services and related communications.",
};

/*
  ---------------------------------------------------------------------------
  LEGAL DETAILS TO CONFIRM WITH THE OWNER
  ---------------------------------------------------------------------------

  Replace these placeholders after the meeting.

  Do not guess these values.

  LEGAL_COMPANY_NAME
  REGISTERED_ADDRESS
  COMPANY_REGISTRATION_NUMBER
  TAX_NUMBER
  LEGAL_EMAIL
*/

const LEGAL_COMPANY_NAME = "[LEGAL COMPANY NAME]";
const REGISTERED_ADDRESS = "[REGISTERED ADDRESS]";
const COMPANY_REGISTRATION_NUMBER = "[COMPANY / REGISTRATION NUMBER]";
const TAX_NUMBER = "[TAX NUMBER]";
const LEGAL_EMAIL = "[LEGAL CONTACT EMAIL]";

export default function TermsPage() {
  const lastUpdated = "August 2026";

  return (
    <>
      <Header />

      <main className="bg-[#F7F4EE] text-plum-dark">
        {/* HERO */}
        <section className="relative overflow-hidden bg-plum-dark pb-20 pt-36 text-brand-white md:pb-24 md:pt-40 lg:pb-28 lg:pt-44">
          <div className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-gold/8 blur-3xl" />
          <div className="pointer-events-none absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-brand-white/[0.025] blur-3xl" />

          <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-gold">
                  Legal · Terms
                </span>

                <h1
                  className="mt-6 max-w-[900px] font-display text-5xl leading-[0.92] tracking-[-0.035em] md:text-6xl lg:text-7xl"
                  style={{ color: "#F5EFE6" }}
                >
                  Terms & Conditions
                </h1>

                <p
                  className="mt-6 max-w-[780px] font-display text-2xl italic leading-tight md:text-3xl"
                  style={{ color: "#E8D8B5" }}
                >
                  Clear terms for a personal service.
                </p>
              </div>

              <div className="lg:col-span-4">
                <p className="max-w-md text-sm leading-7 text-brand-white/55 md:text-base">
                  These Terms & Conditions govern your use of the LIDYA
                  JEWELLERY website and related interactions, including
                  enquiries, appointments and service requests.
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <span className="h-px w-10 bg-gold" />

                  <span className="text-[0.56rem] font-semibold uppercase tracking-[0.22em] text-brand-white/40">
                    Last updated · {lastUpdated}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="border-b border-plum-dark/10 bg-ivory py-14 md:py-16">
          <div className="mx-auto max-w-[1180px] px-6 md:px-10 lg:px-16">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-gold">
                  Introduction
                </span>
              </div>

              <div className="lg:col-span-9">
                <p
                  className="max-w-[850px] font-display text-2xl leading-snug md:text-3xl"
                  style={{ color: "#1B0B20" }}
                >
                  Our website is intended to provide information, support
                  enquiries and facilitate personal service.
                </p>

                <p className="mt-6 max-w-[850px] text-sm leading-7 text-grey md:text-base">
                  By using this website, you agree to use it lawfully and in
                  accordance with these Terms & Conditions. Specific purchases,
                  repairs, bespoke work or other services may also be subject to
                  additional terms confirmed directly with you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="bg-brand-white py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-[1180px] px-6 md:px-10 lg:px-16">
            <div className="grid gap-12 lg:grid-cols-12">
              {/* SIDE NAV */}
              <aside className="lg:col-span-3">
                <div className="lg:sticky lg:top-28">
                  <span className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-gold">
                    Contents
                  </span>

                  <nav className="mt-6 flex flex-col gap-3 text-sm text-plum-dark/55">
                    <a
                      href="#operator"
                      className="transition-colors hover:text-gold"
                    >
                      01 · Website operator
                    </a>

                    <a
                      href="#use"
                      className="transition-colors hover:text-gold"
                    >
                      02 · Use of the website
                    </a>

                    <a
                      href="#information"
                      className="transition-colors hover:text-gold"
                    >
                      03 · Website information
                    </a>

                    <a
                      href="#enquiries"
                      className="transition-colors hover:text-gold"
                    >
                      04 · Enquiries & appointments
                    </a>

                    <a
                      href="#services"
                      className="transition-colors hover:text-gold"
                    >
                      05 · Services
                    </a>

                    <a
                      href="#pricing"
                      className="transition-colors hover:text-gold"
                    >
                      06 · Pricing & availability
                    </a>

                    <a
                      href="#bespoke"
                      className="transition-colors hover:text-gold"
                    >
                      07 · Bespoke & custom work
                    </a>

                    <a
                      href="#third-party"
                      className="transition-colors hover:text-gold"
                    >
                      08 · Third-party services
                    </a>

                    <a
                      href="#intellectual-property"
                      className="transition-colors hover:text-gold"
                    >
                      09 · Intellectual property
                    </a>

                    <a
                      href="#liability"
                      className="transition-colors hover:text-gold"
                    >
                      10 · Liability
                    </a>

                    <a
                      href="#changes"
                      className="transition-colors hover:text-gold"
                    >
                      11 · Changes
                    </a>

                    <a
                      href="#law"
                      className="transition-colors hover:text-gold"
                    >
                      12 · Governing law
                    </a>

                    <a
                      href="#contact"
                      className="transition-colors hover:text-gold"
                    >
                      13 · Contact
                    </a>
                  </nav>
                </div>
              </aside>

              {/* LEGAL COPY */}
              <div className="space-y-16 lg:col-span-9">
                <LegalSection
                  id="operator"
                  number="01"
                  title="Website operator"
                >
                  <p>This website is operated by:</p>

                  <div className="mt-6 border-l border-gold/50 pl-6">
                    <p className="font-semibold text-plum-dark">
                      {LEGAL_COMPANY_NAME}
                    </p>

                    <p className="mt-2">{REGISTERED_ADDRESS}</p>

                    <p className="mt-2">
                      Registration / company number:{" "}
                      {COMPANY_REGISTRATION_NUMBER}
                    </p>

                    <p className="mt-2">Tax number: {TAX_NUMBER}</p>

                    <p className="mt-2">
                      Legal contact:{" "}
                      <span className="text-plum-dark">{LEGAL_EMAIL}</span>
                    </p>
                  </div>
                </LegalSection>

                <LegalSection
                  id="use"
                  number="02"
                  title="Use of the website"
                >
                  <p>
                    You may use this website for personal and lawful purposes,
                    including browsing information about LIDYA JEWELLERY,
                    collections, services, boutiques and related offerings.
                  </p>

                  <p className="mt-4">
                    You must not misuse the website, attempt unauthorised access,
                    interfere with its operation, introduce malicious code or use
                    the website in a manner that could damage, disable or impair
                    its functionality.
                  </p>
                </LegalSection>

                <LegalSection
                  id="information"
                  number="03"
                  title="Website information"
                >
                  <p>
                    We aim to keep website information accurate and up to date,
                    but product descriptions, images, availability, prices,
                    service details and other information may change from time
                    to time.
                  </p>

                  <p className="mt-4">
                    Images are intended to represent products and services as
                    accurately as reasonably possible, but colours, proportions
                    and visual appearance may vary depending on lighting,
                    photography, display settings and the individual nature of
                    jewellery and gemstones.
                  </p>
                </LegalSection>

                <LegalSection
                  id="enquiries"
                  number="04"
                  title="Enquiries and appointments"
                >
                  <p>
                    Website enquiries, appointment requests, telephone calls,
                    emails and WhatsApp communications do not by themselves
                    create a binding sale or service agreement.
                  </p>

                  <p className="mt-4">
                    An appointment or service request is confirmed only when
                    accepted directly by LIDYA JEWELLERY or an authorised
                    representative.
                  </p>
                </LegalSection>

                <LegalSection
                  id="services"
                  number="05"
                  title="Jewellery and watch services"
                >
                  <p>
                    Repair, adjustment, stone-setting, redesign and related
                    services may require physical inspection before scope, price
                    and timing can be confirmed.
                  </p>

                  <p className="mt-4">
                    Any estimate provided before inspection should be treated as
                    indicative unless expressly confirmed otherwise.
                  </p>

                  <p className="mt-4">
                    Customers are responsible for providing accurate
                    information about items submitted for service, including any
                    known damage, previous repairs or relevant history where
                    applicable.
                  </p>
                </LegalSection>

                <LegalSection
                  id="pricing"
                  number="06"
                  title="Pricing, stock and availability"
                >
                  <p>
                    Prices, stock levels, precious metal values, gemstone
                    availability and other commercial information may change
                    without notice.
                  </p>

                  <p className="mt-4">
                    The final price applicable to a purchase or service is the
                    price confirmed directly with the customer at the relevant
                    time.
                  </p>

                  <p className="mt-4">
                    Displaying an item or service on the website does not
                    guarantee that it is currently available.
                  </p>
                </LegalSection>

                <LegalSection
                  id="bespoke"
                  number="07"
                  title="Bespoke and custom work"
                >
                  <p>
                    Bespoke jewellery, redesigns and custom commissions may
                    involve individual consultation, design approval, material
                    selection, measurements and other specifications agreed
                    directly with the customer.
                  </p>

                  <p className="mt-4">
                    Production times, deposits, cancellation conditions,
                    alterations and final pricing should be confirmed
                    individually before work begins.
                  </p>

                  <p className="mt-4">
                    Because bespoke pieces are made to individual requirements,
                    different cancellation, return or modification rules may
                    apply where permitted by applicable law.
                  </p>
                </LegalSection>

                <LegalSection
                  id="third-party"
                  number="08"
                  title="Third-party links and services"
                >
                  <p>
                    The website may contain links to third-party websites and
                    services, including WhatsApp, Instagram, Facebook, hotel
                    websites, travel services and other external providers.
                  </p>

                  <p className="mt-4">
                    These third parties operate independently from LIDYA
                    JEWELLERY. We are not responsible for their content,
                    availability, privacy practices, security or contractual
                    terms.
                  </p>

                  <p className="mt-4">
                    Any interaction with a third-party service is subject to
                    that provider&apos;s own terms and policies.
                  </p>
                </LegalSection>

                <LegalSection
                  id="intellectual-property"
                  number="09"
                  title="Intellectual property"
                >
                  <p>
                    Unless otherwise indicated, the website design, written
                    content, branding, logos, photography, graphics and other
                    materials are owned by, licensed to or used with permission
                    by LIDYA JEWELLERY.
                  </p>

                  <p className="mt-4">
                    Website content may not be reproduced, distributed,
                    republished, commercially exploited or modified without
                    appropriate permission, except where permitted by law.
                  </p>
                </LegalSection>

                <LegalSection
                  id="liability"
                  number="10"
                  title="Limitation of liability"
                >
                  <p>
                    The website is provided for general information and
                    communication purposes. To the extent permitted by law, we
                    do not guarantee uninterrupted availability or that the
                    website will always be free from technical errors.
                  </p>

                  <p className="mt-4">
                    Nothing in these Terms & Conditions is intended to exclude
                    or limit liability where such exclusion or limitation is
                    prohibited by applicable law.
                  </p>

                  <p className="mt-4">
                    Customers should obtain appropriate professional advice
                    where a decision requires specialist legal, financial, tax,
                    investment or other professional assessment.
                  </p>
                </LegalSection>

                <LegalSection
                  id="changes"
                  number="11"
                  title="Changes to the website and these terms"
                >
                  <p>
                    We may update the website, services or these Terms &
                    Conditions from time to time.
                  </p>

                  <p className="mt-4">
                    The latest version will be published on this page together
                    with the relevant revision date.
                  </p>
                </LegalSection>

                <LegalSection
                  id="law"
                  number="12"
                  title="Governing law and jurisdiction"
                >
                  <p>
                    The law governing these Terms & Conditions and the courts or
                    authorities having jurisdiction will depend on the legal
                    identity and registered location of the website operator.
                  </p>

                  <p className="mt-4">
                    This section should be finalised after the operator&apos;s
                    legal details and applicable jurisdiction have been
                    confirmed.
                  </p>
                </LegalSection>

                <LegalSection
                  id="contact"
                  number="13"
                  title="Contact"
                >
                  <p>
                    Questions about these Terms & Conditions can be directed to:
                  </p>

                  <div className="mt-6 border border-plum-dark/10 bg-ivory p-6 md:p-8">
                    <span className="block text-[0.56rem] font-semibold uppercase tracking-[0.22em] text-gold">
                      Legal contact
                    </span>

                    <p className="mt-4 font-display text-2xl text-plum-dark">
                      {LEGAL_COMPANY_NAME}
                    </p>

                    <p className="mt-3 text-sm text-grey">
                      {LEGAL_EMAIL}
                    </p>

                    <p className="mt-1 text-sm text-grey">
                      {REGISTERED_ADDRESS}
                    </p>
                  </div>
                </LegalSection>
              </div>
            </div>
          </div>
        </section>

        {/* LEGAL NOTE */}
        <section className="border-t border-plum-dark/10 bg-ivory py-12">
          <div className="mx-auto max-w-[1180px] px-6 md:px-10 lg:px-16">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="text-[0.56rem] font-semibold uppercase tracking-[0.24em] text-gold">
                  LIDYA JEWELLERY
                </span>

                <p className="mt-2 text-sm text-grey">
                  Terms & Conditions · Last updated {lastUpdated}
                </p>
              </div>

              <Link
                href="/"
                className="inline-flex items-center gap-4 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-plum-dark/60 transition-colors hover:text-gold"
              >
                Return to website
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}

type LegalSectionProps = {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
};

function LegalSection({
  id,
  number,
  title,
  children,
}: LegalSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-plum-dark/10 pb-14"
    >
      <div className="flex items-center gap-4">
        <span className="text-[0.56rem] font-semibold tracking-[0.22em] text-gold">
          {number}
        </span>

        <span className="h-px w-8 bg-gold/60" />
      </div>

      <h2
        className="mt-5 font-display text-3xl leading-tight md:text-4xl"
        style={{ color: "#1B0B20" }}
      >
        {title}
      </h2>

      <div className="mt-6 max-w-[800px] text-sm leading-7 text-grey md:text-[0.95rem]">
        {children}
      </div>
    </section>
  );
}