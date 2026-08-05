import React from "react";

/** Outline pill badge (40px radius, 1px inset stroke) — e.g. "Customer Stories". */
export function PillBadge({ children, color = "var(--es-cream)", style }) {
  return (
    <span
      style={{
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        padding: "11px 12px 8px 12px",
        borderRadius: "var(--radius-pill)",
        boxShadow: `inset 0 0 0 1px ${color}`,
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: "var(--text-body)",
        lineHeight: "var(--leading-none)",
        whiteSpace: "nowrap",
        color,
        ...style,
      }}
    >
      {children}
    </span>
  );
}
