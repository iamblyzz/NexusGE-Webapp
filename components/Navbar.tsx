"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "@/components/LanguageProvider";
import type { Lang } from "@/app/lib/languages";

const LANG_LABELS: Record<Lang, string> = { en: "EN", es: "ES", pt: "PT" };
const LANG_FULL: Record<Lang, string> = {
  en: "English",
  es: "Español",
  pt: "Português",
};

const NAV_IDS = {
  services:   "services",
  howItWorks: "how-it-works",
  caseStudy:  "case-study",
  getHelp:    "intake-form",
} as const;

export default function Navbar() {
  const { t, lang, setLanguage } = useTranslation();
  const nav = t.nav;

  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  // Two separate refs — one per dropdown instance (desktop / mobile).
  // A single shared ref always resolves to the last-rendered element, which
  // was the mobile div. That caused the mousedown outside-click handler to
  // fire on desktop clicks before onClick could execute, collapsing the
  // dropdown and swallowing the language change.
  const desktopLangRef = useRef<HTMLDivElement>(null);
  const mobileLangRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      const target = e.target as Node;
      const inDesktop = desktopLangRef.current?.contains(target) ?? false;
      const inMobile  = mobileLangRef.current?.contains(target)  ?? false;
      if (!inDesktop && !inMobile) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    setLangOpen(false);
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleLang = (l: Lang) => {
    console.log("[NGE] Navbar: language button clicked →", l, "| current lang =", lang);
    setLanguage(l);
    setLangOpen(false);
  };

  // Shared dropdown item list — rendered identically for desktop and mobile
  const LangOptions = () => (
    <>
      {(["en", "es", "pt"] as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          role="option"
          aria-selected={lang === l}
          onClick={() => handleLang(l)}
          className={`w-full flex items-center justify-between px-3 py-2.5 text-sm cursor-pointer pointer-events-auto transition-colors ${
            lang === l
              ? "bg-blue-50 text-blue-600 font-semibold"
              : "text-slate-600 hover:bg-slate-50"
          }`}
        >
          <span>{LANG_FULL[l]}</span>
          <span className="text-xs text-slate-500 font-mono">{LANG_LABELS[l]}</span>
        </button>
      ))}
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Brand */}
          <span className="text-slate-900 font-bold text-base tracking-tight whitespace-nowrap select-none">
            Nexus <span className="text-blue-600">Global</span> Enterprise
          </span>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-7">
            {(
              [
                [nav.services,   NAV_IDS.services],
                [nav.howItWorks, NAV_IDS.howItWorks],
                [nav.caseStudy,  NAV_IDS.caseStudy],
                [nav.getHelp,    NAV_IDS.getHelp],
              ] as [string, string][]
            ).map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors duration-150"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Desktop right — lang switcher + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Desktop language dropdown — uses desktopLangRef */}
            <div ref={desktopLangRef} className="relative">
              <button
                type="button"
                onClick={() => setLangOpen((v) => !v)}
                aria-expanded={langOpen}
                aria-haspopup="listbox"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900 text-sm font-medium transition-colors duration-150 select-none cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918" />
                </svg>
                {LANG_LABELS[lang]}
                <svg
                  className={`w-3 h-3 text-slate-500 transition-transform duration-150 ${langOpen ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {langOpen && (
                <div
                  role="listbox"
                  className="absolute right-0 top-full mt-1.5 w-36 rounded-lg border border-slate-200 bg-white shadow-lg py-1 z-50"
                >
                  <LangOptions />
                </div>
              )}
            </div>

            {/* CTA */}
            <button
              onClick={() => scrollTo("intake-form")}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-md transition-colors duration-150 shadow-sm"
            >
              {nav.submitCta}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile language dropdown — uses mobileLangRef */}
            <div ref={mobileLangRef} className="relative">
              <button
                type="button"
                onClick={() => setLangOpen((v) => !v)}
                className="px-2.5 py-1.5 rounded-md border border-slate-200 text-slate-600 text-xs font-semibold cursor-pointer"
              >
                {LANG_LABELS[lang]}
              </button>
              {langOpen && (
                <div
                  role="listbox"
                  className="absolute right-0 top-full mt-1 w-36 rounded-lg border border-slate-200 bg-white shadow-lg py-1 z-50"
                >
                  <LangOptions />
                </div>
              )}
            </div>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle navigation"
              className="text-slate-500 hover:text-slate-900 transition-colors"
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 flex flex-col gap-1">
          {(
            [
              [nav.services,   NAV_IDS.services],
              [nav.howItWorks, NAV_IDS.howItWorks],
              [nav.caseStudy,  NAV_IDS.caseStudy],
              [nav.getHelp,    NAV_IDS.getHelp],
            ] as [string, string][]
          ).map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-left py-2.5 text-slate-600 hover:text-slate-900 text-sm font-medium border-b border-slate-100 last:border-0 transition-colors"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("intake-form")}
            className="mt-3 w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-md transition-colors"
          >
            {nav.submitCta}
          </button>
        </div>
      )}
    </header>
  );
}
