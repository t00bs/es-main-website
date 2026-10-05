// One share card per case study: its Hero Square Bottom image, cover-cropped
// from the centre to 1200x630. Rendered at build time, so swapping the image
// in Stacki updates the card on the next build.
import type { APIRoute, GetStaticPaths } from "astro";
import sharp from "sharp";
import caseStudies from "../../../data/case-studies.json";
import {
  OG_WIDTH,
  OG_HEIGHT,
  publicFile,
  caseStudyOgImage,
} from "@/utils/og.ts";

export const getStaticPaths = (() =>
  caseStudies
    .filter((cs) => caseStudyOgImage(cs))
    .map((cs) => ({
      params: { id: cs.id },
      props: { src: cs.heroSquareBottom as string },
    }))) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const jpg = await sharp(publicFile(props.src))
    .resize(OG_WIDTH, OG_HEIGHT, { fit: "cover" })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();

  return new Response(new Uint8Array(jpg), {
    headers: { "Content-Type": "image/jpeg" },
  });
};
