import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tools = defineCollection({
  // v6 之后必须显式指定 loader
  loader: glob({ pattern: "**/*.md", base: "./src/content/tools" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional().default('AppWindow'),
    tags: z.array(z.string()).optional().default([]),
    url: z.string(),
    type: z.enum(['html', 'excel', 'mac', 'other']).default('html'),
    usage: z.string().optional(),
  }),
});

export const collections = {
  'tools': tools,
};
