"use client";

import {
  createContext,
  useContext,
  useState,
  useMemo,
  type ReactNode,
} from "react";
import { type Lang, type Dictionary, getT } from "@/app/lib/languages";

// ── Context shape ─────────────────────────────────────────────────────────────

interface LanguageContextValue {
  /** Active language code */
  lang: Lang;
  /** Switch the active language — triggers an instant, synchronous re-render */
  setLanguage: (lang: Lang) => void;
  /** Full translation dictionary for the active language */
  t: Dictionary;
}

// ── Context ───────────────────────────────────────────────────────────────────

const LanguageContext = createContext<LanguageContextValue | null>(null);

// ── Provider ──────────────────────────────────────────────────────────────────

/**
 * Wraps the app tree (mounted in layout.tsx) so every client component can
 * call `useTranslation()` without prop drilling.
 *
 * Initial language: "en". State lives here — switching language updates all
 * consumers in a single synchronous React render cycle, producing zero flash
 * and zero layout shift.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLanguage] = useState<Lang>("en");

  // Memoise the dictionary lookup so the object reference only changes when
  // lang changes — prevents unnecessary re-renders of memoised consumers.
  const t = useMemo(() => getT(lang), [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLanguage, t }),
    [lang, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// ── Hook ──────────────────────────────────────────────────────────────────────

/**
 * `useTranslation()` — consume the active language state and translation
 * dictionary from anywhere inside the provider tree.
 *
 * @example
 * const { t, lang, setLanguage } = useTranslation();
 * <h1>{t.hero.headline}</h1>
 * <button onClick={() => setLanguage("es")}>ES</button>
 */
export function useTranslation(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error(
      "useTranslation() must be called inside <LanguageProvider>. " +
        "Ensure app/layout.tsx wraps {children} with <LanguageProvider>."
    );
  }
  return ctx;
}
