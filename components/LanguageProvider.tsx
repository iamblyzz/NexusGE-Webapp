"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { type Lang, type Dictionary, getT } from "@/app/lib/languages";

const STORAGE_KEY = "nge_lang";
const VALID: Lang[] = ["en", "es", "pt"];

function getSavedLang(): Lang {
  if (typeof window === "undefined") return "en";
  try {
    const v = localStorage.getItem(STORAGE_KEY) as Lang;
    return VALID.includes(v) ? v : "en";
  } catch {
    return "en";
  }
}

// ── Context shape ─────────────────────────────────────────────────────────────

interface LanguageContextValue {
  lang: Lang;
  setLanguage: (lang: Lang) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

// ── Provider ──────────────────────────────────────────────────────────────────

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Start with "en" on the server (avoids hydration mismatch),
  // then immediately sync with localStorage on the client.
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = getSavedLang();
    if (saved !== "en") setLang(saved);
  }, []);

  const setLanguage = useCallback((newLang: Lang) => {
    setLang(newLang);
    try { localStorage.setItem(STORAGE_KEY, newLang); } catch { /* ignore */ }
  }, []);

  const t = getT(lang);

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// ── Hook ──────────────────────────────────────────────────────────────────────

export function useTranslation(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useTranslation() must be called inside <LanguageProvider>.");
  return ctx;
}
