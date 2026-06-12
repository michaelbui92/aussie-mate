"use client";
// Small breadcrumb row. Shows "Home › [Page Name]" on content pages.
// Uses usePathname to derive the current page from the URL, so adding
// breadcrumbs to a new page is just <Breadcrumbs /> at the top.

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "./LangBlocks";

const labels: Record<string, { en: string; ko: string }> = {
  "/aussie-english": { en: "Aussie English", ko: "호주 영어" },
  "/finance":        { en: "Finance",        ko: "금융" },
  "/apartment":      { en: "Apartment Guide", ko: "부동산 가이드" },
  "/workplace":      { en: "Workplace",      ko: "직장" },
  "/study":          { en: "Study",          ko: "학습" },
  "/transport":      { en: "Transport",      ko: "교통" },
  "/tourist":        { en: "Tourist",        ko: "여행자" },
  "/beyond-sydney":  { en: "Beyond Sydney",  ko: "시드니 밖으로" },
  "/resources":      { en: "Resources",      ko: "자료" },
  "/other-tools":    { en: "Other Tools",    ko: "다른 도구" },
  "/about":          { en: "About",          ko: "소개" },
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  const { lang } = useLang();
  const label = labels[pathname];
  if (!label) return null;
  return (
    <nav
      aria-label="Breadcrumb"
      className="max-w-4xl mx-auto px-4 pt-3 text-xs text-eucalypt/50 dark:text-dark-muted/50"
    >
      <Link href="/" className="hover:text-sunset transition-colors">
        {lang === "ko" ? "홈" : "Home"}
      </Link>
      <span className="mx-1.5">›</span>
      <span className="text-eucalypt/70 dark:text-dark-muted/70">
        {lang === "ko" ? label.ko : label.en}
      </span>
    </nav>
  );
}
