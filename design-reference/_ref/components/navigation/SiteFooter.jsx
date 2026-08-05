import React from "react";

/** Black footer: giant full-bleed logotype, then contact rows in cream. */
export function SiteFooter({
  logoSrc = "assets/logo/es-logo-cream.svg",
  address = "10 Minden Street, St Helier, JE2 4WR",
  email = "hello@electricsheep.design",
  legal = "© 2026 Electric Sheep Limited.\nAll rights reserved.",
  style,
}) {
  const itemStyle = {
    fontFamily: "var(--font-sans)",
    fontWeight: 400,
    fontSize: "var(--text-body)",
    lineHeight: "var(--leading-none)",
    color: "var(--es-cream)",
    textDecoration: "none",
    whiteSpace: "pre-line",
  };
  return (
    <footer
      style={{
        backgroundColor: "var(--surface-footer)",
        padding: "42px 40px 40px 40px",
        display: "flex",
        flexDirection: "column",
        gap: 48,
        ...style,
      }}
    >
      <img src={logoSrc} alt="Electric Sheep" style={{ width: "100%", height: "auto", display: "block" }}></img>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 24,
        }}
      >
        <span style={itemStyle}>{address}</span>
        <a href={`mailto:${email}`} style={itemStyle}>{email}</a>
        <a href="#" style={itemStyle}>Privacy</a>
        <span style={{ ...itemStyle, textAlign: "right" }}>{legal}</span>
      </div>
    </footer>
  );
}
