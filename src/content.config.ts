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
    year: z.string(),
    heroImage: z.string(),
    cardImage: z.string(),
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

export const collections = { caseStudies, services };
