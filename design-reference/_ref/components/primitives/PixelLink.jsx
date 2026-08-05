import React from "react";

const ARROW_PATH = "M 27 19.286 L 23.143 19.286 L 23.143 3.857 L 7.714 3.857 L 7.714 0 L 27 0 L 27 19.286 Z M 0 27 L 0 23.143 L 3.857 23.143 L 3.857 27 L 0 27 Z M 3.857 23.143 L 3.857 19.286 L 7.714 19.286 L 7.714 23.143 L 3.857 23.143 Z M 7.714 19.286 L 7.714 15.429 L 11.571 15.429 L 11.571 19.286 L 7.714 19.286 Z M 11.571 15.429 L 11.571 11.571 L 15.429 11.571 L 15.429 15.429 L 11.571 15.429 Z M 15.429 11.571 L 15.429 7.714 L 19.286 7.714 L 19.286 11.571 L 15.429 11.571 Z";

/** Neue Pixel text link with the pixel north-east arrow. */
export function PixelLink({ children, href = "#", color = "var(--es-cream)", fontSize = 18, arrow = true, onClick, style }) {
  return (
    <a
      href={href}
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "baseline",
        gap: "0.35em",
        fontFamily: "var(--font-pixel)",
        fontWeight: 400,
        fontSize,
        lineHeight: "var(--leading-tight)",
        color,
        textDecoration: "none",
        ...style,
      }}
    >
      {children}
      {arrow ? (
        <svg
          width="0.78em"
          height="0.78em"
          viewBox="0 0 27 27"
          fill="currentColor"
          style={{ flexShrink: 0, transform: "translateY(0.06em)" }}
          aria-hidden="true"
        >
          <path d={ARROW_PATH} fillRule="nonzero"></path>
        </svg>
      ) : null}
    </a>
  );
}
