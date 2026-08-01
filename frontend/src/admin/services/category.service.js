import api from "./api";

export const getCategories = (params) =>
    api.get("/blog-categories", { params });

export const createCategory = (data) =>
    api.post("/blog-categories", data);

export const updateCategory = (id, data) =>
    api.put(`/blog-categories/${id}`, data);

export const deleteCategory = (id) =>
    api.delete(`/blog-categories/${id}`);