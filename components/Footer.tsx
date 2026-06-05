"use client";

import Link from "next/link";
import { useTranslation } from "@/components/LanguageProvider";

export default function Footer() {
  const { t: { footer: t } } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-slate-900 font-bold text-sm mb-3 inline-block">
              Nexus <span className="text-blue-600">Global</span> Enterprise
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mt-2 max-w-xs">{t.tagline}</p>
          </div>

          {/* Company */}
          <div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Company</p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Services",     href: "/services"             },
                { label: "Process",      href: "/process"               },
                { label: "Case Studies", href: "/case-studies"          },
                { label: "Blog",         href: "/blog"                  },
                { label: "Get Help",     href: "/services#intake-form"  },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-slate-500 text-sm hover:text-slate-900 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Legal</p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Terms of Service", href: "/terms"    },
                { label: "Privacy Policy",   href: "/privacy"  },
                { label: "Refund Policy",    href: "/refunds"  },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 text-sm hover:text-slate-900 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
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
