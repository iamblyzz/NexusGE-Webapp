"use client";

import { useTranslation } from "@/components/LanguageProvider";

export default function Footer() {
  const { t: { footer: t } } = useTranslation();
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 bg-white py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <p className="text-slate-900 font-bold text-sm mb-3">
              Nexus <span className="text-blue-600">Global</span> Enterprise
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">{t.tagline}</p>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Navigate</p>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Services",     id: "services"     },
                { label: "How It Works", id: "how-it-works" },
                { label: "Case Study",   id: "case-study"   },
                { label: "Get Help",     id: "intake-form"  },
              ].map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-slate-500 text-sm hover:text-slate-900 transition-colors text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">{t.stack.title}</p>
            <ul className="flex flex-col gap-2">
              {t.stack.items.map((item) => (
                <li key={item} className="text-slate-500 text-sm font-mono">{item}</li>
              ))}
            </ul>
          </div>

          {/* Policy */}
          <div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">{t.policy.title}</p>
            <ul className="flex flex-col gap-2">
              {t.policy.items.map((item) => (
                <li key={item} className="text-slate-500 text-sm">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-slate-400 text-xs">
            © {year} {t.copyrightPrefix}
          </p>
          <p className="text-slate-400 text-xs max-w-sm sm:text-right">{t.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
