"use client";

import type { ServicesT } from "@/lib/i18n";

interface Props { t: ServicesT }

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export default function Services({ t }: Props) {
  const scrollToForm = () =>
    document.getElementById("intake-form")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">
            {t.sectionLabel}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.headline}
          </h2>
          <p className="mt-4 text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            {t.subheadline}
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {t.plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-xl border transition-all duration-200 ${
                plan.popular
                  ? "border-blue-600 bg-white shadow-xl shadow-blue-100/60 ring-1 ring-blue-600/20"
                  : "border-slate-200/80 bg-white shadow-sm hover:shadow-md hover:border-slate-300"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-blue-600 text-white text-xs font-bold tracking-wide uppercase shadow-sm">
                    {t.popularBadge}
                  </span>
                </div>
              )}

              <div className="p-8 pb-6 border-b border-slate-100">
                {/* Tier label */}
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                  {plan.popular ? t.popularBadge : "Standard"}
                </p>
                <h3 className="text-lg font-bold text-slate-900 mb-2 min-h-[3.5rem] leading-snug">
                  {plan.name}
                </h3>
                <p className="text-slate-500 text-sm mb-5 min-h-[2.5rem]">{plan.tagline}</p>
                <div className="flex items-end gap-1.5">
                  <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                  <span className="text-slate-400 text-sm mb-1">{plan.unit}</span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckIcon />
                      <span className="text-slate-600 text-sm leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToForm}
                  className={`w-full py-3 rounded-lg font-semibold text-sm transition-all duration-150 ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
                      : "border border-slate-300 hover:border-blue-600 hover:text-blue-700 text-slate-700"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-slate-400 text-sm">{t.disclaimer}</p>
      </div>
    </section>
  );
}
