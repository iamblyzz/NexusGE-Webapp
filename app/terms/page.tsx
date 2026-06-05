import Link from "next/link";

const EFFECTIVE_DATE = "June 1, 2026";

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-slate-500 text-sm">
            Effective date: <strong>{EFFECTIVE_DATE}</strong> — Nexus Global Enterprise
          </p>
        </div>
      </section>

      {/* Body */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-10">

          {/* 1 */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
              1. Acceptance of Terms
            </h2>
            <p className="text-slate-600">
              By submitting an intake form, engaging our services via email, or making any payment to Nexus Global Enterprise, you unconditionally agree to be bound by these Terms of Service. If you do not agree, do not use our services.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
              2. All Sales Are Absolute and Final
            </h2>
            <p className="text-slate-600 mb-3">
              <strong className="text-slate-900">All payments made to Nexus Global Enterprise are non-refundable and non-reversible.</strong> Once payment has been collected following written scope confirmation, no refunds, chargebacks, or partial credits will be issued under any circumstances, including but not limited to:
            </p>
            <ul className="list-none space-y-2 text-slate-600 pl-0">
              {[
                "Change of mind after scope confirmation.",
                "Dissatisfaction with the speed of delivery within the agreed operational window.",
                "Discovery of additional technical issues outside the confirmed scope.",
                "Inability to access or operate the delivered infrastructure.",
                "Third-party platform outages (Vercel, Supabase, GitHub, or similar).",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 mt-3">
              Disputes initiated via payment processor chargebacks without prior written communication to Nexus Global Enterprise will be contested in full.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
              3. &quot;As-Is&quot; Production Infrastructure Handoff Delivery Shield
            </h2>
            <p className="text-slate-600 mb-3">
              All deliverables — including but not limited to migrated repositories, provisioned database instances, configured deployment pipelines, and any written architectural documentation — are delivered <strong className="text-slate-900">&quot;As-Is&quot;</strong> at the time of handoff.
            </p>
            <p className="text-slate-600 mb-3">
              Nexus Global Enterprise warrants that all confirmed scope items have been completed and validated against the specifications agreed upon in writing prior to payment. Beyond this, no additional warranties, express or implied, are provided.
            </p>
            <p className="text-slate-600">
              The client assumes full operational responsibility for the delivered infrastructure upon handoff. Nexus Global Enterprise bears no liability for degradation, outages, data loss, or security failures occurring after the delivery window has closed.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
              4. Scope of Work & Delivery Windows
            </h2>
            <p className="text-slate-600 mb-3">
              All work is scoped and confirmed in writing before any payment is requested. The confirmed scope document constitutes the full and complete definition of deliverables. No verbal agreements, informal chat messages, or implied expectations extend the scope.
            </p>
            <p className="text-slate-600">
              Delivery windows (24-hour, 48-hour, 72-hour, or custom sprint) begin upon payment clearance. Delays caused by client-side access restrictions, late credential provision, or third-party platform outages do not constitute a breach of our delivery commitment.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
              5. Production Oversight Retainer — Boundary Terms
            </h2>
            <p className="text-slate-600 mb-3">
              Monthly retainer clients receive <strong className="text-slate-900">one (1) scheduled technical audit window per calendar week</strong>, conducted within a fixed time slot confirmed at retainer activation. This constitutes the entirety of the scheduled service.
            </p>
            <p className="text-slate-600">
              Infrastructure interventions requested outside the designated weekly window are classified as emergency off-schedule priority work and are billed separately at a rate of <strong className="text-slate-900">$150 USD per hour</strong>, invoiced immediately upon request. Retainer billing is monthly, in advance, and non-refundable for any partial month of service.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
              6. Co-Architecture Bespoke Engagements
            </h2>
            <p className="text-slate-600">
              Bespoke Co-Architecture engagements require execution of a Mutual Responsibility Release Framework prior to commencement. This document defines shared obligations, intellectual property ownership, confidentiality terms, and liability boundaries specific to the engagement. No Co-Architecture work begins without full legal sign-off from both parties.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
              7. Intellectual Property
            </h2>
            <p className="text-slate-600">
              Upon receipt of final payment, the client receives full ownership of all custom code, configurations, and infrastructure assets delivered within the confirmed scope. Nexus Global Enterprise retains no claim over client repositories, databases, or deployment pipelines following handoff. Nexus Global Enterprise retains the right to reference engagements in marketing materials in anonymized, non-identifying form unless otherwise agreed in writing.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
              8. Limitation of Liability
            </h2>
            <p className="text-slate-600">
              To the maximum extent permitted by applicable law, Nexus Global Enterprise shall not be liable for any indirect, incidental, consequential, punitive, or special damages arising from the use of, or inability to use, our services — including lost revenue, lost data, or business interruption. Our total aggregate liability shall not exceed the total amount paid by the client for the specific engagement giving rise to the claim.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
              9. Governing Law
            </h2>
            <p className="text-slate-600">
              These Terms are governed by the laws of the jurisdiction in which Nexus Global Enterprise is registered. Any disputes shall be resolved through binding arbitration before a mutually agreed arbitrator, with each party bearing its own legal costs.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
              10. Modifications
            </h2>
            <p className="text-slate-600">
              Nexus Global Enterprise reserves the right to update these Terms at any time. Updated Terms are effective upon publication at this URL. Continued use of our services after publication constitutes acceptance.
            </p>
          </section>

          {/* Contact */}
          <section className="p-6 rounded-xl bg-slate-50 border border-slate-200">
            <p className="text-slate-500 text-xs">
              <strong className="text-slate-700">Questions regarding these Terms?</strong>{" "}
              Contact us at{" "}
              <a href="mailto:info@nexusge.com" className="text-blue-600 hover:underline">
                info@nexusge.com
              </a>
              . We respond to all legal inquiries within 48 business hours.
            </p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 px-4 text-center">
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400 mb-3">
          <Link href="/" className="hover:text-slate-700 transition-colors">Home</Link>
          <Link href="/blog" className="hover:text-slate-700 transition-colors">Blog</Link>
          <Link href="/privacy" className="hover:text-slate-700 transition-colors">Privacy Policy</Link>
        </div>
        <p className="text-slate-400 text-xs">
          © {new Date().getFullYear()} Nexus Global Enterprise. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
