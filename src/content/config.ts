import { defineCollection, z } from "astro:content";

// Blog collection schema
const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().optional().default(false),
  }),
});

// Services collection schema
const servicesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    order: z.number().optional(),
    features: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

// Case studies collection schema
const caseStudiesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    client: z.string(),
    industry: z.string(),
    services: z.array(z.string()),
    image: z.string().optional(),
    logo: z.string(),
    stats: z
      .array(
        z.object({
          value: z.string(),
          label: z.string(),
        })
      )
      .optional(),
    technologies: z.array(z.string()).optional(),
    category: z.string(),
    order: z.number().optional(),
<<<<<<< HEAD
    // Additional fields used in the application
    featured: z.boolean().optional(),
    industry: z.string().optional(),
    services: z.array(z.string()).optional(),
    client: z.string().optional(),
    challenge: z.string().optional(),
    solution: z.string().optional(),
    results: z.array(z.string()).optional(),
    testimonial: z
      .object({
        quote: z.string(),
        author: z.string(),
        title: z.string(),
      })
      .optional(),
    gallery: z.array(z.string()).optional(),
    pubDate: z.coerce.date().optional(),
=======
    challenge: z.string().optional(),
    solution: z.string().optional(),
    results: z.array(z.string()).optional(),
    testimonial: z.object({
      quote: z.string(),
      author: z.string(),
      title: z.string()
    }).optional(),
    gallery: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
    pubDate: z.string().optional(),
>>>>>>> 8ed9c48a0bdfd9eff07a8c3687c9a7e3523b0e3a
  }),
});

// Testimonials collection schema
const testimonialsCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    position: z.string(),
    company: z.string(),
    image: z.string().optional(),
    order: z.number().optional(),
  }),
});

// Company information collection schema
const companyCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    foundedYear: z.number(),
  }),
});

// Export collections
export const collections = {
  blog: blogCollection,
  services: servicesCollection,
  "case-studies": caseStudiesCollection,
  testimonials: testimonialsCollection,
  company: companyCollection,
};
