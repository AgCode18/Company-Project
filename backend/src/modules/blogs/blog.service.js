import prisma from "../../db/db.js";

export const createBlog = async (data) => {
    return prisma.blog.create({
        data,
        include: {
            category: true,
        },
    });
};

export const getBlogs = async () => {
    return prisma.blog.findMany({
        include: {
            category: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
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