// Single source of truth for the canonical site URL + the named editor.
// Import these in any module that needs to build absolute URLs, attribute
// content to a real human (E-E-A-T), or reference org metadata.
//
// Important: keep `author.url` on the same domain as SITE_URL. Some
// structured-data validators reject cross-domain Person URLs that don't
// have their own dedicated page, so we point to /about.

export const SITE_URL = "https://youraussieguides.com";

export const SITE_AUTHOR = {
  name: "Michael Bui",
  role: "Founder, editor, and lead writer",
  url: `${SITE_URL}/about`,
  email: "hello@aussiemate.com.au",
} as const;
