"use client";

import { useState } from "react";
import { type Lang, getT } from "@/lib/i18n";

import Navbar      from "@/components/Navbar";
import Hero        from "@/components/Hero";
import HowItWorks  from "@/components/HowItWorks";
import Services    from "@/components/Services";
import CaseStudy   from "@/components/CaseStudy";
import IntakeForm  from "@/components/IntakeForm";
import Footer      from "@/components/Footer";

/**
 * Language state machine.
 *
 * - `lang`    : active language code ("en" | "es" | "pt")
 * - `setLang` : switches active language — triggers a synchronous re-render
 *               with the new translation object; no async fetch, no flash.
 * - `t`       : full typed translation object for the active language,
 *               derived via getT(lang) on every render.
 *
 * All components receive only the slice of `t` they need, keeping
 * prop signatures minimal and avoiding unnecessary re-renders on
 * unrelated translation changes.
 */
export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = getT(lang);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar
        t={t.nav}
        lang={lang}
        setLang={setLang}
      />
      <Hero         t={t.hero} />
      <HowItWorks   t={t.howItWorks} />
      <Services     t={t.services} />
      <CaseStudy    t={t.caseStudy} />
      <IntakeForm   t={t.form} />
      <Footer       t={t.footer} />
    </main>
  );
}
