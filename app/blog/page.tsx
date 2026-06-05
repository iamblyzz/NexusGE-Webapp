import Link from "next/link";

const POSTS = [
  {
    slug:    "why-ai-builders-fail-at-deployment",
    date:    "May 28, 2026",
    tag:     "Infrastructure",
    title:   "Why AI Builders Fail at Deployment (And What Actually Fixes It)",
    excerpt:
      "Lovable, Bolt, and v0 generate impressive frontend code. But they generate zero production infrastructure. Here is the exact gap between a local preview and a live, hardened deployment — and why closing it requires engineering judgment, not more prompts.",
  },
  {
    slug:    "supabase-rls-the-silent-killer",
    date:    "May 22, 2026",
    tag:     "Database Security",
    title:   "Supabase RLS: The Silent Killer in AI-Generated Backends",
    excerpt:
      "Row-Level Security is the single most important layer in a Supabase deployment. AI tools almost never configure it correctly. This is what a broken RLS policy looks like in production, and how we audit and patch it before your data is exposed.",
  },
  {
    slug:    "vercel-env-vars-the-right-way",
    date:    "May 15, 2026",
    tag:     "Deployment",
    title:   "Vercel Environment Variables: The Right Way to Structure a Production Secret",
    excerpt:
      "NEXT_PUBLIC_ prefixes, service-role keys leaking into client bundles, and missing variable declarations at build time. These are the three most common environment variable failures in AI-generated Next.js apps — and every one of them is preventable.",
  },
  {
    slug:    "next-js-app-router-migration-guide",
    date:    "May 8, 2026",
    tag:     "Architecture",
    title:   "Migrating an AI Export to Next.js 14 App Router: A Real-World Playbook",
    excerpt:
      "The Pages Router and the App Router are not interchangeable. When AI tools output a mix of both, or default to patterns that break under the App Router, the result is a build that compiles locally and crashes in production. Here is the migration playbook we run on every client codebase.",
  },
  {
    slug:    "ci-cd-for-non-technical-founders",
    date:    "April 30, 2026",
    tag:     "CI/CD",
    title:   "CI/CD for Non-Technical Founders: What You Actually Need on Day One",
    excerpt:
      "You do not need a Kubernetes cluster. You need a branch protection rule, a working build check, and a deployment that does not break when you push a typo. Here is the minimum viable CI/CD stack for a solo founder shipping on Vercel.",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* Nav */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-slate-900 font-bold text-sm tracking-tight select-none">
            Nexus <span className="text-blue-600">Global</span> Enterprise
          </Link>
          <Link
            href="/"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-md transition-colors shadow-sm"
          >
            Submit Your App
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">
            Engineering Journal
          </p>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Production Infrastructure Insights
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
            Technical writeups on migrating AI-generated applications to hardened production infrastructure. Real deployments, real failures, real fixes.
          </p>
        </div>
      </section>

      {/* Post list */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col divide-y divide-slate-100">
          {POSTS.map((post) => (
            <article key={post.slug} className="py-10 group">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold">
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
              <span className="text-blue-600 text-sm font-semibold inline-flex items-center gap-1">
                Read article
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </article>
          ))}
        </div>
      </main>

      {/* CTA Banner */}
      <section className="border-t border-slate-200 bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">
            Stop Debugging. Start Deploying.
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug mb-4 tracking-tight">
            AI tools build interfaces, not enterprise pipelines.
          </h2>
          <p className="text-slate-400 text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Stop burn-testing your API credits trying to debug infrastructure errors. Submit your repository manifest to Nexus Global Enterprise for a professional production alignment review within 12 hours.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-lg transition-all shadow-sm hover:shadow-lg hover:shadow-blue-500/20"
          >
            Submit Your App for Review →
          </Link>
          <p className="mt-4 text-slate-500 text-xs">
            Payment collected only after scope is confirmed in writing.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900 py-8 px-4 text-center">
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
          <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
        </div>
        <p className="mt-4 text-slate-600 text-xs">
          © {new Date().getFullYear()} Nexus Global Enterprise. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
