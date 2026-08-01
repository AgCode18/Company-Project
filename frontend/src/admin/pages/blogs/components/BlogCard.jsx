import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

export default function BlogCard({ blog }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Featured Image */}
      <div className="overflow-hidden">
        <img
          src={blog.featuredImage}
          alt={blog.title}
          className="h-56 w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">

        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
          {blog.category?.name}
        </span>

        <h2 className="line-clamp-2 text-2xl font-bold">
          {blog.title}
        </h2>

        <p className="line-clamp-3 text-gray-600">
          {blog.shortDescription}
        </p>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar size={16} />
            {new Date(blog.createdAt).toLocaleDateString()}
          </div>

          <Link
            to={`/blog/${blog.slug}`}
            className="flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-700"
          >
            Read More
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    </article>
  );
}