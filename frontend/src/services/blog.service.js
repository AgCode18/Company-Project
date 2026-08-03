import api from "./api.js";


/* ===========================
   Public APIs
=========================== */

// Get published blogs
export const getPublicBlogs = (params) => {
  return api.get("/blogs/public", {
    params,
  });
};

// Get blog by slug
export const getPublicBlogBySlug = (slug) => {
  return api.get(`/blogs/public/${slug}`);
};

// Get featured blogs
export const getFeaturedBlogs = () => {
  return api.get("/blogs/public/featured");
};

// Get blog categories
export const getPublicBlogCategories = () => {
  return api.get("/blog-categories/public");
};