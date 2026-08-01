import { X, Trash2 } from "lucide-react";

export default function ConfirmModal({
  isOpen,
  title = "Delete",
  message = "Are you sure?",
  confirmText = "Delete",
  cancelText = "Cancel",
  loading = false,
  onConfirm,
  onCancel,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-red-100 p-3">
              <Trash2 size={22} className="text-red-600" />
            </div>

            <h2 className="text-xl font-semibold">{title}</h2>
          </div>

          <button onClick={onCancel}>
            <X size={22} />
          </button>
        </div>

        <div className="p-6">
          <p className="text-gray-600">{message}</p>
        </div>

        <div className="flex justify-end gap-3 border-t p-5">
          <button
            onClick={onCancel}
            disabled={loading}
            className="rounded-lg border px-5 py-2"
          >
            {cancelText}
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700"
          >
            {loading ? "Deleting..." : confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
