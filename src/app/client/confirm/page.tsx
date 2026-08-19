"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ClientConfirmPage() {
  const [confirmUrl, setConfirmUrl] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tokenHash = params.get("token_hash") || "";
    const type = params.get("type") || "email";

    if (tokenHash) {
      setConfirmUrl(`/api/client/confirm?token_hash=${encodeURIComponent(tokenHash)}&type=${encodeURIComponent(type)}`);
    }
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#120817] px-5 py-12 text-[#fffdf9]">
      <section className="w-full max-w-md rounded-[2rem] border border-[#c8a96a]/20 bg-white/[0.04] p-8 text-center shadow-2xl md:p-10">
        <p className="text-[11px] uppercase tracking-[0.45em] text-[#c8a96a]">LIDYA</p>
        <p className="mt-8 text-[10px] uppercase tracking-[0.32em] text-[#c8a96a]">Private Client</p>
        <h1 className="mt-3 text-3xl md:text-4xl">Confirm your account</h1>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-white/50">
          Potvrďte svoju emailovú adresu a aktivujte bezpečný prístup do LIDYA Client Centre.
        </p>

        {confirmUrl ? (
          <a
            href={confirmUrl}
            className="mt-8 block w-full rounded-xl bg-[#c8a96a] px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#120817] transition hover:bg-[#d7ba7c]"
          >
            Potvrdiť môj účet
          </a>
        ) : (
          <div className="mt-8 rounded-xl border border-[#c8a96a]/25 bg-[#c8a96a]/[0.07] px-5 py-4 text-sm leading-6 text-[#e8d8b5]">
            Potvrdzovací odkaz nie je platný alebo je neúplný.
          </div>
        )}

        <Link href="/client/login" className="mt-6 inline-block text-sm text-white/40 transition hover:text-[#c8a96a]">
          Späť na prihlásenie
        </Link>
      </section>
    </main>
  );
}
