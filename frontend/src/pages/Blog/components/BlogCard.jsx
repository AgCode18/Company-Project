import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <article className="overflow-hidden rounded-xl bg-white shadow transition hover:shadow-lg">

      {blog.featuredImage && (
        <img
          src={`${import.meta.env.VITE_API_URL}${blog.featuredImage}`}
          alt={blog.title}
          className="h-56 w-full object-cover"
        />
      )}

      <div className="p-6">

        <p className="mb-2 text-sm text-gray-500">
          {new Date(blog.publishedAt || blog.createdAt).toLocaleDateString()}
        </p>

        <h2 className="mb-3 text-xl font-bold">
          {blog.title}
        </h2>

        <p className="mb-5 text-gray-600">
          {blog.shortDescription}
        </p>

        <Link
          to={`/blogs/${blog.slug}`}
          className="font-semibold text-blue-600 hover:underline"
        >
          Read More →
        </Link>

      </div>
    </article>
  );
}