import { useEffect, useState } from "react";
import { getBlogs } from "../../../services/blog.service";
import DataTable from "../../DataTable/DataTable";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    {
      key: "featuredImage",

      label: "Image",

      render: (row) =>
        row.featuredImage ? (
          <img
            src={`${import.meta.env.VITE_API_URL}${row.featuredImage}`}
            className="h-14 w-20 rounded object-cover"
          />
        ) : (
          "-"
        ),
    },

    {
      key: "title",

      label: "Title",
    },

    {
      key: "category",

      label: "Category",

      render: (row) => row.category?.name,
    },

    {
      key: "status",

      label: "Status",
    },

    {
      key: "author",

      label: "Author",

      render: (row) => row.author?.name,
    },
  ];

  const fetchBlogs = async () => {
    try {
      const { data } = await getBlogs();

      setBlogs(data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <DataTable
        columns={columns}
        data={blogs}
        loading={loading}
        renderActions={(blog) => (
          <div className="flex gap-2">
            <button className="rounded bg-green-600 px-3 py-1 text-white">
              Edit
            </button>

            <button className="rounded bg-red-600 px-3 py-1 text-white">
              Delete
            </button>
          </div>
        )}
      />
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Blogs</h1>

        <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
          + Add Blog
        </button>
      </div>

      <div className="overflow-hidden rounded-lg bg-white shadow">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Author</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id} className="border-t">
                <td className="p-4">
                  {blog.featuredImage ? (
                    <img
                      src={`${import.meta.env.VITE_API_URL}${blog.featuredImage}`}
                      alt={blog.title}
                      className="h-14 w-20 rounded object-cover"
                    />
                  ) : (
                    "-"
                  )}
                </td>

                <td className="p-4">{blog.title}</td>

                <td className="p-4">{blog.category?.name || "-"}</td>

                <td className="p-4">{blog.status}</td>

                <td className="p-4">{blog.author?.name}</td>

                <td className="p-4">
                  <button className="mr-2 rounded bg-green-500 px-3 py-1 text-white">
                    Edit
                  </button>

                  <button className="rounded bg-red-500 px-3 py-1 text-white">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {!blogs.length && (
          <div className="p-8 text-center text-gray-500">No blogs found.</div>
        )}
      </div>
    </div>
  );
}
