import Link       from "next/link";
import SiteNavbar from "@/components/SiteNavbar";

const STEPS = [
  {
    number: "01",
    title:  "Submit the Intake Form",
    description:
      "Provide details about your platform, what is broken, and your delivery deadline. No discovery calls required. The form takes three minutes.",
    detail: [
      "Describe the AI builder you used (Lovable, Bolt, v0, Cursor, etc.)",
      "Describe the current failure mode — build error, deployment crash, broken auth, or fragile live app",
      "Select the service tier that matches your scope",
      "Provide contact details and an optional phone number for urgent communication",
    ],
  },
  {
    number: "02",
    title:  "Repository Audit & Scope Confirmation",
    description:
      "We audit your submission and return a precise written scope: exact deliverables, fixed cost, and a confirmed delivery timeline. You approve before any work begins.",
    detail: [
      "Full read-through of your codebase, build logs, and environment configuration",
      "Identification of all blocking issues and architectural debt",
      "Written scope document detailing every deliverable, in plain language",
      "Fixed-price confirmation — no change orders, no hidden fees",
      "Delivery window locked before payment is requested",
    ],
  },
  {
    number: "03",
    title:  "Payment Cleared — We Build",
    description:
      "Once scope is approved, payment is requested. We begin immediately and ship a production-ready, fully deployed application within the agreed operational window.",
    detail: [
      "Payment processed only after written scope approval",
      "Work begins within 2 hours of payment clearance",
      "Real-time progress updates via email at each major milestone",
      "Full delivery within the confirmed 24, 48, or 72-hour window",
    ],
  },
  {
    number: "04",
    title:  "Hardened Handoff & Validation",
    description:
      "Delivery is not a zip file. We hand off a fully deployed, validated production stack — live URL, repository access, and a written summary of every change made.",
    detail: [
      "Live production URL verified and tested across devices",
      "Full repository access transferred to your GitHub account",
      "Environment variable documentation for all secrets and keys",
      "Written handoff summary — every change, every decision, every configuration",
      "30-day async support window included on Core Migration and above",
    ],
  },
];

const AUDIT_LAYERS = [
  {
    title: "Build Container Audit",
    items: [
      "Vercel build log analysis — every error code traced to its source",
      "Next.js configuration validation (next.config.js, tsconfig.json, package.json)",
      "Dependency tree inspection for version conflicts and deprecated packages",
      "Environment variable mapping — every process.env reference verified",
    ],
  },
  {
    title: "Database & Auth Layer",
    items: [
      "Supabase schema review — table structure, relationships, and data types",
      "Row-Level Security policy audit — every policy tested against authenticated and anonymous roles",
      "JWT authentication flow validation — sign-in, sign-out, session persistence",
      "API key exposure check — service role keys never in client bundles",
    ],
  },
  {
    title: "Deployment Pipeline",
    items: [
      "GitHub repository structure — branch protection, webhook configuration",
      "Vercel project settings — root directory, build command, output directory",
      "Custom domain DNS configuration and SSL certificate verification",
      "Edge function and serverless route testing",
    ],
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteNavbar />

      {/* Header */}
      <section className="bg-white border-b border-slate-200 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">Our Process</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
            Simple. Transparent. Fast.
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Four structured steps from broken AI prototype to live production infrastructure. No discovery calls, no ambiguous timelines, no surprise invoices.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-12">
            {STEPS.map((step, i) => (
              <div key={step.number} className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-start">
                {/* Step indicator */}
                <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-3">
                  <div className="w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center text-lg font-black shadow-sm flex-shrink-0">
                    {step.number}
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="hidden md:block w-0.5 h-16 bg-slate-200 ml-6 mt-1" />
                  )}
                </div>
                {/* Step content */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-7">
                  <h2 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{step.description}</p>
                  <ul className="flex flex-col gap-2.5">
                    {step.detail.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <svg className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="text-slate-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit methodology */}
      <section className="bg-white border-t border-slate-200 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">Audit Methodology</p>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
              What We Check in Every Repository
            </h2>
            <p className="text-slate-600 text-base max-w-xl mx-auto">
              Before a single line of production work begins, we run a systematic audit across three infrastructure layers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AUDIT_LAYERS.map((layer) => (
              <div key={layer.title} className="bg-slate-50 rounded-xl border border-slate-200 p-6">
                <h3 className="text-sm font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">
                  {layer.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {layer.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                      <span className="text-slate-600 text-xs leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 border-t border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Ready to start the process?</h2>
          <p className="text-slate-600 mb-8">
            Submit your app in three minutes. Receive a written scope and fixed price within 12 hours.
          </p>
          <Link
            href="/services#intake-form"
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
