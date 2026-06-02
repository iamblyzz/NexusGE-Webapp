"use client";

import { useState } from "react";
import { useTranslation } from "@/components/LanguageProvider";

const TIERS = [
  { value: "Infrastructure Deployment Fix",                          label: "Infrastructure Deployment Fix — $250 flat" },
  { value: "End-to-End Core Migration",                              label: "End-to-End Core Migration — $450 flat" },
  { value: "Enterprise App Stabilization",                           label: "Enterprise App Stabilization — $750 flat" },
  { value: "Production Oversight Retainer (Weekly Fixed Audit Window Only)", label: "Production Oversight Retainer (Weekly Fixed Audit Window Only) — $99/mo" },
  { value: "Bespoke Co-Architecture & System Blueprint Consultation", label: "Bespoke Co-Architecture & System Blueprint Consultation — $2,500+" },
];

const EMPTY = { name: "", email: "", phone: "", selected_tier: "", project_scope: "" };

export default function IntakeForm() {
  const { t: { form: t }, lang } = useTranslation();

  const [form,      setForm]      = useState(EMPTY);
  const [loading,   setLoading]   = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  // ── Success banner ─────────────────────────────────────────────────────────
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

  // ── Form ───────────────────────────────────────────────────────────────────
  const input = "w-full px-4 py-2.5 rounded-lg bg-neutral-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 text-sm transition-colors";

  return (
    <section id="intake-form" className="py-24 bg-neutral-950">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">{t.sectionLabel}</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{t.headline}</h2>
          <p className="mt-4 text-slate-400 text-base">{t.subheadline}</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">

          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-1.5">
              {t.fullName.label} <span className="text-blue-400">*</span>
            </label>
            <input type="text" value={form.name} onChange={set("name")}
              placeholder={t.fullName.placeholder} className={input} />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-1.5">
              {t.email.label} <span className="text-blue-400">*</span>
            </label>
            <input type="email" value={form.email} onChange={set("email")}
              placeholder={t.email.placeholder} className={input} />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-1.5">
              {lang === "pt" ? "Telefone" : lang === "es" ? "Teléfono" : "Phone"}
              <span className="ml-1.5 text-slate-500 font-normal text-xs">
                ({lang === "pt" ? "opcional" : lang === "es" ? "opcional" : "optional"})
              </span>
            </label>
            <input type="tel" value={form.phone} onChange={set("phone")}
              placeholder="+1 (555) 000-0000" className={input} />
          </div>

          {/* Tier selector */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2.5">
              {lang === "pt" ? "Serviço desejado" : lang === "es" ? "Servicio deseado" : "Service tier"}
              {" "}<span className="text-blue-400">*</span>
            </label>
            <div className="flex flex-col gap-2">
              {TIERS.map((tier) => (
                <button key={tier.value} type="button"
                  onClick={() => setForm((p) => ({ ...p, selected_tier: tier.value }))}
                  className={`w-full text-left px-4 py-3 rounded-lg border text-sm font-medium transition-all duration-150 ${
                    form.selected_tier === tier.value
                      ? "bg-blue-600/20 border-blue-500 text-white"
                      : "bg-neutral-900 border-white/10 text-slate-400 hover:border-blue-500/40 hover:text-white"
                  }`}
                >
                  {tier.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project scope */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-1.5">
              {t.problem.label} <span className="text-blue-400">*</span>
            </label>
            <textarea value={form.project_scope} onChange={set("project_scope")}
              rows={5} placeholder={t.problem.placeholder}
              className={`${input} resize-none`} />
          </div>

          {/* Submit */}
          <button type="submit" disabled={loading}
            className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm rounded-lg transition-all duration-150 shadow-sm flex items-center justify-center gap-2">
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
