"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "@/components/LanguageProvider";
import { trackEvent }     from "@/lib/analytics";

export type TierKey =
  | "blueprint"
  | "foundation_setup"
  | "deployment_fix"
  | "core_migration"
  | "stabilization"
  | "retainer"
  | "bespoke";

export const TIERS: Array<{ key: TierKey; value: string; label: string }> = [
  { key: "blueprint",        value: "AI App Launch Blueprint — $149 flat",                   label: "AI App Launch Blueprint — $149 flat" },
  { key: "foundation_setup", value: "Foundation Setup — $399 flat",                          label: "Foundation Setup — $399 flat" },
  { key: "deployment_fix",   value: "Infrastructure Deployment Fix — $250 flat",             label: "Infrastructure Deployment Fix — $250 flat" },
  { key: "core_migration",   value: "End-to-End Core Migration — $450 flat",                 label: "End-to-End Core Migration — $450 flat" },
  { key: "stabilization",    value: "App Stabilization & Security Hardening — $750 flat",    label: "App Stabilization & Security Hardening — $750 flat" },
  { key: "retainer",         value: "Production Oversight & Architecture Guard — $99/mo",    label: "Production Oversight & Architecture Guard — $99/mo" },
  { key: "bespoke",          value: "Bespoke Co-Architecture & System Blueprint — $2,500+",  label: "Bespoke Co-Architecture & System Blueprint — $2,500+" },
];

const PLACEHOLDERS: Record<TierKey, string> = {
  blueprint:        "Describe your idea, what you are trying to build, who it is for, and where you are stuck.",
  foundation_setup: "Describe what you already have and what foundation you need set up — such as GitHub, Supabase, Vercel, environment variables, or CI/CD.",
  deployment_fix:   "Describe the deployment error, build failure, Vercel issue, or production problem you are seeing.",
  core_migration:   "Describe the current AI export repo, stack, database setup, and where you want the application migrated.",
  stabilization:    "Describe what is fragile, broken, insecure, slow, or not production ready.",
  retainer:         "Describe what you want monitored, reviewed, or supported each month.",
  bespoke:          "Describe the full system architecture, blueprint, or implementation planning support you need.",
};

const DEFAULT_PLACEHOLDER = "Describe your project, current situation, and what you need.";

const EMPTY = { name: "", email: "", phone: "", selected_tier: "", project_scope: "" };

interface Props {
  initialTier?: TierKey;
}

export default function IntakeForm({ initialTier }: Props) {
  const { t: { form: t }, lang } = useTranslation();

  const [form,      setForm]      = useState(EMPTY);
  const [loading,   setLoading]   = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Sync initialTier prop → selected_tier in form state
  useEffect(() => {
    if (!initialTier) return;
    const tier = TIERS.find((t) => t.key === initialTier);
    if (tier) setForm((p) => ({ ...p, selected_tier: tier.value }));
  }, [initialTier]);

  const set = (key: keyof typeof EMPTY) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [key]: e.target.value }));

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    if (!form.name || !form.email || !form.selected_tier || !form.project_scope) {
      alert(lang === "pt"
        ? "Por favor preencha todos os campos obrigatórios."
        : lang === "es"
        ? "Por favor completa todos los campos requeridos."
        : "Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/intake", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:           form.name,
          email:          form.email,
          phone:          form.phone,
          project_scope:  form.project_scope,
          selected_tier:  form.selected_tier,
          language_track: lang,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        trackEvent("form_submission", { tier: form.selected_tier });
        setForm(EMPTY);
        setSubmitted(true);
      } else {
        alert(data.error || "Submission failed. Please try again.");
      }
    } catch (err) {
      alert("Network error. Please check your connection and try again.");
      console.error("[form] fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Derive dynamic placeholder from currently selected tier
  const activeTierKey = TIERS.find((t) => t.value === form.selected_tier)?.key;
  const scopePlaceholder = activeTierKey ? PLACEHOLDERS[activeTierKey] : DEFAULT_PLACEHOLDER;

  // ── Success banner ─────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <section id="intake-form" className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-emerald-200 bg-emerald-50 px-8 py-14 text-center">
            <div className="w-12 h-12 border border-emerald-300 bg-emerald-100 flex items-center justify-center mx-auto mb-6">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{t.success.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">{t.success.message}</p>
            <p className="mt-4 text-slate-400 text-xs">{t.success.note}</p>
          </div>
        </div>
      </section>
    );
  }

  // ── Form ───────────────────────────────────────────────────────────────────
  const input = "w-full px-4 py-2.5 bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm transition-colors";

  return (
    <section id="intake-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
      <div className="max-w-2xl mx-auto">

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-6 h-px bg-blue-700" />
            <p className="text-xs font-mono font-semibold text-blue-700 uppercase tracking-widest">
              {t.sectionLabel}
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">{t.headline}</h2>
          <p className="mt-2 text-slate-500 text-sm">{t.subheadline}</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">

          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
              {t.fullName.label} <span className="text-blue-600">*</span>
            </label>
            <input type="text" value={form.name} onChange={set("name")}
              placeholder={t.fullName.placeholder} className={input} />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
              {t.email.label} <span className="text-blue-600">*</span>
            </label>
            <input type="email" value={form.email} onChange={set("email")}
              placeholder={t.email.placeholder} className={input} />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
              {lang === "pt" ? "Telefone" : lang === "es" ? "Teléfono" : "Phone"}
              <span className="ml-1.5 text-slate-400 font-normal text-xs">
                ({lang === "pt" ? "opcional" : lang === "es" ? "opcional" : "optional"})
              </span>
            </label>
            <input type="tel" value={form.phone} onChange={set("phone")}
              placeholder="+1 (555) 000-0000" className={input} />
          </div>

          {/* Tier selector */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2.5">
              {lang === "pt" ? "Serviço desejado" : lang === "es" ? "Servicio deseado" : "Service tier"}
              {" "}<span className="text-blue-600">*</span>
            </label>
            <div className="flex flex-col gap-2">
              {TIERS.map((tier) => (
                <button key={tier.key} type="button"
                  onClick={() => setForm((p) => ({ ...p, selected_tier: tier.value }))}
                  className={`w-full text-left px-4 py-3 border text-sm font-medium transition-colors duration-150 ${
                    form.selected_tier === tier.value
                      ? "bg-blue-50 border-blue-500 text-blue-700"
                      : "bg-white border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900"
                  }`}
                >
                  {tier.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project scope — dynamic label + placeholder */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
              {lang === "pt" ? "Conte-nos sobre seu projeto"
               : lang === "es" ? "Cuéntanos sobre tu proyecto"
               : "Tell us about your project"}{" "}
              <span className="text-blue-600">*</span>
            </label>
            <textarea value={form.project_scope} onChange={set("project_scope")}
              rows={5} placeholder={scopePlaceholder}
              className={`${input} resize-none`} />
          </div>

          {/* Submit */}
          <button type="submit" disabled={loading}
            className="w-full py-3 bg-blue-700 hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm transition-colors duration-150 flex items-center justify-center gap-2">
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

          <p className="text-center text-slate-400 text-xs">{t.note}</p>
        </form>
      </div>
    </section>
  );
}
