"use client";

import { useState } from "react";
import { useTranslation } from "@/components/LanguageProvider";

type FormData = {
  fullName: string;
  email: string;
  builders: string[];
  hasGithub: string;
  hasVercel: string;
  hasSupabase: string;
  problem: string;
  deadline: string;
  discovery: string;
};

const BUILDERS = ["Lovable", "Bolt", "v0", "Cursor", "Framer", "Webflow", "Bubble", "Other"];

const EMPTY: FormData = {
  fullName: "", email: "", builders: [], hasGithub: "",
  hasVercel: "", hasSupabase: "", problem: "", deadline: "", discovery: "",
};

export default function IntakeForm() {
  const { t: { form: t } } = useTranslation();
  const [form, setForm] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const toggleBuilder = (b: string) =>
    setForm((prev) => ({
      ...prev,
      builders: prev.builders.includes(b)
        ? prev.builders.filter((x) => x !== b)
        : [...prev.builders, b],
    }));

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.fullName.trim())  e.fullName  = t.fullName.error!;
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = t.email.error!;
    if (form.builders.length === 0) e.builders = t.builders.error;
    if (!form.problem.trim())   e.problem   = t.problem.error!;
    if (!form.deadline)         e.deadline  = t.deadline.error!;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name:    form.fullName,
          email:        form.email,
          builders:     form.builders,
          has_github:   form.hasGithub   || null,
          has_vercel:   form.hasVercel   || null,
          has_supabase: form.hasSupabase || null,
          problem:      form.problem,
          deadline:     form.deadline,
          discovery:    form.discovery   || null,
        }),
      });
      const data = await res.json();
      if (!res.ok) { setSubmitError(data.error ?? t.networkError); return; }
    } catch {
      setSubmitError(t.networkError);
      return;
    } finally {
      setLoading(false);
    }
    setSubmitted(true);
  };

  // ── Success state ─────────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <section id="intake-form" className="py-24 bg-neutral-950">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 px-8 py-14 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-3">{t.success.title}</h3>
            <p className="text-slate-300 text-base leading-relaxed max-w-md mx-auto">{t.success.message}</p>
            <p className="mt-4 text-slate-500 text-sm">{t.success.note}</p>
          </div>
        </div>
      </section>
    );
  }

  // ── Form ──────────────────────────────────────────────────────────────────────
  return (
    <section id="intake-form" className="py-24 bg-neutral-950">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">{t.sectionLabel}</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{t.headline}</h2>
          <p className="mt-4 text-slate-400 text-base">{t.subheadline}</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">

          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-1.5">
              {t.fullName.label} <span className="text-blue-400">*</span>
            </label>
            <input
              type="text"
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              placeholder={t.fullName.placeholder}
              className={`w-full px-4 py-2.5 rounded-lg bg-neutral-900 border text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-sm transition-colors ${
                errors.fullName ? "border-red-500" : "border-white/10"
              }`}
            />
            {errors.fullName && <p className="mt-1.5 text-red-400 text-xs">{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-1.5">
              {t.email.label} <span className="text-blue-400">*</span>
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder={t.email.placeholder}
              className={`w-full px-4 py-2.5 rounded-lg bg-neutral-900 border text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-sm transition-colors ${
                errors.email ? "border-red-500" : "border-white/10"
              }`}
            />
            {errors.email && <p className="mt-1.5 text-red-400 text-xs">{errors.email}</p>}
          </div>

          {/* Builder checklist */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2.5">
              {t.builders.label} <span className="text-blue-400">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {BUILDERS.map((b) => (
                <button
                  type="button"
                  key={b}
                  onClick={() => toggleBuilder(b)}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium border transition-all duration-150 ${
                    form.builders.includes(b)
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "bg-neutral-900 border-white/10 text-slate-400 hover:border-blue-500/50 hover:text-blue-400"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
            {errors.builders && <p className="mt-1.5 text-red-400 text-xs">{errors.builders}</p>}
          </div>

          {/* Infrastructure radios */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-lg bg-neutral-900 border border-white/10">
            {(
              [
                { key: "hasGithub"  as const, label: t.hasGithub  },
                { key: "hasVercel"  as const, label: t.hasVercel  },
                { key: "hasSupabase"as const, label: t.hasSupabase},
              ]
            ).map(({ key, label }) => (
              <div key={key}>
                <p className="text-xs font-semibold text-slate-400 mb-2">{label}</p>
                <div className="flex gap-4">
                  {[
                    { val: "Yes", display: t.yes },
                    { val: "No",  display: t.no  },
                  ].map(({ val, display }) => (
                    <label key={val} className="flex items-center gap-1.5 cursor-pointer group">
                      <input
                        type="radio"
                        name={key}
                        value={val}
                        checked={form[key] === val}
                        onChange={() => setForm({ ...form, [key]: val })}
                        className="w-4 h-4 accent-blue-500"
                      />
                      <span className="text-slate-400 text-sm group-hover:text-white transition-colors">{display}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Problem */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-1.5">
              {t.problem.label} <span className="text-blue-400">*</span>
            </label>
            <textarea
              value={form.problem}
              onChange={(e) => setForm({ ...form, problem: e.target.value })}
              rows={5}
              placeholder={t.problem.placeholder}
              className={`w-full px-4 py-2.5 rounded-lg bg-neutral-900 border text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-sm resize-none transition-colors ${
                errors.problem ? "border-red-500" : "border-white/10"
              }`}
            />
            {errors.problem && <p className="mt-1.5 text-red-400 text-xs">{errors.problem}</p>}
          </div>

          {/* Deadline */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-1.5">
              {t.deadline.label} <span className="text-blue-400">*</span>
            </label>
            <select
              value={form.deadline}
              onChange={(e) => setForm({ ...form, deadline: e.target.value })}
              className={`w-full px-4 py-2.5 rounded-lg bg-neutral-900 border text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-sm transition-colors appearance-none ${
                errors.deadline ? "border-red-500" : "border-white/10"
              }`}
            >
              <option value="" disabled className="text-slate-500">{t.deadline.placeholder}</option>
              {Object.entries(t.deadline.options).map(([val, label]) => (
                <option key={val} value={val} className="bg-neutral-900">{label}</option>
              ))}
            </select>
            {errors.deadline && <p className="mt-1.5 text-red-400 text-xs">{errors.deadline}</p>}
          </div>

          {/* Discovery */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-1.5">
              {t.discovery.label}
            </label>
            <select
              value={form.discovery}
              onChange={(e) => setForm({ ...form, discovery: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-sm transition-colors appearance-none"
            >
              <option value="" className="text-slate-500">{t.discovery.placeholder}</option>
              {Object.entries(t.discovery.options).map(([val, label]) => (
                <option key={val} value={val} className="bg-neutral-900">{label}</option>
              ))}
            </select>
          </div>

          {/* Server error */}
          {submitError && (
            <div className="px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              {submitError}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm rounded-lg transition-all duration-150 shadow-sm flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                {t.submitting}
              </>
            ) : t.submit}
          </button>

          <p className="text-center text-slate-500 text-xs">{t.note}</p>
        </form>
      </div>
    </section>
  );
}
