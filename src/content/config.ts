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

const blog = defineCollection({
  type: 'content',
  schema: pageSchema.extend({
    draft: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: pageSchema,
});

export const collections = {
  blog,
  pages,
};
