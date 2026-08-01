import { generateUniqueSlug } from "./blog.service.js";

// =======================
// Create Blog


// =======================
export const createBlog = async (req, res) => {
  try {
    const body = createBlogSchema.parse(req.body);

    const slug = await generateUniqueSlug(body.title);

    const featuredImage = req.file
      ? `/uploads/blogs/${req.file.filename}`
      : null;

    const blog = await blogService.createBlog({
      ...body,
      slug,
      featuredImage,
      authorId: req.admin.id,
      publishedAt: body.status === "PUBLISHED" ? new Date() : null,
    });

    return res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: blog,
    });
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
// Get All Blogs
// =======================
export const getBlogs = async (req, res) => {
  try {
    const results = await blogService.getBlogs(req.query);

    return res.json({
      success: true,
      data: results.blogs,
      pagination: results.pagination,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
// Get Blog By ID
// =======================
export const getBlogById = async (req, res) => {
  try {
    const blog = await blogService.getBlogById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    return res.json({
      success: true,
      data: blog,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
// Update Blog
// =======================
export const updateBlog = async (req, res) => {
  try {
    const body = updateBlogSchema.parse(req.body);

    if (body.title) {
      body.slug = slugify(body.title);
    }

    if (req.file) {
      body.featuredImage = `/uploads/blogs/${req.file.filename}`;
    }

    if (body.status && body.status === "PUBLISHED") {
      body.publishedAt = new Date();
    }

    const blog = await blogService.updateBlog(req.params.id, body);

    return res.json({
      success: true,
      message: "Blog updated successfully",
      data: blog,
    });
  } catch (error) {
    console.error(error);

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
// Delete Blog
// =======================
export const deleteBlog = async (req, res) => {
  try {
    await blogService.deleteBlog(req.params.id);

    return res.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
