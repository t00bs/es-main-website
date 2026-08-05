/**
 * Testimonial image card (670×440 half-width): outline pill badge top-left,
 * 32px serif-italic quote, pixel case-study link bottom-left.
 */
export interface TestimonialCardProps {
  src?: string;
  /** Keep the curly quotes: "“…”" */
  quote: React.ReactNode;
  /** e.g. "View Virdaris Case Study" */
  linkText?: string;
  /** Default "Customer Stories". */
  badge?: string;
  height?: number;
  href?: string;
  style?: React.CSSProperties;
}
