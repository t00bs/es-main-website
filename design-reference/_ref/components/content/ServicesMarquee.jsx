import React from "react";

const SERVICES =
  "AI Automations. Custom Portals. Strategic Design. UX/UI Systems. Brand Identity. Machine Learning. Integration Digital Transformation • Workflow Optimisation • Creative Technology • Product Engineering • Generative Design Consulting Strategy Intelligent Interfaces Data Architecture Rapid Prototyping Human-Centric Systems";

/** Dark services strip: "We offer:" pixel label pinned left, 36px list scrolling behind an edge fade. */
export function ServicesMarquee({ label = "We offer:", text = SERVICES, animate = true, style }) {
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "var(--es-ink)",
        height: 68,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        ...style,
      }}
    >
      {animate ? (
        <style>{"@keyframes es-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }"}</style>
      ) : null}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          whiteSpace: "nowrap",
          paddingLeft: 393,
          animation: animate ? "es-marquee 60s linear infinite" : "none",
        }}
      >
        {[0, 1].map((i) => (
          <span
            key={i}
            aria-hidden={i === 1}
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: "var(--text-statement)",
              lineHeight: "var(--leading-marquee)",
              whiteSpace: "nowrap",
              color: "var(--es-cream)",
              paddingRight: 80,
            }}
          >
            {text}
          </span>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          left: 133,
          top: 0,
          bottom: 0,
          width: 249,
          background: "linear-gradient(270deg, rgba(16,16,16,0) 0%, rgb(16,16,16) 86.06%)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          left: 40,
          top: 0,
          bottom: 0,
          backgroundColor: "var(--es-ink)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-pixel)",
            fontWeight: 400,
            fontSize: "var(--text-section-label)",
            lineHeight: "var(--leading-label)",
            whiteSpace: "nowrap",
            color: "var(--es-cream)",
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
