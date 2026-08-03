import { Link } from "react-router-dom";

export default function RecentBlogs({ blogs = [] }) {
  return (
    <div className="rounded-xl bg-white shadow">
      <div className="border-b p-5">
        <h2 className="text-xl font-semibold">
          Recent Blogs
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-5 py-3 text-left">Title</th>
              <th className="px-5 py-3 text-left">Category</th>
              <th className="px-5 py-3 text-left">Status</th>
              <th className="px-5 py-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id} className="border-t">
                <td className="px-5 py-4">
                  {blog.title}
                </td>

                <td className="px-5 py-4">
                  {blog.category?.name || "-"}
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm ${
                      blog.status === "PUBLISHED"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {blog.status}
                  </span>
                </td>

                <td className="px-5 py-4">
                  <Link
                    to={`/admin/blogs/edit/${blog.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {blogs.length === 0 && (
          <div className="p-6 text-center text-gray-500">
            No blogs found.
          </div>
        )}
      </div>
    </div>
  );
}