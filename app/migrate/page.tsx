"use client";

import { useState, useRef } from "react";

// ── Types ────────────────────────────────────────────────────────────────────

type Tier = {
  id: string;
  name: string;
  price: string;
  unit: string;
  tagline: string;
  features: string[];
};

type Step = 1 | 2 | 3;

type FormState = {
  selected_tier: string;
  name: string;
  email: string;
  phone: string;
  project_scope: string;
};

// ── Service tiers ─────────────────────────────────────────────────────────────

const TIERS: Tier[] = [
  {
    id:      "infrastructure",
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
  },
  {
    id:      "migration",
    name:    "End-to-End Core Migration",
    price:   "$450",
    unit:    "flat",
    tagline: "Move from raw AI export to production infrastructure.",
    features: [
      "Everything in Infrastructure Deployment Fix",
      "Migrate AI repo export into Next.js 14 App Router",
      "Provision cloud-hosted Supabase PostgreSQL database",
      "Configure relational schemas and table relationships",
      "Establish version-controlled CI/CD deployment pipeline",
      "100% build optimization and Vercel production deployment",
      "48–72 hour delivery guarantee",
    ],
  },
  {
    id:      "stabilization",
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
  },
  {
    id:      "blueprint",
    name:    "Bespoke Co-Architecture & System Blueprint",
    price:   "$2,500+",
    unit:    "flat rate / sprint",
    tagline: "Custom infrastructure design for teams building at scale.",
    features: [
      "Dedicated 1-on-1 strategic infrastructure design mapping and consulting",
      "Full relational schema validation and custom Supabase relational planning",
      "Secure multi-tenant architecture and access control layout",
      "Signed Mutual Responsibility Release Framework (full legal sign-off required)",
      "Includes option for integrated 3rd-party security compliance APIs",
    ],
  },
];

const EMPTY: FormState = {
  selected_tier: "",
  name:          "",
  email:         "",
  phone:         "",
  project_scope: "",
};

// ── Check icon ────────────────────────────────────────────────────────────────

function Check({ accent = false }: { accent?: boolean }) {
  return (
    <svg
      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${accent ? "text-amber-500" : "text-blue-500"}`}
      fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

// ── Step indicator ────────────────────────────────────────────────────────────

function StepIndicator({ current }: { current: Step }) {
  const steps = [
    { n: 1, label: "Select Tier"   },
    { n: 2, label: "Contact Info"  },
    { n: 3, label: "Project Brief" },
  ];
  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {steps.map((s, i) => (
        <div key={s.n} className="flex items-center">
          <div className="flex flex-col items-center gap-1.5">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
              current > s.n
                ? "bg-blue-600 text-white"
                : current === s.n
                ? "bg-blue-600 text-white ring-4 ring-blue-100"
                : "bg-slate-100 text-slate-400 border border-slate-200"
            }`}>
              {current > s.n ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              ) : s.n}
            </div>
            <span className={`text-xs font-medium whitespace-nowrap ${
              current >= s.n ? "text-slate-700" : "text-slate-400"
            }`}>
              {s.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className={`w-16 sm:w-24 h-px mx-2 mb-5 transition-all ${
              current > s.n ? "bg-blue-500" : "bg-slate-200"
            }`} />
          )}
        </div>
      ))}
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function MigratePage() {
  const formRef  = useRef<HTMLDivElement>(null);
  const [step,      setStep]      = useState<Step>(1);
  const [form,      setForm]      = useState<FormState>(EMPTY);
  const [loading,   setLoading]   = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error,     setError]     = useState<string | null>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const selectTier = (tier: Tier) => {
    setForm((p) => ({ ...p, selected_tier: tier.name }));
    setStep(2);
    setTimeout(scrollToForm, 80);
  };

  const set = (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [key]: e.target.value }));

  const goBack = () => setStep((s) => (s > 1 ? (s - 1) as Step : s));

  const nextStep = () => {
    if (step === 2) {
      if (!form.name.trim() || !form.email.trim()) {
        setError("Name and email are required.");
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        setError("Please enter a valid email address.");
        return;
      }
    }
    setError(null);
    setStep((s) => (s < 3 ? (s + 1) as Step : s));
    setTimeout(scrollToForm, 80);
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!form.project_scope.trim() || form.project_scope.trim().length < 10) {
      setError("Please describe your project (min 10 characters).");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/intake", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:           form.name.trim(),
          email:          form.email.trim(),
          phone:          form.phone.trim() || null,
          project_scope:  form.project_scope.trim(),
          selected_tier:  form.selected_tier,
          language_track: "en",
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
        setTimeout(scrollToForm, 80);
      } else {
        setError(data.error || "Submission failed. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  // ── Input class ─────────────────────────────────────────────────────────────
  const input = "w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm transition-colors";

  // ── Render ───────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* ── Nav bar ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="text-slate-900 font-bold text-sm tracking-tight select-none">
            Nexus <span className="text-blue-600">Global</span> Enterprise
          </a>
          <button
            onClick={scrollToForm}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-md transition-colors shadow-sm"
          >
            Start Intake
          </button>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-semibold tracking-wide mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Production-Ready Migrations · 24–72 Hour Turnaround
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-5">
            Your AI-Built App Is Failing.<br className="hidden sm:block" />
            We Engineer the Fix.
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Select a service tier below, complete the brief intake form, and receive a confirmed scope with a fixed delivery window — no discovery calls, no surprises.
          </p>
          <button
            onClick={scrollToForm}
            className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-lg transition-all shadow-sm hover:shadow-lg hover:shadow-blue-500/20"
          >
            Submit Your App for Review
          </button>
          <p className="mt-4 text-slate-400 text-sm">
            Payment collected only after scope is confirmed.
          </p>
        </div>
      </section>

      {/* ── Service tier cards ───────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">
              Services &amp; Pricing
            </p>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Flat-Rate. Scoped Upfront. No Surprises.
            </h2>
            <p className="mt-3 text-slate-500 text-base max-w-lg mx-auto">
              Exact scope confirmed in writing before payment is ever requested.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {TIERS.map((tier) => {
              const isSelected = form.selected_tier === tier.name;
              const isPremium  = tier.id === "blueprint";
              return (
                <div
                  key={tier.id}
                  className={`relative flex flex-col rounded-xl border transition-all duration-200 bg-white ${
                    isSelected
                      ? isPremium
                        ? "border-amber-400 shadow-lg shadow-amber-100 ring-1 ring-amber-200"
                        : "border-blue-400 shadow-lg shadow-blue-100 ring-1 ring-blue-200"
                      : "border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  {tier.id === "migration" && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold tracking-wide uppercase shadow-sm">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className={`p-6 pb-4 border-b ${isPremium ? "border-amber-100" : "border-slate-100"}`}>
                    <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${isPremium ? "text-amber-500" : "text-slate-400"}`}>
                      {isPremium ? "Premium" : "Standard"}
                    </p>
                    <h3 className="text-sm font-bold text-slate-900 mb-2 min-h-[2.5rem] leading-snug">
                      {tier.name}
                    </h3>
                    <p className="text-slate-500 text-xs mb-4 min-h-[2rem] leading-snug">
                      {tier.tagline}
                    </p>
                    <div className="flex items-end gap-1">
                      <span className={`text-3xl font-extrabold ${isPremium ? "text-amber-600" : "text-slate-900"}`}>
                        {tier.price}
                      </span>
                      <span className="text-slate-400 text-xs mb-1">{tier.unit}</span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <ul className="flex flex-col gap-2.5 flex-1 mb-6">
                      {tier.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check accent={isPremium} />
                          <span className="text-slate-600 text-xs leading-snug">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => selectTier(tier)}
                      className={`w-full py-2.5 rounded-lg font-semibold text-sm transition-all duration-150 ${
                        isSelected
                          ? isPremium
                            ? "bg-amber-500 text-white"
                            : "bg-blue-600 text-white"
                          : isPremium
                          ? "border border-amber-300 text-amber-600 hover:bg-amber-50"
                          : tier.id === "migration"
                          ? "bg-blue-600 hover:bg-blue-500 text-white shadow-sm"
                          : "border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600"
                      }`}
                    >
                      {isSelected ? "✓ Selected" : tier.id === "blueprint" ? "Request Blueprint" : "Select This Tier"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Multi-step intake form ───────────────────────────────────────────── */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div ref={formRef} className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">

          <div className="text-center mb-10">
            <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">
              Get Started
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Submit Your App for Review
            </h2>
            <p className="mt-3 text-slate-500 text-sm">
              Takes 3 minutes. No calls required. Scope confirmed before payment.
            </p>
          </div>

          {/* ── Success state ──────────────────────────────────────────────── */}
          {submitted ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-8 py-14 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
                Submission Received
              </h3>
              <p className="text-slate-600 text-base leading-relaxed max-w-md mx-auto">
                We&apos;ve received your intake for <strong>{form.selected_tier}</strong>. Our team will review your project scope and return a written confirmation within 24 hours.
              </p>
              <p className="mt-4 text-slate-400 text-sm">
                Payment is only requested after scope is confirmed in writing.
              </p>
            </div>
          ) : (
            <>
              <StepIndicator current={step} />

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

                {/* Step header */}
                <div className="px-8 py-5 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Step {step} of 3
                    </p>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">
                      {step === 1 ? "Choose Your Service Tier"
                       : step === 2 ? "Your Contact Information"
                       : "Describe Your Project"}
                    </p>
                  </div>
                  {form.selected_tier && (
                    <span className="hidden sm:block text-xs font-medium text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 max-w-[180px] truncate">
                      {form.selected_tier.split(" ").slice(0, 3).join(" ")}…
                    </span>
                  )}
                </div>

                <form onSubmit={handleSubmit} noValidate className="p-8 flex flex-col gap-5">

                  {/* ── Step 1: Tier selection ─────────────────────────────── */}
                  {step === 1 && (
                    <div className="flex flex-col gap-2">
                      {TIERS.map((tier) => (
                        <button
                          key={tier.id}
                          type="button"
                          onClick={() => setForm((p) => ({ ...p, selected_tier: tier.name }))}
                          className={`w-full text-left px-4 py-3.5 rounded-lg border text-sm font-medium transition-all duration-150 flex items-center justify-between gap-3 ${
                            form.selected_tier === tier.name
                              ? tier.id === "blueprint"
                                ? "bg-amber-50 border-amber-400 text-amber-700"
                                : "bg-blue-50 border-blue-500 text-blue-700"
                              : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900"
                          }`}
                        >
                          <span className="leading-snug">{tier.name}</span>
                          <span className={`text-xs font-mono shrink-0 ${
                            form.selected_tier === tier.name
                              ? tier.id === "blueprint" ? "text-amber-500" : "text-blue-500"
                              : "text-slate-400"
                          }`}>
                            {tier.price} {tier.unit}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* ── Step 2: Contact info ───────────────────────────────── */}
                  {step === 2 && (
                    <>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                          Full Name <span className="text-blue-600">*</span>
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={set("name")}
                          placeholder="Benjamin Rogers"
                          className={input}
                          autoFocus
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                          Email Address <span className="text-blue-600">*</span>
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={set("email")}
                          placeholder="you@company.com"
                          className={input}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                          Phone
                          <span className="ml-1.5 text-slate-400 font-normal text-xs">(optional)</span>
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={set("phone")}
                          placeholder="+1 (555) 000-0000"
                          className={input}
                        />
                      </div>
                    </>
                  )}

                  {/* ── Step 3: Project scope ──────────────────────────────── */}
                  {step === 3 && (
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Describe Your Project <span className="text-blue-600">*</span>
                      </label>
                      <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                        What builder did you use? What&apos;s broken? What does the app do? Include your current hosting setup if known.
                      </p>
                      <textarea
                        value={form.project_scope}
                        onChange={set("project_scope")}
                        rows={7}
                        placeholder="e.g. I built a SaaS dashboard with Lovable. The Vercel deployment keeps failing with a build error about missing env vars. The app uses Supabase for auth and has about 8 pages..."
                        className={`${input} resize-none`}
                        autoFocus
                      />
                      <p className="mt-1.5 text-xs text-slate-400">
                        {form.project_scope.length} / 5000 characters
                      </p>
                    </div>
                  )}

                  {/* Error */}
                  {error && (
                    <div className="px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                      {error}
                    </div>
                  )}

                  {/* Navigation buttons */}
                  <div className="flex gap-3 pt-2">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={goBack}
                        className="flex-1 py-3 border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900 font-semibold text-sm rounded-lg transition-all"
                      >
                        ← Back
                      </button>
                    )}

                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={step === 1 && !form.selected_tier}
                        className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-sm rounded-lg transition-all shadow-sm"
                      >
                        Continue →
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={loading}
                        className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm rounded-lg transition-all shadow-sm flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <>
                            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Submitting…
                          </>
                        ) : "Submit for Review →"}
                      </button>
                    )}
                  </div>

                  {step === 3 && (
                    <p className="text-center text-slate-400 text-xs">
                      Payment collected only after written scope is confirmed.
                    </p>
                  )}
                </form>
              </div>
            </>
          )}
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer className="border-t border-slate-200 bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-900 font-bold text-sm">
            Nexus <span className="text-blue-600">Global</span> Enterprise
          </p>
          <p className="text-slate-400 text-xs text-center sm:text-right max-w-sm">
            All work is scoped and confirmed before payment is requested. No surprises.
          </p>
        </div>
      </footer>
    </div>
  );
}
