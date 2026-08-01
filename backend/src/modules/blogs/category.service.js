import prisma from "../../db/db.js";

export const getCategories = async () => {
  return prisma.blogCategory.findMany({
    include: {
      _count: {
        select: {
          blogs: true,
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },
  });
};

export const createCategory = async (data) => {
  return prisma.blogCategory.create({
    data,
  });
};

export const updateCategory = async (id, data) => {
  return prisma.blogCategory.update({
    where: { id },
    data,
  });
};

export const deleteCategory = async (id) => {
  return prisma.blogCategory.delete({
    where: { id },
  });
};
