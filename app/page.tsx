import HomePage from "@/components/HomePage";
import type { Metadata } from "next";
import { withSeo, websiteLdJson } from "@/lib/seo";

export const metadata: Metadata = withSeo(
  {
    // EN-first mirroring the 2026-06-28 audience restructure: Korean
    // remains an alt-attribute keyword for 한국어 search but the override
    // title/description here shouldn't _lead_ with Korean (which would
    // re-signal "for Korean users only" to Google and undercut the EN
    // audience gained in the ab4e873 identity pivot).
    title: "AussieGuides — Australia Travel Guide: Opal, TFN, Visas, Slang & Daily Life",
    description:
      "Practical Australia travel and living guide for newcomers — Opal cards, TFN, superannuation, renting, Aussie slang, visas, and destinations around Sydney and NSW. Written by a local.",
  },
  "/"
);

export default function Page() {
  return (
    <>
      {/* A real <script>, not metadata.other: a meta tag carrying JSON-LD is parsed by nothing. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLdJson()) }}
      />
      <HomePage />
    </>
  );
}
