import React from "react";
import { PillBadge } from "../primitives/PillBadge.jsx";
import { PixelLink } from "../primitives/PixelLink.jsx";

/** Testimonial image card: pill badge top, serif-italic quote, pixel link bottom. */
export function TestimonialCard({ src, quote, linkText, badge = "Customer Stories", height = 440, href = "#", style }) {
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
      <div style={{ position: "absolute", left: "var(--card-pad)", top: 22 }}>
        <PillBadge>{badge}</PillBadge>
      </div>
      <blockquote
        style={{
          position: "absolute",
          left: "var(--card-pad)",
          top: 81,
          margin: 0,
          maxWidth: 410,
          fontFamily: "var(--font-serif-quote)",
          fontWeight: 400,
          fontStyle: "italic",
          fontSize: "var(--text-card-title)",
          lineHeight: "var(--leading-tight)",
          color: "var(--es-cream)",
        }}
      >
        {quote}
      </blockquote>
      {linkText ? (
        <div style={{ position: "absolute", left: "var(--card-pad)", bottom: 24 }}>
          <PixelLink href={href}>{linkText}</PixelLink>
        </div>
      ) : null}
    </div>
  );
}
