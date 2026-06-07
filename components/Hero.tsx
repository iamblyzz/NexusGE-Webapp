"use client";

import { useTranslation } from "@/components/LanguageProvider";

const STACK = ["Next.js 15", "Vercel", "Supabase", "GitHub", "TypeScript", "Tailwind CSS"];

export default function Hero() {
  const { t } = useTranslation();
  const hero = t.hero;

  const scrollTo = (id: string) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="pt-16 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">

        {/* Overline label — no pill, no dot, just a ruled accent */}
        <div className="flex items-center gap-3 mb-8">
          <span className="block w-6 h-px bg-blue-700" />
          <p className="text-xs font-mono font-semibold text-blue-700 uppercase tracking-widest">
            {hero.badge}
          </p>
        </div>

        {/* Headline — left-aligned, tighter */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 leading-tight tracking-tight mb-6 max-w-3xl">
          {hero.headline}
        </h1>

        {/* Subheadline */}
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed">
          {hero.subheadline}
        </p>

        {/* CTAs — left-aligned, sharp */}
        <div className="flex flex-col sm:flex-row gap-3 mb-12">
          <button
            onClick={() => scrollTo("intake-form")}
            className="w-full sm:w-auto px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm rounded transition-colors duration-150"
          >
            {hero.primaryCta}
          </button>
          <button
            onClick={() => scrollTo("how-it-works")}
            className="w-full sm:w-auto px-6 py-3 border border-slate-300 hover:border-slate-500 text-slate-700 hover:text-slate-950 font-semibold text-sm rounded transition-colors duration-150"
          >
            {hero.secondaryCta}
          </button>
        </div>

        <p className="text-slate-400 text-xs mb-12">{hero.paymentNote}</p>

        {/* Stack row — horizontal rule style, not pill badges */}
        <div className="border-t border-slate-200 pt-8">
          <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
            {hero.stackLabel}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {STACK.map((tech) => (
              <span key={tech} className="text-xs font-mono text-slate-500">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
