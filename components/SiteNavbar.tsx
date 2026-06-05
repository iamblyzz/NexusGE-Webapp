"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Services",     href: "/services"     },
  { label: "Process",      href: "/process"       },
  { label: "Case Studies", href: "/case-studies"  },
  { label: "Blog",         href: "/blog"          },
];

export default function SiteNavbar() {
  const pathname   = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Brand */}
          <Link href="/" className="text-slate-900 font-bold text-base tracking-tight whitespace-nowrap select-none">
            Nexus <span className="text-blue-600">Global</span> Enterprise
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors duration-150 ${
                  isActive(href) ? "text-blue-600 font-semibold" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/services#intake-form"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-md transition-colors shadow-sm"
            >
              Submit Your App
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            className="md:hidden text-slate-500 hover:text-slate-900 transition-colors"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`py-2.5 text-sm font-medium border-b border-slate-100 last:border-0 transition-colors ${
                isActive(href) ? "text-blue-600 font-semibold" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/services#intake-form"
            onClick={() => setOpen(false)}
            className="mt-3 w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-md transition-colors text-center"
          >
            Submit Your App
          </Link>
        </div>
      )}
    </header>
  );
}
