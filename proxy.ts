import { NextRequest, NextResponse } from "next/server";

// Next 16 renamed this convention: proxy.ts, exporting proxy(). Verified against the build output,
// which warned "The middleware file convention is deprecated. Please use proxy instead."
//
// Korean (and the not-yet-written zh/ja) get a URL prefix of their own, and every request -- with or
// without a prefix -- carries its public path so the root layout can state the correct canonical.
//
// Why the rewrite: the copy for every language already lives in the page components as <En>/<Ko>
// blocks, so there is no /ko version of a page to render -- only a locale to render the same page in.
// Rewriting means /ko/destinations renders app/destinations/page.tsx, so no existing route changes.
//
// Why the headers: a Server Component cannot read the browser's language, and a page's `metadata`
// export is static, so neither the locale nor the canonical can come from the page. x-am-locale says
// which language to render; x-am-path carries the public path, which is what makes the canonical the
// page's own URL in its own language instead of its English twin's.
//
// This runs on every page request. The matcher excludes static assets, so the cost is a Set lookup.
const PREFIXED = new Set(["ko", "zh", "ja"]);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1] ?? "";

  const headers = new Headers(request.headers);
  headers.set("x-am-path", pathname || "/");

  if (!PREFIXED.has(first)) {
    return NextResponse.next({ request: { headers } });
  }

  const rest = pathname.slice(first.length + 1) || "/";
  headers.set("x-am-locale", first);
  headers.set("x-am-path", rest);

  const url = request.nextUrl.clone();
  url.pathname = rest;

  return NextResponse.rewrite(url, { request: { headers } });
}

export const config = {
  // Everything except static assets and files with an extension. Every existing URL is untouched.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images/|.*\\.[^/]+$).*)"],
};
