import { z } from "zod";

export const createBlogSchema = z.object({
    title: z.string().trim().min(5, "Title is required"),

    shortDescription: z
        .string()
        .trim()
        .min(20, "Short description is required"),

    content: z
        .string()
        .trim()
        .min(50, "Content is required"),

    categoryId: z.string().optional(),

    featuredImage: z.string().optional(),

    status: z.enum(["DRAFT", "PUBLISHED"]).optional(),

    isFeatured: z.boolean().optional(),

    seoTitle: z.string().optional(),

    seoDescription: z.string().optional(),

    seoKeywords: z.string().optional(),
});

export const updateBlogSchema =
    createBlogSchema.partial();