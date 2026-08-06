import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

// Homepage tab keys — a case study appears under every tab listed in its `tags`.
export const WORK_TAGS = ['design', 'automation', 'portals'] as const;

// One collection, one file: every case study is an item in the array, keyed by
// its `id` (which is also the /work/<id> slug). Pages and components import
// src/data/case-studies.json directly (visual editors bind loops to that
// import); this collection exists so the JSON is still schema-validated on
// every build — a malformed entry fails the build instead of rendering wrong.
const caseStudies = defineCollection({
  loader: file('src/data/case-studies.json'),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    client: z.string(),
    year: z.string().optional(),
    heroImage: z.string(),
    cardImage: z.string(),
    /* Background of the homepage testimonial card; falls back to cardImage
       when empty. */
    testimonialImage: z.string().optional(),
    services: z.array(z.string()),
    tags: z.array(z.enum(WORK_TAGS)),
    order: z.number().default(99),
    liveUrl: z.string().url(),
    liveLabel: z.string(),
    summary: z.string(),
    sections: z.array(
      z.discriminatedUnion('type', [
        z.object({ type: z.literal('text'), label: z.string(), body: z.string() }),
        z.object({ type: z.literal('image'), src: z.string(), caption: z.string().optional() }),
      ])
    ),
    quote: z.object({ text: z.string(), author: z.string() }).nullable().default(null),
  }),
});

// Statements shown in the homepage services marquee, in display order.
const services = defineCollection({
  loader: file('src/data/services.json'),
  schema: z.object({
    text: z.string(),
  }),
});

// Client names in the homepage "Trusted by" bar.
const clientLogos = defineCollection({
  loader: file('src/data/client-logos.json'),
  schema: z.object({ name: z.string() }),
});

// The three service pillars on the homepage.
const servicePillars = defineCollection({
  loader: file('src/data/service-pillars.json'),
  schema: z.object({
    label: z.string(),
    title: z.string(),
    body: z.string(),
    linkText: z.string(),
    href: z.string(),
  }),
});

// Headline results in the homepage stats strip.
const results = defineCollection({
  loader: file('src/data/results.json'),
  schema: z.object({ figure: z.string(), caption: z.string() }),
});

// Numbered steps in the homepage process section.
const processSteps = defineCollection({
  loader: file('src/data/process-steps.json'),
  schema: z.object({ number: z.string(), title: z.string(), body: z.string() }),
});

export const collections = { caseStudies, services, clientLogos, servicePillars, results, processSteps };
