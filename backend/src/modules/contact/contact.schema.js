import { z } from "zod";

/* ===========================
   Create Contact Enquiry
=========================== */

export const createContactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name is required")
    .max(100, "Name cannot exceed 100 characters"),

  email: z
    .string()
    .trim()
    .email("Invalid email address"),

  phone: z
    .string()
    .trim()
    .optional(),

  subject: z
    .string()
    .trim()
    .optional(),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters"),
});

/* ===========================
   Update Read Status
=========================== */

export const updateReadStatusSchema = z.object({
  isRead: z.boolean(),
});