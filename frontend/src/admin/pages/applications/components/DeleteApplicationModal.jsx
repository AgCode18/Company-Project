import { deleteApplication } from "../../../../services/application.service";

export default function DeleteApplicationModal({
  application,
  onClose,
  refresh,
}) {
  const handleDelete = async () => {
    try {
      await deleteApplication(application.id);

      refresh();

      onClose();
    } catch (error) {
      console.error(error);

      alert(error.response?.data?.message || "Failed to delete application");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-xl bg-white p-6">
        <h2 className="text-xl font-bold mb-4">Delete Application</h2>

        <p className="text-gray-600">
          Are you sure you want to delete this application?
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onClose} className="rounded-lg border px-5 py-2">
            Cancel
          </button>

          <button
            onClick={handleDelete}
            className="rounded-lg bg-red-600 px-5 py-2 text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
