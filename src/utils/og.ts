import { existsSync } from "node:fs";
import { join } from "node:path";

/** Open Graph card size. Every generated share image is cropped to this. */
export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

/** Absolute path on disk of a site-root path into `public/`. */
export function publicFile(src: string): string {
  return join(process.cwd(), "public", src);
}

/**
 * The share image for a case study: its Hero Square Bottom image, cropped to
 * the OG size by `pages/og/work/[id].jpg.ts`. Returns undefined when there is
 * no such image on disk, so the page falls back to the site card.
 */
export function caseStudyOgImage(cs: {
  id: string;
  heroSquareBottom?: string;
}): string | undefined {
  return cs.heroSquareBottom && existsSync(publicFile(cs.heroSquareBottom))
    ? `/og/work/${cs.id}.jpg`
    : undefined;
}
