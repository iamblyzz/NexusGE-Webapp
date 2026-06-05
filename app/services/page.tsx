import Link from "next/link";

// ── Types ─────────────────────────────────────────────────────────────────────
type Plan = {
  name: string;
  price: string;
  unit: string;
  tagline: string;
  popular?: boolean;
  premium?: boolean;
  features: string[];
  cta: string;
};

// ── Data ──────────────────────────────────────────────────────────────────────
const PLANS: Plan[] = [
  {
    name:    "Infrastructure Deployment Fix",
    price:   "$250",
    unit:    "flat",
    tagline: "Your app is built. It will not deploy. We fix it.",
    features: [
      "Comprehensive audit of Vercel build container errors",
      "Debug and remap all unmapped process.env variables",
      "Resolve Next.js build-time compilation blocks",
      "Configure clean GitHub repository webhooks",
      "Route custom domains with managed SSL termination",
      "One full round of post-deploy validation",
    ],
    cta: "Get Started",
  },
  {
    name:    "End-to-End Core Migration",
    price:   "$450",
    unit:    "flat",
    tagline: "Move from raw AI export to production infrastructure.",
    popular: true,
    features: [
      "Everything in Infrastructure Deployment Fix",
      "Migrate AI repo export into Next.js 14 App Router",
      "Provision cloud-hosted Supabase PostgreSQL database",
      "Configure relational schemas and table relationships",
      "Establish version-controlled CI/CD deployment pipeline",
      "100% build optimization and Vercel production deployment",
      "48–72 hour delivery guarantee",
    ],
    cta: "Get Started",
  },
  {
    name:    "Enterprise App Stabilization",
    price:   "$750",
    unit:    "flat",
    tagline: "Live but fragile. We harden the entire stack.",
    features: [
      "Everything in End-to-End Core Migration",
      "Integrate Supabase native JWT User Authentication",
      "Write strict database Row-Level Security (RLS) policies",
      "Debug and optimize Next.js serverless middleware",
      "Establish API rate-limit guards to prevent billing spikes",
      "Full performance audit and Core Web Vitals remediation",
      "30-day asynchronous support SLA",
    ],
    cta: "Get Started",
  },
  {
    name:    "Bespoke Co-Architecture & System Blueprint",
    price:   "$2,500+",
    unit:    "flat rate / sprint",
    tagline: "Custom infrastructure design for teams building at scale.",
    premium: true,
    features: [
      "Dedicated 1-on-1 strategic infrastructure design mapping and consulting",
      "Full relational schema validation and custom Supabase relational planning",
      "Secure multi-tenant architecture and access control layout",
      "Signed Mutual Responsibility Release Framework (full legal sign-off required)",
      "Includes option for integrated 3rd-party security compliance APIs",
    ],
    cta: "Request Blueprint Consultation",
  },
];

const RETAINER_FEATURES = [
  "Weekly Repository & Pipeline Audit (1 scheduled technical check-in window per week)",
  "Strict Weekly Rotation: Issues arising outside your designated day are patched during your next scheduled weekly window.",
  "Off-Schedule Emergency Priority: Request an immediate intervention for a $150/hour priority surge fee.",
  "Pre-emptive Deployment Conflict Identification & Dependency Verification",
  "Rolling 30-day Backup Monitoring (Supabase & Vercel integrity tracking)",
  "Direct Email/Ticket Support for Architectural Advice (Standard 48-hour SLA)",
];

function CheckIcon({ amber = false }: { amber?: boolean }) {
  return (
    <svg
      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${amber ? "text-amber-500" : "text-blue-500"}`}
      fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* Header */}
      <section className="bg-white border-b border-slate-200 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">Services &amp; Pricing</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
            Flat-Rate. Scoped Upfront. No Surprises.
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Every engagement starts with a written scope confirmation. Payment is only requested once you approve exactly what will be delivered and when.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-xl border bg-white transition-all duration-200 ${
                  plan.popular
                    ? "border-blue-400 shadow-xl shadow-blue-500/10 ring-1 ring-blue-200"
                    : plan.premium
                    ? "border-amber-200 shadow-md"
                    : "border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-blue-600 text-white text-xs font-bold tracking-wide uppercase shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`p-7 pb-5 border-b ${plan.premium ? "border-amber-100" : "border-slate-100"}`}>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${plan.premium ? "text-amber-500" : "text-slate-400"}`}>
                    {plan.popular ? "Most Popular" : plan.premium ? "Premium" : "Standard"}
                  </p>
                  <h2 className="text-base font-bold text-slate-900 mb-2 min-h-[3rem] leading-snug">{plan.name}</h2>
                  <p className="text-slate-500 text-sm mb-4 min-h-[2.5rem] leading-snug">{plan.tagline}</p>
                  <div className="flex items-end gap-1.5">
                    <span className={`text-4xl font-extrabold ${plan.premium ? "text-amber-600" : "text-slate-900"}`}>
                      {plan.price}
                    </span>
                    <span className="text-slate-400 text-sm mb-1">{plan.unit}</span>
                  </div>
                </div>

                <div className="p-7 flex-1 flex flex-col">
                  <ul className="flex flex-col gap-3 flex-1 mb-7">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckIcon amber={plan.premium} />
                        <span className="text-slate-600 text-sm leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/#intake-form"
                    className={`w-full py-3 rounded-lg font-semibold text-sm text-center transition-all duration-150 ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-500 text-white shadow-sm"
                        : plan.premium
                        ? "bg-amber-500 hover:bg-amber-400 text-white shadow-sm"
                        : "border border-slate-200 hover:border-blue-400 hover:text-blue-600 text-slate-600"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Retainer */}
          <div className="mt-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-slate-200" />
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                Continuous Coverage
              </p>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <div className="relative rounded-xl border border-blue-200 bg-white shadow-md overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
              <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start">
                <div className="flex flex-col gap-5">
                  <div>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Monthly Retainer</p>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      Production Oversight &amp; Architecture Guard
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-xl">
                      Ongoing infrastructure vigilance with strict SLA boundaries applied.
                    </p>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
                    {RETAINER_FEATURES.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckIcon />
                        <span className="text-slate-600 text-sm leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col items-start lg:items-end gap-4 lg:min-w-[180px]">
                  <div className="flex items-end gap-1.5">
                    <span className="text-5xl font-extrabold text-slate-900">$99</span>
                    <span className="text-slate-400 text-sm mb-1.5">/ month</span>
                  </div>
                  <Link
                    href="/#intake-form"
                    className="w-full lg:w-auto px-7 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-lg transition-all shadow-sm whitespace-nowrap text-center"
                  >
                    Start Retainer
                  </Link>
                  <p className="text-slate-400 text-xs lg:text-right max-w-[200px]">
                    Cancel anytime. Billed monthly. Scope confirmed before activation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-slate-400 text-sm">
            All work is scoped and confirmed before payment is requested. No surprises.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Ready to get started?</h2>
          <p className="text-slate-600 mb-8">
            Submit your app for a free scope review. We audit your submission and return a precise written breakdown — exact deliverables, fixed cost, confirmed timeline.
          </p>
          <Link
            href="/#intake-form"
            className="inline-block px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-lg transition-all shadow-sm hover:shadow-lg hover:shadow-blue-500/20"
          >
            Submit Your App for Review →
          </Link>
          <p className="mt-4 text-slate-400 text-xs">Payment collected only after scope is confirmed.</p>
        </div>
      </section>
    </div>
  );
}
