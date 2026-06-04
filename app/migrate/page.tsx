'use client';

import React, { useState } from 'react';

export default function MigratePage() {
  const [selectedTier, setSelectedTier] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const scrollToForm = (e: React.MouseEvent<HTMLButtonElement>, tierValue: string) => {
    e.preventDefault();
    setSelectedTier(tierValue);
    const formElement = document.getElementById('intake-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Your Supabase/backend sync logic executes here
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#ffffff] text-slate-900 font-sans antialiased selection:bg-blue-100">
      {/* Premium Sub-Header Notice */}
      <div className="bg-slate-50 border-b border-slate-200 py-2 text-center text-xs font-medium text-slate-600 px-4">
        Nexus Global Enterprise — Dedicated Infrastructure &amp; Production Migrations Engine
      </div>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 max-w-3xl mx-auto leading-tight">
          We pull your AI applications out of local development and deploy them to{' '}
          <span className="text-blue-600">bulletproof production infrastructure</span>.
        </h1>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          I design your system architecture, execute the build using high-velocity AI tools, validate the output against intense production requirements, and hand you a fully operational deployment.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={(e) => scrollToForm(e, 'stabilization')}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 transition duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Initiate System Intake
          </button>
          <a
            href="#pricing"
            className="px-6 py-3 bg-white text-slate-700 font-medium rounded-lg border border-slate-200 hover:bg-slate-50 transition duration-150 text-center"
          >
            Review Service Tiers
          </a>
        </div>
      </section>

      {/* Real Case Study Section (The 10-Hour Truth) */}
      <section className="bg-slate-50 border-y border-slate-200 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">
            Verified Operational Outcome
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            Case Study: Lovable-to-Production Migration
          </h2>

          <div className="mt-8 grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
                <h4 className="font-bold text-sm text-red-600 uppercase tracking-wider">The Client Bottleneck</h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  A non-technical founder spent over 10 hours completely stuck attempting to deploy her application. The AI builder generated a functional frontend codebase but provided zero path to live production hosting, a structured repository, or an external database setup.
                </p>
              </div>
              <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
                <h4 className="font-bold text-sm text-emerald-600 uppercase tracking-wider">The Nexus Engineering Fix</h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Migrated the raw codebase to an isolated GitHub repository, provisioned an enterprise-ready Supabase project instance with secure schemas, and established a continuous deployment pipeline to Vercel.
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm h-full flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 border-b border-slate-100 pb-3 text-lg">Project Architecture Metrics</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between text-sm"><span className="text-slate-500">Source Platform</span><span className="font-medium text-slate-800">Lovable AI</span></div>
                  <div className="flex justify-between text-sm"><span className="text-slate-500">Target Stack</span><span className="font-medium text-slate-800">GitHub / Supabase / Vercel</span></div>
                  <div className="flex justify-between text-sm"><span className="text-slate-500">Turnaround Window</span><span className="font-medium text-emerald-600 font-semibold">Under 24 Hours</span></div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100 bg-slate-50 -mx-6 -mb-6 p-6 rounded-b-xl">
                <p className="italic text-slate-600 text-sm">
                  &quot;How did you do that so fast? I&apos;ve been hitting a wall with this setup for over 10 hours straight.&quot;
                </p>
                <span className="text-xs font-semibold text-slate-500 block mt-2">— Client Anonymized Testimonial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section id="pricing" className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Flat-Rate Productized Engineering Tiers</h2>
          <p className="mt-3 text-slate-600">Select the precise level of architectural intervention your production system requires.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {/* Tier 1 */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Deployment Fix</h3>
              <p className="text-xs text-slate-500 mt-1">Single hosting bottleneck patch</p>
              <div className="my-5 text-3xl font-bold text-slate-900">$250 <span className="text-xs font-normal text-slate-500">flat fee</span></div>
              <ul className="text-xs text-slate-600 space-y-2.5 border-t border-slate-100 pt-4">
                <li className="flex items-center gap-2">✓ GitHub Pipeline Pairing</li>
                <li className="flex items-center gap-2">✓ Vercel / Netlify Linkage</li>
                <li className="flex items-center gap-2">✓ Single Environment Error Audit</li>
              </ul>
            </div>
            <button onClick={(e) => scrollToForm(e, 'deployment')} className="w-full mt-6 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs rounded-md transition">Select Infrastructure Intake</button>
          </div>

          {/* Tier 2 */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Core Migration</h3>
              <p className="text-xs text-slate-500 mt-1">Full stack deployment pipeline</p>
              <div className="my-5 text-3xl font-bold text-slate-900">$450 <span className="text-xs font-normal text-slate-500">flat fee</span></div>
              <ul className="text-xs text-slate-600 space-y-2.5 border-t border-slate-100 pt-4">
                <li className="flex items-center gap-2">✓ Automated Codebase Isolation</li>
                <li className="flex items-center gap-2">✓ Supabase Database Provisioning</li>
                <li className="flex items-center gap-2">✓ Production Pipeline Integration</li>
              </ul>
            </div>
            <button onClick={(e) => scrollToForm(e, 'migration')} className="w-full mt-6 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs rounded-md transition">Select Infrastructure Intake</button>
          </div>

          {/* Tier 3 */}
          <div className="bg-white border border-blue-200 rounded-xl p-6 shadow-sm flex flex-col justify-between relative ring-2 ring-blue-600/10">
            <span className="absolute -top-2.5 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full">Most Selected</span>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">App Stabilization</h3>
              <p className="text-xs text-slate-500 mt-1">Deep architectural repair</p>
              <div className="my-5 text-3xl font-bold text-slate-900">$750 <span className="text-xs font-normal text-slate-500">flat fee</span></div>
              <ul className="text-xs text-slate-600 space-y-2.5 border-t border-slate-100 pt-4">
                <li className="flex items-center gap-2">✓ Broken Auth Route Rebuilding</li>
                <li className="flex items-center gap-2">✓ Complex Schema Restructuring</li>
                <li className="flex items-center gap-2">✓ End-to-End Environment Validation</li>
              </ul>
            </div>
            <button onClick={(e) => scrollToForm(e, 'stabilization')} className="w-full mt-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs rounded-md transition">Select Infrastructure Intake</button>
          </div>

          {/* Tier 4 */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Co-Architecture</h3>
              <p className="text-xs text-slate-500 mt-1">Bespoke Enterprise Blueprinting</p>
              <div className="my-5 text-3xl font-bold text-slate-900">$2,500+ <span className="text-xs font-normal text-slate-500">base rate</span></div>
              <ul className="text-xs text-slate-600 space-y-2.5 border-t border-slate-100 pt-4">
                <li className="flex items-center gap-2">✓ 1-on-1 Strategic Systems Design</li>
                <li className="flex items-center gap-2">✓ Premium Security API Wrapping</li>
                <li className="flex items-center gap-2">✓ Structural Scaling Blueprints</li>
              </ul>
            </div>
            <button onClick={(e) => scrollToForm(e, 'blueprint')} className="w-full mt-6 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs rounded-md transition">Request Custom Quote</button>
          </div>
        </div>

        {/* Retainer Package Callout Banner */}
        <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-xl grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-md">Continuous Defense</span>
            <h3 className="font-bold text-slate-900 text-lg mt-1.5">Production Oversight &amp; Architecture Guard</h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              For $99/month, secure 1 scheduled systemic audit verification per week. Stops broken updates before they hit your users. Strict Boundary Rule: Emergency off-schedule infrastructure repairs are subject to a $150/hour priority surge fee.
            </p>
          </div>
          <div className="text-right">
            <button onClick={(e) => scrollToForm(e, 'retainer')} className="w-full py-2.5 bg-white border border-slate-300 text-slate-700 font-medium text-xs rounded-md hover:bg-slate-50 transition">Secure Architecture Guard</button>
          </div>
        </div>
      </section>

      {/* Structured Lead-Generation Intake Form */}
      <section id="intake-form" className="max-w-2xl mx-auto px-6 pb-24">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">System Intake &amp; Infrastructure Audit Request</h2>
          <p className="text-sm text-slate-500 mt-1">Submit your configuration details. Absolutely zero capital is collected upfront; scope allocation is audited and locked manually via email.</p>

          {formSubmitted ? (
            <div className="mt-8 p-6 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-sm font-medium text-center">
              ✓ Intake data transmitted successfully. Our engineering team will review your repository logs and transmit your Box Sign alignment agreement alongside your Stripe invoice within 12 hours.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Full Name</label>
                  <input required type="text" className="w-full px-3 py-2 border border-slate-200 rounded-md text-sm bg-white text-slate-900 focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Corporate Email</label>
                  <input required type="email" className="w-full px-3 py-2 border border-slate-200 rounded-md text-sm bg-white text-slate-900 focus:outline-none focus:border-blue-500" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Intended Engineering Target Tier</label>
                <select
                  required
                  value={selectedTier}
                  onChange={(e) => setSelectedTier(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-md text-sm bg-white text-slate-900 focus:outline-none focus:border-blue-500"
                >
                  <option value="" disabled>Select target scope profile...</option>
                  <option value="deployment">Infrastructure Deployment Fix ($250 Flat Fee)</option>
                  <option value="migration">End-to-End Core Migration ($450 Flat Fee)</option>
                  <option value="stabilization">Enterprise App Stabilization ($750 Flat Fee)</option>
                  <option value="blueprint">Bespoke Co-Architecture Blueprinting ($2,500+ Base)</option>
                  <option value="retainer">Production Oversight Retainer ($99/mo — Weekly Window)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Current AI Build Platform Source</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-medium text-slate-700">
                  {['Lovable', 'Bolt.new', 'v0 by Vercel', 'Cursor IDE', 'Framer / Webflow', 'Bubble / Other'].map((platform) => (
                    <label key={platform} className="flex items-center gap-2 p-2 border border-slate-100 rounded-md bg-slate-50 hover:bg-slate-100/50 cursor-pointer">
                      <input type="checkbox" name="platform" value={platform.toLowerCase()} className="rounded text-blue-600 focus:ring-blue-500" />
                      <span>{platform}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Repository Access URL or Core Error Symptoms</label>
                <textarea rows={4} placeholder="Paste your GitHub repository link, current Vercel build failure codes, or operational issues here..." className="w-full px-3 py-2 border border-slate-200 rounded-md text-sm bg-white text-slate-900 focus:outline-none focus:border-blue-500 placeholder:text-slate-400"></textarea>
              </div>

              <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold text-sm rounded-lg shadow-sm hover:bg-blue-700 transition duration-150">
                Submit System Architecture Manifest
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Legal Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-8 px-6 text-center text-xs text-slate-500">
        <p>© 2026 Nexus Global Enterprise. All technical architecture assets delivered under rigid flat-rate contracts are protected via Box Sign and subject to our &quot;As-Is&quot; Production Infrastructure Handoff Delivery Shield.</p>
        <p className="mt-2 text-slate-400">Operational Integrity Ensured Through Isolated Continuous Integration Frameworks.</p>
      </footer>
    </div>
  );
}
