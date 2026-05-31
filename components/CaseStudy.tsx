const timeline = [
  {
    phase: "Hour 0",
    label: "Intake Received",
    detail: "Client submitted an AI-generated Lovable app — zero deployment config, no database, broken auth routes.",
  },
  {
    phase: "Hour 4",
    label: "Scope Confirmed",
    detail: "Full migration scope sent and approved: Next.js 14 rewrite, Supabase schema, Vercel deploy pipeline.",
  },
  {
    phase: "Hour 24",
    label: "Migration Underway",
    detail: "Codebase migrated to Next.js App Router. Supabase database live with RLS policies. GitHub repo initialized.",
  },
  {
    phase: "Hour 68",
    label: "Live in Production",
    detail: "Application deployed to Vercel with custom domain, environment variables configured, and smoke tests passing.",
  },
];

const stackItems = [
  { label: "Framework", before: "Lovable (AI-gen)", after: "Next.js 14" },
  { label: "Database", before: "None", after: "Supabase (PostgreSQL)" },
  { label: "Auth", before: "Broken mock", after: "Supabase Auth" },
  { label: "Hosting", before: "Local only", after: "Vercel (Production)" },
  { label: "Version Control", before: "None", after: "GitHub (CI/CD)" },
  { label: "Delivery", before: "—", after: "Under 72 hours" },
];

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Case Study
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Real Work. Real Results.
          </h2>
          <p className="mt-4 text-slate-400 text-base max-w-xl mx-auto">
            From un-deployed AI prototype to verified production stack in under 72 hours.
          </p>
        </div>

        {/* Main panel */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden">
          {/* Panel header */}
          <div className="px-6 py-5 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">Client A — Confidential</p>
              <h3 className="text-lg font-bold text-white">AI Prototype → Production App</h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Delivered in &lt; 72 Hours
            </div>
          </div>

          {/* Stack comparison */}
          <div className="px-6 py-6 border-b border-slate-800">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Stack Transformation</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left">
                    <th className="pb-3 text-slate-500 font-medium w-1/3">Layer</th>
                    <th className="pb-3 text-red-400/80 font-medium w-1/3">Before</th>
                    <th className="pb-3 text-green-400 font-medium w-1/3">After</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {stackItems.map((item) => (
                    <tr key={item.label}>
                      <td className="py-3 text-slate-400 font-mono text-xs">{item.label}</td>
                      <td className="py-3 text-red-400/70 text-xs">{item.before}</td>
                      <td className="py-3 text-green-400 text-xs font-medium">{item.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Timeline */}
          <div className="px-6 py-6">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-6">Delivery Timeline</p>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[18px] top-3 bottom-3 w-px bg-slate-800" />

              <div className="flex flex-col gap-6">
                {timeline.map((item, idx) => (
                  <div key={idx} className="flex gap-5 items-start">
                    <div className="relative flex-shrink-0 w-9 h-9 rounded-full bg-blue-600/10 border border-blue-600/30 flex items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                    </div>
                    <div className="pt-1 flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-blue-400">{item.phase}</span>
                        <span className="text-sm font-semibold text-white">{item.label}</span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
