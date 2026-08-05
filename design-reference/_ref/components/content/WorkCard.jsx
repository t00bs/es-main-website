import React from "react";

const ARROW_PATH = "M 27 19.286 L 23.143 19.286 L 23.143 3.857 L 7.714 3.857 L 7.714 0 L 27 0 L 27 19.286 Z M 0 27 L 0 23.143 L 3.857 23.143 L 3.857 27 L 0 27 Z M 3.857 23.143 L 3.857 19.286 L 7.714 19.286 L 7.714 23.143 L 3.857 23.143 Z M 7.714 19.286 L 7.714 15.429 L 11.571 15.429 L 11.571 19.286 L 7.714 19.286 Z M 11.571 15.429 L 11.571 11.571 L 15.429 11.571 L 15.429 15.429 L 11.571 15.429 Z M 15.429 11.571 L 15.429 7.714 L 19.286 7.714 L 19.286 11.571 L 15.429 11.571 Z";

/** Square work-grid tile: image, protection gradient, title (+ optional subtitle & arrow). */
export function WorkCard({ src, title, subtitle, showArrow = false, size = 440, href = "#", onClick, style }) {
  return (
    <a
      href={href}
      onClick={onClick}
      style={{
        position: "relative",
        display: "block",
        width: size,
        height: size,
        overflow: "hidden",
        backgroundColor: "var(--surface-placeholder)",
        textDecoration: "none",
        ...style,
      }}
    >
      {src ? (
        <img src={src} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}></img>
      ) : null}
      <div style={{ position: "absolute", inset: 0, background: "var(--overlay-protect)" }}></div>
      <div
        style={{
          position: "absolute",
          left: "var(--card-pad)",
          right: "var(--card-pad)",
          bottom: subtitle ? 16 : 11,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: "var(--text-card-title)",
              lineHeight: "var(--leading-tight)",
              whiteSpace: "nowrap",
              color: "var(--es-cream)",
            }}
          >
            {title}
          </span>
          {subtitle ? (
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
                fontSize: "var(--text-caption)",
                lineHeight: "var(--leading-tight)",
                whiteSpace: "nowrap",
                color: "var(--es-cream)",
              }}
            >
              {subtitle}
            </span>
          ) : null}
        </div>
        {showArrow ? (
          <svg width="27" height="27" viewBox="0 0 27 27" fill="var(--es-cream)" style={{ flexShrink: 0 }} aria-hidden="true">
            <path d={ARROW_PATH} fillRule="nonzero"></path>
          </svg>
        ) : null}
      </div>
    </a>
  );
}
