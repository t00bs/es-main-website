/**
 * Neue Pixel text link followed by the pixel north-east arrow (⭧),
 * used for case-study links and calls to action on imagery.
 */
export interface PixelLinkProps {
  /** Link label, e.g. "View Virdaris Case Study" */
  children: React.ReactNode;
  href?: string;
  /** Text color. Default cream (links sit on imagery/dark). */
  color?: string;
  /** Font size in px. Source uses 18. */
  fontSize?: number;
  /** Show the trailing ⭧ arrow. Default true. */
  arrow?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
