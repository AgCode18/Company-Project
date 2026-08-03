import api from "./api.js";


export const getCategories = (params) =>
  api.get("/blog-categories", { params });

export const createCategory = (data) =>
  api.post("/blog-categories", data);

export const updateCategory = (id, data) =>
  api.put(`/blog-categories/${id}`, data);

export const deleteCategory = (id) =>
  api.delete(`/blog-categories/${id}`);

export const getCategoryById = (id) =>
  api.get(`/blog-categories/${id}`);