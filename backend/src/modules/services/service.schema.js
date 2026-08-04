import { z } from "zod";

export const createServiceSchema = z.object({
  title: z
    .string()
    .trim()
    .min(2, "Title is required"),

  shortDescription: z
    .string()
    .trim()
    .min(5, "Short description is required"),

  description: z
    .string()
    .trim()
    .min(10, "Description is required"),

  order: z.coerce.number().optional(),

  isFeatured: z.coerce.boolean().optional(),

  isActive: z.coerce.boolean().optional(),
});

export const updateServiceSchema = createServiceSchema.partial();