import { z } from "zod";

export const applyJobSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, "Full name must be at least 3 characters"),

  email: z
    .string()
    .trim()
    .email("Invalid email address"),

  phone: z
    .string()
    .trim()
    .min(10, "Phone number is required"),

  coverLetter: z
    .string()
    .trim()
    .optional(),

  resume: z
    .string()
    .min(1, "Resume is required"),
});

export const updateApplicationStatusSchema = z.object({
  status: z.enum([
    "PENDING",
    "REVIEWED",
    "SHORTLISTED",
    "INTERVIEW",
    "HIRED",
    "REJECTED",
  ]),
});

export const applicationQuerySchema = z.object({
  page: z.coerce.number().default(1),

  limit: z.coerce.number().default(10),

  search: z.string().optional(),

  status: z
    .enum([
      "PENDING",
      "REVIEWED",
      "SHORTLISTED",
      "INTERVIEW",
      "HIRED",
      "REJECTED",
    ])
    .optional(),
});