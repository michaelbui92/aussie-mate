"use client";

import { useEffect } from "react";

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
  useEffect(() => {
    try {
      // @ts-ignore  - adsbygoogle is injected by the AdSense script tag in <head>
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense may be blocked, offline, or not yet loaded.
      // Never break the page over ads.
    }
  }, []);

  return (
    <div
      className={`my-8 flex justify-center overflow-hidden ${className}`}
      style={{ minHeight: "100px" }}
      aria-label="advertisement"
    >
      <ins
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