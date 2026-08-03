import express from "express";

import verifyAdmin  from "../../middleware/auth.middleware.js";

import {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
  getPublicJobs,
  getPublicJobBySlug,
} from "../jobs/job.controllers.js";

const router = express.Router();

/* ===========================
   Public Routes
=========================== */

// Get all published jobs
router.get("/public", getPublicJobs);

// Get single published job by slug
router.get("/public/:slug", getPublicJobBySlug);

/* ===========================
   Admin Routes
=========================== */

// Get all jobs
router.get("/", verifyAdmin, getJobs);

// Get single job
router.get("/:id", verifyAdmin, getJobById);

// Create job
router.post("/", verifyAdmin, createJob);

// Update job
router.put("/:id", verifyAdmin, updateJob);

// Delete job
router.delete("/:id", verifyAdmin, deleteJob);

export default router;