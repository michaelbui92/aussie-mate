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
    title: "AussieGuides — Australia Travel & Living Guide for Newcomers (English / 한국어)",
    description:
      "Practical Australia travel and living guide for newcomers — Opal cards, TFN, superannuation, renting, Aussie slang, visas, and destinations around Sydney and NSW. Written by a local, bilingual English and 한국어.",
  },
  "/"
);

export default function Page() {
  return <HomePage />;
}
