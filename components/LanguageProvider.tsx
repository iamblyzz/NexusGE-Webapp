"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { type Lang, type Dictionary, getT } from "@/app/lib/languages";

// ── Context shape ─────────────────────────────────────────────────────────────

interface LanguageContextValue {
  lang: Lang;
  setLanguage: (lang: Lang) => void;
  t: Dictionary;
}

// ── Context ───────────────────────────────────────────────────────────────────

const LanguageContext = createContext<LanguageContextValue | null>(null);

// ── Provider ──────────────────────────────────────────────────────────────────

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const setLanguage = useCallback((newLang: Lang) => {
    console.log("[NGE] LanguageProvider: setLanguage called →", newLang);
    setLang(newLang);
  }, []);

  // Compute dictionary directly — no useMemo so there is no chance of
  // a stale memo preventing consumers from seeing the new dictionary.
  const t = getT(lang);

  console.log("[NGE] LanguageProvider: rendering with lang =", lang);

  return (
    // Pass a fresh object literal so React Context always detects a change
    // and re-renders every consumer when lang changes.
    <LanguageContext.Provider value={{ lang, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// ── Hook ──────────────────────────────────────────────────────────────────────

export function useTranslation(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error(
      "useTranslation() must be called inside <LanguageProvider>."
    );
  }
  return ctx;
}
