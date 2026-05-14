"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "en" | "ko";

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextValue>({ lang: "en", setLang: () => {}, toggleLang: () => {} });

export function useLang() {
  return useContext(LangContext);
}

// Korean Unicode ranges
const koreanRegex = /[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/;

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  // Auto-detect Korean browser on first visit
  useEffect(() => {
    const stored = localStorage.getItem("aussiemate-lang");
    if (stored === "en" || stored === "ko") {
      setLang(stored as Lang);
      return;
    }
    // No stored preference — check browser language
    const browserLang = navigator.language;
    if (browserLang.startsWith("ko")) {
      setLang("ko");
      localStorage.setItem("aussiemate-lang", "ko");
    } else {
      setLang("en");
    }
  }, []);

  const toggleLang = () => {
    const next = lang === "en" ? "ko" : "en";
    setLang(next);
    localStorage.setItem("aussiemate-lang", next);
  };

  const setLangFn = (l: Lang) => {
    setLang(l);
    localStorage.setItem("aussiemate-lang", l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang: setLangFn, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

// Inline component so we can use the lang context
export function En({ children }: { children: ReactNode }) {
  const { lang } = useLang();
  if (lang === "ko") return null;
  return <>{children}</>;
}

export function Ko({ children }: { children: ReactNode }) {
  const { lang } = useLang();
  if (lang === "en") return null;
  return <>{children}</>;
}