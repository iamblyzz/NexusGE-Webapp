import Link from "next/link";

const TIMELINE = [
  {
    phase:  "Hour 0",
    label:  "Intake Received",
    detail: "Client submitted a three-minute intake form describing a Lovable-generated SaaS dashboard that had never successfully deployed. The build failed consistently at the Vercel container stage with unmapped environment variable errors.",
  },
  {
    phase:  "Hour 2",
    label:  "Repository Audit Complete",
    detail: "Full codebase audit completed. Identified four root causes: missing process.env declarations, a Pages Router / App Router collision, an incorrectly scoped Supabase anon key exposed in a client bundle, and a missing next.config.js output configuration.",
  },
  {
    phase:  "Hour 6",
    label:  "Infrastructure Provisioned",
    detail: "Fresh GitHub repository created with clean branch structure. Supabase project provisioned with correct schema, Row-Level Security policies written, and service role key correctly scoped to server-side API routes only.",
  },
  {
    phase:  "Hour 12",
    label:  "Pipeline Live",
    detail: "Vercel deployment pipeline connected. All environment variables mapped, build passing cleanly. Custom domain routed with SSL termination. First successful production build confirmed.",
  },
  {
    phase:  "Hour 18",
    label:  "Validation & Handoff",
    detail: "Full end-to-end validation across devices and browsers. Written handoff document delivered: repository access, environment variable documentation, deployment configuration summary, and 30-day async support window activated.",
  },
];

const STACK = [
  ["Framework",       "Lovable AI Export (AI-generated)",  "Next.js 14 App Router"],
  ["Repository",      "No version control",                "GitHub (clean structure)"],
  ["Database",        "None",                              "Supabase PostgreSQL"],
  ["Auth",            "Broken mock session",               "Supabase JWT Auth"],
  ["Hosting",         "Local only, never deployed",        "Vercel (Production)"],
  ["Environment",     "No env vars configured",            "Mapped, documented, secured"],
  ["Security",        "Anon key in client bundle",         "Service role scoped server-only"],
  ["Delivery",        "10+ hours stuck, no progress",      "Full stack live in under 24 hours"],
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* Header */}
      <section className="bg-white border-b border-slate-200 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">Case Studies</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
            Real Work. Real Results.
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
            From an un-deployed AI prototype to a verified production stack in under 24 hours. Documented, reproducible, and repeatable.
          </p>
        </div>
      </section>

      {/* Case study 01 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Meta */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                Case Study 001 — Confidential (Lovable Build Rescue)
              </p>
              <h2 className="text-2xl font-bold text-slate-900">
                Lovable-to-Production Migration: 10-Hour Deadlock Resolved
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Delivered in &lt; 24 Hours
            </div>
          </div>

          {/* The problem */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-xl border border-red-100 p-7 shadow-sm">
              <p className="text-xs font-bold text-red-600 uppercase tracking-widest mb-3">The Client Bottleneck</p>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                A non-technical founder had spent over 10 consecutive hours attempting to deploy her Lovable-generated SaaS dashboard. The AI builder produced a visually complete frontend but provided no guidance on production hosting, repository structure, or database provisioning.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every deployment attempt at Vercel failed with cryptic build errors. No documentation, no error explanation, no path forward. The client was burning time, API credits, and growing increasingly at risk of abandoning a completed product.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-emerald-100 p-7 shadow-sm">
              <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">The Nexus Fix</p>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                Intake received, repository audited, and root causes identified within two hours. Four distinct infrastructure failures were resolved in a single structured migration:
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  "Unmapped environment variables causing Vercel build failures",
                  "Pages Router / App Router collision in Next.js configuration",
                  "Supabase anon key incorrectly exposed in client-side bundle",
                  "Missing next.config.js output and image domain configuration",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-slate-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stack transformation */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-10">
            <div className="px-7 py-5 border-b border-slate-100 bg-slate-50">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Stack Transformation</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left px-7 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider w-1/4">Layer</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-red-500 uppercase tracking-wider w-5/12">Before</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-emerald-600 uppercase tracking-wider">After</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {STACK.map(([layer, before, after], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                      <td className="px-7 py-3.5 text-slate-500 font-mono text-xs">{layer}</td>
                      <td className="px-4 py-3.5 text-red-500 text-xs">{before}</td>
                      <td className="px-4 py-3.5 text-emerald-600 text-xs font-medium">{after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-7 mb-10">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-8">
              24-Hour Delivery Timeline
            </p>
            <div className="relative">
              <div className="absolute left-[18px] top-5 bottom-5 w-px bg-slate-200" aria-hidden />
              <div className="flex flex-col gap-8">
                {TIMELINE.map((item, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="relative flex-shrink-0 w-9 h-9 rounded-full bg-white border-2 border-blue-400 flex items-center justify-center z-10 shadow-sm">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    </div>
                    <div className="pt-1 flex-1">
                      <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                        <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                          {item.phase}
                        </span>
                        <span className="text-sm font-bold text-slate-900">{item.label}</span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="bg-blue-50 rounded-xl border border-blue-100 p-8 text-center">
            <svg className="w-8 h-8 text-blue-300 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-slate-700 text-lg italic leading-relaxed max-w-2xl mx-auto mb-4">
              &quot;How did you do that so fast? I&apos;ve been hitting a wall with this setup for over 10 hours straight.&quot;
            </p>
            <p className="text-slate-400 text-sm font-semibold">
              — Client A, Anonymized · Lovable Build Rescue · Delivered June 2026
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Stuck in the same loop?</h2>
          <p className="text-slate-600 mb-8">
            Submit your app in three minutes. We audit your codebase and return a written fix plan with a fixed price and confirmed delivery window.
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
