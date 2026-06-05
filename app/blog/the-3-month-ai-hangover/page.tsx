"use client";

import Link             from "next/link";
import SiteNavbar       from "@/components/SiteNavbar";
import Footer           from "@/components/Footer";
import { useTranslation } from "@/components/LanguageProvider";

const SLUG = "the-3-month-ai-hangover";

export default function AIHangoverPost() {
  const { t }  = useTranslation();
  const bl     = t.blog;
  const post   = bl.posts.find((p) => p.slug === SLUG);

  if (!post) return null;

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
            <span className="px-2.5 py-0.5 rounded-full border border-violet-100 bg-violet-50 text-violet-600 text-xs font-semibold">
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

        {/* Lead paragraph */}
        <p className="text-slate-600 text-lg leading-relaxed mb-10 pb-10 border-b border-slate-100 font-medium">
          {post.excerpt}
        </p>

        {/* Blockquote */}
        {post.quote && (
          <blockquote className="border-l-4 border-blue-600 bg-slate-50 p-6 italic text-slate-700 text-base leading-relaxed mb-12 rounded-r-lg">
            &ldquo;{post.quote}&rdquo;
          </blockquote>
        )}

        {/* Structured sections */}
        {post.sections && post.sections.length > 0 ? (
          <div className="flex flex-col gap-12">
            {post.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-xl font-bold text-slate-900 mb-5 pb-3 border-b border-slate-100">
                  {section.heading}
                </h2>
                <div className="flex flex-col gap-5">
                  {section.body.map((para, j) => (
                    <p key={j} className="text-slate-700 text-base leading-[1.8]">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Fallback: flat body paragraphs */
          <div className="flex flex-col gap-6">
            {post.body.map((para, i) => (
              <p key={i} className="text-slate-700 text-base leading-[1.8]">{para}</p>
            ))}
          </div>
        )}

        {/* CTA container */}
        <div className="mt-16 p-8 bg-slate-900 rounded-2xl">
          <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">
            {bl.sectionLabel}
          </p>
          <p className="text-white text-base leading-relaxed mb-6 font-medium">
            {post.ctaText ?? bl.ctaSubheadline}
          </p>
          <Link
            href="/services#intake-form"
            className="inline-block px-7 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-lg transition-all shadow-sm hover:shadow-lg hover:shadow-blue-500/20"
          >
            {bl.ctaButton}
          </Link>
        </div>
      </article>

      {/* Related posts */}
      <section className="border-t border-slate-200 bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
            {bl.sectionLabel}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {bl.posts
              .filter((p) => p.slug !== SLUG)
              .slice(0, 2)
              .map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group bg-white rounded-xl border border-slate-200 p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200"
                >
                  <time className="text-slate-400 text-xs block mb-2">{rp.date}</time>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {rp.title}
                  </h4>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
