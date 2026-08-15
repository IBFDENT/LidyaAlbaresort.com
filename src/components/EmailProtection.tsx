"use client";

import { useEffect } from "react";

const OLD_EMAILS = [
  "albalidya@hotmail.com",
  "vierakocaker@hotmail.com",
  "bekirozdilberler@gmail.com",
];

function targetEmail() {
  return ["info", "lidyaalbaresort.com"].join("@");
}

export default function EmailProtection() {
  useEffect(() => {
    const email = targetEmail();

    const rewrite = (root: ParentNode = document) => {
      root.querySelectorAll<HTMLAnchorElement>('a[href^="mailto:"]').forEach((link) => {
        const href = link.getAttribute("href") ?? "";
        if (OLD_EMAILS.some((old) => href.toLowerCase().includes(old))) {
          link.setAttribute("href", `mailto:${email}`);
          if (OLD_EMAILS.includes((link.textContent ?? "").trim().toLowerCase())) {
            link.textContent = email;
          }
        }
      });

      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const nodes: Text[] = [];
      while (walker.nextNode()) nodes.push(walker.currentNode as Text);

      for (const node of nodes) {
        let value = node.nodeValue ?? "";
        for (const old of OLD_EMAILS) value = value.replaceAll(old, email);
        if (value !== node.nodeValue) node.nodeValue = value;
      }
    };

    rewrite();

    const observer = new MutationObserver(() => rewrite());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
