import Image from "next/image";

export default function Transfer() {
  return (
    <section
      id="transfer"
      className="relative overflow-hidden bg-plum-dark py-20 text-brand-white md:py-24 lg:py-28"
    >
      {/* Ambient glow */}
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
              Visiting from abroad? We can help make the journey simple —
              from flights to Antalya, to private airport transfer and your
              boutique appointment.
            </p>
          </div>
        </div>

        {/* 3 STEPS */}
        <div className="grid md:grid-cols-3">
          {/* FLIGHTS */}
          <div className="group border-b border-brand-white/12 py-9 md:border-r md:px-8 md:first:pl-0">
            <span className="text-[0.58rem] font-semibold tracking-[0.22em] text-gold">
              01
            </span>

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
              href="#"
              className="mt-7 inline-flex items-center gap-4 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-brand-white/70 transition-colors hover:text-gold"
            >
              Find Flights
              <span>→</span>
            </a>
          </div>

          {/* VIP TRANSFER */}
          <div className="group border-b border-brand-white/12 py-9 md:border-r md:px-8">
            <span className="text-[0.58rem] font-semibold tracking-[0.22em] text-gold">
              02
            </span>

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

            <div className="mt-7 flex flex-wrap items-center gap-5">
              <a
                href="#"
                className="inline-flex items-center gap-4 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-brand-white/70 transition-colors hover:text-gold"
              >
                Contact Driver
                <span>→</span>
              </a>

              <span className="h-px w-6 bg-brand-white/15" />

              <a
                href="/images/QR.jpg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open VIP transfer QR code"
                title="Open QR code"
                className="group/qr relative h-14 w-14 shrink-0 overflow-hidden border border-gold/40 bg-brand-white p-1 transition-all duration-300 hover:scale-[1.05] hover:border-gold"
              >
                <Image
                  src="/images/QR.jpg"
                  alt="VIP transfer QR code"
                  fill
                  sizes="56px"
                  className="object-contain p-1"
                />
              </a>
            </div>
          </div>

          {/* PRIVATE VISIT */}
          <div className="group border-b border-brand-white/12 py-9 md:px-8 md:last:pr-0">
            <span className="text-[0.58rem] font-semibold tracking-[0.22em] text-gold">
              03
            </span>

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
              className="mt-7 inline-flex items-center gap-4 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-brand-white/70 transition-colors hover:text-gold"
            >
              Book a Visit
              <span>→</span>
            </a>
          </div>
        </div>

        {/* CLOSING LINE */}
        <div className="mx-auto mt-14 max-w-[900px] text-center md:mt-16">
          <span className="mx-auto mb-6 block h-px w-14 bg-gold" />

          <p
            className="font-display text-2xl italic leading-tight md:text-3xl lg:text-4xl"
            style={{ color: "#F5EFE6" }}
          >
            From arrival to appointment,
            <span style={{ color: "#E8D8B5" }}>
              {" "}
              we want your visit to feel effortless.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}