"use client";
import { useEffect, type ReactNode } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { En, Ko } from "./LangBlocks";

export interface PersonaSheetProps {
  /** which key in ?sheet= this sheet responds to, e.g. "visiting" */
  paramKey: string;
  /** emoji + accent color for the header band */
  emoji: string;
  /** header band color (e.g. "bg-wattle/10") */
  bandClass: string;
  /** title + subtitle for the header */
  title: { en: string; ko: string };
  subtitle: { en: string; ko: string };
  children: ReactNode;
}

export default function PersonaSheet({
  paramKey,
  emoji,
  bandClass,
  title,
  subtitle,
  children,
}: PersonaSheetProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isOpen = searchParams.get("sheet") === paramKey;

  const close = () => {
    // Navigate to the same path with the sheet param removed.
    const params = new URLSearchParams(searchParams.toString());
    params.delete("sheet");
    const qs = params.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  // Esc closes the sheet.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Body scroll lock when open.
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-stretch md:items-center md:justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={title.en}
    >
      {/* Backdrop */}
      <button
        aria-label="Close"
        onClick={close}
        className="absolute inset-0 bg-eucalypt/40 dark:bg-black/60 backdrop-blur-sm animate-backdrop-in"
      />

      {/* Sheet */}
      <div className="relative bg-cream dark:bg-darkbg w-full md:max-w-3xl md:rounded-2xl md:my-8 flex flex-col max-h-screen md:max-h-[90vh] shadow-2xl animate-modal-in">
        {/* Header band */}
        <div className={`${bandClass} border-b border-eucalypt/10 dark:border-dark-border px-5 py-4 flex items-start gap-3 md:rounded-t-2xl`}>
          <div className="text-3xl shrink-0 leading-none mt-0.5" aria-hidden>{emoji}</div>
          <div className="flex-1 min-w-0">
            <h2 className="text-lg md:text-xl font-bold text-eucalypt dark:text-white leading-tight">
              <En>{title.en}</En>
              <Ko>{title.ko}</Ko>
            </h2>
            <p className="text-xs md:text-sm text-eucalypt/70 dark:text-dark-muted/70 mt-0.5 leading-snug">
              <En>{subtitle.en}</En>
              <Ko>{subtitle.ko}</Ko>
            </p>
          </div>
          <button
            onClick={close}
            className="shrink-0 w-9 h-9 rounded-full bg-white/70 dark:bg-dark-card hover:bg-white dark:hover:bg-dark-surface flex items-center justify-center text-eucalypt/70 dark:text-dark-muted/70 hover:text-sunset transition-colors"
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M2 2 L14 14 M14 2 L2 14" />
            </svg>
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-6">
          {children}
        </div>

        {/* Footer */}
        <div className="border-t border-eucalypt/10 dark:border-dark-border px-5 py-3 flex items-center justify-between gap-3">
          <span className="text-xs text-eucalypt/50 dark:text-dark-muted/50">
            <En>Press Esc or click outside to close</En>
            <Ko>Esc 키 또는 바깥을 클릭해 닫기</Ko>
          </span>
          <button
            onClick={close}
            className="text-sm font-semibold text-sunset hover:underline"
          >
            <En>← Back to home</En>
            <Ko>← 처음으로</Ko>
          </button>
        </div>
      </div>
    </div>
  );
}
