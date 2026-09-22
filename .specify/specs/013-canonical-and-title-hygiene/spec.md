# Spec 013 — canonical URLs and doubled brand suffixes

**Base:** `fa99717` · **Date:** 2026-09-22 · **Status:** in progress
**Origin:** "how is its content for SEO" — an audit of the served HTML against the repo.

## The problem

Measured on the **raw served HTML** (not the hydrated DOM), two faults affect most of the site:

**1. Canonicals carry a double slash.**

```
/destinations  → canonical https://youraussieguides.com//destinations
/visa          → canonical https://youraussieguides.com//visa
/faq           → canonical https://youraussieguides.com//faq
```

`seoFor`'s docstring says *"Path WITHOUT leading slash. E.g. `visa` or `visa/417`"* — and **all 26
callers pass one**, so `${SITE_URL}/${path}` produces `//`. Google generally ignores a canonical pointing
at a URL that does not exist, so this has probably not de-indexed anything — but it **discards the signal
on every affected page**, and the sitemap (which is correct, 49 URLs, 0 double slashes) now contradicts
the pages it lists.

`/cost-of-living` is correct only because it does not use the helper, which is how the fault stayed
invisible: the pages disagree with each other.

**2. The brand appears twice in every title.**

`app/layout.tsx` sets `template: "%s · AussieGuides"`, and 26 metadata titles already end in
`| AussieGuides`. The rendered result is `"… | AussieGuides · AussieGuides"` — over 60 characters, so
Google truncates it. This partly undoes the Jul 2026 CTR rewrite.

## Also found, and not fixed here

- **hreflang `en`, `ko` and `x-default` all point at one URL.** This is deliberate — the comment says
  *"English and Korean currently share one URL… we tell Google about both via hreflang"* — but that is not
  what hreflang does: it maps **different** URLs, so three tags on one URL express nothing, and the ko
  variant can never be indexed as Korean. Fixing it means giving Korean its own URLs, which this repo
  already has a proven pattern for in `drivewithbui` (`/ko` paths rewritten by middleware).
- **`AGENTS.md` is stale about images.** It says the WebP files are not served and recommends wiring up
  `next/image`. `next/image` **is** wired — the served HTML requests `/_next/image?url=…`. The
  unreferenced `.webp` originals are the dead weight, not the JPEG delivery.
- Hubs are thin (`/destinations` 482 words, `/cost-of-living` 515) against `/aussie-english`'s 4,864.

## Requirements

- **R1** — no canonical URL contains `//` after the scheme, for any caller, with or without a leading slash.
- **R2** — a page title renders with the brand **exactly once**.
- **R3** — both fixes live in `app/lib/seo.ts`, the declared single owner, rather than at 26 call sites.
- **R4** — the sitemap and the canonicals agree.
- **R5** — no title loses a keyword: only the brand suffix is removed, never anything the CTR rewrite added.
- **R6** — verified on the **served HTML** after deploy, since metadata cannot be checked in the DOM.
