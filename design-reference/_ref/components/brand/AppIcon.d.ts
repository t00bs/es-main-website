/**
 * App-icon / favicon tile: black logomark on a cream rounded square.
 * Source sizes: 32px (4px radius) and 256px (16px radius).
 */
export interface AppIconProps {
  /** Tile edge in px. ≤48 uses the favicon geometry. */
  size?: number;
  logoSrc?: string;
  style?: React.CSSProperties;
}
