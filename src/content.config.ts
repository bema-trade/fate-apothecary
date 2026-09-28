import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    yield: z.string().optional(),
    prepTime: z.string().optional(),
    cookTime: z.string().optional(),
    temperature: z.string().optional(),
    ingredients: z.array(z.string()),
    instructions: z.array(z.object({
      title: z.string(),
      text: z.string()
    })),
    useYourHeart: z.string().optional(),
    notes: z.array(z.string()).default([]),
    storage: z.array(z.string()).default([]),
    serving: z.string().optional(),
    lastUpdated: z.string().optional(),
    featured: z.boolean().default(false)
  })
});

export const collections = { recipes };
