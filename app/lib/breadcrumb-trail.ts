// Breadcrumb trail, in one place.
//
// The visible trail (components/Breadcrumbs.tsx) and the BreadcrumbList schema must name
// the same crumb for the same URL: Google treats markup that does not match visible content
// as spam, and two copies of this data would drift the first time a page is renamed. So the
// label map lives here, is consumed by both, and the schema is emitted once per page from
// the root layout.
//
// Server-safe: no React, no "use client" — the layout reads it while rendering, and the
// component reads it in the browser.

import { getDestination } from "@/destinations/data";
import { pickLocale, type Lang, type Localized } from "./locale";

/** Crumb label per route. The wording matches the page heading, so the two never disagree. */
export const CRUMB_LABELS: Record<string, Localized> = {
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
  "/experiences":     { en: "Things to Do",    ko: "즐길 거리",      ja: "楽しむ",             zh: "玩乐" },
  "/experiences/beaches":   { en: "Beaches",    ko: "해변",      ja: "ビーチ",         zh: "海滩" },
  "/experiences/food":      { en: "Food",       ko: "음식",      ja: "グルメ",         zh: "美食" },
  "/experiences/culture":   { en: "Culture",    ko: "문화",      ja: "文化",           zh: "文化" },
  "/experiences/wildlife":  { en: "Wildlife",   ko: "야생동물",  ja: "野生動物",       zh: "野生动物" },
  "/experiences/adventure": { en: "Adventure",  ko: "액티비티",  ja: "アクティビティ", zh: "户外探险" },
  "/experiences/road-trips":{ en: "Road Trips", ko: "로드 트립", ja: "ロードトリップ", zh: "自驾游" },
  "/cost-of-living":  { en: "Cost of Living",  ko: "생활비",    ja: "生活費",         zh: "生活成本" },
  "/beyond":          { en: "Beyond Sydney",   ko: "시드니 밖으로", ja: "シドニー以外", zh: "悉尼以外" },
  "/privacy":         { en: "Privacy Policy",  ko: "개인정보 처리방침", ja: "プライバシーポリシー", zh: "隐私政策" },
  "/terms":           { en: "Terms of Service", ko: "이용약관", ja: "利用規約",       zh: "服务条款" },
  "/editorial":       { en: "Editorial Standards", ko: "편집 기준", ja: "編集方針",   zh: "编辑标准" },
  "/visa":            { en: "Visas",           ko: "비자",      ja: "ビザ",           zh: "签证" },
};

/** Parent trail labels, for the two sections that have a sub-level. */
export const CRUMB_PARENTS: Record<string, Localized> = {
  home:         { en: "Home",         ko: "홈",      ja: "ホーム",    zh: "首页" },
  destinations: { en: "Destinations", ko: "여행지",  ja: "目的地",    zh: "目的地" },
  journey:      { en: "The Journey",  ko: "여정",    ja: "旅の流れ",  zh: "旅程" },
  experiences:  { en: "Things to Do", ko: "즐길 거리", ja: "楽しむ",  zh: "玩乐" },
};

function fallbackLabel(pathname: string): Localized {
  const dest = pathname.match(/^\/destinations\/([^/]+)$/);
  if (dest) {
    const d = getDestination(dest[1]);
    if (d) return d.name;
  }
  const seg = pathname.split("/").filter(Boolean).pop() ?? "";
  const titleCase = seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return { en: titleCase, ko: titleCase, ja: titleCase, zh: titleCase };
}

export type Crumb = { name: string; path: string };

/**
 * The trail for a path, in the reader's language: Home › (parent) › page.
 * Returns [] for the homepage, which has no trail and renders no breadcrumbs.
 */
export function breadcrumbTrail(pathname: string, lang: Lang): Crumb[] {
  if (!pathname || pathname === "/") return [];

  const label = CRUMB_LABELS[pathname] ?? fallbackLabel(pathname);
  const crumbs: Crumb[] = [{ name: pickLocale(lang, CRUMB_PARENTS.home), path: "" }];

  const parent = pathname.match(/^\/(destinations|journey|experiences)\//);
  if (parent && pathname.split("/").filter(Boolean).length > 1) {
    crumbs.push({ name: pickLocale(lang, CRUMB_PARENTS[parent[1]]), path: parent[1] });
  }
  crumbs.push({ name: pickLocale(lang, label), path: pathname.replace(/^\//, "") });
  return crumbs;
}
