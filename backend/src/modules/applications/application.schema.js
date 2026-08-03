import { z } from "zod";

/* ===========================
   Public - Apply Job
=========================== */

export const applyJobSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full name is required"),

  email: z
    .string()
    .email("Invalid email address"),

  phone: z
    .string()
    .min(10, "Phone number is required"),

  linkedinUrl: z
    .string()
    .url("Invalid LinkedIn URL")
    .optional()
    .or(z.literal("")),

  portfolioUrl: z
    .string()
    .url("Invalid Portfolio URL")
    .optional()
    .or(z.literal("")),

  currentCompany: z
    .string()
    .optional(),

  currentCTC: z
    .string()
    .optional(),

  expectedCTC: z
    .string()
    .optional(),

  noticePeriod: z
    .string()
    .optional(),

  yearsExperience: z
    .string()
    .optional(),

  city: z
    .string()
    .optional(),

  coverletter: z
    .string()
    .optional(),
});


export const updateApplicationStatusSchema =
  z.object({
    status: z.enum([
      "PENDING",
      "REVIEWED",
      "SHORTLISTED",
      "INTERVIEW",
      "HIRED",
      "REJECTED",
    ]),
  });