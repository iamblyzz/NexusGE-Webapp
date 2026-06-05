"use client";

import Link             from "next/link";
import SiteNavbar       from "@/components/SiteNavbar";
import { useTranslation } from "@/components/LanguageProvider";

export default function ProcessPage() {
  const { t } = useTranslation();
  const hiw = t.howItWorks;
  const pg  = t.pages.process;

  const allSteps = [
    ...hiw.steps.map((s) => ({ ...s, detail: [] as string[] })),
    { ...pg.step4, detail: pg.step4.detail },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteNavbar />

      {/* Hero */}
      <section className="bg-white border-b border-slate-200 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">{pg.hero.sectionLabel}</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">{pg.hero.headline}</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">{pg.hero.subheadline}</p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-12">
            {allSteps.map((step, i) => (
              <div key={step.number} className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-start">
                <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-3">
                  <div className="w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center text-lg font-black shadow-sm flex-shrink-0">
                    {step.number}
                  </div>
                  {i < allSteps.length - 1 && (
                    <div className="hidden md:block w-0.5 h-16 bg-slate-200 ml-6 mt-1" />
                  )}
                </div>
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-7">
                  <h2 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{step.description}</p>
                  {step.detail.length > 0 && (
                    <ul className="flex flex-col gap-2.5">
                      {step.detail.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <svg className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          <span className="text-slate-600 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit methodology */}
      <section className="bg-white border-t border-slate-200 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">{pg.audit.sectionLabel}</p>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">{pg.audit.headline}</h2>
            <p className="text-slate-600 text-base max-w-xl mx-auto">{pg.audit.subheadline}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pg.audit.layers.map((layer) => (
              <div key={layer.title} className="bg-slate-50 rounded-xl border border-slate-200 p-6">
                <h3 className="text-sm font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">{layer.title}</h3>
                <ul className="flex flex-col gap-3">
                  {layer.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                      <span className="text-slate-600 text-xs leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 border-t border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">{pg.ctaHeadline}</h2>
          <p className="text-slate-600 mb-8">{pg.ctaSubheadline}</p>
          <Link href="/services#intake-form"
            className="inline-block px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-lg transition-all shadow-sm hover:shadow-lg hover:shadow-blue-500/20">
            {t.hero.primaryCta} →
          </Link>
          <p className="mt-4 text-slate-400 text-xs">{t.hero.paymentNote}</p>
        </div>
      </section>
    </div>
  );
}
