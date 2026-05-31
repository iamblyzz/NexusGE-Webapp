"use client";

const CheckIcon = () => (
  <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const plans = [
  {
    name: "Deployment Fix",
    price: "$150",
    tagline: "Your app is built but won't deploy.",
    popular: false,
    features: [
      "Diagnose broken Vercel / Netlify deploys",
      "Fix environment variable configuration",
      "Resolve build errors and dependency conflicts",
      "Connect custom domain and SSL",
      "One round of post-deploy validation",
    ],
  },
  {
    name: "Full Migration",
    price: "$250",
    tagline: "Move from no-code to real infrastructure.",
    popular: true,
    features: [
      "Everything in Deployment Fix",
      "Full codebase migration to Next.js 14",
      "Supabase database setup and schema migration",
      "GitHub repository initialization and CI/CD",
      "Authentication wiring (Supabase Auth or NextAuth)",
      "Vercel production deployment with environment config",
      "48–72 hour delivery guarantee",
    ],
  },
  {
    name: "App Stabilization",
    price: "$400",
    tagline: "Your app is live but fragile and unreliable.",
    popular: false,
    features: [
      "Everything in Full Migration",
      "Performance audit and Core Web Vitals fixes",
      "Error boundary and fallback UI implementation",
      "API route hardening and rate-limit protection",
      "Database query optimization",
      "End-to-end smoke test suite",
      "30-day async support window",
    ],
  },
];

export default function Services() {
  const scrollToForm = () => {
    document.getElementById("intake-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Flat-Rate. Scoped Upfront.
          </h2>
          <p className="mt-4 text-slate-400 text-base max-w-xl mx-auto">
            Pick the tier that matches your situation. Exact scope is confirmed before any charge.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-xl p-8 border transition-all duration-200 ${
                plan.popular
                  ? "border-blue-600 bg-slate-900 shadow-xl shadow-blue-600/10"
                  : "border-slate-800 bg-slate-900/60 hover:border-slate-700"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-blue-600 text-white text-xs font-bold tracking-wide uppercase">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{plan.tagline}</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-slate-500 text-sm mb-1">flat</span>
                </div>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckIcon />
                    <span className="text-slate-300 text-sm leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToForm}
                className={`w-full py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
                  plan.popular
                    ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20"
                    : "border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-10 text-center text-slate-500 text-sm">
          All work is scoped and confirmed before payment is requested. No surprises.
        </p>
      </div>
    </section>
  );
}
