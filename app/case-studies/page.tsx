"use client";

import Link             from "next/link";
import SiteNavbar       from "@/components/SiteNavbar";
import { useTranslation } from "@/components/LanguageProvider";

export default function CaseStudiesPage() {
  const { t } = useTranslation();
  const pg  = t.pages.caseStudies;
  const cs  = t.caseStudy;
  const c   = pg.case001;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteNavbar />

      {/* Hero */}
      <section className="bg-white border-b border-slate-200 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">{pg.hero.sectionLabel}</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">{pg.hero.headline}</h1>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">{pg.hero.subheadline}</p>
        </div>
      </section>

      {/* Failure taxonomy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">{pg.tax.sectionLabel}</p>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">{pg.tax.headline}</h2>
            <p className="text-slate-600 text-base max-w-2xl mx-auto">{pg.tax.subheadline}</p>
          </div>
          <div className="flex flex-col gap-6">
            {pg.tax.patterns.map((pattern, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-7 py-5 border-b border-slate-100 bg-slate-50 flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">{pattern.title}</h3>
                </div>
                <div className="p-7 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{pg.tax.cols.symptom}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{pattern.symptom}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2">{pg.tax.cols.cause}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{pattern.cause}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">{pg.tax.cols.impact}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{pattern.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study 001 */}
      <section className="bg-white border-t border-slate-200 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Meta */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">{c.id}</p>
              <h2 className="text-2xl font-bold text-slate-900">{c.title}</h2>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              {cs.deliveryBadge}
            </div>
          </div>

          {/* Situation + broken */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
              <p className="text-xs font-bold text-red-600 uppercase tracking-wider mb-3">{c.situationLabel}</p>
              {c.situation.map((para, i) => (
                <p key={i} className={`text-slate-600 text-sm leading-relaxed ${i < c.situation.length - 1 ? "mb-3" : ""}`}>
                  {para}
                </p>
              ))}
            </div>
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
              <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-3">{c.brokenLabel}</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{c.brokenIntro}</p>
              <ul className="flex flex-col gap-3">
                {c.brokenItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-slate-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stack table */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-10">
            <div className="px-7 py-5 border-b border-slate-100 bg-slate-50">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{cs.stackTable.title}</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100">
                    {cs.stackTable.headers.map((h, i) => (
                      <th key={i} className={`text-left px-7 py-3 text-xs font-semibold uppercase tracking-wider ${
                        i === 0 ? "text-slate-400 w-1/4" : i === 1 ? "text-red-500" : "text-emerald-600"
                      }`}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {cs.stackTable.rows.map(([layer, before, after], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                      <td className="px-7 py-3.5 text-slate-500 font-mono text-xs">{layer}</td>
                      <td className="px-4 py-3.5 text-red-500 text-xs">{before}</td>
                      <td className="px-4 py-3.5 text-emerald-600 text-xs font-medium">{after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-7 mb-10">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-8">{cs.timeline.title}</p>
            <div className="relative">
              <div className="absolute left-[18px] top-5 bottom-5 w-px bg-slate-200" aria-hidden />
              <div className="flex flex-col gap-8">
                {cs.timeline.items.map((item, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="relative flex-shrink-0 w-9 h-9 rounded-full bg-white border-2 border-blue-400 flex items-center justify-center z-10 shadow-sm">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    </div>
                    <div className="pt-1 flex-1">
                      <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                        <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{item.phase}</span>
                        <span className="text-sm font-bold text-slate-900">{item.label}</span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="bg-blue-50 rounded-xl border border-blue-100 p-8 text-center mb-10">
            <p className="text-slate-700 text-lg italic leading-relaxed max-w-2xl mx-auto mb-4">
              &ldquo;{c.quoteText}&rdquo;
            </p>
            <p className="text-slate-400 text-sm font-semibold">{c.quoteAttribution}</p>
          </div>

          {/* Takeaway */}
          <div className="bg-slate-900 rounded-xl p-8">
            <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">{c.takeawayLabel}</p>
            <p className="text-white text-base font-semibold leading-relaxed mb-3">{c.takeawayHeadline}</p>
            <p className="text-slate-400 text-sm leading-relaxed">{c.takeawayBody}</p>
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
