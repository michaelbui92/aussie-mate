# Spec 014 — Korean URLs (`/ko`), so the Korean half can be indexed

**Base:** `d2c9579` · **Date:** 2026-09-22 · **Status:** SHIPPED 2026-09-22 (commit 0b76270), verified on the built server and on the deployed site
**Origin:** the SEO audit. Measured on the served HTML: hreflang `en`, `ko` and `x-default` all point at
**one URL** (`distinct target URLs: 1`), and the served document is identical
regardless of `Accept-Language` — **3 Hangul characters** in the whole homepage response.

**CORRECTION, same day, measured in a browser rather than with curl:** the Korean **does** work for a
Korean-locale visitor. With a real browser at `locale: ko-KR`, `document.documentElement.lang` is `ko`,
the page renders **863 Hangul characters** against 3 for `en-AU`, the H1 reads
`시드니와 그 너머의 Aussie Guides`, and the preference persists. So `AGENTS.md`'s "Korean preserved for
ko-language browsers" is **true**, and an earlier note in this spec said otherwise — that was a `curl`
result being read as a browser result. Curl does not run JavaScript, and the switch happens on hydration.

The real defect is therefore **narrower and sharper**: the Korean is not missing, it is **sharing one URL
with the English**. One URL holds one index entry, so which language Google indexes is decided by its
crawler's own locale, and `hreflang` — which points three tags at that same URL — expresses nothing about
it. Naver, the channel that actually matters for a Korean audience, renders JS less reliably than Google.
62,596 characters of Korean have no URL of their own, and that is the whole problem.

## Why this is not a drive-by edit

The blocker is structural, not stylistic:

- **`app/components/LangBlocks.tsx`** holds the language in `useState<Lang>("en")`, restored by a blocking
  init script in `<head>` and read in a `useEffect`. Client-side by construction, so **the server always
  renders English**.
- **`app/layout.tsx`** hardcodes `<html lang="en">`.
- **`app/lib/seo.ts`** joins `en`, `ko` and `x-default` onto the same URL — deliberately, per its comment
  ("English and Korean currently share one URL"), and that comment is the defect: hreflang maps **different**
  URLs, so three identical tags express nothing.
- **The pages export `metadata` statically** — `export const metadata = withSeo({...}, "/path")`. A static
  export **cannot vary by URL**, so `/ko/destinations` cannot get its own canonical or hreflang from the
  page. This is the same shape drivewithbui solved by making the root metadata a `generateMetadata`
  (per-request, per-language) and **deleting every child `alternates` block**.
- **This repo auto-deploys on push**, so a half-applied locale refactor would go straight to production.
  The steps below are ordered so this cannot happen: the mechanism and its SEO consequences land together
  or the deploy cannot build.

## Requirements

- **R1** — `/ko/<path>` renders the Korean copy **on the server**, and `/`-prefixed English URLs are
  byte-unchanged for existing indexed pages.
- **R2** — `<html lang>` reflects the URL, not a constant.
- **R3** — canonical is the page's **own** URL in its **own** language; hreflang maps `en` → the English
  URL, `ko` → the Korean URL, `x-default` → the English one. Three tags, at least two distinct URLs.
- **R4** — the sitemap submits both, each declaring the other.
- **R5** — the language switcher navigates the URL rather than only a preference, so a shared link carries
  the language (the drivewithbui lesson: a shared `/ko` link must not hand a Korean reader English).
- **R6** — nothing regresses for the 49 already-indexed URLs: same content, same canonical, same status.

## Steps (each must leave production working)

1. **`middleware.ts`** — rewrite `/ko/<path>` onto the real route and pass the locale in a request header
   (`x-am-locale`). *On its own this creates duplicates, so it ships with step 2, not before.*
2. **`app/layout.tsx`** — read the header: `<html lang>`, and pass the locale into `LangProvider` as an
   initial value so the **server** renders the right language. `LangProvider` keeps its client behaviour
   for the toggle.
3. **`app/lib/seo.ts`** — canonical and hreflang become **per-request** functions of the URL. The pages'
   static `metadata` exports must stop supplying `alternates`; the root layout supplies them instead. This
   is the step that touches 26 call sites, and the reason the change is a spec.
4. **`app/sitemap.ts`** — emit both languages from the one URL list.
5. **The switcher** — navigate to the sibling URL instead of only writing a preference.

## Verification (the served HTML, both languages, no JS)

- `/ko/destinations` returns `lang="ko"` with real Hangul in the body; `/destinations` stays `lang="en"`.
- Canonical on each is its own URL; `hreflang` has **two distinct** URLs for `en` and `ko`.
- The 49 existing URLs keep their exact current canonical and status (a before/after diff, not a spot check).
- A negative control: a `/ko` URL must NOT canonicalise to its English twin.

## Decisions left open

- **D1 — is Korean a full mirror or a subset?** Translating more pages is a content decision, not a
  technical one. The mechanism should ship either way; the sitemap can list only what exists.
- **D2 — Chinese and Japanese.** `Lang` already includes `zh` and `ja`, and `En` currently falls back to
  English for both. They need no URL work until there is content for them.
