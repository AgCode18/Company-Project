import { z } from "zod";

export const updateHomepageSchema = z.object({
  heroTitle: z
    .string()
    .trim()
    .min(1, "Hero title is required"),

  heroSubtitle: z.string().optional(),

  heroButtonText: z.string().optional(),

  heroButtonLink: z.string().optional(),

  aboutTitle: z.string().optional(),

  aboutDescription: z.string().optional(),

  ctaTitle: z.string().optional(),

  ctaDescription: z.string().optional(),

  ctaButtonText: z.string().optional(),

  ctaButtonLink: z.string().optional(),
});