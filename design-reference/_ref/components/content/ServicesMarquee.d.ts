/**
 * Dark full-width services strip: Neue Pixel "We offer:" pinned left over an
 * edge-fade gradient, with the 36px run-on service list scrolling behind it.
 */
export interface ServicesMarqueeProps {
  /** Default "We offer:". */
  label?: string;
  /** The run-on service list. Defaults to the real one from the source. */
  text?: string;
  /** Slow linear scroll. Set false for a static strip. */
  animate?: boolean;
  style?: React.CSSProperties;
}
