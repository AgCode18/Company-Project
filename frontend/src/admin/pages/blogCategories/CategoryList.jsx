import { useEffect, useState } from "react";
import DataTable from "../../DataTable/DataTable.jsx";
import { getCategories } from "../../services/category.service.js";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const { data } = await getCategories();

      setCategories(data.data);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      key: "name",
      label: "Category",
    },

    {
      key: "slug",
      label: "Slug",
    },

    {
      key: "blogs",
      label: "Blogs",
      rrender: (row) => row._count.blogs,
    },
  ];

  return (
    <div>
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">Blog Categories</h1>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
          + Add Category
        </button>
      </div>

      <DataTable
        columns={columns}
        data={categories}
        loading={loading}
        renderActions={(row) => (
          <div className="flex gap-2">
            <button className="bg-yellow-500 text-white px-3 py-1 rounded">
              Edit
            </button>

            <button className="bg-red-500 text-white px-3 py-1 rounded">
              Delete
            </button>
          </div>
        )}
      />
    </div>
  );
}
