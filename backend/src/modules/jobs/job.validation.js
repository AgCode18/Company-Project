import { z } from "zod";

export const createJobSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters"),

  description: z
    .string()
    .trim()
    .min(20, "Description must be at least 20 characters"),

  location: z
    .string()
    .trim()
    .min(2, "Location is required"),

  experience: z
    .string()
    .trim()
    .min(1, "Experience is required"),

  salary: z
    .string()
    .optional(),

  vacancies: z.coerce
    .number()
    .int()
    .positive("Vacancies must be greater than 0"),

  employmentType: z.enum([
    "FULL_TIME",
    "PART_TIME",
    "INTERNSHIP",
    "CONTRACT",
    "FREELANCE",
  ]),

  categoryId: z
    .string()
    .min(1, "Category is required"),

  status: z.enum([
    "DRAFT",
    "PUBLISHED",
    "CLOSED",
  ]),

  lastDate: z
    .string()
    .min(1, "Last date is required"),
});

export const updateJobSchema = createJobSchema.partial();

export const jobQuerySchema = z.object({

  page: z.coerce
    .number()
    .optional()
    .default(1),

  limit: z.coerce
    .number()
    .optional()
    .default(10),

  search: z
    .string()
    .optional(),

  status: z.enum([
    "DRAFT",
    "PUBLISHED",
    "CLOSED",
  ]).optional(),

  categoryId: z
    .string()
    .optional(),

});