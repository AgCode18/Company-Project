import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BlogForm from "./components/BlogForm";

import { createBlog } from "../../../services/blog.service";
import { getCategories } from "../../../services/category.service";

export default function AddBlog() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = async () => {
        try {
            const { data } = await getCategories();
            setCategories(data.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async (values) => {
        try {
            setLoading(true);

            const formData = new FormData();

            Object.entries(values).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    formData.append(key, value);
                }
            });

            await createBlog(formData);

            navigate("/admin/blogs");
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <BlogForm
            onSubmit={handleSubmit}
            loading={loading}
            categories={categories}
        />
    );
}