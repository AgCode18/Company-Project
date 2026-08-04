import prisma from "../../db/db.js";
import { generateUniqueSlug } from "../blogs/blog.service.js";

/* ===========================
   Create Service
=========================== */

export const createService = async (data) => {
  const slug = await generateUniqueSlug(data.title);

  return prisma.service.create({
    data: {
      ...data,
      slug,
    },
  });
};

/* ===========================
   Get All Services
=========================== */

export const getServices = async (query) => {
  const {
    page = 1,
    limit = 10,
    search = "",
    isActive,
    isFeatured,
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

  // Active Filter
  if (isActive !== undefined) {
    where.isActive = isActive === "true";
  }

  // Featured Filter
  if (isFeatured !== undefined) {
    where.isFeatured = isFeatured === "true";
  }

  const total = await prisma.service.count({
    where,
  });

  const services = await prisma.service.findMany({
    where,

    orderBy: [
      {
        order: "asc",
      },
      {
        createdAt: "desc",
      },
    ],

    skip: (Number(page) - 1) * Number(limit),

    take: Number(limit),
  });

  return {
    services,

    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / Number(limit)),
    },
  };
};

/* ===========================
   Get Service By ID
=========================== */

export const getServiceById = async (id) => {
  return prisma.service.findUnique({
    where: {
      id,
    },
  });
};

/* ===========================
   Get Service By Slug
=========================== */

export const getServiceBySlug = async (slug) => {
  return prisma.service.findUnique({
    where: {
      slug,
    },
  });
};

/* ===========================
   Update Service
=========================== */

export const updateService = async (
  id,
  data
) => {
  if (data.title) {
    data.slug = await generateUniqueSlug(data.title);
  }

  return prisma.service.update({
    where: {
      id,
    },
    data,
  });
};

/* ===========================
   Delete Service
=========================== */

export const deleteService = async (id) => {
  return prisma.service.delete({
    where: {
      id,
    },
  });
};