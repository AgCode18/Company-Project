import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, Trash2 } from "lucide-react";

import StatusBadge from "./StatusBadge";
import DeleteApplicationModal from "./DeleteApplicationModal";

export default function ApplicationTable({
  applications,
  loading,
  refresh,
}) {
  const [selectedApplication, setSelectedApplication] = useState(null);

  if (loading) {
    return (
      <div className="rounded-lg bg-white p-8 shadow">
        Loading...
      </div>
    );
  }

  if (applications.length === 0) {
    return (
      <div className="rounded-lg bg-white p-8 text-center shadow">
        No applications found.
      </div>
    );
  }

  return (
    <>
      <div className="overflow-hidden rounded-xl bg-white shadow">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">Applicant</th>
              <th className="px-4 py-3 text-left">Job</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Phone</th>
              <th className="px-4 py-3 text-center">Status</th>
              <th className="px-4 py-3 text-center">Resume</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((application) => (
              <tr key={application.id} className="border-t">
                <td className="px-4 py-3">
                  {application.fullName}
                </td>

                <td className="px-4 py-3">
                  {application.job?.title}
                </td>

                <td className="px-4 py-3">
                  {application.email}
                </td>

                <td className="px-4 py-3">
                  {application.phone}
                </td>

                <td className="px-4 py-3 text-center">
                  <StatusBadge status={application.status} />
                </td>

                <td className="px-4 py-3 text-center">
                  <a
                    href={`${import.meta.env.VITE_API_URL}/uploads/resumes/${application.resume}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Resume
                  </a>
                </td>

                <td className="px-4 py-3">
                  <div className="flex justify-center gap-3">
                    <Link
                      to={`/admin/applications/${application.id}`}
                    >
                      <Eye
                        size={18}
                        className="text-green-600"
                      />
                    </Link>

                    <button
                      onClick={() =>
                        setSelectedApplication(application)
                      }
                    >
                      <Trash2
                        size={18}
                        className="text-red-600"
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedApplication && (
        <DeleteApplicationModal
          application={selectedApplication}
          refresh={refresh}
          onClose={() =>
            setSelectedApplication(null)
          }
        />
      )}
    </>
  );
}