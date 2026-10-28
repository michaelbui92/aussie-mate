import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Allow Next/Image to optimize remote images from Unsplash.
  // Without this, <Image src="https://images.unsplash.com/..." /> errors at build.
  images: {
    // AVIF first: the destination and experience photography is the largest payload on the site, and
    // AVIF is ~30-50% smaller than WebP at the same quality. Next falls back down the list itself.
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        // Every page reads x-am-locale from the request (proxy.ts) so it can state the right
        // canonical and hreflang, which makes each route dynamic -- Next then sends
        // "Cache-Control: private, no-store" and nothing is cached at the edge, so every visit
        // and every crawl reaches the origin.
        //
        // The response does not vary by visitor: the locale comes from the URL, not a cookie or
        // a header. So the page is safe to hold at the edge. CDN-Cache-Control is the separate
        // directive for shared caches, which leaves Next's Cache-Control for browsers alone --
        // setting Cache-Control here would fight it and send two conflicting values.
        source: "/((?!_next/|api/|images/|.*\\.).*)",
        headers: [
          { key: "CDN-Cache-Control", value: "public, s-maxage=3600, stale-while-revalidate=86400" },
          { key: "Vercel-CDN-Cache-Control", value: "public, s-maxage=3600, stale-while-revalidate=86400" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // The old /journey/visiting page was renamed to /journey/before-you-come
      // and its day-one content merged into /journey/arrived. Send old links
      // to the arrived page (where the day-one content lives) and let
      // /journey/before-you-come handle pre-arrival planning from the hub.
      {
        source: "/journey/visiting",
        destination: "/journey/arrived",
        permanent: true,
      },
      // The /resources page was retired and its remaining value folded into the
      // "My Projects" section at /other-tools. It was live and in the sitemap, so a
      // 308 keeps every bookmark, backlink and crawl entry working instead of 404ing.
      {
        source: "/resources",
        destination: "/other-tools",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
