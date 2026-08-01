import { Link } from "react-router-dom";

export default function RecentPosts({ posts = [] }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <h3 className="mb-5 text-xl font-bold">
        Recent Posts
      </h3>

      <div className="space-y-5">

        {posts.length === 0 && (
          <p className="text-gray-500">
            No recent posts found.
          </p>
        )}

        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.slug}`}
            className="flex gap-4 group"
          >
            <img
              src={post.featuredImage}
              alt={post.title}
              className="h-20 w-20 rounded-lg object-cover"
            />

            <div>

              <h4 className="line-clamp-2 font-semibold group-hover:text-blue-600">
                {post.title}
              </h4>

              <p className="mt-2 text-sm text-gray-500">
                {new Date(post.createdAt).toLocaleDateString()}
              </p>

            </div>

          </Link>
        ))}

      </div>

    </div>
  );
}