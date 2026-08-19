import type { Metadata } from "next";

import ClientProfileShortcut from "@/components/ClientProfileShortcut";

export const metadata: Metadata = {
  title: "LIDYA Client Centre",
  robots: { index: false, follow: false, nocache: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ClientProfileShortcut />
    </>
  );
}
