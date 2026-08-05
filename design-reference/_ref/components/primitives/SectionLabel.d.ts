/**
 * Section label with the brand's redaction-mark motif: a solid 3px-radius block
 * behind the highlighted words (ink on light surfaces, cream on dark).
 */
export interface SectionLabelProps {
  /** First line of the label, e.g. "Do Androids dream of" */
  children: React.ReactNode;
  /** Words placed on the solid block, e.g. "Electric Sheep?" */
  highlight?: React.ReactNode;
  style?: React.CSSProperties;
}
