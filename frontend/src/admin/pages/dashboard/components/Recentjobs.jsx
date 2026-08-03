import { Link } from "react-router-dom";

export default function RecentJobs({ jobs = [] }) {
  return (
    <div className="rounded-xl bg-white shadow">
      <div className="border-b p-5">
        <h2 className="text-xl font-semibold">
          Recent Jobs
        </h2>
      </div>

      <div className="divide-y">
        {jobs.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            No jobs found.
          </div>
        ) : (
          jobs.map((job) => (
            <div
              key={job.id}
              className="flex items-center justify-between p-5"
            >
              <div>
                <h3 className="font-semibold">
                  {job.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {job.location}
                </p>
              </div>

              <Link
                to={`/admin/jobs/edit/${job.id}`}
                className="text-blue-600 hover:underline"
              >
                Edit
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}