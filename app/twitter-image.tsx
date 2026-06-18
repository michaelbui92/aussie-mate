import { ImageResponse } from "next/og";

// Twitter card image — auto-served at /twitter-image.png.
// Same artwork as opengraph-image but with Twitter's preferred 2:1 aspect
// (1200×600 instead of 1200×630) for sharper timeline previews.

export const alt = "AussieGuides — 호주 생활 가이드 (한국어 / English)";
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export const runtime = "edge";

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "70px 80px",
          background:
            "linear-gradient(135deg, #fafaf9 0%, #f5f5f4 50%, #e7e5e4 100%)",
          fontFamily: "serif",
          color: "#1c1917",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 26,
            letterSpacing: "0.18em",
            color: "#78716c",
            textTransform: "uppercase",
            fontFamily: "sans-serif",
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              background: "#ffffff",
              border: "1px solid #e7e5e4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
            }}
          >
            🇦🇺
          </div>
          AUSSIEGUIDES
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            maxWidth: 1000,
          }}
        >
          <div
            style={{
              fontSize: 88,
              lineHeight: 1.02,
              fontWeight: 500,
              letterSpacing: "-0.02em",
              color: "#0c0a09",
            }}
          >
            Your Aussie Guides
          </div>
          <div
            style={{
              fontSize: 88,
              lineHeight: 1.02,
              fontWeight: 500,
              letterSpacing: "-0.02em",
              color: "#c2410c",
            }}
          >
            호주 생활 가이드
          </div>
        </div>

        <div
          style={{
            fontSize: 28,
            color: "#78716c",
            fontFamily: "sans-serif",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 999,
              background: "#c2410c",
              display: "flex",
            }}
          />
          youraussieguides.com
        </div>
      </div>
    ),
    { ...size }
  );
}
