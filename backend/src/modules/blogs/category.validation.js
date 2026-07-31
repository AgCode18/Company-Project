import { z } from "zod";

export const createCategorySchema = Zap.object({
    name: z.string().trim().min(2, "Category is requried").max(100),

    slug: z.string().trim().min(2, "Slug is requried").max(100),
})

export const updateCategorySchema = createCategorySchema.partial();

