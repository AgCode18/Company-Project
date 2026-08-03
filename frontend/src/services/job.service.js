import api from "./api.js";


/* ===========================
   Admin APIs
=========================== */

// Get All Jobs
export const getJobs = (params) => {
  return api.get("/jobs", {
    params,
  });
};

// Get Job By ID
export const getJobById = (id) => {
  return api.get(`/jobs/${id}`);
};

// Create Job
export const createJob = (data) => {
  return api.post("/jobs", data);
};

// Update Job
export const updateJob = (id, data) => {
  return api.put(`/jobs/${id}`, data);
};

// Delete Job
export const deleteJob = (id) => {
  return api.delete(`/jobs/${id}`);
};

/* ===========================
   Public APIs
=========================== */

// Get Published Jobs
export const getPublicJobs = (params) => {
  return api.get("/jobs/public", {
    params,
  });
};

// Get Job By Slug
export const getPublicJobBySlug = (slug) => {
  return api.get(`/jobs/public/${slug}`);
};