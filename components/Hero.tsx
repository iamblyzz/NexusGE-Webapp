"use client";

import type { HeroT } from "@/lib/i18n";

interface Props { t: HeroT }

const STACK = ["Next.js 14", "Vercel", "Supabase", "GitHub", "TypeScript", "Tailwind CSS"];

export default function Hero({ t }: Props) {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative pt-16 overflow-hidden bg-white"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      {/* Blue radial glow — top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-70 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-28 lg:py-36">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
          {t.badge}
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6 min-h-[4rem] sm:min-h-[5.5rem] lg:min-h-[8rem]">
          {t.headline}
        </h1>

        {/* Subheadline */}
        <p className="text-slate-500 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed min-h-[5rem]">
          {t.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => scrollTo("intake-form")}
            className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-lg transition-all duration-150 shadow-sm hover:shadow-md"
          >
            {t.primaryCta}
          </button>
          <button
            onClick={() => scrollTo("how-it-works")}
            className="w-full sm:w-auto px-7 py-3.5 border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 font-semibold text-sm rounded-lg transition-all duration-150"
          >
            {t.secondaryCta}
          </button>
        </div>

        <p className="mt-5 text-slate-400 text-sm">{t.paymentNote}</p>

        {/* Stack divider */}
        <div className="mt-16 pt-10 border-t border-slate-200/80">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">
            {t.stackLabel}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {STACK.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-md bg-slate-50 border border-slate-200 text-slate-500 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
