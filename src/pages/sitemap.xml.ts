import type { APIRoute } from "astro";
import caseStudies from "../data/case-studies.json";
import { isNoindexRoute } from "../utils/seo.ts";

// Every page file under src/pages, so a new page joins the sitemap on its own.
// Dynamic routes (`[id]`) are skipped here and listed from their data below.
const staticPaths = Object.keys(import.meta.glob("./**/*.astro"))
  .filter((file) => !file.includes("["))
  .map((file) => file.replace(/^\.\//, "/").replace(/(index)?\.astro$/, ""))
  .sort();

const caseStudyPaths = [...caseStudies]
  .sort((a, b) => a.order - b.order)
  .map((cs) => `/work/${cs.id}`);

export const GET: APIRoute = ({ site }) => {
  // Trailing slash on every path, to match the canonical URLs in BaseHead.
  const urls = [...staticPaths, ...caseStudyPaths]
    .filter((path) => !isNoindexRoute(path))
    .map((path) => new URL(path.replace(/\/?$/, "/"), site).href);

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((url) => `  <url><loc>${url}</loc></url>`),
    "</urlset>",
  ].join("\n");

  return new Response(`${body}\n`, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
