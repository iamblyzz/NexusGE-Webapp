"use client";

import { useTranslation } from "@/components/LanguageProvider";

export default function CaseStudy() {
  const { t: { caseStudy: t } } = useTranslation();
  return (
    <section id="case-study" className="py-24 bg-neutral-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">
            {t.sectionLabel}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.headline}
          </h2>
          <p className="mt-4 text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            {t.subheadline}
          </p>
        </div>

        {/* Main panel */}
        <div className="rounded-2xl border border-white/10 bg-neutral-900 overflow-hidden">

          {/* Panel header */}
          <div className="px-6 sm:px-8 py-5 border-b border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white/5">
            <div>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
                {t.clientLabel}
              </p>
              <h3 className="text-base font-bold text-white">
                AI Prototype → Production Infrastructure
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {t.deliveryBadge}
            </div>
          </div>

          {/* Stack table */}
          <div className="px-6 sm:px-8 py-7 border-b border-white/10">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-5">
              {t.stackTable.title}
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    {t.stackTable.headers.map((h, i) => (
                      <th
                        key={i}
                        className={`pb-3 text-left text-xs font-semibold uppercase tracking-wider w-1/3 ${
                          i === 0 ? "text-slate-500" : i === 1 ? "text-red-400" : "text-emerald-400"
                        }`}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {t.stackTable.rows.map(([layer, before, after], i) => (
                    <tr key={i}>
                      <td className="py-3 text-slate-400 font-mono text-xs">{layer}</td>
                      <td className="py-3 text-red-400/80 text-xs">{before}</td>
                      <td className="py-3 text-emerald-400 text-xs font-medium">{after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Timeline */}
          <div className="px-6 sm:px-8 py-7">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-7">
              {t.timeline.title}
            </p>
            <div className="relative">
              <div className="absolute left-[18px] top-4 bottom-4 w-px bg-white/10" aria-hidden />
              <div className="flex flex-col gap-7">
                {t.timeline.items.map((item, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="relative flex-shrink-0 w-9 h-9 rounded-full bg-neutral-950 border-2 border-blue-500/40 flex items-center justify-center z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    </div>
                    <div className="pt-1 flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-mono font-bold text-blue-400">{item.phase}</span>
                        <span className="text-sm font-semibold text-white">{item.label}</span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
