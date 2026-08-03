import prisma from "../../db/db.js";

/* ===========================
   Create Why Choose Us
=========================== */

export const createWhyChoose = async (data) => {
  return prisma.whyChooseUs.create({
    data,
  });
};

/* ===========================
   Get All Why Choose Us
=========================== */

export const getWhyChooseList = async (query) => {
  const { page = 1, limit = 10, search = "", isActive } = query;

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
        description: {
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

  const total = await prisma.whyChooseUs.count({
    where,
  });

  const items = await prisma.whyChooseUs.findMany({
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
    items,

    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / Number(limit)),
    },
  };
};

/* ===========================
   Get By ID
=========================== */

export const getWhyChooseById = async (id) => {
  return prisma.whyChooseUs.findUnique({
    where: {
      id,
    },
  });
};

/* ===========================
   Update
=========================== */

export const updateWhyChoose = async (id, data) => {
  return prisma.whyChooseUs.update({
    where: {
      id,
    },
    data,
  });
};

/* ===========================
   Delete
=========================== */

export const deleteWhyChoose = async (id) => {
  return prisma.whyChooseUs.delete({
    where: {
      id,
    },
  });
};
