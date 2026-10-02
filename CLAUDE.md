# electricsheep.design

Astro 7 static site for Electric Sheep Design, built on the **Lumos**
framework (`lumosframework.com`) and edited with **Stacki**, a visual editor
for Astro. Lumos and Stacki are by the same author and are meant to be used
together.

The visual design is specified in `design-reference/` (exported from Claude
Design). Treat it as the source of truth for layout, type, color, and copy
tone — but read it through the Lumos token system rather than copying its
fixed pixel values.

## Commands

- `npm run dev` — dev server on :4321
- `npm run build` — static build to `dist/` (also validates data collections)
- `npm run check` — type-check every `.astro` file; keep this at zero errors
- `npm run preview` — serve the built site
- `npm run format` — Prettier over the project

Node 22.12+ is required.

## Lumos — how the styling works

Four cascade layers, declared once in `src/styles/global.css`:

```
base → patterns → components → utilities
```

A later layer beats an earlier one whatever the selectors say. So a
one-class utility always wins over a component's own rules, without
`!important`.

- `src/styles/base.css` — **pristine copy of the framework.** Do not edit;
  replacing it wholesale is how Lumos gets updated.
- `src/styles/brand.css` — **all Electric Sheep token overrides.** Palette,
  type scale, spacing, radii, plus the brand base rules (`em`/`i` → pixel
  face, `.hover-zoom`, `.px-hover`). This is the file to edit for design
  changes.
- `src/styles/patterns.css` — framework patterns. Do not edit.
- `src/styles/site-patterns.css` — `.section-split` and `.statement`, the two
  brand patterns used across pages.
- `src/styles/utilities.css` — framework utilities. Do not edit.

### Tokens, not pixel values

Everything reads from tokens. Sizes are fluid: each token is a `min`/`max`
pair interpolated between a 320px and a 1440px viewport, so there are no
type or spacing breakpoints. To resize something, change the pair in
`brand.css` — never hardcode a px value in a component.

| Use                       | Token                                                             |
| ------------------------- | ----------------------------------------------------------------- |
| Page background / text    | `--background` / `--text`                                         |
| Redaction mark            | `--highlight-block` / `--highlight-text`                          |
| Rules                     | `--rule-strong`, `--rule-hairline`, `--rule-thick`, `--rule-thin` |
| Page margin / grid gutter | `--site-margin` / `--site-gutter`                                 |
| Content max width         | `--max-width-main` (90rem)                                        |
| Type                      | `--display`, `--h1`…`--h6`, `--text-large/main/small`             |
| Brand faces               | `--primary-family`, `--font-pixel`, `--font-serif-quote`          |

### Theming

Themes are classes, not a setting, and they nest. `theme-light` /
`theme-dark` / `theme-brand` set the tokens; **`theme-invert` flips against
whatever surrounds it** — that is the old `.inverse-section` band, and it is
how the "Numbers, not vibes" strip and the case-study quote work in both
light and dark mode.

The site is dark, with no light/dark toggle: `src/layouts/Layout.astro`
renders `theme-dark` on `<html>` at build time. Switching the whole site
back to light is that one `theme` prop.

Per-theme values must be declared on `:root, [class*="theme-"]` (see the
bottom of `brand.css`), not on `:root` alone — a custom property holding
`var(--text)` resolves where it is declared, so a single `:root` copy would
freeze the light values and never invert.

## Components

- `src/components/{Form,Global,Interactive,Item,Media,Typography,Utility,Wrapper}/`
  — **Lumos framework components.** Prefer these. Don't edit them, with two
  deliberate exceptions the framework expects you to own: `Global/Nav.astro`
  and `Global/Footer.astro`.
- `src/components/Site/` — **Electric Sheep components.** The bespoke pieces
  Lumos has no equivalent for: the hero slideshow, the redaction-mark section
  label, pixel links and pill badges, the work card's hover reveal, the
  services marquee, and `WorkRow` — the Netflix-style carousel row used on
  the homepage and under each case study. Pass it the cards as children so
  the loop stays in the file that imports the JSON.

Build pages from `Section` → `ContentWrapper` / `Grid`. `Section` owns the
band: background, vertical rhythm, and the container that holds content in to
the site margin. Never re-add `padding: X var(--site-margin)` to a component
that sits inside a Section.

Backgrounds run edge to edge, but content stops at `--max-width-main` (90rem)
and centres on wider screens. The nav and footer aren't Sections, so they pad
to the same line with `max(var(--site-margin), (100% - var(--max-width-main)) / 2)`;
anything else full-width outside a Section needs the same.

### Two traps

1. **Scoped styles cannot reach `containerClass` or `class` on a Lumos
   component.** Those classes land on an element inside the framework
   component, which does not carry this file's scope hash, so the rule silently
   never matches. Either style a real child element in your own template, or
   use `<style is:global>` with a specific enough selector (this is what
   `WorkRow.astro` does).
2. **Wrap every component `<style>` block in `@layer components`.** An
   unlayered style beats every layered one, so an unwrapped block would
   override Lumos utilities.

## Data collections — REQUIRED PATTERN

Stacki binds template loops to statically imported JSON. Every content
collection MUST follow this shape:

1. **One JSON file per collection** in `src/data/<name>.json`, containing an
   array of items. Every item has a unique `"id"` field.
2. **Components and pages import the JSON directly, by relative path**:
   `import caseStudies from '../data/case-studies.json'`. Do **not** use the
   `@/` alias for data imports (everything else uses it) and never read
   collection data through `getCollection()` / `astro:content` — Stacki cannot
   trace those, and its loop binder will show the collection as disconnected.
3. **Loops map flat arrays.** Derive plainly-named arrays in frontmatter
   (filter/sort/slice from the import) and `.map()` them directly in the
   template. No nested structures between the import and the loop.
4. **Register every collection in `src/content.config.ts`** with the `file()`
   loader and a zod schema. This is validation only — a malformed item fails
   the build with a pointed error instead of rendering wrong. Keep the schema
   in sync when adding fields.
5. **Don't loop over local arrays for content.** A `const` array in the
   frontmatter puts that copy out of the visual editor's reach. Repeated
   sections of fixed copy (the About page notes, the nav links) are written
   out literally on purpose — leave them that way.

Current collections:

- `src/data/case-studies.json` — work/case studies. `tags` (design |
  automation | portals) controls which homepage carousel rows it appears
  in; `order` controls sorting everywhere; `id` doubles as the
  `/work/<id>` slug. `heroSquareTop` / `heroSquareBottom` are the two
  squares beside the 9:16 hero on the case-study page.

An image field that starts out empty gives Stacki nothing to infer its type
from, so declare it as `"image"` in `.stacki/cms.json` to get the picker.

- `src/data/services.json` — statements in the homepage services marquee.
- `src/data/service-pillars.json` — the three homepage service pillars.
- `src/data/results.json` — figures in the homepage stats strip.
- `src/data/process-steps.json` — numbered steps in the process section.
- `src/data/hero-slides.json` — homepage hero rotation, in file order.

## Images

Stacki's image picker writes paths into `public/`, and Astro never processes
`public/` — so CMS-driven images are served at their natural size. Only
images imported from `src/assets` get optimized. Keep CMS images in `public/`
so the picker keeps working; reach for `src/assets` and Lumos's `Img` only for
static art that no editor needs to swap.

## SEO

`src/consts.ts` holds the site name, description, URL and `NOINDEX_ROUTES`.
That last one drives both the `robots` meta tag and sitemap exclusion, so the
two cannot disagree. Pages pass a bare `title` ("Work"); `BaseHead` renders it
as `Work | Electric Sheep`.

## Motion

`src/scripts/reveal.ts` fades sections in on scroll. It keys off two opt-in
marker classes — `reveal-group` (children stagger) and `reveal-block` (reveals
as one) — rather than layout class names, so restyling a section can't
silently drop it out of the motion. It is skipped entirely under
`prefers-reduced-motion`.
