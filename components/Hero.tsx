"use client";

import Link             from "next/link";
import { useTranslation } from "@/components/LanguageProvider";

const STACK = ["Next.js 15", "Vercel", "Supabase", "GitHub", "TypeScript", "Tailwind CSS"];

// ── Architecture pipeline diagram data ───────────────────────────────────────
const PIPELINE: Array<{
  label:    string;
  sublabel: string;
  accent:   string;
  tag:      string;
}> = [
  { label: "AI Application",       sublabel: "Raw export — undeployed",      accent: "#f59e0b", tag: "INPUT"      },
  { label: "Repository Audit",     sublabel: "Codebase & config analysis",   accent: "#3b82f6", tag: "ANALYSIS"   },
  { label: "GitHub",               sublabel: "Version control & branching",  accent: "#64748b", tag: "PLATFORM"   },
  { label: "Security Hardening",   sublabel: "RLS · Auth · Env scoping",     accent: "#7c3aed", tag: "SECURITY"   },
  { label: "Supabase",             sublabel: "Database schema & policies",   accent: "#059669", tag: "DATA"       },
  { label: "CI/CD Pipeline",       sublabel: "Automated build & test gate",  accent: "#2563eb", tag: "PIPELINE"   },
  { label: "Vercel Deployment",    sublabel: "Edge-optimised production",    accent: "#0ea5e9", tag: "DEPLOY"     },
  { label: "Production Monitoring",sublabel: "Health · Logs · Uptime",       accent: "#10b981", tag: "LIVE"       },
];

function ArchDiagram() {
  const NODE_H   = 44;
  const NODE_GAP = 24;
  const STRIDE   = NODE_H + NODE_GAP;
  const NODE_X   = 20;
  const NODE_W   = 268;
  const LABEL_X  = 40;
  const START_Y  = 52;
  const SVG_H    = START_Y + PIPELINE.length * STRIDE - NODE_GAP + 20;

  return (
    <svg
      viewBox={`0 0 308 ${SVG_H}`}
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-label="Infrastructure deployment pipeline architecture diagram"
    >
      {/* ── Background panel ─────────────────────────────────────────── */}
      <rect width="308" height={SVG_H} fill="#070f1e" />
      <rect width="308" height={SVG_H} fill="none" stroke="#1e3a5f" strokeWidth="1" />

      {/* ── Dot grid (blueprint feel) ─────────────────────────────────── */}
      {Array.from({ length: Math.ceil(SVG_H / 20) }).map((_, row) =>
        Array.from({ length: Math.ceil(308 / 20) }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={col * 20 + 4}
            cy={row * 20 + 4}
            r="0.8"
            fill="#1e3a5f"
            opacity="0.5"
          />
        ))
      )}

      {/* ── Header bar ───────────────────────────────────────────────── */}
      <rect x="0" y="0" width="308" height="36" fill="#0d1928" />
      <rect x="0" y="35" width="308" height="1" fill="#1e3a5f" />
      <text x="12" y="22" fill="#475569" fontFamily="monospace" fontSize="8" letterSpacing="2">
        NGE — INFRASTRUCTURE PIPELINE
      </text>
      {/* Live indicator */}
      <circle cx="287" cy="18" r="3.5" fill="#059669" />
      <circle cx="287" cy="18" r="6" fill="#059669" opacity="0.2" />
      <text x="275" y="26" fill="#059669" fontFamily="monospace" fontSize="6.5" textAnchor="end">LIVE</text>

      {/* ── Pipeline nodes ─────────────────────────────────────────────── */}
      {PIPELINE.map((node, i) => {
        const y     = START_Y + i * STRIDE;
        const isLast = i === PIPELINE.length - 1;

        return (
          <g key={node.label}>
            {/* Connector line from previous */}
            {i > 0 && (
              <>
                <line
                  x1="154" y1={y - NODE_GAP}
                  x2="154" y2={y - 4}
                  stroke="#1e3a5f"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                />
                {/* Arrow head */}
                <polygon
                  points={`150,${y - 4} 158,${y - 4} 154,${y + 1}`}
                  fill="#1e3a5f"
                />
              </>
            )}

            {/* Node background */}
            <rect
              x={NODE_X}
              y={y}
              width={NODE_W}
              height={NODE_H}
              fill="#0d1928"
              stroke="#162037"
              strokeWidth="1"
            />

            {/* Left accent bar */}
            <rect
              x={NODE_X}
              y={y}
              width="3"
              height={NODE_H}
              fill={node.accent}
            />

            {/* Main label */}
            <text
              x={LABEL_X}
              y={y + 17}
              fill="#e2e8f0"
              fontFamily="monospace"
              fontSize="10.5"
              fontWeight="600"
            >
              {node.label}
            </text>

            {/* Sub-label */}
            <text
              x={LABEL_X}
              y={y + 31}
              fill="#475569"
              fontFamily="monospace"
              fontSize="8"
            >
              {node.sublabel}
            </text>

            {/* Category tag — right-aligned */}
            <text
              x={NODE_X + NODE_W - 8}
              y={y + 27}
              fill={node.accent}
              fontFamily="monospace"
              fontSize="6.5"
              letterSpacing="1.5"
              textAnchor="end"
              opacity="0.7"
            >
              {node.tag}
            </text>

            {/* Node index */}
            <text
              x={NODE_X + 8}
              y={y + 27}
              fill="#1e3a5f"
              fontFamily="monospace"
              fontSize="8"
              fontWeight="700"
            >
              {String(i + 1).padStart(2, "0")}
            </text>

            {/* Bottom border highlight on last node */}
            {isLast && (
              <rect
                x={NODE_X}
                y={y + NODE_H - 1}
                width={NODE_W}
                height="1"
                fill={node.accent}
                opacity="0.6"
              />
            )}
          </g>
        );
      })}

      {/* ── Bottom label ──────────────────────────────────────────────── */}
      <text
        x="154"
        y={SVG_H - 7}
        fill="#1e3a5f"
        fontFamily="monospace"
        fontSize="7"
        textAnchor="middle"
        letterSpacing="1"
      >
        NEXUS GLOBAL ENTERPRISE — DEPLOYMENT ARCHITECTURE
      </text>
    </svg>
  );
}

export default function Hero() {
  const { t } = useTranslation();
  const hero = t.hero;

  return (
    <section id="hero" className="pt-16 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left: text content ───────────────────────────────────── */}
          <div className="flex flex-col justify-center">
            {/* Overline */}
            <div className="flex items-center gap-3 mb-7">
              <span className="block w-6 h-px bg-blue-700" />
              <p className="text-xs font-mono font-semibold text-blue-700 uppercase tracking-widest">
                {hero.badge}
              </p>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-950 leading-tight tracking-tight mb-5 max-w-lg">
              {hero.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-slate-600 text-sm sm:text-base max-w-md mb-8 leading-relaxed">
              {hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link
                href="/services#intake-form"
                className="w-full sm:w-auto px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm rounded transition-colors duration-150 text-center"
              >
                {hero.primaryCta}
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto px-6 py-3 border border-slate-300 hover:border-slate-500 text-slate-700 hover:text-slate-950 font-semibold text-sm rounded transition-colors duration-150 text-center"
              >
                {hero.secondaryCta}
              </Link>
            </div>

            <p className="text-slate-400 text-xs mb-10">{hero.paymentNote}</p>

            {/* Stack */}
            <div className="border-t border-slate-200 pt-6">
              <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                {hero.stackLabel}
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-1.5">
                {STACK.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-slate-500">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: architecture diagram ──────────────────────────── */}
          <div className="flex items-start justify-center lg:justify-end pt-2">
            <div className="w-full max-w-[320px] lg:max-w-none lg:w-[308px]">
              <ArchDiagram />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
