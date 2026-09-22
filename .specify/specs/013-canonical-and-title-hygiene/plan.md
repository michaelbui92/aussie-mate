# Plan — spec 013

1. **One URL normaliser, used everywhere.** `app/lib/seo.ts` repeats `` `${SITE_URL}/${path}` `` at four
   sites (lines 74, 101, 160, 208). Replace all four with one `absoluteUrl(path)` that collapses slashes
   on either side of the join. Fixing the four copies separately would leave the fifth caller that gets
   added later to reintroduce the same bug.
2. **One title normaliser.** The pages already carry the brand; the layout template adds it again. Strip a
   trailing brand from the metadata title inside `withSeo`, so the template appends it exactly once, and
   leave the template itself alone — it is the mechanism, not the fault.
3. **Do not touch the 26 call sites.** They are deliberate CTR copy; the fault is in the joining.
4. **Verify on the served HTML, not the DOM.** Metadata is only real in the raw response.
5. **Keep the sitemap as the reference.** It is already correct, so any disagreement after this change
   means the fix is wrong, not the sitemap.

## Traps to respect

- `Metadata['title']` may be a string **or** an object (`{ absolute, default, template }`). A normaliser
  that assumes a string will throw on the object form; handle both and leave objects alone.
- The canonical must keep its scheme's `//`. A naive `replace(/\/+/g, "/")` turns `https://` into
  `https:/` — collapse only the path join.
- `AGENTS.md` will be wrong after this about the images; it was already wrong before this change.
