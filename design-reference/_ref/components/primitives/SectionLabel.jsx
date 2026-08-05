import React from "react";

/**
 * Section label with the brand's "redaction mark": the label renders in cream,
 * and the words wrapped in `highlight` sit on a solid block. On light surfaces
 * the cream text is invisible except where the ink block reveals it; on dark
 * surfaces the cream block hides the highlighted words. Exact motif from source.
 */
export function SectionLabel({ children, highlight, style }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: "var(--text-section-label)",
        lineHeight: "var(--leading-label)",
        color: "var(--text-on-dark)",
        ...style,
      }}
    >
      {children}
      {highlight ? (
        <React.Fragment>
          <br></br>
          <span
            style={{
              display: "inline-block",
              padding: "1px 6px 2px 4px",
              marginLeft: -4,
              borderRadius: "var(--radius-highlight)",
              backgroundColor: "var(--highlight-block)",
            }}
          >
            {highlight}
          </span>
        </React.Fragment>
      ) : null}
    </span>
  );
}
