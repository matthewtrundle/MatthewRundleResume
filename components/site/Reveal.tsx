"use client";

import { useEffect } from "react";

// Adds `.in` to each `.reveal` element as it enters the viewport. Without JS, content stays visible.
// Lives in the root layout, so it also watches for `.reveal` elements added by client-side navigation.
export default function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("reveal-ready");
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    const observePending = () =>
      document.querySelectorAll<HTMLElement>(".reveal:not(.in)").forEach(el => io.observe(el));
    observePending();
    const mo = new MutationObserver(observePending);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { mo.disconnect(); io.disconnect(); };
  }, []);
  return null;
}
