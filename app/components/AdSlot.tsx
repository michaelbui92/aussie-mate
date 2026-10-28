"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/components/LangBlocks";
import { uiLabel } from "@/lib/ui-i18n";

/**
 * The publisher ID, resolved the same way it was in the root layout: unset means the hardcoded
 * account, set-and-empty means ads are off. It lives here so the script is only ever requested by a
 * page that renders an ad unit - loading it globally is what switched Auto Ads on everywhere.
 */
const ADSENSE_CLIENT =
  process.env.NEXT_PUBLIC_ADSENSE_ID === undefined
    ? "ca-pub-7794121496618493"
    : process.env.NEXT_PUBLIC_ADSENSE_ID || null;

type AdSlotProps = {
  /** AdSense ad slot ID. If empty, falls back to Auto Ads (no slot needed). */
  slot?: string;
  /** Layout shape. Default "auto" lets Google pick. */
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  className?: string;
};

/**
 * Manual AdSense ad unit — paired with Auto Ads (loaded in app/layout.tsx).
 *
 * USAGE:
 *   <AdSlot />                          ← Auto Ads mode (Google picks)
 *   <AdSlot slot="1234567890" />        ← Specific unit (after you create one in AdSense)
 *
 * Per AdSense policy:
 *  - Don't show more than 3 ads above the fold
 *  - Ads need to be visible (no display:none)
 *  - Each slot needs a unique ID (Auto Ads handles this automatically)
 */
export default function AdSlot({
  slot,
  format = "auto",
  className = "",
}: AdSlotProps) {
  const { lang } = useLang();
  const insRef = useRef<HTMLModElement | null>(null);

  useEffect(() => {
    if (!ADSENSE_CLIENT) return;
    const el = insRef.current;
    if (!el) return;

    // The script itself is server-rendered by <AdsenseScript /> on the pages that carry an ad. Here we
    // wait for it (and for a real width) before pushing: AdSense throws "No slot size for
    // availableWidth=0" when a unit is pushed before layout has given it one.
    let frame = 0;
    let cancelled = false;
    const push = () => {
      if (cancelled) return;
      const ready = (window as unknown as { adsbygoogle?: unknown[] }).adsbygoogle;
      if ((!ready || el.offsetWidth === 0) && frame++ < 120) {
        requestAnimationFrame(push);
        return;
      }
      try {
        const w = window as unknown as { adsbygoogle?: unknown[] };
        (w.adsbygoogle = w.adsbygoogle || []).push({});
      } catch {
        // AdSense may be blocked, offline, or not yet loaded. Never break the page over ads.
      }
    };
    push();
    return () => {
      cancelled = true;
    };
  }, []);

  if (!ADSENSE_CLIENT) return null;

  return (
    <div
      className={`my-8 flex justify-center ${className}`}
      /* Space is reserved for the unit before it arrives. Without this, moving the AdSense script to
         lazyOnload traded a main-thread cost for a 0.22 layout shift: the ad injected after load and
         pushed everything below it down. Reserving the box is what AdSense itself recommends. */
      style={{ minHeight: "280px" }}
      // role="complementary" is what makes a label legal here - an aria-label on a plain div is a
      // prohibited attribute, which Lighthouse reports as an accessibility failure.
      role="complementary"
      aria-label={uiLabel(lang, "advertisement")}
    >
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: "block", width: "100%" }}
        data-ad-client="ca-pub-7794121496618493"
        data-ad-slot={slot ?? ""}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}