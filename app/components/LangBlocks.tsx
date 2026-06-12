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

  // Read from documentElement.lang (already set by blocking init script in <head>)
  // — avoids rendering English first then snapping to Korean (issue #5)
  useEffect(() => {
    const initial: Lang = document.documentElement.lang === "ko" ? "ko" : "en";
    setLang(initial);
    // Persist auto-detected value so it sticks on next visit
    if (!localStorage.getItem("aussiemate-lang")) {
      localStorage.setItem("aussiemate-lang", initial);
    }
  }, []);

  const toggleLang = () => {
    const next = lang === "en" ? "ko" : "en";
    setLang(next);
    localStorage.setItem("aussiemate-lang", next);
    document.documentElement.lang = next === "ko" ? "ko" : "en";
  };

  const setLangFn = (l: Lang) => {
    setLang(l);
    localStorage.setItem("aussiemate-lang", l);
    document.documentElement.lang = l === "ko" ? "ko" : "en";
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