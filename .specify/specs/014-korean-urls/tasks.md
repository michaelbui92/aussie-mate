# Spec 014 — tasks

- [x] **T1** `proxy.ts` — /ko, /zh, /ja rewrite onto the real route with `x-am-locale` + `x-am-path` on the
      request headers. Named `proxy` because Next 16 renamed the convention and the build warned.
- [x] **T2** `app/layout.tsx` — the static `metadata` export folded into a per-request `generateMetadata`
      (Next refuses both in one file) emitting the canonical for the served URL and hreflang with two
      distinct targets; `<html lang>` and `<LangProvider initial>` from the URL.
- [x] **T3** `app/lib/seo.ts` — `withSeo` and `seoFor` stop supplying `alternates`; the layout owns them.
- [x] **T4** `app/components/LangBlocks.tsx` — `LangProvider` accepts the server locale, so the HTML is
      Korean before hydration, and a URL locale outranks the stored preference.
- [x] **T5** `app/sitemap.ts` — both languages per entry, each naming the other (49 -> 98 URLs).
- [x] **T6** `app/components/Nav.tsx` — the language pill navigates to the sibling URL.
- [x] **T7** Verify on the built server: 9 checks pass including the negative control that the Korean URL
      does not canonicalise to its English twin.
- [x] **T8** Verify on the deployed site after the auto-deploy.

## Not done, deliberately

- **D1** is still open: whether every page needs Korean content is a content decision, not a technical one.
      Every page currently has both languages because the components carry both, so the mechanism needed
      no subset.
- **The titles.** Measured: 29 of 30 are over 60 characters, but the keywords are front-loaded and the
      truncated tail is a subtopic list. That is a CTR question, not a defect, and rewriting deliberate CTR
      copy on a hunch is not a change worth making.
- **Korean fluency.** The two audits find wrong scripts and English fragments. They cannot tell whether the
      Korean reads well, and that still needs someone who reads Korean.
