/**
 * The AdSense script, server-rendered, for the pages that carry an ad unit.
 *
 * It is deliberately NOT in the root layout: that is what enabled Auto Ads on all 53 routes, where
 * Google injected a container the site had not reserved space for (CLS 0.19 on /about and /study,
 * which carry no ad of their own).
 *
 * It is also deliberately not loaded from the AdSlot component's effect. The slot sits below the fold,
 * and a client effect there only runs once React has hydrated that part of the page - so the script
 * arrived late, or not at all, depending on how far the reader had scrolled. A server-rendered tag is
 * in the HTML on the first response, which is what AdSense expects.
 *
 * To turn ads off, set NEXT_PUBLIC_ADSENSE_ID to an empty string in Vercel.
 */
const ADSENSE_CLIENT =
  process.env.NEXT_PUBLIC_ADSENSE_ID === undefined
    ? "ca-pub-7794121496618493"
    : process.env.NEXT_PUBLIC_ADSENSE_ID || null;

export default function AdsenseScript() {
  if (!ADSENSE_CLIENT) return null;
  return (
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
      crossOrigin="anonymous"
    />
  );
}
