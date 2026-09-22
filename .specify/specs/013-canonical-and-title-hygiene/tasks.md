# Tasks — spec 013

- [x] T1 — measure: 26 of 26 callers pass a leading slash; 26 metadata titles carry the brand
- [x] T2 — `absoluteUrl(path)` in `seo.ts`, collapsing the join, scheme preserved
- [x] T3 — replace all four `` `${SITE_URL}/${...}` `` sites with it
- [x] T4 — `withoutBrand(title)` in `seo.ts`, applied in `withSeo`, string-only, objects untouched
- [x] T5 — leave `layout.tsx`'s template alone
- [x] T6 — typecheck + build
- [x] T7 — push, then verify the **served HTML**: no `//` canonical, brand once per title
- [x] T8 — confirm the sitemap and the canonicals agree
- [x] T9 — correct `AGENTS.md`'s stale image claim, and record the hreflang finding as open work
