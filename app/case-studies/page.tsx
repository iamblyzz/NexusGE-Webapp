import Link       from "next/link";
import SiteNavbar from "@/components/SiteNavbar";

const FAILURE_PATTERNS = [
  {
    title:   "Environment Variable Collapse",
    symptom: "The application builds and runs perfectly on a local machine. The moment it is pushed to a cloud deployment container, it crashes immediately. Error logs reference variables that are clearly defined in the codebase but somehow unavailable at runtime.",
    cause:   "AI builders generate code that references environment variables but never establish the boundary between local development secrets and production deployment configuration. The two environments require distinct variable scoping — a distinction no AI tool currently handles automatically.",
    impact:  "Complete deployment failure. The application never reaches a live state. Founders spend hours adding variables manually, in the wrong scope, to the wrong environment, without understanding why none of it works.",
  },
  {
    title:   "Router Architecture Collision",
    symptom: "Navigation works on some routes and silently fails on others. Pages load blank with no visible error. Server logs show 404s on routes that clearly exist in the codebase.",
    cause:   "Modern Next.js uses two fundamentally different routing systems — Pages Router and App Router — with incompatible conventions. AI generators frequently produce hybrid outputs that mix both patterns in the same project, creating routing conflicts that are invisible to the builder but fatal in production.",
    impact:  "Partial application functionality at best. Authentication flows, API routes, and dynamic pages are the most commonly affected. Debugging without knowing the root cause consumes days.",
  },
  {
    title:   "Database Security Misconfiguration",
    symptom: "User data is accessible to unauthenticated requests. Admin endpoints respond to public API calls. Sensitive records appear in browser network tabs without authentication.",
    cause:   "AI-generated backends frequently provision a database with zero Row-Level Security policies. The application may appear to function correctly in local testing while being completely open to arbitrary read and write operations from anyone with the project URL.",
    impact:  "A live security vulnerability. Depending on the data stored, this ranges from a compliance violation to a critical breach risk. The longer it goes undetected, the greater the exposure.",
  },
  {
    title:   "Authentication State Persistence Failure",
    symptom: "Users log in successfully and are immediately redirected to a login screen. Session cookies are written and discarded within the same request cycle. Protected routes are either always accessible or always blocked regardless of authentication state.",
    cause:   "AI tools frequently generate authentication scaffolding that is structurally correct but environment-specific. JWT signing keys, callback URLs, and session cookie domains all require production-specific configuration that development builds never validate.",
    impact:  "The authentication layer is the security perimeter of the entire application. A broken auth flow means every user-facing feature gated behind a login is either inaccessible or unsecured.",
  },
  {
    title:   "Build Pipeline Structural Failure",
    symptom: "The CI/CD pipeline triggers on every commit but fails at the build step. Error messages reference missing modules, type mismatches, or configuration files that exist in the repository but are not found by the build container.",
    cause:   "AI-generated projects frequently include configuration files that work in a local environment with specific global dependencies installed but fail in a clean, isolated build container where only the declared project dependencies are available.",
    impact:  "No deployments ever complete. The development loop breaks entirely — every code change must be tested locally with no production validation path.",
  },
];

const TIMELINE = [
  {
    phase:  "Hour 0",
    label:  "Intake Received",
    detail: "A structured intake form submission described a Lovable-generated SaaS dashboard that had never successfully deployed. Ten hours of self-directed debugging had produced no forward progress.",
  },
  {
    phase:  "Hour 2",
    label:  "Audit Complete",
    detail: "A full repository audit identified four compounding infrastructure failures. Each was independently sufficient to prevent deployment. Together, they created a failure cascade that looked like a single opaque error to the client.",
  },
  {
    phase:  "Hour 6",
    label:  "Infrastructure Provisioned",
    detail: "A clean repository was established, a production database was provisioned with correct access control policies, and all environment variable boundaries were properly scoped and documented.",
  },
  {
    phase:  "Hour 14",
    label:  "Deployment Pipeline Live",
    detail: "A continuous deployment pipeline was established and the application reached a live production URL for the first time. Full end-to-end validation was performed across all core application flows.",
  },
  {
    phase:  "Hour 22",
    label:  "Handoff Delivered",
    detail: "A complete written handoff was delivered: repository access, all configuration documentation, a summary of every infrastructure decision made, and a 30-day async support window.",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteNavbar />

      {/* Header */}
      <section className="bg-white border-b border-slate-200 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">Case Studies</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
            The Infrastructure Failures AI Builders Leave Behind
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
            Every engagement we take starts with a broken deployment. This is a documented account of the patterns we see, the conditions that create them, and what a professional resolution looks like.
          </p>
        </div>
      </section>

      {/* Failure patterns */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">Failure Taxonomy</p>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
              Five Infrastructure Failure Patterns We Resolve on Every Engagement
            </h2>
            <p className="text-slate-600 text-base max-w-2xl mx-auto">
              These are not edge cases. They are the predictable output of applying AI code generation tools to production infrastructure problems the tools were never designed to solve.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {FAILURE_PATTERNS.map((pattern, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-7 py-5 border-b border-slate-100 bg-slate-50 flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">{pattern.title}</h3>
                </div>
                <div className="p-7 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Symptom</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{pattern.symptom}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2">Root Cause</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{pattern.cause}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">Business Impact</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{pattern.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study: Lovable rescue */}
      <section className="bg-white border-t border-slate-200 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                Case 001 — Confidential · Lovable Build Rescue
              </p>
              <h2 className="text-2xl font-bold text-slate-900">
                Ten-Hour Deployment Deadlock. Resolved in Under 24.
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Delivered &lt; 24 Hours
            </div>
          </div>

          {/* Situation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
              <p className="text-xs font-bold text-red-600 uppercase tracking-wider mb-3">The Situation</p>
              <p className="text-slate-700 text-sm leading-relaxed mb-3">
                A non-technical founder built a complete SaaS product using Lovable — a well-known AI application builder. The interface was functional. The user flows were polished. The application had genuine value.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                What the AI builder did not provide — and what no AI builder currently provides — was any path to production infrastructure. No repository. No deployment configuration. No database. No environment management.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                After ten consecutive hours of attempting self-directed deployment, the founder had made no measurable progress. Every attempt produced a different error. Each error felt like it was the final obstacle. None of them were.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
              <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-3">What Was Actually Broken</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                The audit identified four distinct infrastructure failures, each one independent, each one sufficient to prevent deployment on its own. The client had been debugging symptoms of all four simultaneously without knowing any of them existed.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Environment variable scope mismatch between local and production environments",
                  "Routing architecture collision between two incompatible Next.js patterns",
                  "Database access credentials incorrectly placed in client-accessible code",
                  "Deployment container configuration missing required output specification",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-slate-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-7 mb-10">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-8">Delivery Timeline</p>
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

          {/* Stack table */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-10">
            <div className="px-7 py-5 border-b border-slate-100 bg-slate-50">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Stack Transformation</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left px-7 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider w-1/4">Layer</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-red-500 uppercase tracking-wider">Before</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-emerald-600 uppercase tracking-wider">After</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Framework",    "Lovable AI export (no deployment config)", "Next.js 14 App Router (clean structure)"],
                    ["Repository",   "No version control",                        "GitHub with branch protection"],
                    ["Database",     "None",                                       "Supabase PostgreSQL with access control"],
                    ["Auth",         "Broken scaffolding",                         "Supabase JWT with correct session handling"],
                    ["Hosting",      "Local only — never reached production",       "Vercel with custom domain and SSL"],
                    ["Environment",  "No variable management",                     "Fully scoped and documented secrets"],
                    ["Delivery",     "10+ hours of failed attempts",               "Live production system under 24 hours"],
                  ].map(([layer, before, after], i) => (
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

          {/* Quote */}
          <div className="bg-blue-50 rounded-xl border border-blue-100 p-8 text-center mb-10">
            <p className="text-slate-700 text-lg italic leading-relaxed max-w-2xl mx-auto mb-4">
              &quot;How did you do that so fast? I&apos;ve been hitting a wall with this setup for over 10 hours straight.&quot;
            </p>
            <p className="text-slate-400 text-sm font-semibold">
              — Client, Anonymized · Lovable Build Rescue · June 2026
            </p>
          </div>

          {/* Key takeaway */}
          <div className="bg-slate-900 rounded-xl p-8">
            <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">The Pattern</p>
            <p className="text-white text-base font-semibold leading-relaxed mb-3">
              The client was not inexperienced. The problem was not solvable through more effort or better prompting.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              The failures were structural — built into the output of the AI tool itself. No amount of documentation reading, forum searching, or trial-and-error would have resolved all four simultaneously without a systematic infrastructure audit. This is the gap between AI-generated code and production-ready software. It is not a skill gap. It is an infrastructure gap. And it is resolvable.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 border-t border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Recognize any of these patterns?</h2>
          <p className="text-slate-600 mb-8">
            Submit your app in three minutes. We audit your codebase and return a written fix plan with a fixed price and confirmed delivery window.
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
