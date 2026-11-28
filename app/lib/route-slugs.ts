import { DESTINATION_SLUGS, VISA_SLUGS } from "./route-slugs.generated.ts";

// A slug set per dynamic route, built once at module scope.
const SLUGS: Record<string, ReadonlySet<string>> = {
  destinations: new Set(DESTINATION_SLUGS),
  visa: new Set(VISA_SLUGS),
};

// Unknown /destinations/<slug> and /visa/<slug> must answer a real 404. Both routes are
// request-rendered, and Next streams the 404 body with a 200 status whatever the page does --
// notFound() in the page and even in generateMetadata both come too late (measured 2026-11-28:
// /visa/nope-xyz answered 200 locally and on production). proxy.ts calls this while there is
// still no response, so the status is its to set.
//
// Takes the public path with any locale prefix already stripped. Returns 404 for a slug the
// route cannot render, and null to let the request continue.
export function unknownSlugStatus(path: string): number | null {
  const m = /^\/(destinations|visa)\/([^/]+)$/.exec(path);
  if (!m) return null;
  let slug: string;
  try {
    slug = decodeURIComponent(m[2]);
  } catch {
    // A malformed escape cannot name a route either; fall through with the raw segment.
    slug = m[2];
  }
  return SLUGS[m[1]].has(slug) ? null : 404;
}
