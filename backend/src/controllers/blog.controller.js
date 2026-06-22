import prisma from "../db/db.js"



// Create a Blog
export const createBlog = async (req, res) => {
    try {
        const {
            title,
            slug,
            excerpt,
            content,
            coverImage,
            published,
        } = req.body;

        const existingBlog = await prisma.blog.findUnique({
            where: {
                slug,
            },
        });

        if (existingBlog) {
            return res.status(400).json({
                success: false,
                message: "Blog already exists",
            });
        }

        const blog = await prisma.blog.create({
            data: {
                title,
                slug,
                excerpt,
                content,
                coverImage,
                published,
            },
        });

        return res.status(201).json({
            success: true,
            blog,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


// Get all blog
export const getBlogs = async (req, res) => {
    try {
        const blogs = await prisma.blog.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });

        return res.json({
            success: true,
            blogs,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// Get a single blog
export const getBlog = async (req, res) => {
    try {
        const blog = await prisma.blog.findUnique({
            where: {
                id: req.params.id,
            },
        });

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found",
            });
        }

        return res.json({
            success: true,
            blog,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message

        });
    }
};


// Updatin the blog
export const updateBlog = async (req, res) => {
    try {
        const blog = await prisma.blog.update({
            where: {
                id: req.params.id,
            },
            data: req.body,
        });

        return res.json({
            success: true,
            blog,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message

        });
    }
};



// Deleting the blog
export const deleteBlog = async (req, res) => {
    try {
        await prisma.blog.delete({
            where: {
                id: req.params.id,
            },
        });

        return res.json({
            success: true,
            message: "Blog deleted",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};