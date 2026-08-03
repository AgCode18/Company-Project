import StatusBadge from "./StatusBadge.jsx";

export default function WhyChooseTable({ items, loading, onEdit, onDelete }) {
  if (loading) {
    return (
      <div className="rounded-xl bg-white p-10 text-center shadow">
        Loading...
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="rounded-xl bg-white p-10 text-center shadow">
        No records found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-4 text-left">Icon</th>

            <th className="px-6 py-4 text-left">Title</th>

            <th className="px-6 py-4 text-left">Description</th>

            <th className="px-6 py-4 text-center">Order</th>

            <th className="px-6 py-4 text-center">Status</th>

            <th className="px-6 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-t">
              {/* Icon */}

              <td className="px-6 py-4">
                {item.icon ? (
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-12 w-12 rounded-lg border object-cover"
                  />
                ) : (
                  "-"
                )}
              </td>

              {/* Title */}

              <td className="px-6 py-4 font-medium">{item.title}</td>

              {/* Description */}

              <td className="max-w-sm px-6 py-4 text-gray-600">
                <p className="line-clamp-2">{item.description}</p>
              </td>

              {/* Order */}

              <td className="px-6 py-4 text-center">{item.order}</td>

              {/* Status */}

              <td className="px-6 py-4 text-center">
                <StatusBadge status={item.isActive} />
              </td>

              {/* Actions */}

              <td className="px-6 py-4">
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => onEdit(item)}
                    className="rounded bg-yellow-500 px-3 py-1 text-white hover:bg-yellow-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(item.id)}
                    className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
                  >
                    Delete
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
