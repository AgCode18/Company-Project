import { useForm } from "react-hook-form";
import BlogEditor from "../../../../components/editor/BlogEditor.jsx";
import SeoFields from "./SeoFields";
import ImageUploader from "./ImageUploader";

export default function BlogForm({
  initialValues = {},
  categories = [],
  onSubmit,
  loading = false,
}) {
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: initialValues,
  });

  useEffect(() => {
    if (!initialValues) return;

    Object.entries(initialValues).forEach(([key, value]) => {
      setValue(key, value);
    });
  }, [initialValues, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Title */}

      <div>
        <label className="mb-2 block font-medium">Blog Title</label>

        <input
          {...register("title")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      {/* Short Description */}

      <div>
        <label className="mb-2 block font-medium">Short Description</label>

        <BlogEditor
          value={form.content}
          onChange={(html) =>
            setForm({
              ...form,
              content: html,
            })
          }
        />
      </div>

      {/* Category */}

      <div>
        <label className="mb-2 block">Category</label>

        <select
          {...register("categoryId")}
          className="w-full rounded-lg border p-3"
        >
          <option value="">Select Category</option>

          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Rich Text */}

      <BlogEditor
        value={watch("content")}
        onChange={(value) => setValue("content", value)}
      />

      {/* Image */}

      <ImageUploader onChange={(file) => setValue("featuredImage", file)} />

      {/* Featured */}

      <label className="flex items-center gap-3">
        <input type="checkbox" {...register("isFeatured")} />
        Featured Blog
      </label>

      {/* Status */}

      <select {...register("status")} className="rounded-lg border p-3">
        <option value="DRAFT">Draft</option>

        <option value="PUBLISHED">Published</option>
      </select>

      <SeoFields register={register} />

      <button
        disabled={loading}
        className="rounded-lg bg-blue-600 px-6 py-3 text-white"
      >
        {loading ? "Saving..." : "Save Blog"}
      </button>
    </form>
  );
}
