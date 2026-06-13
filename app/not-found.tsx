"use client";
import Link from "next/link";
import { useLang } from "@/components/LangBlocks";
import { FLAG_AU_SVG } from "@/components/FlagAU";

export default function NotFound() {
  const { lang } = useLang();
  const isKo = lang === "ko";

  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center bg-stone-50 dark:bg-darkbg">
      <div className="w-24 h-12 rounded overflow-hidden shadow-lg ring-1 ring-stone-200/60 dark:ring-dark-border mb-6">
        <span
          className="block w-full h-full"
          dangerouslySetInnerHTML={{ __html: FLAG_AU_SVG }}
        />
      </div>
      <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
        404
      </p>
      <h1 className="font-serif text-4xl md:text-5xl text-stone-900 dark:text-stone-100 mb-3 leading-tight">
        {isKo ? "페이지를 찾을 수 없습니다" : "Page not found"}
      </h1>
      <p className="text-stone-500 dark:text-stone-400 max-w-md mb-8">
        {isKo
          ? "죄송합니다. 찾으시는 페이지가 존재하지 않거나 이동되었습니다."
          : "Sorry, the page you're looking for doesn't exist or has been moved."}
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sunset text-white text-sm font-medium hover:bg-sunset-light transition-colors shadow-md hover:shadow-lg"
      >
        {isKo ? "홈으로 가기" : "Go home"}
        <span>→</span>
      </Link>
    </main>
  );
}
