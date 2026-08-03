import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

import {
  getCategories,
  deleteCategory,
} from "../../../services/category.service";

import CategoryTable from "./components/CategoryTable";
import AddCategoryModal from "./AddCategoryModal";
import EditCategoryModal from "./EditCategoryModal";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(true);

  const [showAdd, setShowAdd] = useState(false);

  const [editingCategory, setEditingCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);

      const { data } = await getCategories();

      setCategories(data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete category?")) return;

    await deleteCategory(id);

    fetchCategories();
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Job Categories</h1>

          <p className="text-gray-500">Manage categories.</p>
        </div>

        <button
          onClick={() => setShowAdd(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={18} />
          Add Category
        </button>
      </div>

      <CategoryTable
        categories={categories}
        loading={loading}
        onDelete={handleDelete}
        onEdit={setEditingCategory}
      />

      {showAdd && (
        <AddCategoryModal
          onClose={() => setShowAdd(false)}
          refresh={fetchCategories}
        />
      )}

      {editingCategory && (
        <EditCategoryModal
          category={editingCategory}
          onClose={() => setEditingCategory(null)}
          refresh={fetchCategories}
        />
      )}
    </div>
  );
}
