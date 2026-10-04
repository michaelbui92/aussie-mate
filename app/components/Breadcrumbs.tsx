"use client";
// Breadcrumb row. Shows "Home › [Page Name]" on content pages.
// Auto-derives the label from the URL. Pages not in the explicit map
// fall back to a sensible default (e.g. /destinations/<slug> shows
// "Destinations › <Destination Name>" using the destinations data).

import Link from "next/link";
import { usePathname } from "next/navigation";
import { pickLocale, useLang, type Lang, type Localized } from "./LangBlocks";
import { getDestination } from "@/destinations/data";

// Crumb labels per route. ja/zh reuse the wording already used for the matching
// page headings, so the breadcrumb and the heading never disagree.
const labels: Record<string, Localized> = {
  "/aussie-english":  { en: "Aussie English",  ko: "호주 영어",      ja: "オーストラリア英語", zh: "澳洲英语" },
  "/finance":         { en: "Finance",         ko: "금융",           ja: "金融",               zh: "金融" },
  "/apartment":       { en: "Apartment Guide", ko: "부동산 가이드",  ja: "賃貸ガイド",         zh: "租房指南" },
  "/workplace":       { en: "Workplace",       ko: "직장",           ja: "職場",               zh: "职场" },
  "/study":           { en: "Study",           ko: "학습",           ja: "学習",               zh: "学习" },
  "/transport":       { en: "Transport",       ko: "교통",           ja: "交通",               zh: "交通" },
  "/weather":         { en: "Weather",         ko: "날씨",           ja: "天気",               zh: "天气" },
  "/faq":             { en: "FAQ",             ko: "자주 묻는 질문", ja: "よくある質問",       zh: "常见问题" },
  "/sport":           { en: "Sport",           ko: "스포츠",         ja: "スポーツ",           zh: "体育" },
  "/destinations":    { en: "Destinations",    ko: "여행지",         ja: "目的地",             zh: "目的地" },
  "/destinations/beaches":     { en: "Beaches",     ko: "해변",       ja: "ビーチ",             zh: "海滩" },
  "/destinations/food":        { en: "Food",        ko: "음식",       ja: "グルメ",             zh: "美食" },
  "/destinations/wildlife":    { en: "Wildlife",    ko: "야생동물",   ja: "野生動物",           zh: "野生动物" },
  "/destinations/road-trips":  { en: "Road Trips",  ko: "로드 트립",  ja: "ロードトリップ",     zh: "自驾游" },
  "/destinations/culture":     { en: "Culture",     ko: "문화",       ja: "文化",               zh: "文化" },
  "/journey":         { en: "The Journey", ko: "여정",           ja: "旅の流れ",       zh: "旅程" },
  "/journey/before-you-come":{ en: "Before You Come", ko: "호주에 오기 전에", ja: "渡航前に",   zh: "出发前" },
  "/journey/arrived": { en: "I Arrived",        ko: "방금 도착",     ja: "到着したら",         zh: "刚到达" },
  "/journey/home":    { en: "Settled In",       ko: "정착",          ja: "生活になじむ",       zh: "安顿下来" },
  "/tourist":         { en: "Tourist",         ko: "여행자",         ja: "観光",               zh: "游客" },
  "/beyond-sydney":   { en: "Beyond Sydney",   ko: "시드니 밖으로",  ja: "シドニー以外",       zh: "悉尼以外" },
  "/resources":       { en: "Resources",       ko: "자료",           ja: "リソース",           zh: "资源" },
  "/other-tools":     { en: "My Projects",     ko: "내 프로젝트",    ja: "プロジェクト",       zh: "我的项目" },
  "/about":           { en: "About",           ko: "소개",           ja: "このサイトについて", zh: "关于" },
};

// Crumb labels for the two parent links, kept here so they are not ternary chains.
const crumb: Record<string, Localized> = {
  home:         { en: "Home",         ko: "홈",    ja: "ホーム",     zh: "首页" },
  destinations: { en: "Destinations", ko: "여행지", ja: "目的地",     zh: "目的地" },
  journey:      { en: "The Journey",  ko: "여정",   ja: "旅の流れ",   zh: "旅程" },
};

// Fallback for paths not in the map: try destinations data, then
// humanise the URL segment.
function fallbackLabel(pathname: string, lang: Lang): Localized {
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
        {pickLocale(lang, crumb.home)}
      </Link>
      <span className="mx-1.5">›</span>
      {isDestDetail && (
        <>
          <Link
            href="/destinations"
            className="hover:text-sunset transition-colors"
          >
            {pickLocale(lang, crumb.destinations)}
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
            {pickLocale(lang, crumb.journey)}
          </Link>
          <span className="mx-1.5">›</span>
        </>
      )}
      <span className="text-eucalypt/70 dark:text-dark-muted/70">
        {pickLocale(lang, label)}
      </span>
    </nav>
  );
}
