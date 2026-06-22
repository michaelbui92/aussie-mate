"use client";
// Breadcrumb row. Shows "Home › [Page Name]" on content pages.
// Auto-derives the label from the URL. Pages not in the explicit map
// fall back to a sensible default (e.g. /destinations/<slug> shows
// "Destinations › <Destination Name>" using the destinations data).

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "./LangBlocks";
import { getDestination } from "@/destinations/data";

const labels: Record<string, { en: string; ko: string }> = {
  "/aussie-english":  { en: "Aussie English",  ko: "호주 영어" },
  "/finance":         { en: "Finance",         ko: "금융" },
  "/apartment":       { en: "Apartment Guide", ko: "부동산 가이드" },
  "/workplace":       { en: "Workplace",       ko: "직장" },
  "/study":           { en: "Study",           ko: "학습" },
  "/transport":       { en: "Transport",       ko: "교통" },
  "/weather":         { en: "Weather",         ko: "날씨" },
  "/faq":             { en: "FAQ",             ko: "자주 묻는 질문" },
  "/sport":           { en: "Sport",           ko: "스포츠" },
  "/destinations":    { en: "Destinations",    ko: "여행지" },
  "/destinations/beaches":     { en: "Beaches",     ko: "해변" },
  "/destinations/food":        { en: "Food",        ko: "음식" },
  "/destinations/wildlife":    { en: "Wildlife",    ko: "야생동물" },
  "/destinations/road-trips":  { en: "Road Trips",  ko: "로드 트립" },
  "/destinations/culture":     { en: "Culture",     ko: "문화" },
  "/journey":         { en: "The Journey", ko: "여정" },
  "/journey/visiting":{ en: "Visiting",    ko: "여행 중" },
  "/journey/arrived": { en: "Just Arrived",ko: "방금 도착" },
  "/journey/home":    { en: "Settled In",  ko: "정착" },
  "/tourist":         { en: "Tourist",         ko: "여행자" },
  "/beyond-sydney":   { en: "Beyond Sydney",   ko: "시드니 밖으로" },
  "/resources":       { en: "Resources",       ko: "자료" },
  "/other-tools":     { en: "My Projects",     ko: "내 프로젝트" },
  "/about":           { en: "About",           ko: "소개" },
};

// Fallback for paths not in the map: try destinations data, then
// humanise the URL segment.
function fallbackLabel(pathname: string, lang: "en" | "ko"): {
  en: string;
  ko: string;
} {
  // /destinations/<slug> — look up the destination name
  const destMatch = pathname.match(/^\/destinations\/([^\/]+)$/);
  if (destMatch) {
    const dest = getDestination(destMatch[1]);
    if (dest) return dest.name;
  }
  // Generic: humanise the last segment
  const seg = pathname.split("/").filter(Boolean).pop() ?? "";
  const titleCase = seg
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return { en: titleCase, ko: titleCase };
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  const { lang } = useLang();
  // Don't render on the home page
  if (pathname === "/") return null;

  const explicit = labels[pathname];
  const label = explicit ?? fallbackLabel(pathname, lang);

  // For /destinations/<slug>, show the parent crumb too
  const destMatch = pathname.match(/^\/destinations\/([^\/]+)$/);
  const isDestDetail = destMatch && getDestination(destMatch[1]);
  // Same for /journey/<stage>
  const journeyMatch = pathname.match(/^\/journey\/([^\/]+)$/);
  const isJourneyDetail = journeyMatch && labels[`/journey/${journeyMatch[1]}`];

  return (
    <nav
      aria-label="Breadcrumb"
      className="max-w-5xl mx-auto px-4 sm:px-6 pt-3 text-xs text-eucalypt/50 dark:text-dark-muted/50"
    >
      <Link href="/" className="hover:text-sunset transition-colors">
        {lang === "ko" ? "홈" : "Home"}
      </Link>
      <span className="mx-1.5">›</span>
      {isDestDetail && (
        <>
          <Link
            href="/destinations"
            className="hover:text-sunset transition-colors"
          >
            {lang === "ko" ? "여행지" : "Destinations"}
          </Link>
          <span className="mx-1.5">›</span>
        </>
      )}
      {isJourneyDetail && (
        <>
          <Link
            href="/journey"
            className="hover:text-sunset transition-colors"
          >
            {lang === "ko" ? "여정" : "The Journey"}
          </Link>
          <span className="mx-1.5">›</span>
        </>
      )}
      <span className="text-eucalypt/70 dark:text-dark-muted/70">
        {lang === "ko" ? label.ko : label.en}
      </span>
    </nav>
  );
}
