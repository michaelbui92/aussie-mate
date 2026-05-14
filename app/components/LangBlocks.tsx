"use client";
import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Lang = "en" | "ko";
interface LangContextType { lang: Lang; setLang: (l: Lang) => void; }
const LangContext = createContext<LangContextType>({ lang: "en", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => {
    const stored = localStorage.getItem("aussiemate-lang") as Lang;
    if (stored === "ko" || stored === "en") setLang(stored);
  }, []);
  useEffect(() => { localStorage.setItem("aussiemate-lang", lang); }, [lang]);
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() { return useContext(LangContext); }

interface BlockProps { en: string; ko?: string; }
export function En({ children }: { children?: ReactNode }) {
  const { lang } = useLang();
  return lang === "en" ? <>{children}</> : null;
}
export function Ko({ children }: { children?: ReactNode }) {
  const { lang } = useLang();
  return lang === "ko" ? <>{children}</> : null;
}

// Convenience wrappers for plain text
export function EnText({ en, ko }: BlockProps) {
  const { lang } = useLang();
  return lang === "en" ? <>{en}</> : <>{ko ?? en}</>;
}
