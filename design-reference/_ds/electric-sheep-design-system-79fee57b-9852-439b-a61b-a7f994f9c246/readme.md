# Electric Sheep Design System

**Electric Sheep** — "We design & build digital tools that are automated by AI, but driven by people." Founded 2023, based at 10 Minden Street, St Helier, Jersey (JE2 4WR). Studio offering AI automations, custom portals, strategic design, UX/UI systems, brand identity, and machine learning. Clients: Farm Jersey, Foxdocs, BCR Law LLP, Virdaris, Mortgage Shop. Contact: hello@electricsheep.design.

## Sources
- **Figma**: "Rebuild 2026.fig" (attached) — marketing-site rebuild. Frames: Desktop-1 & Desktop-4 (light homepage), Desktop-3 (dark homepage variant), ES Favi (32px favicon), Large ES App (256px app tile), plus reference screenshots.
- **Uploads**: `Helvetica Neue LT Std 55 Roman.otf`, `NeuePixel-Regular.otf`, `ES Dark Logo.svg` (full lockup).

One product surface: the **marketing website** (electricsheep.design). No app UI is defined in the sources.

## CONTENT FUNDAMENTALS
- **Tone**: dry, confident, playfully literary. Sci-fi references worn lightly ("Do Androids dream of Electric Sheep?" → "We don't know. But we're probably close to finding out."). Puns on the sheep identity: "Sheep by name. Not by nature.", "Big nose, bigger ideas."
- **Voice**: first-person plural "we"; direct address is rare. Short declarative sentences. Full stops even in fragments.
- **Casing**: sentence case everywhere — headlines, nav, links. Exception: ticker labels are Neue Pixel with mixed treatment ("Design", "AUTOMATION", "PORTALS" — caps used as texture, not hierarchy).
- **Links**: verb-first with trailing pixel arrow — "View Virdaris Case Study ⭧", "Meet Toby ⭧".
- **Service lists**: long run-on marquee separated by periods and bullets: "AI Automations. Custom Portals. … Digital Transformation • Workflow Optimisation • …". British spelling (Optimisation).
- **Emoji**: never. The only glyph is ⭧ (north-east arrow), rendered as an SVG asset.
- Testimonial quotes keep human asides: "(you can print that!)".

## VISUAL FOUNDATIONS
- **Palette**: two-tone world. Cream `#F7EED5` and near-black `#101010`, plus pure black for text/footer and white in dark mode. No accent hue anywhere; imagery supplies all color. Off-cream variants `#F6F1E2`/`#F7F0DE` appear on imagery.
- **Backgrounds**: full sections alternate cream ↔ ink ↔ pure black (footer). The dark homepage (Desktop-3) is a full theme flip: same layout, `#101010` page, white text/logo, white rules.
- **Type system**: one weight (Roman 400) of Helvetica Neue LT Std does almost everything at 16/18/24/32/36px. Neue Pixel (18–24px) marks interactive/ambient moments: ticker labels, "We offer:", case-study links. Serif italic (32px) is reserved for testimonial quotes. Helvetica Neue **Bold** 58px appears once — the hero headline. Scale jumps are big and deliberate: 18 → 36 → 62.
- **Line-heights**: tight — 1.0 (nav), 1.1 (nearly everything), 1.25 (36px body), 0.9 (marquee). Letter-spacing only on pixel ticker labels (+0.075em).
- **Layout**: 1440px frame, fixed 40px outer gutter, 1360px content, 20px grid gaps. Work grid is 3×440px squares; testimonials are 670px halves. Sections separated by 64px padding.
- **Corners**: everything is square. Exceptions: 40px pills, 3px highlight blocks, 4px favicon, 16px app tile. No shadows anywhere.
- **Rules**: a signature divider = short 77px × 6px solid segment sitting on a full-width 1px hairline at 50% opacity.
- **Highlight block**: section labels sit on a solid 3px-radius rectangle (ink on cream sections, cream on ink sections) offset behind the text like a marker swipe.
- **Imagery**: photographic, warm, characterful (sheep, the studio dog Toby, client work). Every image card carries a bottom protection gradient `rgba(0,0,0,.6) → transparent at 50%`; text on imagery is always cream.
- **Buttons**: none. Interaction is text links (pixel font + ⭧) and 1px-outline pills (40px radius, 11/12/8/12 padding). No filled buttons in the source.
- **Animation**: none defined in the source. The services strip is designed as a marquee (edge fade-out gradient `rgb(16,16,16) → transparent` over the "We offer:" label suggests horizontal scroll); implement as a slow linear marquee if animating.
- **Hover/press states**: not defined in the source — omitted rather than invented (use opacity if you must).
- **Transparency/blur**: none. Only the protection gradients and 50%-opacity hairlines.

## ICONOGRAPHY
- No icon system. The single icon is the **north-east pixel arrow ⭧** (`assets/icons/arrow-up-right.svg`, 27×27), used on work cards and inline after pixel links. Recolor via CSS mask.
- **Logo**: full lockup `assets/logo/es-logo-dark.svg` (ink) and `es-logo-cream.svg` (programmatic recolor); logomark alone `assets/logo/es-logomark.svg`. Footer renders the logotype at giant full-bleed width. Favicon = logomark on cream, 4px radius tile; app icon = same at 256px, 16px radius.
- The Jersey map (`assets/images/jersey-map.svg`) is a brand illustration — ink stroke outline of the island; street labels were vector text in Figma, render them in Helvetica 12–14px instead.
- No emoji, no icon font, no unicode glyph icons besides ⭧.

## Fonts
- **Awesome Serif Italic VAR** — self-hosted at `assets/fonts/AwesomeSerifItalicVAR.ttf` (variable, italic). Source used the "Extra Tall" instance at 32px.
- **Helvetica Neue Bold** (58px hero) — no file provided; falls back to system Helvetica Neue/Arial Bold. Provide `HelveticaNeue-Bold` for pixel parity.

## Index
- `styles.css` → `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`
- `assets/` — logo/, fonts/, icons/, images/ (hero-sheep, work-farm-jersey, work-generic, testimonial-virdaris, testimonial-mortgage-shop, toby, jersey-map)
- `components/` — NavBar, TickerRow, SectionRule, HeroBanner, WorkCard, TestimonialCard, PillBadge, PixelLink, ServicesMarquee, SectionLabel, FeatureCard, SiteFooter, AppIcon
- `guidelines/` — foundation specimen cards (Design System tab)
- `ui_kits/website/` — interactive homepage recreation (light + dark)
- `templates/homepage/` — Homepage template for consuming projects
- `SKILL.md` — agent skill entry point

## Intentional additions
- None. Component list maps 1:1 to structures in the Figma frames (the file defines no formal Figma components; families were enumerated from the frames).
