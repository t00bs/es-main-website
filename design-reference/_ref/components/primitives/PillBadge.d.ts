/**
 * Outline pill badge — 40px radius, 1px inset stroke, 18px Helvetica label.
 * Labels categories on image cards ("Customer Stories").
 */
export interface PillBadgeProps {
  children: React.ReactNode;
  /** Stroke + text color. Default cream (badges sit on imagery). */
  color?: string;
  style?: React.CSSProperties;
}
