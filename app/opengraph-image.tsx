// app/opengraph-image.tsx — auto-generated Open Graph preview image (1200x630).
// Renders the AussieGuides wordmark + tagline over a warm gradient.
// Generated at build time by Next.js (no design tool needed).

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AussieGuides — 호주 생활 가이드 (한국어/English)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #1c1917 0%, #44403c 50%, #ea580c 100%)",
          fontFamily: "serif",
          color: "#fafaf9",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Top eyebrow */}
        <div
          style={{
            fontSize: 24,
            letterSpacing: 8,
            textTransform: "uppercase",
            opacity: 0.7,
            marginBottom: 30,
            display: "flex",
          }}
        >
          BILINGUAL · ENGLISH / 한국어
        </div>

        {/* Main wordmark */}
        <div
          style={{
            fontSize: 120,
            fontWeight: 700,
            lineHeight: 1,
            marginBottom: 40,
            display: "flex",
          }}
        >
          AussieGuides
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 38,
            lineHeight: 1.3,
            textAlign: "center",
            maxWidth: 900,
            opacity: 0.9,
            display: "flex",
          }}
        >
          호주 생활 가이드 — 비자, 은행, 세금, 직장, 부동산
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: 50,
            fontSize: 28,
            letterSpacing: 2,
            opacity: 0.6,
            display: "flex",
          }}
        >
          youraussieguides.com
        </div>
      </div>
    ),
    { ...size }
  );
}
