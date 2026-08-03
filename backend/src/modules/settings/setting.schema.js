import { z } from "zod";

export const updateWebsiteSettingsSchema = z.object({
  companyName: z.string().trim().min(1, "Company name is required"),

  tagline: z.string().trim().optional(),

  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .optional()
    .or(z.literal("")),

  phone: z.string().trim().optional(),

  whatsapp: z.string().trim().optional(),

  address: z.string().trim().optional(),

  facebook: z.string().trim().optional(),

  instagram: z.string().trim().optional(),

  linkedin: z.string().trim().optional(),

  twitter: z.string().trim().optional(),

  youtube: z.string().trim().optional(),

  footerText: z.string().trim().optional(),

  seoTitle: z.string().trim().optional(),

  seoDescription: z.string().trim().optional(),

  seoKeywords: z.string().trim().optional(),
});
