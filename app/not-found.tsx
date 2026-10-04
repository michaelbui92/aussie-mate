"use client";
import Link from "next/link";
import { pickLocale } from "@/lib/locale";
import {useLang, type Localized} from "@/components/LangBlocks";

const FLAG_EMOJI = "🇦🇺";

// Copy for the 404 page. Kept as language maps rather than ternary chains so a
// new locale is a data change, not a code change.
const T: Record<string, Localized> = {
  title: {
    en: "Page not found",
    ko: "페이지를 찾을 수 없습니다",
    ja: "ページが見つかりません",
    zh: "页面未找到",
  },
  body: {
    en: "Sorry, the page you're looking for doesn't exist or has been moved.",
    ko: "죄송합니다. 찾으시는 페이지가 존재하지 않거나 이동되었습니다.",
    ja: "申し訳ありません。お探しのページは存在しないか、移動されました。",
    zh: "抱歉，您要查找的页面不存在或已被移动。",
  },
  home: {
    en: "Go home",
    ko: "홈으로 가기",
    ja: "ホームへ戻る",
    zh: "返回首页",
  },
};

export default function NotFound() {
  const { lang } = useLang();

  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center bg-stone-50 dark:bg-darkbg">
      <div className="w-16 h-16 rounded-full bg-stone-100 dark:bg-dark-surface flex items-center justify-center text-3xl ring-1 ring-stone-200/60 dark:ring-dark-border shadow-md mb-6">
        {FLAG_EMOJI}
      </div>
      <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sunset mb-3">
        404
      </p>
      <h1 className="font-serif text-4xl md:text-5xl text-stone-900 dark:text-stone-100 mb-3 leading-tight">
        {pickLocale(lang, T.title)}
      </h1>
      <p className="text-stone-500 dark:text-stone-400 max-w-md mb-8">
        {pickLocale(lang, T.body)}
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sunset text-white text-sm font-medium hover:bg-sunset-light transition-colors shadow-md hover:shadow-lg"
      >
        {pickLocale(lang, T.home)}
        <span>→</span>
      </Link>
    </main>
  );
}
