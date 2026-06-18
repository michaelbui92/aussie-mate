# aussie-mate — Redeploy & Operations Guide

## Critical: Project layout (paths)

The repo is at `/opt/data/data_dir/workspace/aussie-mate`. Two important non-obvious things:

1. **The SEO library lives at `app/lib/seo.ts`, NOT `lib/seo.ts`.** The repo's tsconfig `@/*` alias maps to `app/*`, so `import { ... } from "@/lib/seo"` resolves to `app/lib/seo.ts`. Don't create a top-level `lib/` directory — Next.js will ignore it.
2. **`app/lib/site.ts` exports `SITE_URL`** — single source of truth for the canonical domain. Update it (and only it) when the domain changes.

## Domain

- **Canonical:** `https://youraussieguides.com` (bought by user)
- **Old preview:** `https://aussie-mate.vercel.app` — `vercel.json` 301s both old and `www` to the apex
- DNS is at the user's registrar; once added in Vercel Domains panel, propagation takes 5–30 min

## AdSense

- **Publisher ID:** `ca-pub-7794121496618493`
- Auto Ads script loaded in `app/layout.tsx` `<head>` (line ~117)
- **Manual ad units:** `<AdSlot />` component at `app/components/AdSlot.tsx`
  - Placed on `/` (HomePage, before SearchModal) — committed `988605b`
  - Placed on `/visa` (hub, before BreadcrumbList JSON-LD) — committed `988605b`
  - Other pages: NOT YET — see "Tier 1 gaps" below
- AdSlot is a client component; calls `adsbygoogle.push({})` on mount
- Without `data-ad-slot` it relies on Auto Ads to fill (mode set in AdSense console)
- New accounts: 24–48h after first script load before impressions start
- To disable: set `NEXT_PUBLIC_ADSENSE_ID=""` in Vercel env vars (env wins over hardcode)

## Vercel Analytics

- Already installed (`@vercel/analytics` in `package.json`)
- Already wired: imported on line 10, rendered as `<Analytics />` in `app/layout.tsx`
- No further action needed

## SEO foundation (committed)

| Feature | Status | Files |
|---|---|---|
| Per-page canonical + hreflang (en/ko/x-default) | ✅ All 26 pages | `app/lib/seo.ts` (withSeo) |
| OG image (1200×630 PNG, edge runtime) | ✅ | `app/opengraph-image.tsx` |
| Twitter card image | ✅ | `app/twitter-image.tsx` |
| Organization + WebSite JSON-LD (with SearchAction) | ✅ | `app/layout.tsx` |
| Viewport meta + theme-color | ✅ | `app/layout.tsx` (viewport export) |
| Sitemap (with visa + destinations sub-pages) | ✅ | `app/sitemap.ts` |
| robots.txt | ✅ | `app/robots.ts` |
| Privacy + Terms pages (AdSense-eligible) | ✅ | `app/privacy/page.tsx`, `app/terms/page.tsx` |

## SEO foundation (PARTIAL — gaps to fill on next session)

- **BreadcrumbList JSON-LD:** Only `app/about/page.tsx` has it (committed `a75076b`).
  The other 19 pages need it. **Add it ONE FILE AT A TIME using `patch` + `tsc --noEmit` after each.**
  Do NOT try to batch-edit JSX files with regex — see "JSX gotcha" below.
- **FAQPage JSON-LD:** The lib has `faqLdJson()` ready; only `app/faq/page.tsx` calls it. Visa sub-pages should also have FAQPage schema but don't yet.

## H1 inventory (all ✅)

Every page has exactly one H1. The root homepage's H1 is in `app/components/HomePage.tsx` line 88 (it's a client component), not `app/page.tsx`. The grep-based audit incorrectly flagged it as missing because it only looked in `page.tsx`.

## Critical lessons (DO NOT REPEAT THESE MISTAKES)

### 1. Never batch-edit JSX with regex

Object literals like `{ name: "X", path: "Y" }` are NOT valid as JSX expressions — JSX treats `{` as the start of a TypeScript expression and gets confused by shorthand object syntax. The correct pattern is to use explicit property names AND/OR wrap in parens: `({ name: "X", path: "Y" })`.

When you do `breadcrumbLdJson([{ name: ..., path: ... }])` inside a JSX expression, the cleanest form is:

```jsx
dangerouslySetInnerHTML={{
  __html: JSON.stringify(
    breadcrumbLdJson([
      { name: "Home", path: "" },
      { name: "About", path: "about" },
    ])
  ),
}}
```

A previous attempt used regex to mass-edit 26 files at once and broke every single one because:
- Regex couldn't reliably count nested braces
- The "fix" script then re-broke them in different ways
- The apartment page was particularly destroyed

**Rule: One `patch` per file. Typecheck after each. If you have 26 to edit, that's 26 separate operations.**

### 2. Always `git status` before destructive scripts

The `git checkout HEAD -- app/` was the recovery. Without git tracking, the broken state would have been unrecoverable. **The repo MUST be committed before any non-trivial batch operation.**

### 3. Bracket matching in regex is fundamentally unsafe

If you find yourself writing regex with `\{` / `\}` and counting depth, **stop and use a real parser**. The `execute_code` tool has Python; use it to walk the JSX structure properly.

## Commit / deploy workflow

1. `git -c user.name="Michael Bui" -c user.email="michaelbui@outlook.com.au" commit -m "..."`
2. Push with token (token is in `/opt/data/data_dir/.env` as `GITHUB_TOKEN`, chmod 600):
   ```bash
   set -a && source /opt/data/data_dir/.env && set +a
   git -c credential.helper= push https://michaelbui92:${GITHUB_TOKEN}@github.com/michaelbui92/aussie-mate.git main
   ```
3. Vercel auto-deploys from `main` (≈1 min)
4. Verify with `npx tsc --noEmit` before committing

## Tier-1 / Tier-2 / Tier-3 traffic plan (status)

| Tier | Item | Status |
|---|---|---|
| 1 | Canonical + hreflang | ✅ Done (`007b52e`) |
| 1 | OG image | ✅ Done (`007b52e`) |
| 1 | Analytics wired | ✅ Done (was already in HEAD) |
| 1 | Breadcrumb JSON-LD on all pages | ⚠️ 1/20 — only `/about` |
| 1 | Manual `<AdSlot />` on more pages | ⚠️ 2/26 — `/` and `/visa` only |
| 1 | FAQPage JSON-LD on visa sub-pages | ❌ Not done |
| 2 | Hero `<Image priority>` LCP | ✅ Done (`e073191`) — `<link rel=preload as=image>` in head |
| 2 | Internal `<RelatedContent />` link graph | ✅ 7/26 hub pages — finance/apartment/visa/workplace/transport/tourist/study |
| 3 | Image width/height on remaining `<img>` tags | ⚠️ Partial — destinations pages still use raw `<img>` |
| 3 | 5 new long-tail content pages (`/guides/*`) | ❌ Not done |
| 3 | More destinations | ✅ 4 added (`6aef151`) — byron-bay, jervis-bay, wollongong, port-stephens |
| 3 | Destinations hub filter (trip-length chips) | ✅ Done (`6aef151`) |
| 3 | Destinations FAQPage + Suggested stay | ✅ Done (`6aef151`) — 10 destinations upgraded |
| 3 | Search Console + Bing Webmaster setup | ❌ Not done |

| 3 | Destinations image overhaul | ✅ Wikimedia Commons landmarks (`2e58542` → `2eccda1` → `a5cc46d`) — Byrons lighthouse, Jervis Bay→Hyams Beach, Wollongong→Sea Cliff Bridge, Port Stephens→Stockton Bight dunes at Anna Bay; all 960px cards |

## Repo file counts (as of HEAD = `a5cc46d`)

- 10 destinations in `app/destinations/data.ts` (was 6 — added byron-bay, jervis-bay, wollongong, port-stephens)
- 26 `page.tsx` files
- `app/lib/seo.ts` (helpers), `app/lib/site.ts` (SITE_URL)
- `app/components/RelatedContent.tsx` (internal-link component)
- `app/components/AdSlot.tsx` (AdSense unit)
