/**
 * Pure-black footer: the logotype rendered at giant full-bleed width,
 * then address / email / Privacy / legal in 18px cream.
 */
export interface SiteFooterProps {
  logoSrc?: string;
  address?: string;
  email?: string;
  /** Multi-line with \n. */
  legal?: string;
  style?: React.CSSProperties;
}
