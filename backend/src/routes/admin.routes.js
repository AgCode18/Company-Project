import express from "express";
import { verifyAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/dashboard",verifyAdmin,(req, res) => {
        res.json({
            success: true,
            message: "Welcome Admin",
            admin: req.admin,
        });
    }
);

export default router;