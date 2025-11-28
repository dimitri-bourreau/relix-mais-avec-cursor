import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "RELIX - Elix en plus rapide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #2e1065 0%, #86198f 50%, #92400e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Title */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <span
            style={{
              fontSize: 120,
              fontWeight: 900,
              background: "linear-gradient(90deg, #ffffff, #f5d0fe, #fde68a)",
              backgroundClip: "text",
              color: "transparent",
              letterSpacing: "-0.02em",
            }}
          >
            RELIX
          </span>
          <span style={{ fontSize: 100, marginLeft: 20 }}>🐇</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 36,
            color: "rgba(245, 208, 254, 0.8)",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Le dico Elix en plus rapide
        </div>

        {/* Search bar preview */}
        <div
          style={{
            marginTop: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 500,
            padding: "20px 32px",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: 20,
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <span style={{ fontSize: 24, color: "rgba(255, 255, 255, 0.5)" }}>
            Chercher un mot...
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}

