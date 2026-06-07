"use client";

import { useTranslation } from "@/components/LanguageProvider";

export default function HowItWorks() {
  const { t } = useTranslation();
  const hiw = t.howItWorks;

  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center gap-3 mb-3">
          <span className="block w-6 h-px bg-blue-700" />
          <p className="text-xs font-mono font-semibold text-blue-700 uppercase tracking-widest">
            {hiw.sectionLabel}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight mb-3">
              {hiw.headline}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-md">
              {hiw.subheadline}
            </p>
          </div>

          {/* Steps — table-style, not rounded cards */}
          <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
            {hiw.steps.map((step, i) => (
              <div key={step.number} className="flex gap-6 py-5">
                <span className="text-xs font-mono font-bold text-slate-400 w-6 flex-shrink-0 pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-950 mb-1">{step.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
