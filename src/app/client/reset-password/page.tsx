"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ResetPasswordPage() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const hash = new URLSearchParams(window.location.hash.replace(/^#/, ""));
    const query = new URLSearchParams(window.location.search);
    setReady(Boolean(hash.get("access_token") || query.get("code") || query.get("token_hash")));
  }, []);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#120817] px-5 py-12 text-[#fffdf9]">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#c8a96a]/10 blur-[140px]" />
      <div className="relative w-full max-w-md rounded-[2rem] border border-[#c8a96a]/20 bg-white/[0.04] p-8 text-center shadow-2xl backdrop-blur-xl md:p-10">
        <p className="text-[11px] uppercase tracking-[0.45em] text-[#c8a96a]">LIDYA</p>
        <p className="mt-3 text-[10px] uppercase tracking-[0.28em] text-white/30">Account Security</p>
        <h1 className="mt-5 font-serif text-4xl">Password Recovery</h1>
        <p className="mt-4 text-sm leading-7 text-white/50">
          {ready
            ? "Your secure recovery link has been verified. Password update controls are being prepared for your private client account."
            : "Open this page from the secure recovery link sent to your email. If the link has expired, request a new one."}
        </p>
        <div className="mt-8 rounded-2xl border border-[#c8a96a]/20 bg-[#c8a96a]/5 px-5 py-5 text-sm leading-6 text-[#e8d8b5]/80">
          For account security, LIDYA never asks you to send your password or verification credentials by email or message.
        </div>
        <div className="mt-7 flex flex-col gap-3">
          {!ready && <Link href="/client/forgot-password" className="rounded-xl bg-[#c8a96a] px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#120817]">Request new link</Link>}
          <Link href="/client/login" className="text-sm text-[#c8a96a]">Return to Client Login</Link>
        </div>
      </div>
    </main>
  );
}
