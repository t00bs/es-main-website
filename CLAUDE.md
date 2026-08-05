# electricsheep.design

Astro 5 static site for Electric Sheep Design. The visual design is specified
in `design-reference/` (exported from Claude Design) — treat it as the source
of truth for layout, type, color, and copy tone. Design tokens live in
`src/styles/tokens.css`; do not invent hover states, colors, or radii the
design doesn't define.

## Commands

- `npm run dev` — dev server on :4321
- `npm run build` — static build to `dist/` (also validates data collections)
- `npm run preview` — serve the built site

## Data collections — REQUIRED PATTERN

This project is edited with Stacki, a visual editor that binds template loops
to statically imported JSON. Every content collection MUST follow this shape:

1. **One JSON file per collection** in `src/data/<name>.json`, containing an
   array of items. Every item has a unique `"id"` field.
2. **Components and pages import the JSON directly**:
   `import caseStudies from '../data/case-studies.json'`.
   NEVER read collection data through `getCollection()` / `astro:content` in
   pages or components — Stacki cannot trace that API, and its loop binder
   will show the collection as disconnected.
3. **Loops map flat arrays.** Derive plainly-named arrays in frontmatter
   (filter/sort/slice from the import) and `.map()` them directly in the
   template. No nested structures between the import and the loop.
4. **Register every collection in `src/content.config.ts`** with the `file()`
   loader and a zod schema. This is validation only — a malformed item fails
   the build with a pointed error instead of rendering wrong. Keep the schema
   in sync when adding fields.

Current collections:

- `src/data/case-studies.json` — work/case studies. `tags` (design |
  automation | portals) controls homepage tab placement; `order` controls
  sorting everywhere; `id` doubles as the `/work/<id>` slug.
- `src/data/services.json` — statements in the homepage services marquee.
