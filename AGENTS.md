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

- **Build cache:** Vercel's "Restored build cache" can mask latent type errors. Invalidate cache if unrelated commits surface typecheck failures.
- **adsense disable:** `NEXT_PUBLIC_ADSENSE_ID` empty string vs unset — explicit guard in layout.tsx:148
- **phrases.ts:** Deduped 209→178 entries. Wicket, Salvos, Coorie Korean glosses fixed.
- **Korean accuracy:** `scripts/korean-accuracy-audit.sh` catches CJK drift but not ASCII-leak defects (English fragments mid-Korean sentence). Manual review needed.
- **Images must be vision-verified against their claim.** A 2026-09-11 audit of all 44 images found 18 that did not show what the page claimed (US tax forms for "Australian Banking", Indian curry for "Little China", a Spanish stadium for a NSW road trip, a Maldives resort for "South Coast", a European ski piste for "Snowy Mountains"). The cause: numbered template stock (`pexels-NNNN.jpg` / `unsplash-XXXX.jpg`) assigned to a specific claim without anyone checking contents. Before adding or keeping any photo, confirm with vision that it shows the named place/cuisine/sport, or write alt text that claims nothing it doesn't show. Descriptive Wikimedia filenames have been reliable; numbered stock has not.
- **WebP files are not actually served.** `public/images/*.webp` exist (from the earlier optimisation pass) but no `.webp` string appears anywhere in `app/`, so the `.jpg` originals are what browsers fetch. Several are very large (e.g. `pexels-1267320.jpg` was 9.8 MB before removal). Worth wiring up `next/image` or a `<picture>` fallback — the current WebP optimisation is dead weight.

## Next steps

1. Monitor SEO CTR impact of the metadata rewrite (2-4 weeks for Google re-index)
2. Destinations/[slug] dynamic metadata — ensure drive time extraction covers all edge cases
3. Consider FAQ schema on more pages (helper already in `app/lib/seo.ts`)