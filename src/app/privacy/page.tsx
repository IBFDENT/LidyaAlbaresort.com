import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export const metadata: Metadata = {
  title: "Privacy Policy — LIDYA JEWELRY",
  description:
    "Privacy Policy for the LIDYA JEWELRY website, including information about personal data, cookies, communications and your privacy rights.",
};

/*
  ---------------------------------------------------------------------------
  LEGAL DETAILS TO CONFIRM WITH THE OWNER
  ---------------------------------------------------------------------------

  Replace these placeholders after the meeting with the exact legal details.

  Do not guess these values.

  LEGAL_COMPANY_NAME
  REGISTERED_ADDRESS
  COMPANY_REGISTRATION_NUMBER
  TAX_NUMBER
  PRIVACY_EMAIL

  You can leave COMPANY_REGISTRATION_NUMBER or TAX_NUMBER empty if they are
  not applicable or if the owner/legal adviser decides not to publish them.
*/

const LEGAL_COMPANY_NAME = "[LEGAL COMPANY NAME]";
const REGISTERED_ADDRESS = "[REGISTERED ADDRESS]";
const COMPANY_REGISTRATION_NUMBER = "[COMPANY / REGISTRATION NUMBER]";
const TAX_NUMBER = "[TAX NUMBER]";
const PRIVACY_EMAIL = "[PRIVACY CONTACT EMAIL]";

export default function PrivacyPage() {
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
                  Legal · Privacy
                </span>

                <h1
                  className="mt-6 max-w-[900px] font-display text-5xl leading-[0.92] tracking-[-0.035em] md:text-6xl lg:text-7xl"
                  style={{ color: "#F5EFE6" }}
                >
                  Privacy Policy
                </h1>

                <p
                  className="mt-6 max-w-[780px] font-display text-2xl italic leading-tight md:text-3xl"
                  style={{ color: "#E8D8B5" }}
                >
                  Your privacy matters to us.
                </p>
              </div>

              <div className="lg:col-span-4">
                <p className="max-w-md text-sm leading-7 text-brand-white/55 md:text-base">
                  This Privacy Policy explains how personal information may be
                  collected, used and protected when you interact with the
                  LIDYA JEWELRY website and our services.
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
                  We aim to handle personal information with care,
                  transparency and respect.
                </p>

                <p className="mt-6 max-w-[850px] text-sm leading-7 text-grey md:text-base">
                  This policy applies to information processed through this
                  website, including enquiries, appointment requests, service
                  communications, cookie preferences and interactions with
                  linked communication services such as email and WhatsApp.
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
                    <a href="#controller" className="transition-colors hover:text-gold">
                      01 · Data controller
                    </a>

                    <a href="#data" className="transition-colors hover:text-gold">
                      02 · Information we collect
                    </a>

                    <a href="#use" className="transition-colors hover:text-gold">
                      03 · How we use information
                    </a>

                    <a href="#legal-basis" className="transition-colors hover:text-gold">
                      04 · Legal basis
                    </a>

                    <a href="#sharing" className="transition-colors hover:text-gold">
                      05 · Sharing information
                    </a>

                    <a href="#international" className="transition-colors hover:text-gold">
                      06 · International services
                    </a>

                    <a href="#retention" className="transition-colors hover:text-gold">
                      07 · Data retention
                    </a>

                    <a href="#cookies" className="transition-colors hover:text-gold">
                      08 · Cookies
                    </a>

                    <a href="#rights" className="transition-colors hover:text-gold">
                      09 · Your rights
                    </a>

                    <a href="#security" className="transition-colors hover:text-gold">
                      10 · Security
                    </a>

                    <a href="#changes" className="transition-colors hover:text-gold">
                      11 · Changes
                    </a>

                    <a href="#contact" className="transition-colors hover:text-gold">
                      12 · Contact
                    </a>
                  </nav>
                </div>
              </aside>

              {/* LEGAL COPY */}
              <div className="space-y-16 lg:col-span-9">
                {/* 01 */}
                <LegalSection
                  id="controller"
                  number="01"
                  title="Data controller"
                >
                  <p>
                    The operator responsible for the processing of personal
                    information through this website is:
                  </p>

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
                      Privacy contact:{" "}
                      <span className="text-plum-dark">
                        {PRIVACY_EMAIL}
                      </span>
                    </p>
                  </div>
                </LegalSection>

                {/* 02 */}
                <LegalSection
                  id="data"
                  number="02"
                  title="Information we may collect"
                >
                  <p>
                    Depending on how you use the website or contact us, we may
                    receive information such as your name, telephone number,
                    email address, the content of your enquiry, requested
                    service or appointment details and other information that
                    you choose to provide.
                  </p>

                  <p className="mt-4">
                    Technical information may also be processed as part of
                    normal website operation, including IP address, browser
                    type, device information, requested pages, timestamps,
                    security logs and similar technical data generated by the
                    hosting infrastructure.
                  </p>

                  <p className="mt-4">
                    Cookie preferences selected through the website are stored
                    locally in your browser so that the site can remember your
                    choices.
                  </p>
                </LegalSection>

                {/* 03 */}
                <LegalSection
                  id="use"
                  number="03"
                  title="How we use personal information"
                >
                  <p>
                    Personal information may be used to respond to enquiries,
                    arrange appointments, communicate about jewellery or watch
                    services, process service requests, provide customer
                    support and maintain the security and operation of the
                    website.
                  </p>

                  <p className="mt-4">
                    Where optional analytics or marketing technologies are
                    introduced, they will only be used in accordance with the
                    cookie choices made through the website.
                  </p>
                </LegalSection>

                {/* 04 */}
                <LegalSection
                  id="legal-basis"
                  number="04"
                  title="Legal basis for processing"
                >
                  <p>
                    The legal basis for processing depends on the context in
                    which information is provided. Processing may be necessary
                    to respond to a request, take steps connected with a
                    service or appointment, comply with legal obligations,
                    protect legitimate business and security interests, or act
                    on your consent where consent is required.
                  </p>

                  <p className="mt-4">
                    Optional analytics and marketing technologies are intended
                    to operate only after the relevant consent has been given.
                  </p>
                </LegalSection>

                {/* 05 */}
                <LegalSection
                  id="sharing"
                  number="05"
                  title="When information may be shared"
                >
                  <p>
                    We do not sell personal information.
                  </p>

                  <p className="mt-4">
                    Information may be shared with service providers where
                    reasonably necessary for website hosting, technical
                    operation, communications, security, professional advice
                    or another service requested by you.
                  </p>

                  <p className="mt-4">
                    Information may also be disclosed where required by law,
                    regulation, court order or another valid legal obligation.
                  </p>
                </LegalSection>

                {/* 06 */}
                <LegalSection
                  id="international"
                  number="06"
                  title="External and international services"
                >
                  <p>
                    The website contains links to third-party services,
                    including WhatsApp, Instagram and Facebook. When you choose
                    to follow one of these links, your interaction is governed
                    by the privacy practices and terms of the relevant
                    third-party provider.
                  </p>

                  <p className="mt-4">
                    Some service providers may process information in
                    countries other than the country in which you are located.
                    Where applicable, appropriate safeguards should be used in
                    accordance with relevant data protection requirements.
                  </p>
                </LegalSection>

                {/* 07 */}
                <LegalSection
                  id="retention"
                  number="07"
                  title="How long information is kept"
                >
                  <p>
                    Personal information is intended to be retained only for
                    as long as reasonably necessary for the purpose for which
                    it was collected, to maintain relevant business records,
                    resolve enquiries or disputes, meet legal obligations and
                    protect legitimate interests.
                  </p>

                  <p className="mt-4">
                    Exact retention periods may vary depending on the type of
                    information and the nature of the relationship with the
                    customer.
                  </p>
                </LegalSection>

                {/* 08 */}
                <LegalSection id="cookies" number="08" title="Cookies and consent">
                  <p>
                    The website uses necessary browser technologies required
                    for core functionality. Optional analytics and marketing
                    categories are controlled through the website&apos;s cookie
                    consent interface.
                  </p>

                  <p className="mt-4">
                    Your current cookie preferences can be changed at any time
                    through the Cookie Settings link available in the website
                    footer.
                  </p>

                  <button
                    type="button"
                    onClick={undefined}
                    className="mt-6 border border-plum-dark/20 px-5 py-3 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-plum-dark/70"
                    disabled
                  >
                    Cookie settings available in footer
                  </button>
                </LegalSection>

                {/* 09 */}
                <LegalSection id="rights" number="09" title="Your privacy rights">
                  <p>
                    Depending on the law applicable to you, you may have rights
                    relating to your personal information, including rights to
                    request access, correction, deletion, restriction,
                    portability, objection to certain processing and withdrawal
                    of consent.
                  </p>

                  <p className="mt-4">
                    Where processing is based on consent, withdrawing consent
                    does not affect the lawfulness of processing carried out
                    before the withdrawal.
                  </p>

                  <p className="mt-4">
                    You may also have the right to contact or lodge a complaint
                    with the data protection authority applicable to your
                    jurisdiction.
                  </p>
                </LegalSection>

                {/* 10 */}
                <LegalSection id="security" number="10" title="Data security">
                  <p>
                    Reasonable technical and organisational measures are
                    intended to be used to protect personal information against
                    unauthorised access, loss, misuse, alteration or
                    disclosure.
                  </p>

                  <p className="mt-4">
                    No internet transmission or electronic storage method can
                    be guaranteed to be completely secure, and users should
                    take appropriate care when sending sensitive information
                    electronically.
                  </p>
                </LegalSection>

                {/* 11 */}
                <LegalSection id="changes" number="11" title="Changes to this policy">
                  <p>
                    This Privacy Policy may be updated from time to time to
                    reflect changes to the website, services, technologies or
                    applicable requirements.
                  </p>

                  <p className="mt-4">
                    When material changes are made, the updated version and
                    revision date will be published on this page.
                  </p>
                </LegalSection>

                {/* 12 */}
                <LegalSection id="contact" number="12" title="Privacy enquiries">
                  <p>
                    Questions about this Privacy Policy or requests concerning
                    personal information can be directed to:
                  </p>

                  <div className="mt-6 border border-plum-dark/10 bg-ivory p-6 md:p-8">
                    <span className="block text-[0.56rem] font-semibold uppercase tracking-[0.22em] text-gold">
                      Privacy contact
                    </span>

                    <p className="mt-4 font-display text-2xl text-plum-dark">
                      {LEGAL_COMPANY_NAME}
                    </p>

                    <p className="mt-3 text-sm text-grey">
                      {PRIVACY_EMAIL}
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
                  LIDYA JEWELRY
                </span>

                <p className="mt-2 text-sm text-grey">
                  Privacy Policy · Last updated {lastUpdated}
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