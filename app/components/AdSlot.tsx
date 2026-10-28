"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/components/LangBlocks";
import { uiLabel } from "@/lib/ui-i18n";

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
    const el = insRef.current;
    if (!el) return;

    // AdSense throws "No slot size for availableWidth=0" when the unit is pushed before layout has
    // given it a width - which is exactly what happens now that the script loads lazily and the first
    // effect can run against a zero-width <ins>. Wait for a real width, then push once.
    let frame = 0;
    let cancelled = false;
    const push = () => {
      if (cancelled) return;
      if (el.offsetWidth === 0 && frame++ < 60) {
        requestAnimationFrame(push);
        return;
      }
      try {
        // @ts-expect-error - adsbygoogle is injected by the AdSense script tag in <head>
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
        // AdSense may be blocked, offline, or not yet loaded.
        // Never break the page over ads.
      }
    };
    push();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      className={`my-8 flex justify-center overflow-hidden ${className}`}
      style={{ minHeight: "100px" }}
      // role="complementary" is what makes a label legal here - an aria-label on a plain div is a
      // prohibited attribute, which Lighthouse reports as an accessibility failure.
      role="complementary"
      aria-label={uiLabel(lang, "advertisement")}
    >
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-7794121496618493"
        data-ad-slot={slot ?? ""}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}