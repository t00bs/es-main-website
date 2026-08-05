import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Homepage tab keys — a case study appears under every tab listed in its `tags`.
export const WORK_TAGS = ['design', 'automation', 'portals'] as const;

const caseStudies = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/case-studies' }),
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

export const collections = { caseStudies };
