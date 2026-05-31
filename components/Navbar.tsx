"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <span className="text-white font-bold text-lg tracking-tight whitespace-nowrap">
            Nexus{" "}
            <span className="text-blue-500">Global</span>{" "}
            Enterprise
          </span>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {(
              [
                ["Services", "services"],
                ["How It Works", "how-it-works"],
                ["Case Study", "case-study"],
                ["Get Help", "intake-form"],
              ] as const
            ).map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button
            onClick={() => scrollTo("intake-form")}
            className="hidden md:inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-md transition-colors duration-200"
          >
            Submit Your App
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-slate-400 hover:text-white"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-[#0a0a0a] px-4 py-4 flex flex-col gap-4">
          {(
            [
              ["Services", "services"],
              ["How It Works", "how-it-works"],
              ["Case Study", "case-study"],
              ["Get Help", "intake-form"],
            ] as const
          ).map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-slate-300 hover:text-white text-sm font-medium text-left transition-colors"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("intake-form")}
            className="mt-2 w-full px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-md transition-colors"
          >
            Submit Your App
          </button>
        </div>
      )}
    </header>
  );
}
