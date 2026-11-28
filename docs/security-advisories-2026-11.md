# Dependabot advisories on `next`, triaged — 2026-11-28

GitHub reported 7 moderate advisories against the default branch. All seven are in one
package, `next` 16.0.0 – 16.4.4, so triage is per-advisory applicability rather than seven
independent fixes. Fixed in 16.4.5+; we are now on **16.4.6**.

## Why this is urgent, not routine

Beyond the advisories themselves, 16.4.x now **fails the build outright** on a vulnerable
version. A plain `npm run build` on the previous 16.4.3 aborts with:

```
Error [SecurityFatalError]: Your version of Next.js is affected by a known security vulnerability.
```

So the last commit on `main` no longer builds. The upgrade is what restores a green build.

## Per-advisory applicability

Verdict is against this site's actual architecture: all routes are request-time rendered
(`proxy.ts` sets `x-am-locale`, so pages are dynamic) behind Vercel's edge cache with a
1-hour `CDN-Cache-Control` (next.config.ts:20-28); no `unstable_cache`, no `use cache`, no
Cache Components, no self-hosting.

| Advisory | Applies? | Why |
| --- | --- | --- |
| GHSA-f3mh-rxg3-f5g2 — HttpOnly cookie exposure on Edge runtime routes | **Yes** | Two routes run on the Edge runtime: app/opengraph-image.tsx:8, app/twitter-image.tsx:11 |
| GHSA-7qx7-33qx-rqx2 — SVG rejection bypass in image optimization | **Yes** | Every photo goes through `next/image`; the home page alone serves 203 `/_next/image` URLs |
| GHSA-mfr8-8qww-v76h — disclosure across root params via `unstable_cache` | Partly | Pages are dynamic and edge-cached for an hour; locale comes from the URL, not a cookie, which limits the blast radius |
| GHSA-pc58-hwjq-p385 — cross-client response injection, self-hosted forwarding | Partly | We are on Vercel (not self-hosted), but `proxy.ts` forwards the request |
| GHSA-vc7v-qv4w-wrv8 — cache leak via delayed inner stream metadata | Partly | Dynamic pages behind a shared CDN cache |
| GHSA-rhh4-g77r-r9qj — cache disclosure with binary args in `use cache` | Unlikely | `use cache` is not used |
| GHSA-vvgp-ww4w-46vf — poisoning of shared fallback shells via placeholder params | Unlikely | Cache Components not enabled |

Three therefore apply to code we actually run.

## What changed

`next` 16.4.3 -> 16.4.6 (package.json range, package-lock pinned). Nothing else.

## Gate

- `npm run test:unit` — 24/24 pass
- `npx tsc --noEmit` — clean
- `npm run build` — clean; warning set unchanged from 16.4.3 (Edge Runtime deprecation, DEP0205)
- `npm run check:links` — 0 dead, 5 known bot-blocker warnings
- served build, headless Chrome at 390x844: home renders title/canonical/JSON-LD/images;
  `/_next/image` returns 200 image/jpeg; /resources still 308s to /other-tools

Edge Runtime deprecation is pre-existing and is the follow-up: both image routes could move
to the nodejs runtime once that is out of beta, but that changes what Vercel runs, so it is
its own change.
