import { Link } from "react-router-dom";
import {
  Eye,
  Trash2,
  MailOpen,
  Mail,
} from "lucide-react";

export default function ContactTable({
  contacts = [],
  loading,
  onDelete,
  onReadStatus,
}) {
  if (loading) {
    return (
      <div className="rounded-xl bg-white p-10 text-center shadow">
        Loading enquiries...
      </div>
    );
  }

  if (contacts.length === 0) {
    return (
      <div className="rounded-xl bg-white p-10 text-center shadow">
        No enquiries found.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Subject</th>
              <th className="px-6 py-4 text-left">Date</th>
              <th className="px-6 py-4 text-center">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact) => (
              <tr
                key={contact.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="px-6 py-4 font-medium">
                  {contact.name}
                </td>

                <td className="px-6 py-4">
                  {contact.email}
                </td>

                <td className="px-6 py-4">
                  {contact.subject || "-"}
                </td>

                <td className="px-6 py-4">
                  {new Date(
                    contact.createdAt
                  ).toLocaleDateString()}
                </td>

                <td className="px-6 py-4 text-center">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      contact.isRead
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {contact.isRead
                      ? "Read"
                      : "Unread"}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-3">

                    <Link
                      to={`/admin/contact/${contact.id}`}
                      className="text-blue-600 hover:text-blue-800"
                      title="View"
                    >
                      <Eye size={18} />
                    </Link>

                    <button
                      onClick={() =>
                        onReadStatus(
                          contact.id,
                          !contact.isRead
                        )
                      }
                      className="text-green-600 hover:text-green-800"
                      title={
                        contact.isRead
                          ? "Mark Unread"
                          : "Mark Read"
                      }
                    >
                      {contact.isRead ? (
                        <Mail size={18} />
                      ) : (
                        <MailOpen size={18} />
                      )}
                    </button>

                    <button
                      onClick={() =>
                        onDelete(contact.id)
                      }
                      className="text-red-600 hover:text-red-800"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}