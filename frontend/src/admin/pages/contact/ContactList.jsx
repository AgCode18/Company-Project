import { useEffect, useState } from "react";

import ContactTable from "./components/ContactTable";
import ContactFilters from "./components/ContactFilters";

import {
  getContacts,
  deleteContact,
  updateReadStatus,
} from "../../../services/contact.service";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);

  const [pagination, setPagination] = useState({
    totalPages: 1,
  });

  const [search, setSearch] = useState("");

  const [isRead, setIsRead] = useState("");

  useEffect(() => {
    fetchContacts();
  }, [page, search, isRead]);

  const fetchContacts = async () => {
    try {
      setLoading(true);

      const { data } = await getContacts({
        page,
        search,
        isRead,
      });

      setContacts(data.data);

      setPagination(data.pagination);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this enquiry?")) return;

    try {
      await deleteContact(id);

      fetchContacts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleReadStatus = async (id, value) => {
    try {
      await updateReadStatus(id, value);

      fetchContacts();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          Contact Enquiries
        </h1>

        <p className="text-gray-500">
          Manage enquiries received from the website.
        </p>
      </div>

      <ContactFilters
        search={search}
        setSearch={setSearch}
        isRead={isRead}
        setIsRead={setIsRead}
      />

      <ContactTable
        contacts={contacts}
        loading={loading}
        onDelete={handleDelete}
        onReadStatus={handleReadStatus}
      />

      {pagination.totalPages > 1 && (
        <div className="flex justify-center gap-3">

          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="rounded border px-4 py-2 disabled:opacity-50"
          >
            Previous
          </button>

          <span className="flex items-center px-3">
            {page} / {pagination.totalPages}
          </span>

          <button
            disabled={page === pagination.totalPages}
            onClick={() => setPage(page + 1)}
            className="rounded border px-4 py-2 disabled:opacity-50"
          >
            Next
          </button>

        </div>
      )}
    </div>
  );
}