import { defineCollection, z } from 'astro:content';

const pageSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.date().optional(),
  thumbnail: z.string().optional(),
  templateKey: z.string().optional(),
  heroImageLight: z.string().optional(),
  heroImageDark: z.string().optional(),
  heroImageAlt: z.string().optional(),
  heading: z.string().optional(),
  subheading: z.string().optional(),
});

const pensieve = defineCollection({
  type: 'content',
  schema: pageSchema.extend({
    draft: z.boolean().default(false),
    kind: z.enum(['note', 'essay', 'question', 'memory']).default('note'),
    status: z.enum(['ripple', 'developing', 'settled', 'revisited']).default('ripple'),
    topics: z.array(z.string()).default([]),
    updated: z.date().optional(),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: pageSchema,
});

export const collections = {
  pensieve,
  pages,
};
