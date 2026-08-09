import Image from "next/image";

function PlaneIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      width="34"
      height="34"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 27.5 21 22V9.5c0-2.3 1.3-4.5 3-5.5 1.7 1 3 3.2 3 5.5V22l16 5.5v4L27 29v9l5 3v3l-8-2-8 2v-3l5-3v-9L5 31.5v-4Z" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      width="34"
      height="34"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10 31h28" />
      <path d="M12 31 15.5 20h17L36 31" />
      <path d="M15.5 20 19 14h10l3.5 6" />
      <path d="M9 31v6h4" />
      <path d="M39 31v6h-4" />
      <circle cx="16" cy="34" r="2.5" />
      <circle cx="32" cy="34" r="2.5" />
      <path d="M7 23h5" />
      <path d="M36 23h5" />
    </svg>
  );
}

function HotelIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      width="34"
      height="34"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M11 42V11h26v31" />
      <path d="M7 42h34" />
      <path d="M17 17h4" />
      <path d="M27 17h4" />
      <path d="M17 23h4" />
      <path d="M27 23h4" />
      <path d="M17 29h4" />
      <path d="M27 29h4" />
      <path d="M21 42V35h6v7" />
      <path d="M18 11V7h12v4" />
    </svg>
  );
}

function BoutiqueIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      width="34"
      height="34"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10 21h28" />
      <path d="M12 21v20h24V21" />
      <path d="M9 21 13 10h22l4 11" />
      <path d="M16 21c0 3 2 5 4 5s4-2 4-5" />
      <path d="M24 21c0 3 2 5 4 5s4-2 4-5" />
      <path d="M20 41V31h8v10" />
    </svg>
  );
}

export default function Transfer() {
  return (
    <section
      id="transfer"
      className="relative overflow-hidden bg-plum-dark py-20 text-brand-white md:py-24 lg:py-28"
    >
      {/* AMBIENT GLOW */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-gold/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
        {/* INTRO */}
        <div className="grid gap-10 border-b border-brand-white/12 pb-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="mb-5 block text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-gold">
              Plan Your Visit
            </span>

            <h2
              className="max-w-[900px] font-display text-4xl leading-[0.96] tracking-[-0.03em] md:text-5xl lg:text-6xl"
              style={{ color: "#F5EFE6" }}
            >
              Your journey to LIDYA,
              <span
                className="block italic"
                style={{ color: "#E8D8B5" }}
              >
                made effortless.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="max-w-md text-sm leading-7 text-brand-white/55 md:text-base">
              Visiting from abroad? We can help make the journey simple — from
              flights to Antalya and private airport transfer, to your hotel
              stay and boutique appointment.
            </p>
          </div>
        </div>

        {/* 4-STEP JOURNEY */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4">
          {/* 01 — FLIGHTS */}
          <div className="group border-b border-brand-white/12 py-9 md:border-r md:px-8 md:first:pl-0 xl:min-h-[390px]">
            <div className="flex items-start justify-between gap-6">
              <span className="text-[0.58rem] font-semibold tracking-[0.22em] text-gold">
                01
              </span>

              <span className="text-gold/65 transition-all duration-500 group-hover:-translate-y-1 group-hover:text-gold">
                <PlaneIcon />
              </span>
            </div>

            <h3
              className="mt-7 font-display text-3xl"
              style={{ color: "#F5EFE6" }}
            >
              Flights
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-7 text-brand-white/60">
              Plan your journey to Antalya and choose the connection that best
              suits your visit.
            </p>

            <a
              href="https://www.google.com/travel/flights"
              target="_blank"
              rel="noopener noreferrer"
              className="group/link mt-7 inline-flex items-center gap-4 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-brand-white/70 transition-colors hover:text-gold"
            >
              Find Flights

              <span className="transition-transform duration-500 group-hover/link:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* 02 — VIP TRANSFER */}
          <div className="group border-b border-brand-white/12 py-9 md:px-8 xl:min-h-[390px] xl:border-r">
            <div className="flex items-start justify-between gap-6">
              <span className="text-[0.58rem] font-semibold tracking-[0.22em] text-gold">
                02
              </span>

              <span className="text-gold/65 transition-all duration-500 group-hover:-translate-y-1 group-hover:text-gold">
                <CarIcon />
              </span>
            </div>

            <h3
              className="mt-7 font-display text-3xl"
              style={{ color: "#F5EFE6" }}
            >
              VIP Transfer
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-7 text-brand-white/60">
              Private airport pickup from Antalya Airport to Manavgat or your
              selected Alba Hotel.
            </p>

            {/* DRIVER CTA */}
            <div className="mt-7">
              <a
                href="/images/QR.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-4 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-brand-white/70 transition-colors hover:text-gold"
              >
                Contact Driver

                <span className="transition-transform duration-500 group-hover/link:translate-x-1">
                  →
                </span>
              </a>

              {/* CENTERED QR */}
              <div className="mt-7 flex flex-col items-center">
                <span className="mb-4 h-px w-8 bg-gold/30" />

                <a
                  href="/images/QR.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open VIP transfer QR code"
                  title="Open VIP transfer QR code"
                  className="group/qr relative h-16 w-16 overflow-hidden border border-gold/35 bg-brand-white p-1.5 transition-all duration-500 hover:scale-[1.05] hover:border-gold"
                >
                  <Image
                    src="/images/QR.jpg"
                    alt="VIP transfer QR code"
                    fill
                    sizes="64px"
                    className="object-contain p-1.5"
                  />
                </a>

                <span className="mt-3 text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-brand-white/35">
                  Scan to contact
                </span>
              </div>
            </div>
          </div>

          {/* 03 — HOTEL STAY */}
          <div className="group border-b border-brand-white/12 py-9 md:border-r md:px-8 xl:min-h-[390px]">
            <div className="flex items-start justify-between gap-6">
              <span className="text-[0.58rem] font-semibold tracking-[0.22em] text-gold">
                03
              </span>

              <span className="text-gold/65 transition-all duration-500 group-hover:-translate-y-1 group-hover:text-gold">
                <HotelIcon />
              </span>
            </div>

            <h3
              className="mt-7 font-display text-3xl"
              style={{ color: "#F5EFE6" }}
            >
              Hotel Stay
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-7 text-brand-white/60">
              Stay at one of the selected Alba Hotels and keep your visit to
              LIDYA close, comfortable and effortless.
            </p>

            <div className="mt-6 flex flex-col items-start gap-2.5">
              <a
                href="https://www.albahotels.com.tr/en/resort-en/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/hotel inline-flex items-center gap-3 text-[0.61rem] font-semibold uppercase tracking-[0.16em] text-brand-white/65 transition-colors hover:text-gold"
              >
                Alba Resort

                <span className="transition-transform duration-500 group-hover/hotel:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="https://www.albahotels.com.tr/en/royal-en/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/hotel inline-flex items-center gap-3 text-[0.61rem] font-semibold uppercase tracking-[0.16em] text-brand-white/65 transition-colors hover:text-gold"
              >
                Alba Royal

                <span className="transition-transform duration-500 group-hover/hotel:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="https://www.albahotels.com.tr/en/queen-en/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/hotel inline-flex items-center gap-3 text-[0.61rem] font-semibold uppercase tracking-[0.16em] text-brand-white/65 transition-colors hover:text-gold"
              >
                Alba Queen

                <span className="transition-transform duration-500 group-hover/hotel:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* 04 — PRIVATE VISIT */}
          <div className="group border-b border-brand-white/12 py-9 md:px-8 md:last:pr-0 xl:min-h-[390px]">
            <div className="flex items-start justify-between gap-6">
              <span className="text-[0.58rem] font-semibold tracking-[0.22em] text-gold">
                04
              </span>

              <span className="text-gold/65 transition-all duration-500 group-hover:-translate-y-1 group-hover:text-gold">
                <BoutiqueIcon />
              </span>
            </div>

            <h3
              className="mt-7 font-display text-3xl"
              style={{ color: "#F5EFE6" }}
            >
              Private Visit
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-7 text-brand-white/60">
              Arrange a personal boutique appointment and we will prepare your
              visit around you.
            </p>

            <a
              href="/#contact"
              className="group/link mt-7 inline-flex items-center gap-4 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-brand-white/70 transition-colors hover:text-gold"
            >
              Book a Visit

              <span className="transition-transform duration-500 group-hover/link:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* JOURNEY LINE */}
        <div className="hidden items-center px-4 pt-7 md:flex">
          <span className="h-2 w-2 rounded-full border border-gold/60" />

          <span className="h-px flex-1 bg-gradient-to-r from-gold/35 via-gold/15 to-gold/35" />

          <span className="h-2 w-2 rounded-full border border-gold/60" />

          <span className="h-px flex-1 bg-gradient-to-r from-gold/35 via-gold/15 to-gold/35" />

          <span className="h-2 w-2 rounded-full border border-gold/60" />

          <span className="h-px flex-1 bg-gradient-to-r from-gold/35 via-gold/15 to-gold/35" />

          <span className="h-2 w-2 rounded-full border border-gold/60" />
        </div>

        {/* CLOSING LINE */}
        <div className="mx-auto mt-14 max-w-[900px] text-center md:mt-16">
          <span className="mx-auto mb-6 block h-px w-14 bg-gold" />

          <p
            className="font-display text-2xl italic leading-tight md:text-3xl lg:text-4xl"
            style={{ color: "#F5EFE6" }}
          >
            From flight to boutique,
            <span style={{ color: "#E8D8B5" }}>
              {" "}
              every detail of your visit can be arranged.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}