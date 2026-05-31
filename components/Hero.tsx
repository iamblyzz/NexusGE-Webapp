"use client";

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById("intake-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-600/40 bg-blue-600/10 text-blue-400 text-xs font-medium tracking-wide mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          Production-Ready Migrations · 24–72 Hour Turnaround
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
          Your AI-Built App Isn&apos;t Working{" "}
          <br className="hidden sm:block" />
          in Production.{" "}
          <span className="text-blue-500">I Fix That.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          I migrate Lovable, Bolt, Framer, and no-code apps into real deployable
          infrastructure — Vercel, Supabase, GitHub. 24–72 hour turnaround.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToForm}
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30"
          >
            Submit Your App for Review
          </button>
          <button
            onClick={() =>
              document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full sm:w-auto px-8 py-4 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold text-base rounded-lg transition-all duration-200"
          >
            See How It Works
          </button>
        </div>

        <p className="mt-6 text-slate-500 text-sm">
          Payment collected only after scope is confirmed.
        </p>

        {/* Stack badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
          {["Next.js", "Vercel", "Supabase", "GitHub", "TypeScript", "Tailwind CSS"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
