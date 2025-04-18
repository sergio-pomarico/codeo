import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.boolean(),
    author: z.string(),
    url: z.string().optional(),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val: string | Date) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    heroImage: z.string().optional(),
    categories: z.array(z.string()).default(["others"]),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
