import Link from "next/link";

const EFFECTIVE_DATE = "June 1, 2026";

export default function RefundsPage() {
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
            Refund Policy
          </h1>
          <p className="text-slate-500 text-sm">
            Effective date: <strong>{EFFECTIVE_DATE}</strong> — Nexus Global Enterprise
          </p>
          <div className="mt-5 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm font-semibold">
              All sales are absolute and final. No refunds, credits, or chargebacks are issued under any circumstances once payment has been collected.
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="space-y-10 text-sm leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
              1. All Sales Are Absolute and Final
            </h2>
            <p className="text-slate-600 mb-4">
              <strong className="text-slate-900">All payments made to Nexus Global Enterprise are non-refundable and non-reversible.</strong> Once payment has been collected following written scope confirmation, no refunds, chargebacks, or partial credits will be issued under any circumstances, including but not limited to:
            </p>
            <ul className="space-y-3 text-slate-600">
              {[
                "Change of mind after scope confirmation and payment.",
                "Dissatisfaction with the speed of delivery within the agreed operational window.",
                "Discovery of additional technical issues outside the confirmed scope of work.",
                "Inability to access, operate, or understand the delivered infrastructure.",
                "Third-party platform outages (Vercel, Supabase, GitHub, or any other provider).",
                "Business closure, pivot, or abandonment of the project after delivery.",
                "Failure to provide required credentials, repository access, or environment variables within the delivery window.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
              2. Payment Is Collected After Scope Confirmation Only
            </h2>
            <p className="text-slate-600 mb-3">
              We never collect payment before delivering a written scope document. The scope document details exactly what will be delivered, at what fixed cost, and within what confirmed delivery window. By proceeding with payment, you explicitly acknowledge that you have reviewed and approved the scope.
            </p>
            <p className="text-slate-600">
              If you have a concern about the scope before payment, that is the appropriate time to raise it. Once payment is submitted, the scope is locked and work begins immediately.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
              3. &quot;As-Is&quot; Production Infrastructure Handoff Delivery Shield
            </h2>
            <p className="text-slate-600 mb-3">
              All deliverables are handed off <strong className="text-slate-900">&quot;As-Is&quot;</strong> at the time of confirmed scope delivery. Nexus Global Enterprise warrants that every item listed in the written scope document has been completed and validated at the time of handoff.
            </p>
            <p className="text-slate-600 mb-3">
              Beyond this explicit warranty, no additional warranties — express or implied — are provided. The client assumes full operational responsibility for all delivered infrastructure upon handoff.
            </p>
            <p className="text-slate-600">
              Issues arising after the handoff window closes — including but not limited to infrastructure degradation, third-party API changes, platform updates, or new bugs introduced by the client — are outside the scope of the original engagement and are not grounds for a refund.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
              4. Scope Disputes
            </h2>
            <p className="text-slate-600 mb-3">
              If you believe a confirmed scope item was not delivered, you must raise the dispute in writing to{" "}
              <a href="mailto:info@nexusge.com" className="text-blue-600 hover:underline">info@nexusge.com</a>{" "}
              within <strong className="text-slate-900">5 business days</strong> of the delivery notification.
            </p>
            <p className="text-slate-600">
              Disputes raised outside this window will not be considered. If a legitimate scope omission is confirmed on our end, we will complete the missing deliverable at no additional cost. Monetary refunds are not available under any scenario, including confirmed scope disputes.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
              5. Chargebacks & Payment Disputes
            </h2>
            <p className="text-slate-600 mb-3">
              Chargebacks initiated via payment processors (Stripe, PayPal, credit card networks) without prior written communication to Nexus Global Enterprise will be contested in full with all available documentation, including the signed scope confirmation, delivery records, and communication logs.
            </p>
            <p className="text-slate-600">
              We maintain complete records of all scope confirmations, delivery timestamps, and client communications. Unjustified chargebacks will be reported to relevant credit bureaus and payment networks where permitted by applicable law.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
              6. Retainer Cancellation
            </h2>
            <p className="text-slate-600">
              Monthly retainer agreements may be cancelled at any time with written notice. Cancellation takes effect at the end of the current billing cycle. No partial refunds are issued for unused days within a billing period. All retainer fees collected for the current billing cycle are non-refundable upon cancellation.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
              7. Questions
            </h2>
            <p className="text-slate-600">
              Questions about this policy should be directed to{" "}
              <a href="mailto:info@nexusge.com" className="text-blue-600 hover:underline">
                info@nexusge.com
              </a>
              {" "}with the subject line <strong className="text-slate-800">&quot;Refund Policy Inquiry&quot;</strong>. We respond to all legal correspondence within 48 business hours.
            </p>
          </section>

          {/* Notice box */}
          <section className="p-6 rounded-xl bg-slate-50 border border-slate-200">
            <p className="text-slate-700 text-xs font-semibold mb-2">Related Policies</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/terms" target="_blank" className="text-blue-600 hover:underline text-xs">
                Terms of Service →
              </Link>
              <Link href="/privacy" target="_blank" className="text-blue-600 hover:underline text-xs">
                Privacy Policy →
              </Link>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 px-4 text-center">
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400 mb-3">
          <Link href="/" className="hover:text-slate-700 transition-colors">Home</Link>
          <Link href="/terms" className="hover:text-slate-700 transition-colors">Terms of Service</Link>
          <Link href="/privacy" className="hover:text-slate-700 transition-colors">Privacy Policy</Link>
        </div>
        <p className="text-slate-400 text-xs">
          © {new Date().getFullYear()} Nexus Global Enterprise. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
