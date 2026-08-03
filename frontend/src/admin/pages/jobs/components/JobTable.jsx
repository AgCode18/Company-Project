import { Link } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";

export default function JobTable({ jobs, loading, onDelete }) {
  if (loading) {
    return (
      <div className="rounded-lg bg-white p-10 text-center shadow">
        Loading...
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="rounded-lg bg-white p-10 text-center shadow">
        No jobs found.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left">Title</th>

            <th className="px-4 py-3 text-left">Location</th>

            <th className="px-4 py-3 text-left">Type</th>

            <th className="px-4 py-3 text-left">Status</th>

            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {jobs.map((job) => (
            <tr key={job.id} className="border-t">
              <td className="px-4 py-3">{job.title}</td>

              <td className="px-4 py-3">{job.location}</td>

              <td className="px-4 py-3">{job.employmentType}</td>

              <td className="px-4 py-3">
                <span
                  className={`rounded-full px-3 py-1 text-sm ${
                    job.status === "PUBLISHED"
                      ? "bg-green-100 text-green-700"
                      : job.status === "DRAFT"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  {job.status}
                </span>
              </td>

              <td className="px-4 py-3">
                <div className="flex justify-center gap-3">
                  <Link to={`/admin/jobs/edit/${job.id}`}>
                    <Pencil size={18} className="text-blue-600" />
                  </Link>

                  <button onClick={() => onDelete(job.id)}>
                    <Trash2 size={18} className="text-red-600" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
