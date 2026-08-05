/**
 * Full-width hero image with the one Bold moment in the brand:
 * 58px Helvetica Neue Bold headline, warm-cream, bottom-left.
 */
export interface HeroBannerProps {
  /** Image path, e.g. "assets/images/hero-sheep.png". */
  src?: string;
  headline?: string;
  /** Source height: 428. */
  height?: number;
  style?: React.CSSProperties;
}
