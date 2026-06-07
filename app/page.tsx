"use client";

import Link             from "next/link";
import SiteNavbar       from "@/components/SiteNavbar";
import Hero             from "@/components/Hero";
import Footer           from "@/components/Footer";
import { useTranslation } from "@/components/LanguageProvider";

export default function Home() {
  const { t } = useTranslation();
  const h = t.home;

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <SiteNavbar />
      <Hero />

      {/* ── Section 2: Choose Your Starting Point ──────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">

          <div className="flex items-center gap-3 mb-3">
            <span className="block w-6 h-px bg-blue-500" />
            <p className="text-xs font-mono font-semibold text-blue-500 uppercase tracking-widest">
              {h.paths.label}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {h.paths.headline}
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed self-end">
              {h.paths.subheadline}
            </p>
          </div>

          {/* Three path cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-800">
            {h.paths.items.map((path) => (
              <div key={path.tag} className="bg-slate-950 p-7 flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue-500 tracking-widest">
                    {path.tag}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">{path.title}</h3>
                  <p className="text-xs font-mono text-slate-500 italic mb-3 border-l-2 border-slate-700 pl-3">
                    &ldquo;{path.persona}&rdquo;
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">{path.description}</p>
                </div>
                <Link
                  href={path.href}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {path.cta}
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: How It Works ─────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">

          <div className="flex items-center gap-3 mb-3">
            <span className="block w-6 h-px bg-blue-700" />
            <p className="text-xs font-mono font-semibold text-blue-700 uppercase tracking-widest">
              {h.process.label}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              {h.process.headline}
            </h2>
          </div>

          {/* 6 steps — 2×3 grid on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200">
            {h.process.steps.map((step) => (
              <div key={step.number} className="bg-white p-6 flex flex-col gap-3">
                <div className="flex items-baseline gap-3">
                  <span className="text-xs font-mono font-bold text-slate-300">{step.number}</span>
                  <h3 className="text-sm font-bold text-slate-950">{step.title}</h3>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/process"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
            >
              Full process breakdown
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 4: Service Packages ─────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">

          <div className="flex items-center gap-3 mb-3">
            <span className="block w-6 h-px bg-blue-700" />
            <p className="text-xs font-mono font-semibold text-blue-700 uppercase tracking-widest">
              {h.packages.label}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10 items-end">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight mb-2">
                {h.packages.headline}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                {h.packages.subheadline}
              </p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
              >
                {h.packages.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Package grid — butted panels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200">
            {h.packages.items.map((pkg, i) => (
              <div key={i} className="bg-slate-50 p-6 flex flex-col gap-3">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-blue-700">{pkg.price}</span>
                  <span className="text-xs font-mono text-slate-400">{pkg.unit}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-950 leading-snug">{pkg.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{pkg.description}</p>
                <Link
                  href="/services#intake-form"
                  className="mt-auto text-xs font-semibold text-blue-700 hover:text-blue-900 transition-colors"
                >
                  Get started →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Study ─────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">

          <div className="flex items-center gap-3 mb-3">
            <span className="block w-6 h-px bg-blue-700" />
            <p className="text-xs font-mono font-semibold text-blue-700 uppercase tracking-widest">
              {h.caseStudy.label}
            </p>
          </div>

          <div className="border border-slate-200 bg-slate-950">
            <div className="border-b border-slate-800 px-7 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Client 001 — Confidential · Lovable Build Rescue
              </p>
              <span className="text-xs font-mono font-semibold text-emerald-400">
                ✓ {h.caseStudy.badge}
              </span>
            </div>
            <div className="px-7 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
                  {h.caseStudy.headline}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {h.caseStudy.body}
                </p>
              </div>
              <div className="flex flex-col justify-between gap-6">
                <div className="grid grid-cols-2 gap-4">
                  {h.caseStudy.metrics.map(([k, v]) => (
                    <div key={k}>
                      <p className="text-xs font-mono text-slate-500 mb-0.5">{k}</p>
                      <p className="text-slate-200 text-xs font-medium">{v}</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 flex-wrap">
                  <Link
                    href="/case-studies"
                    className="px-5 py-2.5 bg-white text-slate-950 text-xs font-semibold rounded transition-colors hover:bg-slate-100"
                  >
                    {h.caseStudy.ctaPrimary} →
                  </Link>
                  <Link
                    href="/services#intake-form"
                    className="px-5 py-2.5 border border-slate-700 text-slate-300 text-xs font-semibold rounded hover:border-slate-500 hover:text-white transition-colors"
                  >
                    {h.caseStudy.ctaSecondary}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-6 h-px bg-blue-500" />
              <p className="text-xs font-mono font-semibold text-blue-500 uppercase tracking-widest">
                {h.cta.label}
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              {h.cta.headline}
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
              {h.cta.body}
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <Link
              href="/services#intake-form"
              className="inline-block px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded transition-colors whitespace-nowrap"
            >
              {h.cta.button}
            </Link>
            <p className="text-slate-500 text-xs">{h.cta.note}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
