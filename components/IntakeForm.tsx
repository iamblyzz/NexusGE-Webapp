"use client";

import { useState } from "react";
import { useTranslation } from "@/components/LanguageProvider";

// Service tiers — must match ALLOWED_TIERS in the API route exactly
const TIERS = [
  { value: "Infrastructure Deployment Fix",  label: "Infrastructure Deployment Fix",  price: "$250 flat" },
  { value: "End-to-End Core Migration",       label: "End-to-End Core Migration",       price: "$450 flat" },
  { value: "Enterprise App Stabilization",    label: "Enterprise App Stabilization",    price: "$750 flat" },
  { value: "Production Oversight",            label: "Production Oversight (Retainer)", price: "$99 / mo"  },
];

type FormData = {
  name:          string;
  email:         string;
  phone:         string;
  selected_tier: string;
  project_scope: string;
};

const EMPTY: FormData = {
  name: "", email: "", phone: "", selected_tier: "", project_scope: "",
};

export default function IntakeForm() {
  const { t: { form: t }, lang } = useTranslation();

  const [form,        setForm]        = useState<FormData>(EMPTY);
  const [errors,      setErrors]      = useState<Partial<Record<keyof FormData, string>>>({});
  const [loading,     setLoading]     = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted,   setSubmitted]   = useState(false);

  const set = (key: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};

    if (!form.name.trim())
      e.name = t.fullName.error;

    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = t.email.error;

    if (!form.selected_tier)
      e.selected_tier = lang === "pt"
        ? "Por favor selecione um serviço."
        : lang === "es"
        ? "Por favor selecciona un servicio."
        : "Please select a service tier.";

    if (!form.project_scope.trim() || form.project_scope.trim().length < 10)
      e.project_scope = t.problem.error;

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setSubmitError(null);

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
          language_track: lang,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setSubmitError(data.error ?? t.networkError);
        return;
      }
    } catch {
      setSubmitError(t.networkError);
      return;
    } finally {
      setLoading(false);
    }

    setSubmitted(true);
  };

  // ── Success banner ────────────────────────────────────────────────────────────
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
  const inputClass = (err?: string) =>
    `w-full px-4 py-2.5 rounded-lg bg-neutral-900 border text-white placeholder-slate-500
     focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-sm
     transition-colors ${err ? "border-red-500" : "border-white/10"}`;

  return (
    <section id="intake-form" className="py-24 bg-neutral-950">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">
            {t.sectionLabel}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.headline}
          </h2>
          <p className="mt-4 text-slate-400 text-base">{t.subheadline}</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">

          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-1.5">
              {t.fullName.label} <span className="text-blue-400">*</span>
            </label>
            <input
              type="text"
              value={form.name}
              onChange={set("name")}
              placeholder={t.fullName.placeholder}
              className={inputClass(errors.name)}
            />
            {errors.name && <p className="mt-1.5 text-red-400 text-xs">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-1.5">
              {t.email.label} <span className="text-blue-400">*</span>
            </label>
            <input
              type="email"
              value={form.email}
              onChange={set("email")}
              placeholder={t.email.placeholder}
              className={inputClass(errors.email)}
            />
            {errors.email && <p className="mt-1.5 text-red-400 text-xs">{errors.email}</p>}
          </div>

          {/* Phone (optional) */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-1.5">
              {lang === "pt" ? "Telefone" : lang === "es" ? "Teléfono" : "Phone"}
              <span className="ml-1.5 text-slate-500 font-normal text-xs">
                ({lang === "pt" ? "opcional" : lang === "es" ? "opcional" : "optional"})
              </span>
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={set("phone")}
              placeholder={lang === "pt" ? "+55 (11) 99999-9999" : lang === "es" ? "+1 (555) 000-0000" : "+1 (555) 000-0000"}
              className={inputClass()}
            />
          </div>

          {/* Service tier */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2.5">
              {lang === "pt" ? "Serviço desejado" : lang === "es" ? "Servicio deseado" : "Service tier"}
              {" "}<span className="text-blue-400">*</span>
            </label>
            <div className="flex flex-col gap-2">
              {TIERS.map((tier) => (
                <button
                  key={tier.value}
                  type="button"
                  onClick={() => setForm((p) => ({ ...p, selected_tier: tier.value }))}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border text-sm
                    font-medium transition-all duration-150 text-left
                    ${form.selected_tier === tier.value
                      ? "bg-blue-600/20 border-blue-500 text-white"
                      : "bg-neutral-900 border-white/10 text-slate-400 hover:border-blue-500/40 hover:text-white"
                    }`}
                >
                  <span>{tier.label}</span>
                  <span className={`text-xs font-mono ml-4 shrink-0 ${
                    form.selected_tier === tier.value ? "text-blue-300" : "text-slate-500"
                  }`}>
                    {tier.price}
                  </span>
                </button>
              ))}
            </div>
            {errors.selected_tier && (
              <p className="mt-1.5 text-red-400 text-xs">{errors.selected_tier}</p>
            )}
          </div>

          {/* Project scope */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-1.5">
              {t.problem.label} <span className="text-blue-400">*</span>
            </label>
            <textarea
              value={form.project_scope}
              onChange={set("project_scope")}
              rows={5}
              placeholder={t.problem.placeholder}
              className={inputClass(errors.project_scope) + " resize-none"}
            />
            {errors.project_scope && (
              <p className="mt-1.5 text-red-400 text-xs">{errors.project_scope}</p>
            )}
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
            className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-50
              disabled:cursor-not-allowed text-white font-bold text-sm rounded-lg
              transition-all duration-150 shadow-sm flex items-center justify-center gap-2"
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
