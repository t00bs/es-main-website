import React from "react";

/** App-icon tile: logomark on cream. 32px favicon (4px radius) → 256px app tile (16px radius). */
export function AppIcon({ size = 256, logoSrc = "assets/logo/es-logomark.svg", style }) {
  const small = size <= 48;
  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        borderRadius: small ? "var(--radius-favicon)" : "var(--radius-app)",
        backgroundColor: "var(--es-cream)",
        ...style,
      }}
    >
      <img
        src={logoSrc}
        alt="Electric Sheep"
        style={{
          position: "absolute",
          left: small ? "12.5%" : "16%",
          top: small ? "18.75%" : "21.9%",
          width: small ? "75%" : "68.4%",
          height: "auto",
          display: "block",
          filter: "brightness(0)",
        }}
      ></img>
    </div>
  );
}
