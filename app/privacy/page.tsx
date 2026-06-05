import Link from "next/link";

const EFFECTIVE_DATE = "June 1, 2026";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* Nav */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-slate-900 font-bold text-sm tracking-tight select-none">
            Nexus <span className="text-blue-600">Global</span> Enterprise
          </Link>
          <Link href="/" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Header */}
      <section className="border-b border-slate-200 bg-slate-50 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-3">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-sm">
            Effective date: <strong>{EFFECTIVE_DATE}</strong> — Nexus Global Enterprise
          </p>
          <p className="mt-3 text-slate-500 text-sm leading-relaxed max-w-2xl">
            Plain English. No legal obscuration. Here is exactly what data we collect, why we collect it, and what we do — and do not do — with it.
          </p>
        </div>
      </section>

      {/* Body */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="space-y-10 text-sm leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
              1. Who We Are
            </h2>
            <p className="text-slate-600">
              Nexus Global Enterprise is a B2B infrastructure engineering firm that migrates AI-generated applications into production-grade deployments. We operate this website at nexusge.com and accept client intake through the forms hosted here. If you have questions about this policy, email us at{" "}
              <a href="mailto:info@nexusge.com" className="text-blue-600 hover:underline">
                info@nexusge.com
              </a>.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
              2. What Data We Collect
            </h2>
            <p className="text-slate-600 mb-4">We collect only what is strictly necessary to deliver our services.</p>
            <div className="rounded-xl border border-slate-200 overflow-hidden">
              <table className="w-full text-xs">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left px-4 py-3 text-slate-500 font-semibold uppercase tracking-wider w-1/3">Data Type</th>
                    <th className="text-left px-4 py-3 text-slate-500 font-semibold uppercase tracking-wider w-1/3">Why We Collect It</th>
                    <th className="text-left px-4 py-3 text-slate-500 font-semibold uppercase tracking-wider">Retention</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Name & Email", "To identify your intake request and communicate scope, invoicing, and delivery confirmations.", "Duration of engagement + 90 days"],
                    ["Phone (optional)", "Provided voluntarily for urgent communication if requested.", "Duration of engagement"],
                    ["Project scope description", "To audit your application, define a written scope, and deliver the confirmed work.", "Duration of engagement + 90 days"],
                    ["Selected service tier", "To route your request to the correct delivery workflow.", "Duration of engagement"],
                    ["IP address (server log)", "Standard server-side request logging via Vercel infrastructure. Not used for tracking.", "30 days, automated rotation"],
                  ].map(([type, reason, retention], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-4 py-3 font-medium text-slate-800 align-top">{type}</td>
                      <td className="px-4 py-3 text-slate-600 align-top">{reason}</td>
                      <td className="px-4 py-3 text-slate-500 align-top">{retention}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
              3. What We Do Not Collect
            </h2>
            <ul className="space-y-2 text-slate-600">
              {[
                "We do not use advertising trackers, pixel tracking, or third-party analytics scripts.",
                "We do not build user profiles or behavioral datasets.",
                "We do not sell, rent, or share your personal information with any third party for marketing purposes.",
                "We do not use session recording, heatmap tools, or conversion tracking software.",
                "We do not require account creation, passwords, or social login.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
              4. How We Store Your Data
            </h2>
            <p className="text-slate-600 mb-3">
              Intake form submissions are stored in a Supabase PostgreSQL database hosted in the United States (us-east-1 region). Access is restricted to service-role credentials used exclusively by our server-side API route. No client-side code can read submission data. Row-Level Security policies block all anonymous read access.
            </p>
            <p className="text-slate-600">
              Email notifications triggered by form submissions are delivered via Resend. Resend processes your name and email to route the notification to our inbox. No submission data is stored by Resend beyond standard email delivery logs, which expire per their own retention policy.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
              5. Cookies & Browser Storage
            </h2>
            <div className="p-5 rounded-xl bg-blue-50 border border-blue-100 mb-4">
              <p className="text-blue-800 text-sm font-semibold mb-1">Zero-Cookie Policy</p>
              <p className="text-blue-700 text-sm">
                This website sets no first-party cookies, no tracking cookies, and no persistent browser storage. No cookie consent banner is required because there is nothing to consent to.
              </p>
            </div>
            <p className="text-slate-600">
              Vercel, our hosting provider, may set infrastructure-level cookies for routing and performance (e.g., edge network affinity). These are strictly technical in nature, contain no personally identifiable information, and are outside our control. You can inspect and clear them via your browser&apos;s developer tools at any time.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
              6. Data Minimization Protocol
            </h2>
            <p className="text-slate-600 mb-3">
              We apply a strict minimization standard: if we do not need a piece of data to deliver your confirmed scope, we do not ask for it, store it, or process it.
            </p>
            <p className="text-slate-600">
              After 90 days following engagement close, intake submission records are permanently deleted from our database. No archive copies are retained. Email thread records remain in our inbox only as long as operationally necessary and are governed by our email provider&apos;s standard retention settings.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
              7. Your Rights
            </h2>
            <p className="text-slate-600 mb-3">
              Regardless of your jurisdiction, you may at any time:
            </p>
            <ul className="space-y-2 text-slate-600">
              {[
                "Request a copy of any personal data we hold about you.",
                "Request correction of inaccurate data.",
                "Request permanent deletion of your submission record.",
                "Withdraw consent for any ongoing communication.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 mt-3">
              To exercise any of these rights, email{" "}
              <a href="mailto:info@nexusge.com" className="text-blue-600 hover:underline">
                info@nexusge.com
              </a>{" "}
              with the subject line &quot;Data Request.&quot; We will respond within 5 business days.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
              8. Changes to This Policy
            </h2>
            <p className="text-slate-600">
              If we materially change how we handle personal data, we will update the effective date at the top of this page. We will not retroactively apply weaker protections to data collected under a previous version of this policy.
            </p>
          </section>

          {/* Contact */}
          <section className="p-6 rounded-xl bg-slate-50 border border-slate-200">
            <p className="text-slate-500 text-xs">
              <strong className="text-slate-700">Privacy questions?</strong>{" "}
              Contact{" "}
              <a href="mailto:info@nexusge.com" className="text-blue-600 hover:underline">
                info@nexusge.com
              </a>
              . We do not route privacy inquiries through third-party ticketing systems.
            </p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 px-4 text-center">
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400 mb-3">
          <Link href="/" className="hover:text-slate-700 transition-colors">Home</Link>
          <Link href="/blog" className="hover:text-slate-700 transition-colors">Blog</Link>
          <Link href="/terms" className="hover:text-slate-700 transition-colors">Terms of Service</Link>
        </div>
        <p className="text-slate-400 text-xs">
          © {new Date().getFullYear()} Nexus Global Enterprise. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
