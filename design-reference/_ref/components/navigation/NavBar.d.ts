/**
 * Site header — full logo lockup left, 18px text links right.
 * Padding 40/40/8/40, exact from source.
 */
export interface NavBarProps {
  /** Path to the lockup SVG. Use es-logo-cream.svg on dark surfaces. */
  logoSrc?: string;
  /** Nav link labels. Source: ["Work", "Contact"]. */
  links?: string[];
  onNavigate?: (label: string) => void;
  style?: React.CSSProperties;
}
