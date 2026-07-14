// Shared experience theme data — single source of truth.
// Imported by:
//   - app/experiences/page.tsx (renders all 6 themes)
//   - app/components/HomePage.tsx (renders the top 3 on the homepage)
//
// Keep this list in sync if a new theme is added: registered themes also
// need a /experiences/[theme]/page.tsx and an entry in app/sitemap.ts.

import type { Destination } from "@/destinations/data";

export interface ExperienceTheme {
  title: string;
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
    koTitle: "해변",
    blurb: "Bondi, Manly, ocean pools & coastal walks.",
    koBlurb: "본다이, 맨리, 오션풀, 해안 산책로까지.",
    href: "/experiences/beaches",
    accent: "from-cyan-500 to-sky-600",
    heroImg: "/images/pexels-1450353.jpg",
  },
  {
    title: "Wildlife",
    koTitle: "야생동물",
    blurb: "Taronga Zoo, national parks & wild encounters.",
    koBlurb: "타롱가 동물원, 국립공원, 야생 동물 만남.",
    href: "/experiences/wildlife",
    accent: "from-emerald-500 to-teal-600",
    heroImg: "/kangaroo.jpg",
  },
  {
    title: "Food & Wine",
    koTitle: "식음료",
    blurb: "Newtown eats, diverse cuisines & Sydney's best bites.",
    koBlurb: "뉴타운 맛집, 다양한 음식 문화, 시드니 최고의 맛.",
    href: "/experiences/food",
    accent: "from-rose-500 to-orange-500",
    heroImg: "/images/pexels-1855214.jpg",
  },
  {
    title: "Adventure",
    koTitle: "어드벤처",
    blurb: "Hiking, mountain biking & coastal cliff walks.",
    koBlurb: "하이킹, 산악자전거, 해안 절벽 산책.",
    href: "/experiences/adventure",
    accent: "from-sky-500 to-indigo-600",
    heroImg: "/adventure.jpg",
  },
  {
    title: "Culture",
    koTitle: "문화",
    blurb: "Chinatown, Cabramatta, Burwood, Strathfield — Sydney's multicultural soul.",
    koBlurb: "차이나타운, 카브라마타, 버우드, 스트라스필드 — 다문화 시드니의 영혼.",
    href: "/experiences/culture",
    accent: "from-amber-500 to-yellow-600",
    heroImg: "/images/pexels-1444442.jpg",
  },
  {
    title: "Road Trips",
    koTitle: "로드트립",
    blurb: "Wollongong, Newcastle, Blue Mountains — plan your escape.",
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
