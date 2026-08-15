"use client";

import { useMemo } from "react";

type Props = {
  className?: string;
  label?: string;
};

export function getProtectedEmail() {
  return ["info", "lidyaalbaresort.com"].join("@");
}

export default function ProtectedEmail({ className = "", label }: Props) {
  const email = useMemo(() => getProtectedEmail(), []);

  return (
    <a href={`mailto:${email}`} className={className} aria-label={`Email ${email}`}>
      {label ?? email}
    </a>
  );
}
