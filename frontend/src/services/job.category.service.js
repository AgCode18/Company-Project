import api from "./api.js";


// Get all categories
export const getCategories = () => {
  return api.get("/job-categories");
};

// Create category
export const createCategory = (data) => {
  return api.post("/job-categories", data);
};

// Update category
export const updateCategory = (id, data) => {
  return api.put(`/job-categories/${id}`, data);
};

// Delete category
export const deleteCategory = (id) => {
  return api.delete(`/job-categories/${id}`);
};