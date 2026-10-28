// Related links built from page metadata.
//
// The point is that the titles and descriptions ALREADY EXIST in all four languages (app/lib/page-meta.ts
// is generated per locale), so wiring a "read next" block into a page never requires writing new Korean,
// Japanese or Chinese. Nobody on this project can verify new Hangul, so composure-only is the rule:
// compose strings that exist, do not author new ones.
//
// PAGE_META keys are inconsistent about the leading slash ("/faq" but "cost-of-living"), and pageMeta
// throws on an unknown route, so this probes both spellings and drops what it cannot resolve rather
// than taking the page down with it.

import { pageMeta } from "@/lib/page-meta";
import type { RelatedItem } from "@/components/RelatedContent";
import type { Lang } from "@/lib/locale";

export function relatedFromMeta(slugs: string[]): RelatedItem[] {
  return slugs.flatMap((slug) => {
    for (const route of [`/${slug}`, slug]) {
      try {
        const at = (lang: Lang) => pageMeta(route, lang);
        const item: RelatedItem = {
          href: `/${slug}`,
          title: {
            en: at("en").title,
            ko: at("ko").title,
            ja: at("ja").title,
            zh: at("zh").title,
          },
          description: {
            en: at("en").description,
            ko: at("ko").description,
            ja: at("ja").description,
            zh: at("zh").description,
          },
        };
        // Touch every language before returning: pageMeta falls back to English when a locale is
        // missing, which is honest, but a key that does not exist at all must throw here and be skipped.
        return [item];
      } catch {
        /* try the other spelling */
      }
    }
    return [];
  });
}
