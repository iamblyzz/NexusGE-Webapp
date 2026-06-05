"use client";

import Link             from "next/link";
import { useParams }    from "next/navigation";
import SiteNavbar       from "@/components/SiteNavbar";
import Footer           from "@/components/Footer";
import { useTranslation } from "@/components/LanguageProvider";

const TAG_COLORS: Record<string, string> = {
  Infrastructure:                "bg-blue-50 border-blue-100 text-blue-600",
  Infraestrutura:                "bg-blue-50 border-blue-100 text-blue-600",
  "Database Security":           "bg-red-50 border-red-100 text-red-600",
  "Seguridad de Bases de Datos": "bg-red-50 border-red-100 text-red-600",
  "Segurança de Banco de Dados": "bg-red-50 border-red-100 text-red-600",
  Deployment:                    "bg-emerald-50 border-emerald-100 text-emerald-600",
  Despliegue:                    "bg-emerald-50 border-emerald-100 text-emerald-600",
  Implantação:                   "bg-emerald-50 border-emerald-100 text-emerald-600",
  Architecture:                  "bg-purple-50 border-purple-100 text-purple-600",
  Arquitectura:                  "bg-purple-50 border-purple-100 text-purple-600",
  Arquitetura:                   "bg-purple-50 border-purple-100 text-purple-600",
  "CI/CD":                       "bg-amber-50 border-amber-100 text-amber-600",
};

export default function BlogPostPage() {
  const { slug }  = useParams<{ slug: string }>();
  const { t }     = useTranslation();
  const bl        = t.blog;

  const post = bl.posts.find((p) => p.slug === slug);

  // 404 state
  if (!post) {
    return (
      <div className="min-h-screen bg-white text-slate-900">
        <SiteNavbar />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <p className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-4">404</p>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Post not found</h1>
          <Link href="/blog" className="text-blue-600 hover:text-blue-500 font-semibold text-sm">
            {bl.backToBlog}
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Related posts (same tag, not current)
  const related = bl.posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteNavbar />

      {/* Article header */}
      <section className="border-b border-slate-200 bg-slate-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-slate-400 hover:text-slate-700 text-sm font-medium transition-colors inline-flex items-center gap-1.5 mb-8"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            {bl.backToBlog}
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className={`px-2.5 py-0.5 rounded-full border text-xs font-semibold ${TAG_COLORS[post.tag] ?? "bg-slate-50 border-slate-200 text-slate-600"}`}>
              {post.tag}
            </span>
            <time className="text-slate-400 text-xs">{post.date}</time>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Lead */}
        <p className="text-slate-600 text-lg leading-relaxed mb-10 pb-10 border-b border-slate-100 font-medium">
          {post.excerpt}
        </p>

        {/* Body paragraphs */}
        <div className="flex flex-col gap-6">
          {post.body.map((para, i) => (
            <p key={i} className="text-slate-700 text-base leading-[1.8]">
              {para}
            </p>
          ))}
        </div>

        {/* CTA inline */}
        <div className="mt-14 p-8 bg-slate-900 rounded-2xl text-center">
          <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">
            {bl.sectionLabel}
          </p>
          <h3 className="text-xl font-extrabold text-white mb-3">{bl.ctaHeadline}</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-md mx-auto">
            {bl.ctaSubheadline}
          </p>
          <Link
            href="/services#intake-form"
            className="inline-block px-7 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-lg transition-all shadow-sm"
          >
            {bl.ctaButton}
          </Link>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
              {bl.sectionLabel}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group bg-white rounded-xl border border-slate-200 p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-0.5 rounded-full border text-xs font-semibold ${TAG_COLORS[rp.tag] ?? "bg-slate-50 border-slate-200 text-slate-600"}`}>
                      {rp.tag}
                    </span>
                    <time className="text-slate-400 text-xs">{rp.date}</time>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {rp.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
