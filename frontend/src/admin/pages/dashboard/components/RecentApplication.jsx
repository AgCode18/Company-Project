import { Link } from "react-router-dom";

export default function RecentApplications({
  applications = [],
}) {
  return (
    <div className="rounded-xl bg-white shadow">
      <div className="border-b p-5">
        <h2 className="text-xl font-semibold">
          Recent Applications
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-5 py-3 text-left">
                Applicant
              </th>
              <th className="px-5 py-3 text-left">
                Job
              </th>
              <th className="px-5 py-3 text-left">
                Status
              </th>
              <th className="px-5 py-3 text-left">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {applications.map((application) => (
              <tr
                key={application.id}
                className="border-t"
              >
                <td className="px-5 py-4">
                  {application.fullName}
                </td>

                <td className="px-5 py-4">
                  {application.job?.title}
                </td>

                <td className="px-5 py-4">
                  {application.status}
                </td>

                <td className="px-5 py-4">
                  <Link
                    to={`/admin/applications/${application.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {applications.length === 0 && (
          <div className="p-6 text-center text-gray-500">
            No applications found.
          </div>
        )}
      </div>
    </div>
  );
}