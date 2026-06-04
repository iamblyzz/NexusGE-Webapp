"use client";

import { useTranslation } from "@/components/LanguageProvider";

export default function CaseStudy() {
  const { t: { caseStudy: t } } = useTranslation();
  return (
    <section id="case-study" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">
            {t.sectionLabel}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.headline}
          </h2>
          <p className="mt-4 text-slate-600 text-base max-w-xl mx-auto leading-relaxed">
            {t.subheadline}
          </p>
        </div>

        {/* Main panel */}
        <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">

          {/* Panel header */}
          <div className="px-6 sm:px-8 py-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-slate-50">
            <div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                {t.clientLabel}
              </p>
              <h3 className="text-base font-bold text-slate-900">
                AI Prototype → Production Infrastructure
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {t.deliveryBadge}
            </div>
          </div>

          {/* Stack table */}
          <div className="px-6 sm:px-8 py-7 border-b border-slate-100">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-5">
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
                          i === 0 ? "text-slate-400" : i === 1 ? "text-red-500" : "text-emerald-600"
                        }`}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {t.stackTable.rows.map(([layer, before, after], i) => (
                    <tr key={i}>
                      <td className="py-3 text-slate-500 font-mono text-xs">{layer}</td>
                      <td className="py-3 text-red-500 text-xs">{before}</td>
                      <td className="py-3 text-emerald-600 text-xs font-medium">{after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Timeline */}
          <div className="px-6 sm:px-8 py-7">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-7">
              {t.timeline.title}
            </p>
            <div className="relative">
              <div className="absolute left-[18px] top-4 bottom-4 w-px bg-slate-200" aria-hidden />
              <div className="flex flex-col gap-7">
                {t.timeline.items.map((item, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="relative flex-shrink-0 w-9 h-9 rounded-full bg-white border-2 border-blue-400 flex items-center justify-center z-10 shadow-sm">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    </div>
                    <div className="pt-1 flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-mono font-bold text-blue-600">{item.phase}</span>
                        <span className="text-sm font-semibold text-slate-900">{item.label}</span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
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
