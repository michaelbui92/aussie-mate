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

- **HEAD:** `f657476` — docs: update AGENTS.md — refresh HEAD and dirty files in Current state
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

## Next steps

1. Monitor SEO CTR impact of the metadata rewrite (2-4 weeks for Google re-index)
2. Destinations/[slug] dynamic metadata — ensure drive time extraction covers all edge cases
3. Consider FAQ schema on more pages (helper already in `app/lib/seo.ts`)