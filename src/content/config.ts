import { defineCollection, z } from 'astro:content';

const items = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    region: z.enum([
      'East Asia',
      'Europe',
      'Latin America',
      'Levant',
      'North America',
      'Oceania',
      'Travel Gear',
      'Crew Gear',
      "Eris's Picks",
    ]),
    subcategory: z.string().optional(),
    subcategoryOrder: z.number().optional(),
    itemOrder: z.number().optional(),
    country: z.string().optional(),
    city: z.string().optional(),
    curator: z.string(),
    photo: z.string().optional(),
    additionalPhotos: z.array(z.string()).optional(),
    affiliateUrl: z.string().url().optional(),
    similarAffiliateUrl: z.string().url().optional(),
    affiliateProgram: z.string().optional(),
    priceUSD: z.number().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional().default(false),
    pendingPhoto: z.boolean().optional().default(false),
  }),
});

export const collections = { items };
