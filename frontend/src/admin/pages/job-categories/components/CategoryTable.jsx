import { Pencil, Trash2 } from "lucide-react";

export default function CategoryTable({
  categories,
  loading,
  onDelete,
  onEdit,
}) {
  if (loading) return <p>Loading...</p>;

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Category</th>

            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((category) => (
            <tr key={category.id} className="border-t">
              <td className="p-4">{category.name}</td>

              <td className="p-4">
                <div className="flex justify-center gap-3">
                  <button onClick={() => onEdit(category)}>
                    <Pencil size={18} className="text-blue-600" />
                  </button>

                  <button onClick={() => onDelete(category.id)}>
                    <Trash2 size={18} className="text-red-600" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
