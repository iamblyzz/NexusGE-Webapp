"use client";

import { useTranslation } from "@/components/LanguageProvider";

const STACK = ["Next.js 14", "Vercel", "Supabase", "GitHub", "TypeScript", "Tailwind CSS"];

export default function Hero() {
  const { t, lang } = useTranslation();
  console.log("[NGE] Hero: rendering with lang =", lang);
  const hero = t.hero;

  const scrollTo = (id: string) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative pt-16 overflow-hidden bg-neutral-950">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-28 lg:py-36">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          {hero.badge}
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] tracking-tight mb-6 min-h-[4rem] sm:min-h-[5.5rem] lg:min-h-[8rem]">
          {hero.headline}
        </h1>

        {/* Subheadline */}
        <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed min-h-[5rem]">
          {hero.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => scrollTo("intake-form")}
            className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-lg transition-all duration-150 shadow-sm hover:shadow-lg hover:shadow-blue-500/20"
          >
            {hero.primaryCta}
          </button>
          <button
            onClick={() => scrollTo("how-it-works")}
            className="w-full sm:w-auto px-7 py-3.5 border border-white/15 hover:border-white/30 text-slate-300 hover:text-white font-semibold text-sm rounded-lg transition-all duration-150"
          >
            {hero.secondaryCta}
          </button>
        </div>

        <p className="mt-5 text-slate-500 text-sm">{hero.paymentNote}</p>

        {/* Stack row */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-5">
            {hero.stackLabel}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {STACK.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-md bg-white/5 border border-white/10 text-slate-400 text-xs font-mono"
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
