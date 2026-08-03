import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Trash2,
  Mail,
  Phone,
  User,
  Calendar,
  FileText,
} from "lucide-react";

import {
  getContactById,
  deleteContact,
  updateReadStatus,
} from "../../../services/contact.service";

export default function ContactDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [contact, setContact] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContact();
  }, [id]);

  const fetchContact = async () => {
    try {
      setLoading(true);

      const { data } = await getContactById(id);

      setContact(data.data);

      if (!data.data.isRead) {
        await updateReadStatus(id, true);

        setContact({
          ...data.data,
          isRead: true,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Delete this enquiry?")) return;

    try {
      await deleteContact(id);

      navigate("/admin/contact");
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  if (!contact) {
    return <div className="p-10 text-center">Contact not found.</div>;
  }

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-gray-100"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <button
          onClick={handleDelete}
          className="flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700"
        >
          <Trash2 size={18} />
          Delete
        </button>
      </div>

      {/* Card */}

      <div className="rounded-xl bg-white p-8 shadow">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Contact Details</h1>

          <span
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              contact.isRead
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {contact.isRead ? "Read" : "Unread"}
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex items-center gap-3">
            <User size={20} />

            <div>
              <p className="text-gray-500">Name</p>

              <p className="font-semibold">{contact.name}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Mail size={20} />

            <div>
              <p className="text-gray-500">Email</p>

              <p className="font-semibold">{contact.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone size={20} />

            <div>
              <p className="text-gray-500">Phone</p>

              <p className="font-semibold">{contact.phone || "-"}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Calendar size={20} />

            <div>
              <p className="text-gray-500">Date</p>

              <p className="font-semibold">
                {new Date(contact.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center gap-2">
            <FileText size={18} />

            <h3 className="font-semibold">Subject</h3>
          </div>

          <p className="mt-2 rounded-lg bg-gray-50 p-4">
            {contact.subject || "-"}
          </p>
        </div>

        <div className="mt-8">
          <h3 className="mb-3 font-semibold">Message</h3>

          <div className="rounded-lg bg-gray-50 p-5 whitespace-pre-wrap leading-7">
            {contact.message}
          </div>
        </div>
      </div>
    </div>
  );
}
