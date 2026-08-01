import api from "./api.js";

// Get Blogs
export const getBlogs = (params) => {
  return api.get("/blogs", { params });
};

// Get Single Blog
export const getBlog = (id) => {
  return api.get(`/blogs/${id}`);
};

// Create Blog
export const createBlog = (data) => {
  return api.post("/blogs", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Update Blog
export const updateBlog = (id, data) => {
  return api.put(`/blogs/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Delete Blog
export const deleteBlog = (id) => {
  return api.delete(`/blogs/${id}`);
};