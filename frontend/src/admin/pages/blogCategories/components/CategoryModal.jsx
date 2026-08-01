import CategoryForm from "./CategoryForm";

export default function CategoryModal({
    open,
    onClose,
    onSubmit,
    loading,
    initialValues,
}) {

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

            <div className="w-full max-w-md rounded-xl bg-white p-6">

                <h2 className="mb-5 text-xl font-semibold">
                    {initialValues
                        ? "Edit Category"
                        : "Add Category"}
                </h2>

                <CategoryForm
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    loading={loading}
                />

                <button
                    onClick={onClose}
                    className="mt-4 w-full rounded-lg border py-2"
                >
                    Cancel
                </button>

            </div>

        </div>
    );
}