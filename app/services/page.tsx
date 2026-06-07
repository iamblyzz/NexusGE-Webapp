"use client";

import { useState, useCallback } from "react";
import Link               from "next/link";
import SiteNavbar         from "@/components/SiteNavbar";
import ServiceIntakeForm  from "@/components/ServiceIntakeForm";
import { useTranslation } from "@/components/LanguageProvider";
import { type TierKey }   from "@/components/IntakeForm";

// ── How It Works steps ────────────────────────────────────────────────────────
const HOW_IT_WORKS_EN = [
  { n: "01", title: "Submit your project or idea",            body: "Complete the intake form with details about your current situation — idea stage, broken deployment, or live app with problems." },
  { n: "02", title: "We review the current state",           body: "We read your submission, assess the scope, and identify the specific work required." },
  { n: "03", title: "We confirm the scope in writing",       body: "You receive a written scope document listing every deliverable, the timeline, and the fixed price." },
  { n: "04", title: "You approve deliverables and timeline", body: "No work begins until you have reviewed and approved the written scope. No surprises." },
  { n: "05", title: "Payment requested after approval",      body: "Payment is only requested once the scope is confirmed and approved. Never before." },
  { n: "06", title: "We execute and provide completion notes",body: "We complete the work and deliver written notes covering everything done, every configuration made, and every decision taken." },
];

function CheckIcon({ amber = false }: { amber?: boolean }) {
  return (
    <svg
      className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${amber ? "text-amber-500" : "text-blue-600"}`}
      fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export default function ServicesPage() {
  const { t, lang } = useTranslation();
  const sv = t.services;
  const plans = sv.plans;

  // plans[0] = AI App Launch Blueprint   ($149)
  // plans[1] = Foundation Setup           ($399)
  // plans[2] = Infrastructure Fix         ($250)
  // plans[3] = Core Migration             ($450)
  // plans[4] = App Stabilization          ($750)
  // plans[5] = Retainer                   ($99/mo)
  // plans[6] = Bespoke Co-Architecture    ($2,500+)

  const pathOnePlans = [plans[0], plans[1]];
  const pathTwoPlans = [plans[2], plans[3], plans[4]];
  const retainer     = plans[5];
  const bespoke      = plans[6];

  const [pendingTier, setPendingTier] = useState<TierKey | undefined>(undefined);

  const selectTier = useCallback((key: TierKey) => {
    setPendingTier(key);
    // Small timeout lets React re-render the form with the new tier before scrolling
    setTimeout(() => {
      document.getElementById("intake-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }, []);

  const scopeNote = lang === "es"
    ? "El pago no se cobra hasta que el alcance esté confirmado por escrito."
    : lang === "pt"
    ? "O pagamento não é cobrado até que o escopo seja confirmado por escrito."
    : "Payment is not collected until the scope is confirmed in writing.";

  const scopeBody = lang === "es"
    ? "Cada compromiso comienza con una confirmación de alcance escrita que describe los entregables, el cronograma y los límites."
    : lang === "pt"
    ? "Cada compromisso começa com uma confirmação de escopo escrita descrevendo entregáveis, cronograma e limites."
    : "Every engagement begins with a written scope confirmation outlining deliverables, timeline, and boundaries.";

  // Tier keys for each plan slot — must match TierKey type
  const PATH1_KEYS: TierKey[]    = ["blueprint", "foundation_setup"];
  const PATH2_KEYS: TierKey[]    = ["deployment_fix", "core_migration", "stabilization"];

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <SiteNavbar />

      {/* ── Page header ────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-200 pt-24 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-6 h-px bg-blue-700" />
            <p className="text-xs font-mono font-semibold text-blue-700 uppercase tracking-widest">
              {sv.sectionLabel}
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight mb-3">
            {sv.headline}
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed max-w-2xl mb-6">
            {sv.subheadline}
          </p>
          {/* Scope promise banner */}
          <div className="border border-blue-200 bg-blue-50 px-5 py-3.5 flex flex-col sm:flex-row sm:items-center gap-1.5">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider shrink-0">
              Scope Policy
            </span>
            <span className="hidden sm:block text-blue-300 text-xs mx-2">—</span>
            <p className="text-blue-800 text-sm">
              <strong>{scopeNote}</strong> {scopeBody}
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          PATH 1 — Blueprint & Foundation Services
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <p className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest mb-1">Path 01</p>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight mb-2">
              {lang === "pt" ? "Serviços de Blueprint e Fundação"
               : lang === "es" ? "Servicios de Blueprint y Fundación"
               : "Blueprint & Foundation Services"}
            </h2>
            <p className="text-slate-500 text-sm max-w-xl">
              {lang === "pt" ? "Para fundadores que têm uma ideia ou estão presos antes de construir."
               : lang === "es" ? "Para fundadores que tienen una idea o están atascados antes de construir."
               : "For founders who have an idea or are stuck before building."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200">
            {pathOnePlans.map((plan, i) => (
              <div key={plan.name} className="bg-white p-7 flex flex-col gap-5">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-blue-700">{plan.price}</span>
                    <span className="text-xs font-mono text-slate-400">{plan.unit}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-950 mb-1">{plan.name}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{plan.tagline}</p>
                </div>
                <ul className="flex flex-col gap-2 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckIcon />
                      <span className="text-slate-600 text-xs leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => selectTier(PATH1_KEYS[i])}
                  className="mt-2 w-full py-2.5 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold text-center transition-colors duration-150"
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          PATH 2 — App Rescue & Production Services
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <p className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest mb-1">Path 02</p>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight mb-2">
              {lang === "pt" ? "Serviços de Resgate e Produção"
               : lang === "es" ? "Servicios de Rescate y Producción"
               : "App Rescue & Production Services"}
            </h2>
            <p className="text-slate-500 text-sm max-w-xl">
              {lang === "pt" ? "Para fundadores que já construíram algo e está quebrado, instável ou não está pronto para produção."
               : lang === "es" ? "Para fundadores que ya construyeron algo y está roto, inestable o no está listo para producción."
               : "For founders who already built something and it is broken, unstable, or not production-ready."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200">
            {pathTwoPlans.map((plan, i) => (
              <div key={plan.name} className={`flex flex-col gap-5 p-7 ${i === 1 ? "bg-slate-950" : "bg-white"}`}>
                {i === 1 && (
                  <p className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest -mb-2">
                    {sv.popularBadge}
                  </p>
                )}
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className={`text-xs font-mono font-bold ${i === 1 ? "text-blue-400" : "text-blue-700"}`}>
                      {plan.price}
                    </span>
                    <span className={`text-xs font-mono ${i === 1 ? "text-slate-500" : "text-slate-400"}`}>
                      {plan.unit}
                    </span>
                  </div>
                  <h3 className={`text-base font-bold mb-1 ${i === 1 ? "text-white" : "text-slate-950"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs leading-relaxed ${i === 1 ? "text-slate-400" : "text-slate-500"}`}>
                    {plan.tagline}
                  </p>
                </div>
                <ul className="flex flex-col gap-2 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      {i === 1
                        ? <svg className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                        : <CheckIcon />
                      }
                      <span className={`text-xs leading-snug ${i === 1 ? "text-slate-300" : "text-slate-600"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => selectTier(PATH2_KEYS[i])}
                  className={`mt-2 w-full py-2.5 text-xs font-semibold text-center transition-colors duration-150 ${
                    i === 1
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-white hover:bg-slate-50 text-slate-950 border border-slate-200 hover:border-slate-400"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Retainer ───────────────────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="border border-slate-200 bg-white">
            <div className="border-b border-slate-200 px-7 py-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-mono font-semibold text-blue-700 uppercase tracking-widest mb-1">
                  {lang === "pt" ? "Retenção Mensal" : lang === "es" ? "Retenedor Mensual" : "Monthly Retainer"}
                </p>
                <h2 className="text-base font-bold text-slate-950">{retainer.name}</h2>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-slate-950">{retainer.price}</span>
                <span className="text-slate-400 text-xs font-mono ml-1">{retainer.unit}</span>
              </div>
            </div>
            <div className="p-7 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{retainer.tagline}</p>
                <div className="border border-amber-200 bg-amber-50 p-3.5 text-xs text-amber-800 leading-relaxed">
                  <strong>
                    {lang === "pt" ? "Aviso de Limite: "
                     : lang === "es" ? "Aviso de Límite: "
                     : "Boundary Notice: "}
                  </strong>
                  {lang === "pt"
                    ? "Este é um serviço de monitoramento e supervisão agendada. Não inclui correções de emergência ilimitadas. Trabalho fora do horário agendado é cobrado separadamente a $150/hora."
                    : lang === "es"
                    ? "Este es un servicio de monitoreo y supervisión programada. No incluye correcciones de emergencia ilimitadas. El trabajo fuera del horario programado se factura por separado a $150/hora."
                    : "This is a monitoring and scheduled oversight service only. It does not include unlimited emergency fixes. Off-schedule work is billed separately at $150/hour."}
                </div>
              </div>
              <ul className="flex flex-col gap-2.5">
                {retainer.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckIcon />
                    <span className="text-slate-600 text-xs leading-snug">{f}</span>
                  </li>
                ))}
                <li className="flex items-start gap-2 mt-1">
                  <CheckIcon amber />
                  <span className="text-amber-700 text-xs leading-snug font-medium">
                    {lang === "pt" ? "Trabalho de emergência fora do horário agendado: $150/hora"
                     : lang === "es" ? "Trabajo de emergencia fuera del horario programado: $150/hora"
                     : "Off-schedule emergency work billed at $150/hour"}
                  </span>
                </li>
              </ul>
            </div>
            <div className="border-t border-slate-100 px-7 py-4 flex items-center justify-between">
              <p className="text-slate-400 text-xs">
                {lang === "pt" ? "Cancele a qualquer momento. Faturado mensalmente."
                 : lang === "es" ? "Cancela en cualquier momento. Facturación mensual."
                 : "Cancel anytime. Billed monthly."}
              </p>
              <button
                type="button"
                onClick={() => selectTier("retainer")}
                className="px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold transition-colors duration-150"
              >
                {retainer.cta}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bespoke / Premium ──────────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="border border-slate-200 bg-slate-950">
            <div className="border-b border-slate-800 px-7 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <p className="text-xs font-mono font-semibold text-amber-500 uppercase tracking-widest mb-1">
                  {lang === "pt" ? "Compromisso Premium" : lang === "es" ? "Compromiso Premium" : "Premium Engagement"}
                </p>
                <h2 className="text-base font-bold text-white">{bespoke.name}</h2>
              </div>
              <div className="text-right shrink-0">
                <span className="text-2xl font-bold text-white">{bespoke.price}</span>
                <span className="text-slate-500 text-xs font-mono ml-1">{bespoke.unit}</span>
              </div>
            </div>
            <div className="p-7 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">{bespoke.tagline}</p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {lang === "pt"
                    ? "Para equipes que querem que a Nexus projete a arquitetura completa do aplicativo ou assuma um papel maior no planejamento de implementação. Exige um Framework de Responsabilidade Mútua assinado antes do início."
                    : lang === "es"
                    ? "Para equipos que quieren que Nexus diseñe la arquitectura completa de la aplicación o tome un rol más amplio en la planificación de la implementación. Requiere un Marco de Responsabilidad Mutua firmado antes del inicio."
                    : "For teams that want Nexus to design the full application architecture or take a larger role in implementation planning. Requires a signed Mutual Responsibility Framework before commencement."}
                </p>
              </div>
              <ul className="flex flex-col gap-2.5">
                {bespoke.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-slate-300 text-xs leading-snug">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-slate-800 px-7 py-4 flex items-center justify-between">
              <p className="text-slate-500 text-xs">
                {lang === "pt" ? "Escopo e estrutura legal confirmados antes do início."
                 : lang === "es" ? "Alcance y marco legal confirmados antes del inicio."
                 : "Scope and legal framework confirmed before engagement begins."}
              </p>
              <button
                type="button"
                onClick={() => selectTier("bespoke")}
                className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-white text-xs font-bold transition-colors duration-150"
              >
                {bespoke.cta}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ────────────────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-6 h-px bg-blue-500" />
            <p className="text-xs font-mono font-semibold text-blue-500 uppercase tracking-widest">
              {lang === "pt" ? "Como Funciona" : lang === "es" ? "Cómo Funciona" : "How It Works"}
            </p>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight mb-8">
            {lang === "pt" ? "Um Compromisso Estruturado — Sempre."
             : lang === "es" ? "Un Compromiso Estructurado — Siempre."
             : "A Structured Engagement — Every Time."}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800">
            {HOW_IT_WORKS_EN.map((step) => (
              <div key={step.n} className="bg-slate-950 p-6 flex flex-col gap-3">
                <span className="text-xs font-mono font-bold text-slate-600">{step.n}</span>
                <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scope / Disclaimer ──────────────────────────────────────────── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-slate-600 text-sm max-w-xl">
            <strong className="text-slate-950">{scopeNote}</strong>{" "}
            {scopeBody}
          </p>
          <button
            type="button"
            onClick={() => {
              document.getElementById("intake-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm transition-colors duration-150"
          >
            {lang === "pt" ? "Começar →" : lang === "es" ? "Comenzar →" : "Get Started →"}
          </button>
        </div>
      </section>

      {/* ── Intake form ─────────────────────────────────────────────────── */}
      <ServiceIntakeForm initialTier={pendingTier} />
    </div>
  );
}
