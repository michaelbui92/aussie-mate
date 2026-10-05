import { headers } from "next/headers";
import { pageMeta } from "@/lib/page-meta";
import HomePage from "@/components/HomePage";
import type { Metadata } from "next";
import { withSeo } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  // Per request, so the tab title and the search-result headline are in the reader's
  // language. The canonical and hreflang come from the root layout, which reads the same
  // header. `Metadata` is imported by every page that uses withSeo.
  const locale = ((await headers()).get("x-am-locale") ?? "en") as
    Parameters<typeof pageMeta>[1];
  return withSeo({
    // EN-first mirroring the 2026-06-28 audience restructure: Korean
    // remains an alt-attribute keyword for 한국어 search but the override
    // title/description here shouldn't _lead_ with Korean (which would
    // re-signal "for Korean users only" to Google and undercut the EN
    // audience gained in the ab4e873 identity pivot).
    title: pageMeta("/", locale).title,
    description: pageMeta("/", locale).description,
  },
  "/"
);
}


export default function Page() {
  return <HomePage />;
}
