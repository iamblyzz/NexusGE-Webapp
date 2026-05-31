export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-[#0a0a0a] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="text-white font-bold text-base mb-2">
              Nexus <span className="text-blue-500">Global</span> Enterprise
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Specialized in migrating AI-generated and no-code applications into production-grade infrastructure.
            </p>
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-slate-400 font-semibold mb-3">Services</p>
              <ul className="flex flex-col gap-2 text-slate-500">
                <li>Deployment Fix — $150</li>
                <li>Full Migration — $250</li>
                <li>App Stabilization — $400</li>
              </ul>
            </div>
            <div>
              <p className="text-slate-400 font-semibold mb-3">Stack</p>
              <ul className="flex flex-col gap-2 text-slate-500">
                <li>Next.js 14</li>
                <li>Supabase</li>
                <li>Vercel</li>
                <li>GitHub</li>
              </ul>
            </div>
            <div>
              <p className="text-slate-400 font-semibold mb-3">Policy</p>
              <ul className="flex flex-col gap-2 text-slate-500">
                <li>Scope confirmed first</li>
                <li>No payment upfront</li>
                <li>24–72 hr turnaround</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider + bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-slate-600 text-xs">
            &copy; {year} Nexus Global Enterprise. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            All work is scoped and confirmed before payment is requested. 24–72 hour turnaround on all engagements.
          </p>
        </div>
      </div>
    </footer>
  );
}
