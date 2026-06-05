"use client";

import Link       from "next/link";
import SiteNavbar from "@/components/SiteNavbar";
import Hero       from "@/components/Hero";
import Footer     from "@/components/Footer";

// ── What we do cards ──────────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title:   "Infrastructure Deployment Fix",
    price:   "$250 flat",
    desc:    "Your build is complete but Vercel rejects every deployment. We audit the container errors, remap environment variables, and ship a clean production build.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title:   "End-to-End Core Migration",
    price:   "$450 flat",
    desc:    "From raw AI export to production infrastructure. GitHub repository, Supabase database, CI/CD pipeline, and Vercel deployment — all within 72 hours.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title:   "Enterprise App Stabilization",
    price:   "$750 flat",
    desc:    "Your app is live but fragile. We harden the entire stack — JWT auth, Row-Level Security, serverless middleware, rate limiting, and Core Web Vitals.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
      </svg>
    ),
    title:   "Bespoke Co-Architecture Blueprint",
    price:   "$2,500+ / sprint",
    desc:    "Custom infrastructure design for teams scaling beyond a single-service stack. Multi-tenant architecture, security compliance APIs, and a signed delivery framework.",
  },
];

// ── Trust signals ─────────────────────────────────────────────────────────────
const SIGNALS = [
  { stat: "< 24h",  label: "Median first delivery"         },
  { stat: "100%",   label: "Written scope before payment"  },
  { stat: "4 tiers",label: "Flat-rate pricing, no retros"  },
  { stat: "3 mins", label: "Intake form to scope review"   },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
        <SiteNavbar />

        {/* Hero */}
        <Hero />

        {/* Trust stats */}
        <section className="bg-slate-50 border-y border-slate-200 py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {SIGNALS.map((s) => (
              <div key={s.stat} className="text-center">
                <p className="text-2xl font-extrabold text-blue-600">{s.stat}</p>
                <p className="text-slate-500 text-xs mt-1 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What we do */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">What We Do</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                We Architect What AI Builders Cannot.
              </h2>
              <p className="text-slate-600 text-base max-w-2xl mx-auto leading-relaxed">
                AI tools generate interfaces. They do not generate production infrastructure — the repository structure, the database schema, the deployment pipeline, the authentication layer, or the security policies that a live application requires.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {SERVICES.map((svc) => (
                <div key={svc.title} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 p-6 flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                    {svc.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono font-semibold text-blue-600 mb-1">{svc.price}</p>
                    <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug">{svc.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{svc.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-lg transition-all shadow-sm hover:shadow-lg hover:shadow-blue-500/20"
              >
                View Full Pricing &amp; Scope Details
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* How it works teaser */}
        <section className="bg-slate-50 border-t border-slate-200 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">Our Process</p>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                  Scope Confirmed Before a Single Dollar Changes Hands.
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  Every engagement follows the same four-step sequence: intake, repository audit, written scope confirmation, and delivery. No guesswork, no retros, no hidden fees.
                </p>
                <Link
                  href="/process"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 font-semibold text-sm transition-colors"
                >
                  See the full process breakdown
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                {["01 · Submit intake form (3 minutes)", "02 · Repository audit & written scope", "03 · Payment cleared — work begins", "04 · Hardened handoff & validated deployment"].map((step, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-lg border border-slate-200 px-4 py-3 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                    <p className="text-slate-700 text-sm font-medium">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case study teaser */}
        <section className="bg-white border-t border-slate-200 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 sm:p-10">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-2">Verified Outcome</p>
                  <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    10-Hour Deployment Deadlock. Resolved in Under 24.
                  </h2>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Delivered &lt; 24h
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-2xl">
                A non-technical founder spent over 10 consecutive hours unable to deploy a Lovable-generated SaaS application. Four compounding infrastructure failures — all invisible to the AI builder — were identified, resolved, and delivered to production in a single structured engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-lg transition-all shadow-sm"
                >
                  Read the full case study
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="/services#intake-form"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-200 hover:border-blue-400 hover:text-blue-600 text-slate-600 font-semibold text-sm rounded-lg transition-all"
                >
                  Submit your app for review
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">Ready?</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">
              Stop debugging. Start deploying.
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg mx-auto">
              Submit your repository in three minutes. Receive a written scope with a fixed price and confirmed delivery window within 12 hours.
            </p>
            <Link
              href="/services#intake-form"
              className="inline-block px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-lg transition-all shadow-sm hover:shadow-lg hover:shadow-blue-500/20"
            >
              Submit Your App for Review →
            </Link>
            <p className="mt-4 text-slate-500 text-xs">Payment collected only after scope is confirmed in writing.</p>
          </div>
        </section>

        <Footer />
      </div>
  );
}
