import { useEffect, useState } from "react";

import {
  createWhyChoose,
  updateWhyChoose,
} from "../../../../services/whyChoose.service";

export default function WhyChooseModal({
  open,
  onClose,
  item,
}) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    order: 0,
    isActive: true,
    icon: null,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (item) {
      setForm({
        title: item.title || "",
        description: item.description || "",
        order: item.order || 0,
        isActive: item.isActive,
        icon: item.icon || null,
      });
    } else {
      setForm({
        title: "",
        description: "",
        order: 0,
        isActive: true,
        icon: null,
      });
    }
  }, [item]);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : files
          ? files[0]
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        if (value !== null) {
          formData.append(key, value);
        }
      });

      if (item) {
        await updateWhyChoose(item.id, formData);
      } else {
        await createWhyChoose(formData);
      }

      onClose();
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-2xl rounded-xl bg-white p-6">

        <h2 className="mb-6 text-2xl font-bold">
          {item ? "Edit" : "Add"} Why Choose Us
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Title */}

          <div>
            <label className="mb-2 block font-medium">
              Title
            </label>

            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3"
              required
            />
          </div>

          {/* Description */}

          <div>
            <label className="mb-2 block font-medium">
              Description
            </label>

            <textarea
              rows={5}
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3"
              required
            />
          </div>

          {/* Order */}

          <div>
            <label className="mb-2 block font-medium">
              Display Order
            </label>

            <input
              type="number"
              name="order"
              value={form.order}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>

          {/* Status */}

          <div className="flex items-center gap-3">

            <input
              type="checkbox"
              name="isActive"
              checked={form.isActive}
              onChange={handleChange}
            />

            <label>
              Active
            </label>

          </div>

          {/* Icon */}

          <div>

            <label className="mb-2 block font-medium">
              Icon
            </label>

            {typeof form.icon === "string" &&
              form.icon && (
                <img
                  src={form.icon}
                  alt="Icon"
                  className="mb-4 h-20 w-20 rounded border object-cover"
                />
              )}

            <input
              type="file"
              name="icon"
              accept="image/*"
              onChange={handleChange}
            />

          </div>

          {/* Buttons */}

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border px-5 py-2"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-blue-600 px-6 py-2 text-white"
            >
              {loading
                ? "Saving..."
                : item
                ? "Update"
                : "Create"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}