import api from "./api";

// Get all blogs
export const getBlogs = (params) =>
  api.get("/blogs", { params });

// Get single blog
export const getBlogById = (id) =>
  api.get(`/blogs/${id}`);

// Create
export const createBlog = (data) =>
  api.post("/blogs", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// Update
export const updateBlog = (id, data) =>
  api.put(`/blogs/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// Delete
export const deleteBlog = (id) =>
  api.delete(`/blogs/${id}`);