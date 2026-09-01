import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z
      .array(
        z
          .string()
          .min(1)
          .max(64)
          .refine(
            (t) => /[\p{L}\p{N}]/u.test(t),
            "Tags must contain at least one letter or number.",
          ),
      )
      .default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
