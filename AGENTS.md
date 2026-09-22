<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# aussie-mate

**URL:** https://youraussieguides.com
**Stack:** Next.js 16.2.6 + Turbopack + React 19 + Tailwind 4
**Deploy:** Vercel auto-deploy on push to `main`
**Domain:** Bilingual EN/KO Australia travel & living guide for newcomers

## Current state

- **HEAD:** `dbe8a95` — fix: replace 18 mislabelled stock images with verified genuine photos
- **Dirty files:** 0
- ✅ Live, serving public traffic
- ✅ SEO metadata rewritten for CTR (Jul 2026) — 13 page titles + descriptions updated
- ✅ OG image using Sydney Opera House dusk hero photo
- ✅ Images optimised to WebP (30 images, ~50% size reduction)
- ✅ Pages: 35+ routes covering transport, finance, visa, cost-of-living, destinations, experiences, study, work, aussie-english, journey flows
- ✅ Bilingual EN/KO with Korean preserved for ko-language browsers
- ✅ AdSense configured (ca-pub-7794121496618493)

## Active decisions

- **Identity pivot (Jun 2026):** "for-everyone" audience, not Korean-only. Korean preserved as alt-language.
- **Auto-ship:** Changes auto-push to main (notable exceptions: typecheck fail, new build warning, cross-repo changes)
- **Email:** `michaelbui@outlook.com.au` is canonical. `hello@aussiemate.com.au` does not exist.
- **Audience:** Newcomers to Australia — practical, plain-language, written by a local (Michael Bui, Sydneysider)

## Known issues / gotchas

- **Canonical and hreflang live in `app/layout.tsx`'s `generateMetadata`, not in the pages.** A page's
  `metadata` export is static, so it cannot know whether it is serving /destinations or /ko/destinations,
  and `withSeo`/`seoFor` emitting three hreflang tags on ONE url is what made the Korean half unindexable.
  If you add a canonical to a page, you are re-introducing that bug.
- **Next refuses `metadata` and `generateMetadata` in the same file.** The site-wide block is
  `staticMetadata` in `app/layout.tsx`, folded into the generated one.
- **Next 16 renamed `middleware.ts` to `proxy.ts`** (function `middleware` -> `proxy`). The build warns
  loudly if you use the old name.
- **React renders hreflang as `hrefLang`.** HTML parses it case-insensitively so it is valid, but any check
  or grep for lowercase `hreflang=` finds nothing and will report a false failure. Use `re.I`.


- **A check scoped to `<head>` reported JSON-LD as missing when it was in the body.** Measured
  2026-09-22: grepping `application/ld+json` inside `h.split('</head>')[0]` returned 0 for the homepage, so
  it was recorded as having no structured data and a `WebSite` + `Organization` block was added — duplicating
  the `WebSite` and `Organization` the layout already emits in the **body** (with a `SearchAction`). The
  served page then carried **two** `WebSite` entities, which is worse than the absence being fixed. Reverted.
  Same class as the "scope a check to the region you changed" lesson, inverted: an unscoped check reports an
  absence for something that exists elsewhere on the page. **Count structured data across the whole
  document, never the head alone.**

- **Build cache:** Vercel's "Restored build cache" can mask latent type errors. Invalidate cache if unrelated commits surface typecheck failures.
- **adsense disable:** `NEXT_PUBLIC_ADSENSE_ID` empty string vs unset — explicit guard in layout.tsx:148
- **phrases.ts:** Deduped 209→178 entries. Wicket, Salvos, Coorie Korean glosses fixed.
- **Korean accuracy:** `scripts/korean-accuracy-audit.sh` catches CJK drift but not ASCII-leak defects (English fragments mid-Korean sentence). Manual review needed.
- **Images must be vision-verified against their claim.** A 2026-09-11 audit of all 44 images found 18 that did not show what the page claimed (US tax forms for "Australian Banking", Indian curry for "Little China", a Spanish stadium for a NSW road trip, a Maldives resort for "South Coast", a European ski piste for "Snowy Mountains"). The cause: numbered template stock (`pexels-NNNN.jpg` / `unsplash-XXXX.jpg`) assigned to a specific claim without anyone checking contents. Before adding or keeping any photo, confirm with vision that it shows the named place/cuisine/sport, or write alt text that claims nothing it doesn't show. Descriptive Wikimedia filenames have been reliable; numbered stock has not.
- **~~WebP files are not actually served.~~ CORRECTED 2026-09-22 — this was out of date.** `next/image`
  **is** wired: the served HTML requests `/_next/image?url=%2Fimages%2F…`, so browser delivery is
  optimised and the recommendation below was already acted on. What remains true is the dead weight: the
  `public/images/*.webp` originals are referenced by nothing (0 files in `app/`), and the JPEG sources are
  large (`pexels-34907670.jpg` 4.3 MB), which still costs the optimiser a cold transform each time.
- **hreflang `en`, `ko` and `x-default` all point at ONE URL** (measured 2026-09-22, on the served HTML:
  `distinct target URLs: 1`). The comment in `app/lib/seo.ts` says this is deliberate — "English and Korean
  currently share one URL" — but hreflang maps **different** URLs, so three identical tags express nothing
  and the ko variant can never be indexed as Korean. **Open work:** give Korean its own URLs, the pattern
  already proven in `drivewithbui` (`/ko` paths rewritten by middleware). Also measured: with
  `Accept-Language: ko-KR` the served document is byte-identical to the English one, so the Korean is not
  server-rendered either.
