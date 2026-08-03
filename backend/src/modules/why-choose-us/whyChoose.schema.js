import { z } from "zod";

export const createWhyChooseSchema = z.object({
  title: z
    .string()
    .trim()
    .min(2, "Title is required"),

  description: z
    .string()
    .trim()
    .min(5, "Description is required"),

  order: z.coerce.number().optional(),

  isActive: z.coerce.boolean().optional(),
});

export const updateWhyChooseSchema =
  createWhyChooseSchema.partial();