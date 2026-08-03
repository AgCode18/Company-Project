import { useState } from "react";
import { X } from "lucide-react";
import { updateCategory } from "../../../services/category.service";

export default function EditCategoryModal({ category, onClose, refresh }) {
  const [name, setName] = useState(category.name);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await updateCategory(category.id, {
        name,
      });

      refresh();

      onClose();
    } catch (error) {
      console.error(error);

      alert(error.response?.data?.message || "Failed to update category.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Edit Category</h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <label className="mb-2 block font-medium">Category Name</label>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-5 w-full rounded-lg border p-3"
          />

          <button
            disabled={loading}
            className="w-full rounded-lg bg-green-600 py-3 text-white hover:bg-green-700"
          >
            {loading ? "Updating..." : "Update Category"}
          </button>
        </form>
      </div>
    </div>
  );
}
