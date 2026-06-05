"use client";

import Link              from "next/link";
import SiteNavbar        from "@/components/SiteNavbar";
import ServiceIntakeForm from "@/components/ServiceIntakeForm";
import { useTranslation } from "@/components/LanguageProvider";

function CheckIcon({ amber = false }: { amber?: boolean }) {
  return (
    <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${amber ? "text-amber-500" : "text-blue-500"}`}
      fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export default function ServicesPage() {
  const { t } = useTranslation();
  const pg   = t.pages.services;
  const sv   = t.services;
  const cs   = t.caseStudy; // for stack table headers reuse

  const oneTimePlans  = sv.plans.slice(0, 3);
  const retainerPlan  = sv.plans[3];
  const blueprintPlan = sv.plans[4];

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

      {/* Pricing cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {oneTimePlans.map((plan) => (
              <div key={plan.name}
                className={`relative flex flex-col rounded-xl border bg-white transition-all duration-200 ${
                  plan.popular
                    ? "border-blue-400 shadow-xl shadow-blue-500/10 ring-1 ring-blue-200"
                    : "border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-blue-600 text-white text-xs font-bold tracking-wide uppercase shadow-sm">
                      {sv.popularBadge}
                    </span>
                  </div>
                )}
                <div className="p-7 pb-5 border-b border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-widest mb-2 text-slate-400">
                    {plan.popular ? sv.popularBadge : "Standard"}
                  </p>
                  <h2 className="text-base font-bold text-slate-900 mb-2 min-h-[3rem] leading-snug">{plan.name}</h2>
                  <p className="text-slate-500 text-sm mb-4 min-h-[2.5rem] leading-snug">{plan.tagline}</p>
                  <div className="flex items-end gap-1.5">
                    <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                    <span className="text-slate-400 text-sm mb-1">{plan.unit}</span>
                  </div>
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <ul className="flex flex-col gap-3 flex-1 mb-7">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckIcon />
                        <span className="text-slate-600 text-sm leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="#intake-form"
                    className={`w-full py-3 rounded-lg font-semibold text-sm text-center transition-all duration-150 ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-500 text-white shadow-sm"
                        : "border border-slate-200 hover:border-blue-400 hover:text-blue-600 text-slate-600"
                    }`}>
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Retainer */}
          <div className="mt-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-slate-200" />
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                {pg.retainerLabel}
              </p>
              <div className="h-px flex-1 bg-slate-200" />
            </div>
            <div className="relative rounded-xl border border-blue-200 bg-white shadow-md overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
              <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start">
                <div className="flex flex-col gap-5">
                  <div>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">{pg.retainerLabel}</p>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{retainerPlan.name}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-xl">{retainerPlan.tagline}</p>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
                    {retainerPlan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckIcon />
                        <span className="text-slate-600 text-sm leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col items-start lg:items-end gap-4 lg:min-w-[180px]">
                  <div className="flex items-end gap-1.5">
                    <span className="text-5xl font-extrabold text-slate-900">{retainerPlan.price}</span>
                    <span className="text-slate-400 text-sm mb-1.5">{retainerPlan.unit}</span>
                  </div>
                  <Link href="#intake-form"
                    className="w-full lg:w-auto px-7 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-lg transition-all shadow-sm whitespace-nowrap text-center">
                    {retainerPlan.cta}
                  </Link>
                  <p className="text-slate-400 text-xs lg:text-right max-w-[200px]">
                    {t.hero.paymentNote}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Blueprint */}
          <div className="mt-6">
            <div className="relative rounded-xl border border-amber-200 bg-white shadow-md overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
              <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start">
                <div className="flex flex-col gap-5">
                  <div>
                    <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-2">Premium</p>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{blueprintPlan.name}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-xl">{blueprintPlan.tagline}</p>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
                    {blueprintPlan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckIcon amber />
                        <span className="text-slate-600 text-sm leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col items-start lg:items-end gap-4 lg:min-w-[200px]">
                  <div className="flex items-end gap-1.5">
                    <span className="text-5xl font-extrabold text-amber-600">{blueprintPlan.price}</span>
                    <span className="text-slate-400 text-sm mb-1.5">{blueprintPlan.unit}</span>
                  </div>
                  <Link href="#intake-form"
                    className="w-full lg:w-auto px-7 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold text-sm rounded-lg transition-all shadow-sm whitespace-nowrap text-center">
                    {blueprintPlan.cta}
                  </Link>
                  <p className="text-slate-400 text-xs lg:text-right max-w-[220px]">
                    {t.hero.paymentNote}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-slate-400 text-sm">{sv.disclaimer}</p>
        </div>
      </section>

      {/* Intake form */}
      <ServiceIntakeForm />
    </div>
  );
}
