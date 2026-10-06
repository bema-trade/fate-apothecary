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
    ingredients: z.array(z.union([
      z.string(),
      z.object({
        ingredient: z.string(),
        linkedRecipe: z.string().optional().nullable(),
        externalUrl: z.string().optional().nullable(),
        externalAffiliate: z.boolean().default(false)
      })
    ])),
    tools: z.array(z.string()).default([]),
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

const kitchenTools = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/kitchen-tools' }),
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
    description: z.string(),
    image: z.string().optional(),
    whyWeUseIt: z.string().optional(),
    purchaseUrl: z.string().optional(),
    affiliate: z.boolean().default(true),
    featured: z.boolean().default(false)
  })
});

const gardenResources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/garden-resources' }),
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
    description: z.string(),
    image: z.string().optional(),
    whyWeUseIt: z.string().optional(),
    purchaseUrl: z.string().optional(),
    affiliate: z.boolean().default(false),
    featured: z.boolean().default(false)
  })
});

const bookshelf = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/bookshelf' }),
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    category: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    url: z.string().optional(),
    affiliate: z.boolean().default(false),
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
    resources: z.array(z.string()).default([]),
    relatedHerbs: z.array(z.string()).default([]),
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

export const collections = { recipes, kitchenTools, gardenResources, bookshelf, herbs, garden };
