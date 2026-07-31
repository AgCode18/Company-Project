import { Router } from "express";
import categoryRoutes from "../../routes/category.routes.js"

const router = Router()

router.use("/", blogRoutes);

router.use("/categories", categoryRoutes)

export default router;