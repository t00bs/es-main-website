/* @ds-bundle: {"format":3,"namespace":"ElectricSheepDesignSystem_79fee5","components":[{"name":"AppIcon","sourcePath":"components/brand/AppIcon.jsx"},{"name":"FeatureCard","sourcePath":"components/content/FeatureCard.jsx"},{"name":"HeroBanner","sourcePath":"components/content/HeroBanner.jsx"},{"name":"ServicesMarquee","sourcePath":"components/content/ServicesMarquee.jsx"},{"name":"TestimonialCard","sourcePath":"components/content/TestimonialCard.jsx"},{"name":"WorkCard","sourcePath":"components/content/WorkCard.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"PillBadge","sourcePath":"components/primitives/PillBadge.jsx"},{"name":"PixelLink","sourcePath":"components/primitives/PixelLink.jsx"},{"name":"SectionLabel","sourcePath":"components/primitives/SectionLabel.jsx"},{"name":"SectionRule","sourcePath":"components/primitives/SectionRule.jsx"},{"name":"TickerRow","sourcePath":"components/primitives/TickerRow.jsx"}],"sourceHashes":{"components/brand/AppIcon.jsx":"67c9a62291af","components/content/FeatureCard.jsx":"32d01ec81719","components/content/HeroBanner.jsx":"893de33f9abb","components/content/ServicesMarquee.jsx":"b6a7935ba85a","components/content/TestimonialCard.jsx":"6ae0c02f059f","components/content/WorkCard.jsx":"6d8d919a88e0","components/navigation/NavBar.jsx":"0bacba1e4c8b","components/navigation/SiteFooter.jsx":"b50616b5b32f","components/primitives/PillBadge.jsx":"75a3875baa19","components/primitives/PixelLink.jsx":"d5e15a753886","components/primitives/SectionLabel.jsx":"055a81d5db2b","components/primitives/SectionRule.jsx":"6cf0543a7617","components/primitives/TickerRow.jsx":"82fd2c537a6d","ui_kits/website/HomePage.jsx":"d7ca7d443496"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ElectricSheepDesignSystem_79fee5 = window.ElectricSheepDesignSystem_79fee5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/AppIcon.jsx
try { (() => {
/** App-icon tile: logomark on cream. 32px favicon (4px radius) → 256px app tile (16px radius). */
function AppIcon({
  size = 256,
  logoSrc = "assets/logo/es-logomark.svg",
  style
}) {
  const small = size <= 48;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size,
      borderRadius: small ? "var(--radius-favicon)" : "var(--radius-app)",
      backgroundColor: "var(--es-cream)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Electric Sheep",
    style: {
      position: "absolute",
      left: small ? "12.5%" : "16%",
      top: small ? "18.75%" : "21.9%",
      width: small ? "75%" : "68.4%",
      height: "auto",
      display: "block",
      filter: "brightness(0)"
    }
  }));
}
Object.assign(__ds_scope, { AppIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/AppIcon.jsx", error: String((e && e.message) || e) }); }

// components/content/HeroBanner.jsx
try { (() => {
/** Hero image banner with the bold 58px headline bottom-left. */
function HeroBanner({
  src,
  headline = "Sheep by name. Not by nature.",
  height = 428,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height,
      overflow: "hidden",
      backgroundColor: "var(--surface-placeholder)",
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      position: "absolute",
      left: 39,
      bottom: 30,
      margin: 0,
      maxWidth: 444,
      fontFamily: "var(--font-hero)",
      fontWeight: 700,
      fontSize: "var(--text-hero)",
      lineHeight: "var(--leading-tight)",
      color: "var(--text-hero)"
    }
  }, headline));
}
Object.assign(__ds_scope, { HeroBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/HeroBanner.jsx", error: String((e && e.message) || e) }); }

// components/content/ServicesMarquee.jsx
try { (() => {
const SERVICES = "AI Automations. Custom Portals. Strategic Design. UX/UI Systems. Brand Identity. Machine Learning. Integration Digital Transformation • Workflow Optimisation • Creative Technology • Product Engineering • Generative Design Consulting Strategy Intelligent Interfaces Data Architecture Rapid Prototyping Human-Centric Systems";

/** Dark services strip: "We offer:" pixel label pinned left, 36px list scrolling behind an edge fade. */
function ServicesMarquee({
  label = "We offer:",
  text = SERVICES,
  animate = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "var(--es-ink)",
      height: 68,
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      ...style
    }
  }, animate ? /*#__PURE__*/React.createElement("style", null, "@keyframes es-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }") : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      whiteSpace: "nowrap",
      paddingLeft: 393,
      animation: animate ? "es-marquee 60s linear infinite" : "none"
    }
  }, [0, 1].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    "aria-hidden": i === 1,
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: "var(--text-statement)",
      lineHeight: "var(--leading-marquee)",
      whiteSpace: "nowrap",
      color: "var(--es-cream)",
      paddingRight: 80
    }
  }, text))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 133,
      top: 0,
      bottom: 0,
      width: 249,
      background: "linear-gradient(270deg, rgba(16,16,16,0) 0%, rgb(16,16,16) 86.06%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40,
      top: 0,
      bottom: 0,
      backgroundColor: "var(--es-ink)",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-pixel)",
      fontWeight: 400,
      fontSize: "var(--text-section-label)",
      lineHeight: "var(--leading-label)",
      whiteSpace: "nowrap",
      color: "var(--es-cream)"
    }
  }, label)));
}
Object.assign(__ds_scope, { ServicesMarquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ServicesMarquee.jsx", error: String((e && e.message) || e) }); }

// components/content/WorkCard.jsx
try { (() => {
const ARROW_PATH = "M 27 19.286 L 23.143 19.286 L 23.143 3.857 L 7.714 3.857 L 7.714 0 L 27 0 L 27 19.286 Z M 0 27 L 0 23.143 L 3.857 23.143 L 3.857 27 L 0 27 Z M 3.857 23.143 L 3.857 19.286 L 7.714 19.286 L 7.714 23.143 L 3.857 23.143 Z M 7.714 19.286 L 7.714 15.429 L 11.571 15.429 L 11.571 19.286 L 7.714 19.286 Z M 11.571 15.429 L 11.571 11.571 L 15.429 11.571 L 15.429 15.429 L 11.571 15.429 Z M 15.429 11.571 L 15.429 7.714 L 19.286 7.714 L 19.286 11.571 L 15.429 11.571 Z";

/** Square work-grid tile: image, protection gradient, title (+ optional subtitle & arrow). */
function WorkCard({
  src,
  title,
  subtitle,
  showArrow = false,
  size = 440,
  href = "#",
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    style: {
      position: "relative",
      display: "block",
      width: size,
      height: size,
      overflow: "hidden",
      backgroundColor: "var(--surface-placeholder)",
      textDecoration: "none",
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-protect)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "var(--card-pad)",
      right: "var(--card-pad)",
      bottom: subtitle ? 16 : 11,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: "var(--text-card-title)",
      lineHeight: "var(--leading-tight)",
      whiteSpace: "nowrap",
      color: "var(--es-cream)"
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: "var(--text-caption)",
      lineHeight: "var(--leading-tight)",
      whiteSpace: "nowrap",
      color: "var(--es-cream)"
    }
  }, subtitle) : null), showArrow ? /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "27",
    viewBox: "0 0 27 27",
    fill: "var(--es-cream)",
    style: {
      flexShrink: 0
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: ARROW_PATH,
    fillRule: "nonzero"
  })) : null));
}
Object.assign(__ds_scope, { WorkCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/WorkCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
/** Site header: logo lockup left, text links right. */
function NavBar({
  logoSrc = "assets/logo/es-logo-dark.svg",
  links = ["Work", "Contact"],
  onNavigate,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "40px 40px 8px 40px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Electric Sheep",
    style: {
      width: 256,
      height: "auto",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "row",
      gap: "var(--nav-gap)",
      alignItems: "center"
    }
  }, links.map((label, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => {
      e.preventDefault();
      if (onNavigate) onNavigate(label);
    },
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: "var(--text-body)",
      lineHeight: "var(--leading-none)",
      color: "var(--text-primary)",
      textDecoration: "none",
      whiteSpace: "nowrap"
    }
  }, label))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
/** Black footer: giant full-bleed logotype, then contact rows in cream. */
function SiteFooter({
  logoSrc = "assets/logo/es-logo-cream.svg",
  address = "10 Minden Street, St Helier, JE2 4WR",
  email = "hello@electricsheep.design",
  legal = "© 2026 Electric Sheep Limited.\nAll rights reserved.",
  style
}) {
  const itemStyle = {
    fontFamily: "var(--font-sans)",
    fontWeight: 400,
    fontSize: "var(--text-body)",
    lineHeight: "var(--leading-none)",
    color: "var(--es-cream)",
    textDecoration: "none",
    whiteSpace: "pre-line"
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      backgroundColor: "var(--surface-footer)",
      padding: "42px 40px 40px 40px",
      display: "flex",
      flexDirection: "column",
      gap: 48,
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Electric Sheep",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: itemStyle
  }, address), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${email}`,
    style: itemStyle
  }, email), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: itemStyle
  }, "Privacy"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...itemStyle,
      textAlign: "right"
    }
  }, legal)));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/primitives/PillBadge.jsx
try { (() => {
/** Outline pill badge (40px radius, 1px inset stroke) — e.g. "Customer Stories". */
function PillBadge({
  children,
  color = "var(--es-cream)",
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
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
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { PillBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/PillBadge.jsx", error: String((e && e.message) || e) }); }

// components/primitives/PixelLink.jsx
try { (() => {
const ARROW_PATH = "M 27 19.286 L 23.143 19.286 L 23.143 3.857 L 7.714 3.857 L 7.714 0 L 27 0 L 27 19.286 Z M 0 27 L 0 23.143 L 3.857 23.143 L 3.857 27 L 0 27 Z M 3.857 23.143 L 3.857 19.286 L 7.714 19.286 L 7.714 23.143 L 3.857 23.143 Z M 7.714 19.286 L 7.714 15.429 L 11.571 15.429 L 11.571 19.286 L 7.714 19.286 Z M 11.571 15.429 L 11.571 11.571 L 15.429 11.571 L 15.429 15.429 L 11.571 15.429 Z M 15.429 11.571 L 15.429 7.714 L 19.286 7.714 L 19.286 11.571 L 15.429 11.571 Z";

/** Neue Pixel text link with the pixel north-east arrow. */
function PixelLink({
  children,
  href = "#",
  color = "var(--es-cream)",
  fontSize = 18,
  arrow = true,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: "0.35em",
      fontFamily: "var(--font-pixel)",
      fontWeight: 400,
      fontSize,
      lineHeight: "var(--leading-tight)",
      color,
      textDecoration: "none",
      ...style
    }
  }, children, arrow ? /*#__PURE__*/React.createElement("svg", {
    width: "0.78em",
    height: "0.78em",
    viewBox: "0 0 27 27",
    fill: "currentColor",
    style: {
      flexShrink: 0,
      transform: "translateY(0.06em)"
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: ARROW_PATH,
    fillRule: "nonzero"
  })) : null);
}
Object.assign(__ds_scope, { PixelLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/PixelLink.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureCard.jsx
try { (() => {
/** Full-width feature/CTA image card: 62px headline + pixel link, bottom-left. */
function FeatureCard({
  src,
  headline,
  linkText,
  height = 515,
  href = "#",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height,
      overflow: "hidden",
      backgroundColor: "var(--surface-placeholder)",
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-protect)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "var(--card-pad)",
      bottom: linkText ? 77 : 30,
      maxWidth: 410,
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: "var(--text-display)",
      lineHeight: "var(--leading-tight)",
      color: "var(--es-cream)"
    }
  }, headline), linkText ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "var(--card-pad)",
      bottom: 30
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PixelLink, {
    href: href
  }, linkText)) : null);
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/content/TestimonialCard.jsx
try { (() => {
/** Testimonial image card: pill badge top, serif-italic quote, pixel link bottom. */
function TestimonialCard({
  src,
  quote,
  linkText,
  badge = "Customer Stories",
  height = 440,
  href = "#",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height,
      overflow: "hidden",
      backgroundColor: "var(--surface-placeholder)",
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-protect)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "var(--card-pad)",
      top: 22
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PillBadge, null, badge)), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      position: "absolute",
      left: "var(--card-pad)",
      top: 81,
      margin: 0,
      maxWidth: 410,
      fontFamily: "var(--font-serif-quote)",
      fontWeight: 400,
      fontStyle: "italic",
      fontSize: "var(--text-card-title)",
      lineHeight: "var(--leading-tight)",
      color: "var(--es-cream)"
    }
  }, quote), linkText ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "var(--card-pad)",
      bottom: 24
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PixelLink, {
    href: href
  }, linkText)) : null);
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/primitives/SectionLabel.jsx
try { (() => {
/**
 * Section label with the brand's "redaction mark": the label renders in cream,
 * and the words wrapped in `highlight` sit on a solid block. On light surfaces
 * the cream text is invisible except where the ink block reveals it; on dark
 * surfaces the cream block hides the highlighted words. Exact motif from source.
 */
function SectionLabel({
  children,
  highlight,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: "var(--text-section-label)",
      lineHeight: "var(--leading-label)",
      color: "var(--text-on-dark)",
      ...style
    }
  }, children, highlight ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      padding: "1px 6px 2px 4px",
      marginLeft: -4,
      borderRadius: "var(--radius-highlight)",
      backgroundColor: "var(--highlight-block)"
    }
  }, highlight)) : null);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/primitives/SectionRule.jsx
try { (() => {
/** Signature divider: 77px × 6px solid segment over a full-width 1px hairline. */
function SectionRule({
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height: 6,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 2.5,
      width: "100%",
      height: 1,
      backgroundColor: "var(--rule-hairline)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 77,
      height: 6,
      backgroundColor: "var(--rule-strong)"
    }
  }));
}
Object.assign(__ds_scope, { SectionRule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/SectionRule.jsx", error: String((e && e.message) || e) }); }

// components/primitives/TickerRow.jsx
try { (() => {
/** Full-width row of Neue Pixel ticker labels, space-between. */
function TickerRow({
  items = ["Design", "AUTOMATION", "PORTALS"],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      padding: "8px 0",
      ...style
    }
  }, items.map((label, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: "var(--font-pixel)",
      fontWeight: 400,
      fontSize: "var(--text-pixel-label)",
      lineHeight: "var(--leading-none)",
      letterSpacing: "var(--tracking-pixel)",
      whiteSpace: "nowrap",
      color: "var(--text-primary)"
    }
  }, label)));
}
Object.assign(__ds_scope, { TickerRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/primitives/TickerRow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
const {
  NavBar,
  SiteFooter,
  HeroBanner,
  WorkCard,
  TestimonialCard,
  FeatureCard,
  ServicesMarquee,
  PixelLink,
  SectionLabel,
  SectionRule,
  TickerRow
} = window.ElectricSheepDesignSystem_79fee5;
const A = "../../assets/";
function Section({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--page-margin)",
      ...style
    }
  }, children);
}
function HomePage() {
  const [theme, setTheme] = React.useState("light");
  const workRef = React.useRef(null);
  const contactRef = React.useRef(null);
  const go = label => {
    const el = label === "Work" ? workRef.current : contactRef.current;
    if (el) window.scrollTo({
      top: el.offsetTop - 20,
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": theme === "dark" ? "dark" : undefined,
    style: {
      background: "var(--surface-page)",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    logoSrc: theme === "dark" ? A + "logo/es-logo-cream.svg" : A + "logo/es-logo-dark.svg",
    links: ["Work", "Contact"],
    onNavigate: go
  }), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingBottom: 64,
      paddingTop: 10
    }
  }, /*#__PURE__*/React.createElement(HeroBanner, {
    src: A + "images/hero-sheep.png",
    headline: "Sheep by name. Not by nature."
  })), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(TickerRow, {
    items: ["Design", "AUTOMATION", "PORTALS"]
  }), /*#__PURE__*/React.createElement(SectionRule, null)), /*#__PURE__*/React.createElement("div", {
    ref: workRef
  }), /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: "24px 40px 64px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--grid-gap)"
    }
  }, /*#__PURE__*/React.createElement(WorkCard, {
    src: A + "images/work-farm-jersey.png",
    title: "Farm Jersey",
    subtitle: "Lightning-fast applications",
    showArrow: true,
    size: "auto",
    style: {
      aspectRatio: "1"
    }
  }), /*#__PURE__*/React.createElement(WorkCard, {
    src: A + "images/work-generic.jpg",
    title: "Chapter 2",
    size: "auto",
    style: {
      aspectRatio: "1"
    }
  }), /*#__PURE__*/React.createElement(WorkCard, {
    src: A + "images/work-generic.jpg",
    title: "Foxdocs",
    size: "auto",
    style: {
      aspectRatio: "1"
    }
  }), /*#__PURE__*/React.createElement(WorkCard, {
    src: A + "images/work-generic.jpg",
    title: "BCR LAW LLP",
    size: "auto",
    style: {
      aspectRatio: "1"
    }
  }), /*#__PURE__*/React.createElement(WorkCard, {
    src: A + "images/work-generic.jpg",
    title: "Virdaris",
    size: "auto",
    style: {
      aspectRatio: "1"
    }
  }))), /*#__PURE__*/React.createElement(ServicesMarquee, null), /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: "64px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--grid-gap)"
    }
  }, /*#__PURE__*/React.createElement(TestimonialCard, {
    src: A + "images/testimonial-virdaris.png",
    quote: "\u201CI can\u2019t thank or endorse you enough for the amazing process throughout (you can print that!)\u201D",
    linkText: "View Virdaris Case Study"
  }), /*#__PURE__*/React.createElement(TestimonialCard, {
    src: A + "images/testimonial-mortgage-shop.jpg",
    quote: "\u201CA massive thank you for delivering this project early, and on-budget.\u201D",
    linkText: "View Mortgage Shop Case Study"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "var(--es-ink)",
      padding: "64px var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "460px 1fr",
      gap: 4
    },
    "data-theme": "dark"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    highlight: "Electric Sheep?"
  }, "Do Androids dream of"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-statement)",
      lineHeight: "var(--leading-body)",
      color: "var(--es-cream)",
      whiteSpace: "pre-line"
    }
  }, "We don\u2019t know. But we\u2019re probably close to finding out. \nFounded in 2023, Electric Sheep sits at the intersection of technology and humanity. We design & build digital tools that are automated by AI, but driven by people."))), /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: "64px 40px"
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    src: A + "images/toby.jpg",
    headline: "Big nose, bigger ideas.",
    linkText: "Meet Toby"
  })), /*#__PURE__*/React.createElement("div", {
    ref: contactRef
  }), /*#__PURE__*/React.createElement(Section, {
    style: {
      padding: "0 40px 64px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "460px 1fr",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    highlight: "Electric Sheep?"
  }, "Where is"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + "images/jersey-map.svg",
    alt: "Map of St Helier",
    style: {
      width: "100%",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: "0%",
      top: "36%",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--text-primary)"
    }
  }, "10 Minden Street")))), /*#__PURE__*/React.createElement(SiteFooter, {
    logoSrc: A + "logo/es-logo-cream.svg"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
    style: {
      position: "fixed",
      right: 20,
      bottom: 20,
      zIndex: 10,
      padding: "11px 16px 8px 16px",
      borderRadius: 40,
      border: "1px solid var(--text-primary)",
      background: "var(--surface-page)",
      color: "var(--text-primary)",
      fontFamily: "var(--font-pixel)",
      fontSize: 14,
      cursor: "pointer"
    }
  }, theme === "dark" ? "Light mode" : "Dark mode"));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AppIcon = __ds_scope.AppIcon;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.HeroBanner = __ds_scope.HeroBanner;

__ds_ns.ServicesMarquee = __ds_scope.ServicesMarquee;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.WorkCard = __ds_scope.WorkCard;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.PillBadge = __ds_scope.PillBadge;

__ds_ns.PixelLink = __ds_scope.PixelLink;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.SectionRule = __ds_scope.SectionRule;

__ds_ns.TickerRow = __ds_scope.TickerRow;

})();
