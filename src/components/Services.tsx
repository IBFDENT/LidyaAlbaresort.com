"use client";

import { useState } from "react";
import { getDictionary } from "@/lib/i18n";
import { SERVICE_GROUPS } from "@/lib/content";

const dict = getDictionary();

const serviceContacts = {
  victor: {
    name: "Zafer (Victor)",
    phone: "905325672777",
    email: "albalidya@hotmail.com",
  },
  vierka: {
    name: "Vierka",
    phone: "905378278599",
    email: "vierakocaker@hotmail.com",
  },
};

type ContactKey = keyof typeof serviceContacts;

type SelectedService = {
  id: string;
  group: string;
  item: string;
};

export default function Services() {
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>(
    []
  );

  const [customerName, setCustomerName] = useState("");
  const [customerNote, setCustomerNote] = useState("");
  const [contactPerson, setContactPerson] =
    useState<ContactKey>("victor");

  const selectedContact = serviceContacts[contactPerson];

  const toggleService = (
    groupKey: string,
    groupTitle: string,
    item: string
  ) => {
    const id = `${groupKey}-${item}`;

    setSelectedServices((current) => {
      const exists = current.some((service) => service.id === id);

      if (exists) {
        return current.filter((service) => service.id !== id);
      }

      return [
        ...current,
        {
          id,
          group: groupTitle,
          item,
        },
      ];
    });
  };

  const removeService = (id: string) => {
    setSelectedServices((current) =>
      current.filter((service) => service.id !== id)
    );
  };

  const clearServices = () => {
    setSelectedServices([]);
  };

  const buildMessage = () => {
    const groupedServices = SERVICE_GROUPS.map((group) => {
      const selected = selectedServices.filter(
        (service) => service.group === group.title.en
      );

      if (selected.length === 0) return null;

      return `${group.title.en}:\n${selected
        .map((service) => `• ${service.item}`)
        .join("\n")}`;
    })
      .filter(Boolean)
      .join("\n\n");

    return `Hello LIDYA,

I would like to request jewellery service.

Name: ${customerName || "Not provided"}

Selected services:

${groupedServices || "No service selected"}

Additional note:
${customerNote || "No additional note"}

Preferred contact: ${selectedContact.name}

Thank you.`;
  };

  const sendWhatsApp = () => {
    if (selectedServices.length === 0) {
      alert("Please select at least one service.");
      return;
    }

    const message = encodeURIComponent(buildMessage());

    window.open(
      `https://wa.me/${selectedContact.phone}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const sendEmail = () => {
    if (selectedServices.length === 0) {
      alert("Please select at least one service.");
      return;
    }

    const subject = encodeURIComponent(
      `LIDYA Service Request${customerName ? ` — ${customerName}` : ""}`
    );

    const body = encodeURIComponent(buildMessage());

    window.location.href = `mailto:${selectedContact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-brand-white py-20 md:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-48 top-10 h-[380px] w-[380px] rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
        {/* INTRO */}
        <div className="mb-10 grid gap-8 lg:mb-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="mb-4 block text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-gold">
              {dict.services.eyebrow}
            </span>

            <h2
              className="max-w-[820px] font-display text-4xl leading-[0.96] tracking-[-0.03em] md:text-5xl lg:text-6xl"
              style={{ color: "#1B0B20" }}
            >
              {dict.services.title}
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-1">
            <p className="max-w-md text-sm leading-6 text-grey md:text-[0.95rem]">
              {dict.services.sub}
            </p>

            <div className="mt-5 flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />

              <span className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-plum-dark/45">
                PERSONAL SERVICE · SINCE 1989
              </span>
            </div>
          </div>
        </div>

        {/* SMALL INSTRUCTION */}
        <div className="mb-7 flex flex-col justify-between gap-4 border-y border-plum-dark/10 py-5 md:flex-row md:items-center">
          <div>
            <span className="text-[0.58rem] font-semibold uppercase tracking-[0.26em] text-gold">
              Service request
            </span>

            <p className="mt-1 text-sm text-grey">
              Select one or more services below. Your request will be prepared
              automatically.
            </p>
          </div>

          {selectedServices.length > 0 && (
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-plum-dark">
              {selectedServices.length}{" "}
              {selectedServices.length === 1 ? "service" : "services"} selected
            </span>
          )}
        </div>

        {/* SERVICES */}
        <div className="border-t border-plum-dark/10">
          {SERVICE_GROUPS.map((group, index) => (
            <div
              key={group.letter}
              className="group grid gap-5 border-b border-plum-dark/10 py-6 transition-colors duration-500 hover:bg-ivory/60 md:grid-cols-12 md:items-start md:px-3 md:py-7"
            >
              {/* Number */}
              <div className="md:col-span-1">
                <span className="text-[0.58rem] font-semibold tracking-[0.22em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <div className="md:col-span-4">
                <span className="mb-2 block text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-plum-dark/40">
                  {group.letter}
                </span>

                <h3
                  className="font-display text-[2rem] leading-tight transition-transform duration-500 group-hover:translate-x-1 md:text-[2.15rem] lg:text-[2.3rem]"
                  style={{ color: "#1B0B20" }}
                >
                  {group.title.en}
                </h3>

                <p className="mt-2 max-w-sm text-[0.82rem] leading-5 text-grey">
                  {group.note.en}
                </p>
              </div>

              {/* CLICKABLE ITEMS */}
              <div className="md:col-span-7 md:pl-3">
                <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                  {group.items.map((item) => {
                    const id = `${group.key}-${item}`;

                    const selected = selectedServices.some(
                      (service) => service.id === id
                    );

                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() =>
                          toggleService(
                            group.key,
                            group.title.en ?? "",
                            item
                          )
                        }
                        className={`group/item flex w-full items-center justify-between gap-4 border-b px-1 py-3 text-left text-[0.82rem] leading-5 transition-all duration-300 ${
                          selected
                            ? "border-gold bg-gold/[0.08] text-plum-dark"
                            : "border-plum-dark/8 text-ink hover:border-gold/50 hover:bg-ivory"
                        }`}
                      >
                        <span className="flex items-start gap-3">
                          <span
                            className={`mt-[0.58rem] h-px shrink-0 transition-all duration-300 ${
                              selected
                                ? "w-6 bg-gold"
                                : "w-4 bg-gold/70"
                            }`}
                          />

                          <span>{item}</span>
                        </span>

                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[0.65rem] transition-all duration-300 ${
                            selected
                              ? "border-gold bg-gold text-plum-dark"
                              : "border-plum-dark/15 text-plum-dark/30 group-hover/item:border-gold group-hover/item:text-gold"
                          }`}
                        >
                          {selected ? "✓" : "+"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* REQUEST BUILDER */}
        <div className="mt-16 overflow-hidden border border-plum-dark/10 bg-ivory md:mt-20">
          <div className="grid lg:grid-cols-12">
            {/* LEFT SUMMARY */}
            <div className="border-b border-plum-dark/10 p-6 md:p-8 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-10">
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-gold">
                Your Service Request
              </span>

              <h3
                className="mt-4 font-display text-3xl leading-tight md:text-4xl"
                style={{ color: "#1B0B20" }}
              >
                Selected services
              </h3>

              {selectedServices.length === 0 ? (
                <div className="mt-7 border-t border-plum-dark/10 pt-6">
                  <p className="max-w-sm text-sm leading-6 text-grey">
                    No services selected yet. Choose the services you need from
                    the list above.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mt-7 space-y-2 border-t border-plum-dark/10 pt-6">
                    {selectedServices.map((service) => (
                      <div
                        key={service.id}
                        className="flex items-center justify-between gap-4 border-b border-plum-dark/8 py-3"
                      >
                        <div>
                          <span className="block text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-gold">
                            {service.group}
                          </span>

                          <span className="mt-1 block text-sm text-plum-dark">
                            {service.item}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeService(service.id)}
                          aria-label={`Remove ${service.item}`}
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-plum-dark/15 text-xs text-plum-dark/50 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-plum-dark"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={clearServices}
                    className="mt-5 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-plum-dark/45 transition-colors duration-300 hover:text-gold"
                  >
                    Clear selection
                  </button>
                </>
              )}

              <div className="mt-9 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />

                <span className="text-[0.56rem] font-semibold uppercase tracking-[0.22em] text-plum-dark/40">
                  LIDYA · PERSONAL SERVICE
                </span>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="p-6 md:p-8 lg:col-span-7 lg:p-10">
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-gold">
                Contact details
              </span>

              <div className="mt-7 grid gap-6 md:grid-cols-2">
                {/* NAME */}
                <div>
                  <label
                    htmlFor="service-name"
                    className="mb-2 block text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-plum-dark/55"
                  >
                    Your name
                  </label>

                  <input
                    id="service-name"
                    type="text"
                    value={customerName}
                    onChange={(event) =>
                      setCustomerName(event.target.value)
                    }
                    placeholder="Name"
                    className="w-full border-b border-plum-dark/20 bg-transparent px-0 py-3 text-sm text-plum-dark outline-none transition-colors duration-300 placeholder:text-grey/50 focus:border-gold"
                  />
                </div>

                {/* CONTACT PERSON */}
                <div>
                  <label
                    htmlFor="service-contact"
                    className="mb-2 block text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-plum-dark/55"
                  >
                    Contact person
                  </label>

                  <select
                    id="service-contact"
                    value={contactPerson}
                    onChange={(event) =>
                      setContactPerson(
                        event.target.value as ContactKey
                      )
                    }
                    className="w-full border-b border-plum-dark/20 bg-transparent px-0 py-3 text-sm text-plum-dark outline-none transition-colors duration-300 focus:border-gold"
                  >
                    <option value="victor">
                      Zafer (Victor)
                    </option>

                    <option value="vierka">Vierka</option>
                  </select>
                </div>
              </div>

              {/* NOTE */}
              <div className="mt-7">
                <label
                  htmlFor="service-note"
                  className="mb-2 block text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-plum-dark/55"
                >
                  Additional note
                </label>

                <textarea
                  id="service-note"
                  value={customerNote}
                  onChange={(event) =>
                    setCustomerNote(event.target.value)
                  }
                  placeholder="Tell us anything else we should know about your jewellery or service request..."
                  rows={4}
                  className="w-full resize-none border border-plum-dark/15 bg-brand-white/60 p-4 text-sm leading-6 text-plum-dark outline-none transition-colors duration-300 placeholder:text-grey/50 focus:border-gold"
                />
              </div>

              {/* SELECTED CONTACT INFO */}
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-plum-dark/10 py-4">
                <span className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-plum-dark/40">
                  Request will be sent to
                </span>

                <span className="text-sm text-plum-dark">
                  {selectedContact.name}
                </span>

                <span className="text-sm text-grey">
                  {selectedContact.email}
                </span>
              </div>

              {/* BUTTONS */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={sendWhatsApp}
                  className="group inline-flex min-h-[54px] flex-1 items-center justify-between bg-gold px-6 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-plum-dark transition-all duration-500 hover:bg-gold-light"
                >
                  Send via WhatsApp

                  <span className="text-base transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <button
                  type="button"
                  onClick={sendEmail}
                  className="group inline-flex min-h-[54px] flex-1 items-center justify-between border border-plum-dark/20 px-6 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-plum-dark transition-all duration-500 hover:border-plum-dark hover:bg-plum-dark hover:text-brand-white"
                >
                  Send via Email

                  <span className="text-base transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>

              <p className="mt-4 text-[0.7rem] leading-5 text-grey">
                Sending a request does not confirm the final service price.
                Jewellery is inspected in person before the final price is
                confirmed.
              </p>
            </div>
          </div>
        </div>

        {/* CLOSING STATEMENT */}
        <div className="mx-auto mt-14 max-w-[900px] text-center md:mt-18">
          <span className="mx-auto mb-6 block h-px w-12 bg-gold" />

          <p
            className="font-display text-2xl italic leading-tight md:text-3xl lg:text-4xl"
            style={{ color: "#1B0B20" }}
          >
            Jewellery is personal.
            <span style={{ color: "#C8A96A" }}>
              {" "}
              Service should be too.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}