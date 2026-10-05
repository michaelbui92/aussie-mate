// Shared experience theme data — single source of truth.
// Imported by:
//   - app/experiences/page.tsx (renders all 6 themes)
//   - app/components/HomePage.tsx (renders the top 3 on the homepage)
//
// Keep this list in sync if a new theme is added: registered themes also
// need a /experiences/[theme]/page.tsx and an entry in app/sitemap.ts.

import type { Destination } from "@/destinations/data";

export interface ExperienceTheme {
  title: string; jaTitle?: string; zhTitle?: string; jaBlurb?: string; zhBlurb?: string;
  koTitle: string;
  blurb: string;
  koBlurb: string;
  href: string;
  accent: string; // tailwind class for the card gradient
  heroImg: string;
}

export const experienceThemes: ExperienceTheme[] = [
  {
    title: "Beaches",
    jaTitle: "\u30d3\u30fc\u30c1",
    zhTitle: "\u6d77\u6ee9",
    koTitle: "해변",
    blurb: "Bondi, Manly, ocean pools & coastal walks.",
    jaBlurb: "\u30dc\u30f3\u30c0\u30a4\u3001\u30de\u30f3\u30ea\u30fc\u3001\u30aa\u30fc\u30b7\u30e3\u30f3\u30fb\u30d7\u30fc\u30eb\u3001\u6d77\u5cb8\u306e\u904a\u6b69\u9053\u3002",
    zhBlurb: "\u90a6\u8fea\u3001\u66fc\u5229\u3001\u6d77\u8fb9\u6cf3\u6c60\u4e0e\u6d77\u5cb8\u6b65\u9053\u3002",
    koBlurb: "본다이, 맨리, 오션풀, 해안 산책로까지.",
    href: "/experiences/beaches",
    accent: "from-cyan-500 to-sky-600",
    heroImg: "/images/bondi_aerial.jpg",
  },
  {
    title: "Wildlife",
    jaTitle: "\u91ce\u751f\u52d5\u7269",
    zhTitle: "\u91ce\u751f\u52a8\u7269",
    koTitle: "야생동물",
    blurb: "Taronga Zoo, national parks & wild encounters.",
    jaBlurb: "\u30bf\u30ed\u30f3\u30ac\u52d5\u7269\u5712\u3001\u56fd\u7acb\u516c\u5712\u3001\u91ce\u751f\u52d5\u7269\u3068\u306e\u51fa\u4f1a\u3044\u3002",
    zhBlurb: "\u5854\u9f99\u52a0\u52a8\u7269\u56ed\u3001\u56fd\u5bb6\u516c\u56ed\u4e0e\u91ce\u5916\u9082\u9005\u3002",
    koBlurb: "타롱가 동물원, 국립공원, 야생 동물 만남.",
    href: "/experiences/wildlife",
    accent: "from-emerald-500 to-teal-600",
    heroImg: "/kangaroo.jpg",
  },
  {
    title: "Food & Wine",
    jaTitle: "\u98df\u4e8b\u3068\u30ef\u30a4\u30f3",
    zhTitle: "\u7f8e\u98df\u4e0e\u7f8e\u9152",
    koTitle: "식음료",
    blurb: "Newtown eats, diverse cuisines & Sydney's best bites.",
    jaBlurb: "\u30cb\u30e5\u30fc\u30bf\u30a6\u30f3\u306e\u30b0\u30eb\u30e1\u3001\u591a\u69d8\u306a\u6599\u7406\u3001\u30b7\u30c9\u30cb\u30fc\u6700\u9ad8\u306e\u5473\u3002",
    zhBlurb: "\u7ebd\u6566\u7f8e\u98df\u3001\u591a\u5143\u83dc\u7cfb\u4e0e\u6089\u5c3c\u6700\u68d2\u7684\u6ecb\u5473\u3002",
    koBlurb: "뉴타운 맛집, 다양한 음식 문화, 시드니 최고의 맛.",
    href: "/experiences/food",
    accent: "from-rose-500 to-orange-500",
    heroImg: "/images/pexels-1855214.jpg",
  },
  {
    title: "Adventure",
    jaTitle: "\u30a2\u30c9\u30d9\u30f3\u30c1\u30e3\u30fc",
    zhTitle: "\u63a2\u9669",
    koTitle: "어드벤처",
    blurb: "Hiking, mountain biking & coastal cliff walks.",
    jaBlurb: "\u30cf\u30a4\u30ad\u30f3\u30b0\u3001\u30de\u30a6\u30f3\u30c6\u30f3\u30d0\u30a4\u30af\u3001\u6d77\u5cb8\u306e\u5d16\u306e\u904a\u6b69\u9053\u3002",
    zhBlurb: "\u5f92\u6b65\u3001\u5c71\u5730\u9a91\u884c\u4e0e\u6d77\u5cb8\u60ac\u5d16\u6b65\u9053\u3002",
    koBlurb: "하이킹, 산악자전거, 해안 절벽 산책.",
    href: "/experiences/adventure",
    accent: "from-sky-500 to-indigo-600",
    heroImg: "/adventure.jpg",
  },
  {
    title: "Culture",
    jaTitle: "\u6587\u5316",
    zhTitle: "\u6587\u5316",
    koTitle: "문화",
    blurb: "Chinatown, Cabramatta, Burwood, Strathfield — Sydney's multicultural soul.",
    jaBlurb: "\u30c1\u30e3\u30a4\u30ca\u30bf\u30a6\u30f3\u3001\u30ab\u30d6\u30e9\u30de\u30c3\u30bf\u3001\u30d0\u30fc\u30a6\u30c3\u30c9\u3001\u30b9\u30c8\u30e9\u30b9\u30d5\u30a3\u30fc\u30eb\u30c9 \u2014 \u30b7\u30c9\u30cb\u30fc\u306e\u591a\u6587\u5316\u306a\u9b42\u3002",
    zhBlurb: "\u5510\u4eba\u8857\u3001Cabramatta\u3001Burwood\u3001Strathfield\u2014\u2014\u6089\u5c3c\u7684\u591a\u5143\u6587\u5316\u7075\u9b42\u3002",
    koBlurb: "차이나타운, 카브라마타, 버우드, 스트라스필드 — 다문화 시드니의 영혼.",
    href: "/experiences/culture",
    accent: "from-amber-500 to-yellow-600",
    heroImg: "/images/culture_lion_dance.jpg",
  },
  {
    title: "Road Trips",
    jaTitle: "\u30ed\u30fc\u30c9\u30c8\u30ea\u30c3\u30d7",
    zhTitle: "\u516c\u8def\u65c5\u884c",
    koTitle: "로드트립",
    blurb: "Wollongong, Newcastle, Blue Mountains — plan your escape.",
    jaBlurb: "\u30a6\u30ed\u30f3\u30b4\u30f3\u3001\u30cb\u30e5\u30fc\u30ab\u30c3\u30b9\u30eb\u3001\u30d6\u30eb\u30fc\u30fb\u30de\u30a6\u30f3\u30c6\u30f3\u30ba \u2014 \u9003\u907f\u884c\u3092\u8a08\u753b\u3057\u307e\u3057\u3087\u3046\u3002",
    zhBlurb: "\u5367\u9f99\u5c97\u3001\u7ebd\u5361\u65af\u5c14\u3001\u84dd\u5c71\u2014\u2014\u89c4\u5212\u4f60\u7684\u9003\u79bb\u4e4b\u65c5\u3002",
    koBlurb: "울런공, 뉴캐슬, 블루마운틴 — 탈출 계획을 세우세요.",
    href: "/experiences/road-trips",
    accent: "from-stone-500 to-stone-700",
    heroImg: "/roadtrip.jpg",
  },
];

// The top 3 themes featured on the home row. Driven centrally so the
// home row and the /experiences hub stay in sync — killing the comment
// in HomePage.tsx that warned "keep these in sync".
export const topHomepageExperiences = [
  experienceThemes[0], // Beaches
  experienceThemes[1], // Wildlife
  experienceThemes[2], // Food & Wine
];
