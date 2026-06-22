import express from "express";
import { createBlog, deleteBlog, getBlog, getBlogs, updateBlog } from "../controllers/blog.controller.js"
import { verifyAdmin } from "../middleware/auth.middleware.js"

const router = express.Router()


router.post("/blog", verifyAdmin, createBlog)
router.get("/getblogs", getBlogs)
router.get("/:id", getBlog)
router.put("/:id", verifyAdmin, updateBlog)
router.delete("/:id", verifyAdmin, deleteBlog)



export default router;


