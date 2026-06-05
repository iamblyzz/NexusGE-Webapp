"use client";

import Link             from "next/link";
import SiteNavbar       from "@/components/SiteNavbar";
import { useTranslation } from "@/components/LanguageProvider";

export default function TermsPage() {
  const { t } = useTranslation();
  const lg = t.legal;
  const p  = lg.terms;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteNavbar />

      <section className="border-b border-slate-200 bg-slate-50 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-3">{lg.label}</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">{p.title}</h1>
          <p className="text-slate-500 text-sm">
            {/* Effective date label stays locale-aware via dictionary */}
            Effective date: <strong>{lg.effectiveDate}</strong> — Nexus Global Enterprise
          </p>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="space-y-10 text-sm leading-relaxed">

          {p.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-lg font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
                {section.heading}
              </h2>
              {section.paras.slice(0, 1).map((para, j) => (
                <p key={j} className="text-slate-600 mb-3">{para}</p>
              ))}
              {section.items && (
                <ul className="space-y-2 text-slate-600 mb-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.paras.slice(1).map((para, j) => (
                <p key={j} className="text-slate-600 mt-3">{para}</p>
              ))}
            </section>
          ))}

          <section className="p-6 rounded-xl bg-slate-50 border border-slate-200">
            <p className="text-slate-500 text-xs">
              {p.contactNote.split("info@nexusge.com")[0]}
              <a href="mailto:info@nexusge.com" className="text-blue-600 hover:underline">info@nexusge.com</a>
              {p.contactNote.split("info@nexusge.com")[1]}
            </p>
          </section>

        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8 px-4 text-center">
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400 mb-3">
          <Link href="/" className="hover:text-slate-700 transition-colors">{lg.footer.home}</Link>
          <Link href="/blog" className="hover:text-slate-700 transition-colors">{lg.footer.blog}</Link>
          <Link href="/privacy" className="hover:text-slate-700 transition-colors">{lg.footer.privacy}</Link>
        </div>
        <p className="text-slate-400 text-xs">© {new Date().getFullYear()} {lg.footer.copyright}</p>
      </footer>
    </div>
  );
}
