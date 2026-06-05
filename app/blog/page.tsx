"use client";

import Link             from "next/link";
import SiteNavbar       from "@/components/SiteNavbar";
import Footer           from "@/components/Footer";
import { useTranslation } from "@/components/LanguageProvider";

const TAG_COLORS: Record<string, string> = {
  Infrastructure:           "bg-blue-50 border-blue-100 text-blue-600",
  Infraestrutura:           "bg-blue-50 border-blue-100 text-blue-600",
  "Database Security":      "bg-red-50 border-red-100 text-red-600",
  "Seguridad de Bases de Datos": "bg-red-50 border-red-100 text-red-600",
  "Segurança de Banco de Dados": "bg-red-50 border-red-100 text-red-600",
  Deployment:               "bg-emerald-50 border-emerald-100 text-emerald-600",
  Despliegue:               "bg-emerald-50 border-emerald-100 text-emerald-600",
  Implantação:              "bg-emerald-50 border-emerald-100 text-emerald-600",
  Architecture:             "bg-purple-50 border-purple-100 text-purple-600",
  Arquitectura:             "bg-purple-50 border-purple-100 text-purple-600",
  Arquitetura:              "bg-purple-50 border-purple-100 text-purple-600",
  "CI/CD":                  "bg-amber-50 border-amber-100 text-amber-600",
};

export default function BlogPage() {
  const { t } = useTranslation();
  const bl = t.blog;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteNavbar />

      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">
            {bl.sectionLabel}
          </p>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {bl.headline}
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
            {bl.subheadline}
          </p>
        </div>
      </section>

      {/* Post list */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col divide-y divide-slate-100">
          {bl.posts.map((post) => (
            <article key={post.slug} className="py-10 group">
              <div className="flex items-center gap-3 mb-3">
                <span className={`px-2.5 py-0.5 rounded-full border text-xs font-semibold ${TAG_COLORS[post.tag] ?? "bg-slate-50 border-slate-200 text-slate-600"}`}>
                  {post.tag}
                </span>
                <time className="text-slate-400 text-xs">{post.date}</time>
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-600 hover:text-blue-500 text-sm font-semibold inline-flex items-center gap-1 transition-colors"
              >
                {bl.readArticle}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </main>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">
            {bl.sectionLabel}
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">
            {bl.ctaHeadline}
          </h2>
          <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg mx-auto">
            {bl.ctaSubheadline}
          </p>
          <Link
            href="/services#intake-form"
            className="inline-block px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-lg transition-all shadow-sm hover:shadow-lg hover:shadow-blue-500/20"
          >
            {bl.ctaButton}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
