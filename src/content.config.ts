import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    yield: z.string().optional(),
    prepTime: z.string().optional(),
    cookTime: z.string().optional(),
    temperature: z.string().optional(),
    timerMinutes: z.number().int().positive().optional(),
    ingredients: z.array(z.union([
      z.string(),
      z.object({
        ingredient: z.string(),
        linkedRecipe: z.string().optional().nullable()
      })
    ])),
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

const herbs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/herbs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    flavorProfile: z.string().optional(),
    culinaryUses: z.array(z.string()).default([]),
    traditionalUses: z.string().optional(),
    growingNotes: z.string().optional(),
    storage: z.string().optional(),
    cautions: z.string().optional(),
    lastUpdated: z.string().optional(),
    featured: z.boolean().default(false)
  })
});

const garden = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/garden' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    season: z.string().optional(),
    whatYouNeed: z.array(z.string()).default([]),
    steps: z.array(z.object({
      title: z.string(),
      text: z.string()
    })).default([]),
    harvest: z.string().optional(),
    notes: z.array(z.string()).default([]),
    lastUpdated: z.string().optional(),
    featured: z.boolean().default(false)
  })
});

export const collections = { recipes, herbs, garden };
