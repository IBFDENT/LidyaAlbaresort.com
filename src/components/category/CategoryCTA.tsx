type CategoryCTAProps = {
  title: string;
  sub: string;
};

export default function CategoryCTA({ title, sub }: CategoryCTAProps) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="rounded bg-ivory px-8 py-16 text-center md:px-16">
          <h2 className="text-3xl md:text-4xl max-w-xl mx-auto">{title}</h2>
          <p className="mt-4 max-w-md mx-auto text-grey">{sub}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="btn-magnetic inline-flex items-center justify-center rounded-sm bg-gold px-8 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-plum-dark hover:bg-gold-light"
            >
              Book a Private Appointment
            </a>
            <a
              href="/"
              className="btn-magnetic inline-flex items-center justify-center rounded-sm border border-plum-dark px-8 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-plum-dark hover:bg-plum-dark hover:text-brand-white"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
