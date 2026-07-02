import HomePage from "@/components/HomePage";
import type { Metadata } from "next";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo(
  {
    // EN-first mirroring the 2026-06-28 audience restructure: Korean
    // remains an alt-attribute keyword for 한국어 search but the override
    // title/description here shouldn't _lead_ with Korean (which would
    // re-signal "for Korean users only" to Google and undercut the EN
    // audience gained in the ab4e873 identity pivot).
    title: "AussieGuides — Australia Travel & Living Guide (English / 한국어)",
    description:
      "A bilingual (English / 한국어) travel and living guide for anyone visiting, studying, working, or starting fresh in Australia — international students, working-holiday makers, expats, English-first travellers. Opal cards, TFN, super, apartments, Aussie slang, and destinations around Sydney and NSW.",
  },
  "/"
);

export default function Page() {
  return <HomePage />;
}
