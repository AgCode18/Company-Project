import prisma from "../../db/db.js";
import { slugify } from "./blog.utils.js";

export const createBlog = async (data) => {
  const slug = await generateUniqueSlug(data.title);

  return prisma.blog.create({
    data: {
      ...data,
      slug,
    },
    include: {
      category: true,

      author: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });
};

export const getBlogs = async (query) => {
  const {
    page = 1,
    limit = 10,
    search = "",
    status,
    category,
    featured,
    sort = "latest",
  } = query;

  const where = {};

  // Search
  if (search) {
    where.OR = [
      {
        title: {
          contains: search,
          mode: "insensitive",
        },
      },
      {
        shortDescription: {
          contains: search,
          mode: "insensitive",
        },
      },
    ];
  }

  // Status Filter
  if (status) {
    where.status = status;
  }

  // Category Filter
  if (category) {
    where.categoryId = category;
  }

  // Featured Filter
  if (featured !== undefined) {
    where.isFeatured = featured === "true";
  }

  const total = await prisma.blog.count({
    where,
  });

  const blogs = await prisma.blog.findMany({
    where,

    include: {
      category: true,
      author: {
        select: {
          id: true,
          name: true,
        },
      },
    },

    orderBy: {
      createdAt: sort === "oldest" ? "asc" : "desc",
    },

    skip: (Number(page) - 1) * Number(limit),

    take: Number(limit),
  });

  return {
    blogs,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
    },
  };
};

export const getBlogById = async (id) => {
  return prisma.blog.findUnique({
    where: { id },
    include: {
      category: true,
    },
  });
};

export const updateBlog = async (id, data) => {
  return prisma.blog.update({
    where: { id },
    data,
  });
};

export const deleteBlog = async (id) => {
  return prisma.blog.delete({
    where: { id },
  });
};

export const generateUniqueSlug = async (title) => {
  const baseSlug = slugify(title);

  let slug = baseSlug;

  let counter = 1;

  while (true) {
    const exists = await prisma.blog.findUnique({
      where: {
        slug,
      },
    });

    if (!exists) {
      break;
    }

    slug = `${baseSlug}-${counter}`;

    counter++;
  }

  return slug;
};
