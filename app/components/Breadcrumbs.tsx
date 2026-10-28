"use client";
// Breadcrumb row. Shows "Home › [Page Name]" on content pages.
// Auto-derives the label from the URL. Pages not in the explicit map
// fall back to a sensible default (e.g. /destinations/<slug> shows
// "Destinations › <Destination Name>" using the destinations data).

import Link from "next/link";
import { usePathname } from "next/navigation";
// The trail lives in lib/breadcrumb-trail.ts: the BreadcrumbList schema rendered by the root
// layout must name the same crumb for the same URL as this visible row, and two copies of the
// label map would drift the first time a page is renamed. Markup that disagrees with visible
// content is what Google treats as spam.
import { breadcrumbTrail } from "@/lib/breadcrumb-trail";
import { localeHref, stripLocale } from "@/lib/locale-href";
import { useLang } from "./LangBlocks";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const { lang } = useLang();

  // usePathname() is the PUBLIC path, so on /ja/about it is "/ja/about" -- while
  // CRUMB_LABELS and CRUMB_PARENTS are keyed on the unprefixed "/about". Without this
  // strip the lookup missed, fallbackLabel() title-cased the last segment, and 44 of the
  // 49 Japanese routes showed an English crumb ("ホーム > About") directly above a
  // BreadcrumbList naming the same crumb in Japanese ("このサイトについて") -- visible
  // content contradicting its own structured data.
  //
  // It also removed the bogus crumb the three prefixed homepages rendered: /ja was
  // "/ja", which is not the homepage as far as the map is concerned, so it produced
  // "ホーム > Ja". Stripped to "/" it returns no trail, which is what the unprefixed
  // homepage already did.
  const barePath = stripLocale(pathname ?? "/");

  const crumbs = breadcrumbTrail(barePath, lang);
  if (crumbs.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="max-w-5xl mx-auto px-4 sm:px-6 pt-3 text-xs text-eucalypt/50 dark:text-dark-muted/50"
    >
      {crumbs.map((c, i) => (
        <span key={c.path || "home"}>
          {i > 0 && <span className="mx-1.5">›</span>}
          {i < crumbs.length - 1 ? (
            // The trail's paths are unprefixed (the map and the schema are keyed that
            // way); the link keeps the reader in their language.
            <Link href={localeHref(lang, c.path ? `/${c.path}` : "/")} className="hover:text-sunset transition-colors">
              {c.name}
            </Link>
          ) : (
            <span className="text-eucalypt dark:text-dark-muted">{c.name}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
