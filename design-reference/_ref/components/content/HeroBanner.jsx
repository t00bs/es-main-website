import React from "react";

/** Hero image banner with the bold 58px headline bottom-left. */
export function HeroBanner({ src, headline = "Sheep by name. Not by nature.", height = 428, style }) {
  return (
    <div style={{ position: "relative", width: "100%", height, overflow: "hidden", backgroundColor: "var(--surface-placeholder)", ...style }}>
      {src ? (
        <img src={src} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}></img>
      ) : null}
      <h1
        style={{
          position: "absolute",
          left: 39,
          bottom: 30,
          margin: 0,
          maxWidth: 444,
          fontFamily: "var(--font-hero)",
          fontWeight: 700,
          fontSize: "var(--text-hero)",
          lineHeight: "var(--leading-tight)",
          color: "var(--text-hero)",
        }}
      >
        {headline}
      </h1>
    </div>
  );
}
