import React from "react";

/** Signature divider: 77px × 6px solid segment over a full-width 1px hairline. */
export function SectionRule({ style }) {
  return (
    <div style={{ position: "relative", width: "100%", height: 6, ...style }}>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 2.5,
          width: "100%",
          height: 1,
          backgroundColor: "var(--rule-hairline)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 77,
          height: 6,
          backgroundColor: "var(--rule-strong)",
        }}
      ></div>
    </div>
  );
}
