import React from "react";

/** Full-width row of Neue Pixel ticker labels, space-between. */
export function TickerRow({ items = ["Design", "AUTOMATION", "PORTALS"], style }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "8px 0",
        ...style,
      }}
    >
      {items.map((label, i) => (
        <span
          key={i}
          style={{
            fontFamily: "var(--font-pixel)",
            fontWeight: 400,
            fontSize: "var(--text-pixel-label)",
            lineHeight: "var(--leading-none)",
            letterSpacing: "var(--tracking-pixel)",
            whiteSpace: "nowrap",
            color: "var(--text-primary)",
          }}
        >
          {label}
        </span>
      ))}
    </div>
  );
}
