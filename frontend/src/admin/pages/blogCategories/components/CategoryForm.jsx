import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function CategoryForm({
    initialValues,
    onSubmit,
    loading,
}) {

    const {
        register,
        handleSubmit,
        reset,
    } = useForm();

    useEffect(() => {
        if (initialValues) {
            reset(initialValues);
        }
    }, [initialValues, reset]);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
        >
            <div>
                <label className="mb-2 block font-medium">
                    Category Name
                </label>

                <input
                    {...register("name", {
                        required: true,
                    })}
                    className="w-full rounded-lg border p-3"
                />
            </div>

            <div className="flex justify-end gap-3">
                <button
                    type="submit"
                    disabled={loading}
                    className="rounded-lg bg-blue-600 px-5 py-2 text-white"
                >
                    {loading
                        ? "Saving..."
                        : "Save"}
                </button>
            </div>
        </form>
    );
}