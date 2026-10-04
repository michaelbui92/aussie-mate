"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

import type { Lang, Localized } from "@/lib/locale";

// Re-exported for existing importers; the definitions live in lib/locale.ts,
// which is not a client module, so server components can call its helpers.
export type { Lang, Localized };

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextValue>({ lang: "en", setLang: () => {}, toggleLang: () => {} });

export function useLang() {
  return useContext(LangContext);
}

// CJK (Korean / Chinese / Japanese) Unicode ranges
const cjkRegex = /[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF]/;

export function LangProvider({ children, initial }: { children: ReactNode; initial?: Lang }) {
  // The server passes the locale when the URL carries one (/ko/...), so the SERVER-RENDERED HTML is
  // Korean -- which is what a crawler that does not run JavaScript sees, and Naver renders JS less
  // reliably than Google.
  const [lang, setLang] = useState<Lang>(initial ?? "en");

  // Read from documentElement.lang (already set by blocking init script in <head>)
  // — avoids rendering English first then snapping to Korean (issue #5)
  useEffect(() => {
    // A URL-carried locale outranks a stored preference: /ko/x is an explicit request for Korean.
    if (initial) return;
    const fromHtml: Lang = document.documentElement.lang === "ko" ? "ko" : document.documentElement.lang === "zh" ? "zh" : document.documentElement.lang === "ja" ? "ja" : "en";
    setLang(fromHtml);
    // Persist auto-detected value so it sticks on next visit
    if (!localStorage.getItem("aussiemate-lang")) {
      localStorage.setItem("aussiemate-lang", fromHtml);
    }
  }, []);

  const toggleLang = () => {
    const next = lang === "en" ? "ko" : "en";
    setLang(next);
    localStorage.setItem("aussiemate-lang", next);
    document.documentElement.lang = next;
  };

  const setLangFn = (l: Lang) => {
    setLang(l);
    localStorage.setItem("aussiemate-lang", l);
    document.documentElement.lang = l;
  };

  return (
    <LangContext.Provider value={{ lang, setLang: setLangFn, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

// Inline component so we can use the lang context
//
// `translated` marks a block that has sibling <Ja>/<Zh> blocks carrying the
// translation (the inserter at cache/scratch/insert_tx.py adds both together, so
// the flag and the siblings can never disagree). Without it, an English block is
// the fallback for zh/ja -- which is what keeps data-driven blocks like
// <En>{item.en}</En> showing English rather than rendering nothing. With it, the
// block steps aside for zh/ja so the translated sibling is the only text shown.
export function En({ children, translated }: { children: ReactNode; translated?: boolean }) {
  const { lang } = useLang();
  if (lang === "en") return <>{children}</>;
  // Korean copy is always written as a sibling <Ko> block, so English never
  // renders for a Korean reader.
  if (lang === "ko") return null;
  // Chinese/Japanese: step aside where a translation exists, fall back to
  // English where one does not.
  if (translated) return null;
  return <>{children}</>;
}

export function Ko({ children }: { children: ReactNode }) {
  const { lang } = useLang();
  if (lang !== "ko") return null;
  return <>{children}</>;
}

export function Zh({ children }: { children: ReactNode }) {
  const { lang } = useLang();
  if (lang !== "zh") return null;
  return <>{children}</>;
}

export function Ja({ children }: { children: ReactNode }) {
  const { lang } = useLang();
  if (lang !== "ja") return null;
  return <>{children}</>;
}