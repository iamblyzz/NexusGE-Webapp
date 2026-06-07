"use client";

import Link       from "next/link";
import SiteNavbar from "@/components/SiteNavbar";
import Hero       from "@/components/Hero";
import Footer     from "@/components/Footer";

const SERVICES = [
  {
    code:  "01",
    title: "Infrastructure Deployment Fix",
    price: "$250",
    desc:  "Your build is complete but Vercel rejects every deployment. We audit the container errors, remap environment variables, and ship a clean production build.",
  },
  {
    code:  "02",
    title: "End-to-End Core Migration",
    price: "$450",
    desc:  "From raw AI export to production infrastructure. GitHub repository, Supabase database, CI/CD pipeline, and Vercel deployment — within 72 hours.",
  },
  {
    code:  "03",
    title: "Enterprise App Stabilization",
    price: "$750",
    desc:  "Your app is live but fragile. We harden the entire stack — JWT auth, Row-Level Security, serverless middleware, rate limiting, and Core Web Vitals.",
  },
  {
    code:  "04",
    title: "Bespoke Co-Architecture Blueprint",
    price: "$2,500+",
    desc:  "Custom infrastructure design for teams scaling beyond a single-service stack. Multi-tenant architecture, compliance APIs, and a signed delivery framework.",
  },
];

const SIGNALS = [
  { stat: "< 24h",   label: "Median first delivery"        },
  { stat: "100%",    label: "Written scope before payment" },
  { stat: "4",       label: "Flat-rate service tiers"      },
  { stat: "12h",     label: "Scope returned after intake"  },
];

const PROCESS_STEPS = [
  "Submit intake form — 3 minutes",
  "Repository audit & written scope",
  "Payment cleared — work begins",
  "Hardened handoff & validated deployment",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <SiteNavbar />
      <Hero />

      {/* ── Metrics bar ────────────────────────────────────────────────────── */}
      <section className="border-b border-slate-200 bg-slate-950 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {SIGNALS.map((s) => (
            <div key={s.stat}>
              <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{s.stat}</p>
              <p className="text-slate-400 text-xs mt-1 font-mono">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">

          <div className="flex items-center gap-3 mb-3">
            <span className="block w-6 h-px bg-blue-700" />
            <p className="text-xs font-mono font-semibold text-blue-700 uppercase tracking-widest">Services</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight mb-3">
                We Architect What AI Builders Cannot.
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed max-w-md">
                AI tools generate interfaces. They do not generate production infrastructure — the repository structure, database schema, deployment pipeline, authentication layer, or security policies that a live application requires.
              </p>
            </div>
            <div className="flex justify-start lg:justify-end items-end">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
              >
                View all service tiers & pricing
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Services — sharp bordered rows on mobile, 2-col grid on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200">
            {SERVICES.map((svc) => (
              <div key={svc.code} className="bg-white p-6 flex flex-col gap-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-mono text-slate-400">{svc.code}</span>
                  <span className="text-xs font-mono font-semibold text-blue-700">{svc.price}</span>
                </div>
                <h3 className="text-sm font-semibold text-slate-950 leading-snug">{svc.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed flex-1">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-6 h-px bg-blue-700" />
              <p className="text-xs font-mono font-semibold text-blue-700 uppercase tracking-widest">Process</p>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight mb-3">
              Scope Confirmed Before a Single Dollar Changes Hands.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-md">
              Every engagement follows the same four-step sequence: intake, repository audit, written scope confirmation, and delivery. No guesswork, no retros, no hidden fees.
            </p>
            <Link
              href="/process"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
            >
              Full process breakdown
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="flex items-center gap-5 py-4">
                <span className="text-xs font-mono font-bold text-slate-400 w-5 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-slate-700 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case study ─────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">

          <div className="flex items-center gap-3 mb-3">
            <span className="block w-6 h-px bg-blue-700" />
            <p className="text-xs font-mono font-semibold text-blue-700 uppercase tracking-widest">Case Study</p>
          </div>

          <div className="border border-slate-200 bg-slate-950">
            <div className="border-b border-slate-800 px-7 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Client 001 — Confidential · Lovable Build Rescue
              </p>
              <span className="text-xs font-mono font-semibold text-emerald-400">
                ✓ Delivered &lt; 24h
              </span>
            </div>
            <div className="px-7 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
                  10-Hour Deployment Deadlock.<br />Resolved in Under 24.
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  A non-technical founder spent over 10 consecutive hours unable to deploy a Lovable-generated SaaS application. Four compounding infrastructure failures — all invisible to the AI builder — were identified, resolved, and delivered to production in a single structured engagement.
                </p>
              </div>
              <div className="flex flex-col justify-between gap-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {[
                    ["Source",   "Lovable AI"],
                    ["Stack",    "Next.js + Supabase + Vercel"],
                    ["Failures", "4 compounding infrastructure gaps"],
                    ["Result",   "Production live in < 24 hours"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <p className="text-xs font-mono text-slate-500 mb-0.5">{k}</p>
                      <p className="text-slate-200 text-xs font-medium">{v}</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 flex-wrap">
                  <Link
                    href="/case-studies"
                    className="px-5 py-2.5 bg-white text-slate-950 text-xs font-semibold rounded transition-colors hover:bg-slate-100"
                  >
                    Read full case study →
                  </Link>
                  <Link
                    href="/services#intake-form"
                    className="px-5 py-2.5 border border-slate-700 text-slate-300 text-xs font-semibold rounded hover:border-slate-500 hover:text-white transition-colors"
                  >
                    Submit your app
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-6 h-px bg-blue-500" />
              <p className="text-xs font-mono font-semibold text-blue-500 uppercase tracking-widest">Start Here</p>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Stop debugging.<br />Start deploying.
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
              Submit your repository in three minutes. Receive a written scope with a fixed price and confirmed delivery window within 12 hours.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <Link
              href="/services#intake-form"
              className="inline-block px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded transition-colors whitespace-nowrap"
            >
              Submit Your App for Review →
            </Link>
            <p className="text-slate-500 text-xs">Payment collected only after scope is confirmed.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
