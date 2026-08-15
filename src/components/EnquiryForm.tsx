"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

type EnquiryType = "general" | "service" | "appointment";
type Props = { defaultType?: EnquiryType; showTypeSelector?: boolean };

const SERVICE_OPTIONS = ["Jewellery cleaning & polishing", "Repairs & adjustments", "Stone & diamond setting", "Bespoke & redesign", "Watch service", "Gold exchange"];
const TYPE_LABELS: Record<EnquiryType, string> = { general: "General enquiry", service: "Service request", appointment: "Private appointment" };

export default function EnquiryForm({ defaultType = "general", showTypeSelector = true }: Props) {
  const { locale } = useLanguage();
  const [type, setType] = useState<EnquiryType>(defaultType);
  const [name, setName] = useState(""); const [email, setEmail] = useState(""); const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState(""); const [message, setMessage] = useState(""); const [service, setService] = useState("");
  const [consent, setConsent] = useState(false); const [website, setWebsite] = useState(""); const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(""); const [success, setSuccess] = useState(false); const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    fetch("/api/client/me", { cache: "no-store" }).then(async (response) => {
      if (!response.ok) return;
      const payload = await response.json(); const user = payload?.user;
      if (!user) return;
      setSignedIn(true);
      setEmail(user.email || "");
      setName((current) => current || user.user_metadata?.full_name || "");
      setPhone((current) => current || user.user_metadata?.phone || "");
    }).catch(() => undefined);
  }, []);

  const heading = useMemo(() => type === "service" ? "Send a service request" : type === "appointment" ? "Request a private appointment" : "Send us an enquiry", [type]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setSubmitting(true); setFeedback(""); setSuccess(false);
    try {
      const response = await fetch("/api/enquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type, name, email, phone, locale, subject, message, preferredContact: "LIDYA team", selectedServices: type === "service" && service ? [service] : [], source: type === "service" ? "services-page" : "contact-page", consent, website }) });
      const data = await response.json(); if (!response.ok) throw new Error(data.error || "The request could not be sent.");
      setSuccess(true); setFeedback(data.confirmationEmailSent ? `Thank you. Your request has been received and a confirmation email has been sent. Reference: ${data.reference}.` : `Thank you. Your request has been received. Reference: ${data.reference}.`);
      if (!signedIn) { setName(""); setEmail(""); setPhone(""); }
      setSubject(""); setMessage(""); setService(""); setConsent(false);
    } catch (error) { setFeedback(error instanceof Error ? error.message : "The request could not be sent."); }
    finally { setSubmitting(false); }
  }

  return <section className="bg-[#120817] py-20 text-[#fffdf9] md:py-28"><div className="mx-auto max-w-[1180px] px-6 md:px-10 lg:px-16"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
    <div><p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[#c8a96a]">LIDYA Client Care</p><h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">{heading}</h2><p className="mt-5 max-w-md text-sm leading-7 text-white/50">Your request is stored securely in the LIDYA administration system. Signed-in clients can follow its live status in Client Centre.</p><div className="mt-8 border-l border-[#c8a96a]/40 pl-5 text-sm leading-7 text-white/45"><p>Alba Resort · Antalya · Türkiye</p><p>Personal service since 1989</p></div></div>
    <form onSubmit={submit} className="rounded-2xl border border-[#c8a96a]/15 bg-white/[0.035] p-5 md:p-7">
      {showTypeSelector && <div className="grid gap-2 sm:grid-cols-3">{(Object.keys(TYPE_LABELS) as EnquiryType[]).map((item)=><button key={item} type="button" onClick={()=>setType(item)} className={`rounded-xl border px-3 py-3 text-xs transition ${type===item?"border-[#c8a96a] bg-[#c8a96a]/12 text-[#e8d8b5]":"border-white/10 text-white/45 hover:border-white/20"}`}>{TYPE_LABELS[item]}</button>)}</div>}
      {signedIn && <p className="mt-4 rounded-lg border border-[#c8a96a]/15 bg-[#c8a96a]/5 px-4 py-3 text-xs text-[#e8d8b5]/80">Signed in to LIDYA Client Centre. This request will be linked to your account.</p>}
      <div className="mt-5 grid gap-4 sm:grid-cols-2"><input required value={name} onChange={e=>setName(e.target.value)} placeholder="Name *" autoComplete="name" className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none placeholder:text-white/25 focus:border-[#c8a96a]/60"/><input required type="email" disabled={signedIn} value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email *" autoComplete="email" className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none placeholder:text-white/25 focus:border-[#c8a96a]/60 disabled:text-white/45"/><input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Telephone / WhatsApp" autoComplete="tel" className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none placeholder:text-white/25 focus:border-[#c8a96a]/60"/>{type === "service" ? <select required value={service} onChange={e=>setService(e.target.value)} className="rounded-xl border border-white/10 bg-[#1b0b20] px-4 py-3 text-sm outline-none focus:border-[#c8a96a]/60"><option value="">Select service *</option>{SERVICE_OPTIONS.map(option=><option key={option}>{option}</option>)}</select> : <input value={subject} onChange={e=>setSubject(e.target.value)} placeholder={type === "appointment" ? "Preferred date / subject" : "Subject"} className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none placeholder:text-white/25 focus:border-[#c8a96a]/60"/>}</div>
      {type === "service" && <input value={subject} onChange={e=>setSubject(e.target.value)} placeholder="Jewellery / watch / item details" className="mt-4 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none placeholder:text-white/25 focus:border-[#c8a96a]/60"/>}
      <textarea required value={message} onChange={e=>setMessage(e.target.value)} rows={6} placeholder={type === "appointment" ? "Tell us how we can prepare for your private appointment... *" : "Your message *"} className="mt-4 w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm leading-6 outline-none placeholder:text-white/25 focus:border-[#c8a96a]/60"/>
      <div className="hidden" aria-hidden="true"><label>Website<input tabIndex={-1} autoComplete="off" value={website} onChange={e=>setWebsite(e.target.value)}/></label></div>
      <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-white/40"><input required type="checkbox" checked={consent} onChange={e=>setConsent(e.target.checked)} className="mt-1"/><span>I agree that LIDYA may use these details to respond to my request, in accordance with the <Link href="/privacy" className="text-[#e8d8b5] underline underline-offset-4">Privacy Policy</Link>.</span></label>
      <button disabled={submitting} className="mt-6 w-full bg-[#c8a96a] px-6 py-4 text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[#120817] transition hover:bg-[#e2c27f] disabled:opacity-50">{submitting?"Sending…":"Send request"}</button>{feedback && <p aria-live="polite" className={`mt-4 text-sm leading-6 ${success?"text-emerald-200/80":"text-red-200/80"}`}>{feedback}</p>}
    </form>
  </div></div></section>;
}
