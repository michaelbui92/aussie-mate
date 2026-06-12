"use client";
import Link from "next/link";
import { useLang } from "@/components/LangBlocks";

export default function NotFound() {
  const { lang } = useLang();
  const isKo = lang === "ko";

  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <div className="text-8xl mb-4">🦘</div>
      <h1 className="text-4xl font-bold text-eucalypt dark:text-white mb-2">
        {isKo ? "페이지를 찾을 수 없습니다" : "Page Not Found"}
      </h1>
      <p className="text-base text-eucalypt/60 dark:text-dark-muted/60 mb-8 max-w-md">
        {isKo
          ? "죄송합니다. 찾으시는 페이지가 존재하지 않거나 이동되었습니다."
          : "Sorry, the page you're looking for doesn't exist or has been moved."}
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sunset text-white font-semibold hover:bg-sunset-light transition-colors"
      >
        {isKo ? "🏠 홈으로 가기" : "🏠 Go Home"}
      </Link>
    </main>
  );
}
