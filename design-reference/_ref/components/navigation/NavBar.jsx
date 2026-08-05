import React from "react";

/** Site header: logo lockup left, text links right. */
export function NavBar({ logoSrc = "assets/logo/es-logo-dark.svg", links = ["Work", "Contact"], onNavigate, style }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "40px 40px 8px 40px",
        ...style,
      }}
    >
      <img src={logoSrc} alt="Electric Sheep" style={{ width: 256, height: "auto", display: "block" }}></img>
      <nav style={{ display: "flex", flexDirection: "row", gap: "var(--nav-gap)", alignItems: "center" }}>
        {links.map((label, i) => (
          <a
            key={i}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate(label);
            }}
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: "var(--text-body)",
              lineHeight: "var(--leading-none)",
              color: "var(--text-primary)",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}
