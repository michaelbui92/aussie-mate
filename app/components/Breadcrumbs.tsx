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
import { useLang } from "./LangBlocks";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const { lang } = useLang();

  const crumbs = breadcrumbTrail(pathname ?? "/", lang);
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
            <Link href={`/${c.path}`} className="hover:text-sunset transition-colors">
              {c.name}
            </Link>
          ) : (
            <span className="text-eucalypt/70 dark:text-dark-muted/70">{c.name}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
