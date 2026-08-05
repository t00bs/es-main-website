/**
 * Square work-grid tile (440×440): photo, bottom protection gradient,
 * 32px title, optional 16px subtitle and 27px pixel arrow.
 */
export interface WorkCardProps {
  /** Image path. Omit for the gray placeholder fill. */
  src?: string;
  title: string;
  /** e.g. "Lightning-fast applications" */
  subtitle?: string;
  /** 27px ⭧ aligned right of the title. */
  showArrow?: boolean;
  /** Square edge in px. Source: 440. */
  size?: number | string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
