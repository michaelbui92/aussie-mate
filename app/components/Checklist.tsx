"use client";
import { useEffect, useState } from "react";
import { pickLocale } from "@/lib/locale";
import {En, Ja, Ko, Zh} from "./LangBlocks";

export interface ChecklistItem {
  id: string;
  en: string;
  ko: string; ja?: string; zh?: string; hint?: { en: string; ko: string; ja?: string; zh?: string };
  link?: { href: string; en: string; ko: string; ja?: string; zh?: string };
}

export interface ChecklistProps {
  storageKey: string;
  title?: { en: string; ko: string; ja?: string; zh?: string };
  items: ChecklistItem[];
}

export default function Checklist({ storageKey, title, items }: ChecklistProps) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setChecked(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, [storageKey]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(checked));
    } catch {
      /* ignore */
    }
  }, [checked, hydrated, storageKey]);

  const done = items.filter((it) => checked[it.id]).length;
  const total = items.length;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);

  const toggle = (id: string) => setChecked((c) => ({ ...c, [id]: !c[id] }));
  const reset = () => setChecked({});

  return (
    <div>
      {title && (
        <div className="flex items-baseline justify-between mb-3">
          <h3 className="font-bold text-eucalypt dark:text-white">
            <En translated>{title.en}</En>
            <Ja>{pickLocale("ja", title)}</Ja>
            <Zh>{pickLocale("zh", title)}</Zh>
            <Ko>{title.ko}</Ko>
          </h3>
          <span className="text-xs text-eucalypt/60 dark:text-dark-muted/60 tabular-nums">
            {done}/{total} · {pct}%
          </span>
        </div>
      )}

      {/* progress bar */}
      <div
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-1.5 w-full rounded-full bg-eucalypt/10 dark:bg-dark-border overflow-hidden mb-4"
      >
        <div
          className="h-full bg-sunset transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>

      <ul className="space-y-2">
        {items.map((it) => {
          const isChecked = !!checked[it.id];
          return (
            <li
              key={it.id}
              className={`rounded-xl border transition-colors ${
                isChecked
                  ? "bg-sage/5 border-sage/30 dark:bg-sage/10"
                  : "bg-white dark:bg-dark-card border-eucalypt/10 dark:border-dark-border"
              }`}
            >
              <label className="flex items-start gap-3 p-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggle(it.id)}
                  className="mt-0.5 h-5 w-5 rounded border-eucalypt/30 text-sunset focus:ring-sunset shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div
                    className={`font-semibold text-sm ${
                      isChecked
                        ? "line-through text-eucalypt/50 dark:text-dark-muted/50"
                        : "text-eucalypt dark:text-white"
                    }`}
                  >
                    <En translated>{it.en}</En>
                    <Ja>{pickLocale("ja", it)}</Ja>
                    <Zh>{pickLocale("zh", it)}</Zh>
                    <Ko>{it.ko}</Ko>
                  </div>
                  {it.hint && (
                    <div className="text-xs text-eucalypt/60 dark:text-dark-muted/60 mt-0.5">
                      <En translated>{it.hint.en}</En>
                      <Ja>{pickLocale("ja", it.hint)}</Ja>
                      <Zh>{pickLocale("zh", it.hint)}</Zh>
                      <Ko>{it.hint.ko}</Ko>
                    </div>
                  )}
                  {it.link && (
                    <a
                      href={it.link.href}
                      className="text-xs text-sunset font-semibold mt-1 inline-block hover:underline"
                    >
                      <En translated>→ {it.link.en}</En>
                      <Ja>→ {pickLocale("ja", it.link)}</Ja>
                      <Zh>→ {pickLocale("zh", it.link)}</Zh>
                      <Ko>→ {it.link.ko}</Ko>
                    </a>
                  )}
                </div>
              </label>
            </li>
          );
        })}
      </ul>

      {hydrated && done > 0 && (
        <button type="button"
          onClick={reset}
          className="mt-3 text-xs text-eucalypt/50 dark:text-dark-muted/50 hover:text-sunset transition-colors"
        >
          <En translated>Reset checklist</En>
          <Ja>チェックリストをリセット</Ja>
          <Zh>重置清单</Zh>
          <Ko>초기화</Ko>
        </button>
      )}
    </div>
  );
}
