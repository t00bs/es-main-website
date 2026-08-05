import React from "react";
import { PixelLink } from "../primitives/PixelLink.jsx";

/** Full-width feature/CTA image card: 62px headline + pixel link, bottom-left. */
export function FeatureCard({ src, headline, linkText, height = 515, href = "#", style }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height,
        overflow: "hidden",
        backgroundColor: "var(--surface-placeholder)",
        ...style,
      }}
    >
      {src ? (
        <img src={src} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}></img>
      ) : null}
      <div style={{ position: "absolute", inset: 0, background: "var(--overlay-protect)" }}></div>
      <span
        style={{
          position: "absolute",
          left: "var(--card-pad)",
          bottom: linkText ? 77 : 30,
          maxWidth: 410,
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: "var(--text-display)",
          lineHeight: "var(--leading-tight)",
          color: "var(--es-cream)",
        }}
      >
        {headline}
      </span>
      {linkText ? (
        <div style={{ position: "absolute", left: "var(--card-pad)", bottom: 30 }}>
          <PixelLink href={href}>{linkText}</PixelLink>
        </div>
      ) : null}
    </div>
  );
}
