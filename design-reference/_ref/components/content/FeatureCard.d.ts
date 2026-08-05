/**
 * Full-width feature/CTA image card (515px tall): 62px Roman headline
 * and a pixel link, both bottom-left on the protection gradient.
 */
export interface FeatureCardProps {
  src?: string;
  /** e.g. "Big nose, bigger ideas." */
  headline: string;
  /** e.g. "Meet Toby" */
  linkText?: string;
  height?: number;
  href?: string;
  style?: React.CSSProperties;
}
