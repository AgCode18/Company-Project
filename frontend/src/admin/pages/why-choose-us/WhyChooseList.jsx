import { useEffect, useState } from "react";

import {
  getWhyChooseList,
  deleteWhyChoose,
} from "../../../services/whyChoose.service";

import WhyChooseTable from "./components/WhyChooseTable";
import WhyChooseModal from "./components/WhyChooseModal";
import WhyChooseFilters from "./components/WhyChooseFilters";

export default function WhyChooseList() {
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");

  const [isActive, setIsActive] = useState("");

  const [page, setPage] = useState(1);

  const [pagination, setPagination] = useState({
    totalPages: 1,
  });

  const [openModal, setOpenModal] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchData();
  }, [page, search, isActive]);

  const fetchData = async () => {
    try {
      setLoading(true);

      const { data } = await getWhyChooseList({
        page,
        search,
        isActive,
      });

      setItems(data.data);
      setPagination(data.pagination);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setSelectedItem(null);
    setOpenModal(true);
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setOpenModal(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this item?");

    if (!confirmDelete) return;

    try {
      await deleteWhyChoose(id);

      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Why Choose Us</h1>

          <p className="text-gray-500">Manage homepage feature cards.</p>
        </div>

        <button
          onClick={handleAdd}
          className="rounded-lg bg-blue-600 px-5 py-2 text-white"
        >
          Add Item
        </button>
      </div>

      <WhyChooseFilters
        search={search}
        setSearch={setSearch}
        isActive={isActive}
        setIsActive={setIsActive}
      />

      <WhyChooseTable
        items={items}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {pagination.totalPages > 1 && (
        <div className="flex justify-center gap-3">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="rounded border px-4 py-2 disabled:opacity-40"
          >
            Previous
          </button>

          <span className="flex items-center px-4">
            {page} / {pagination.totalPages}
          </span>

          <button
            disabled={page === pagination.totalPages}
            onClick={() => setPage(page + 1)}
            className="rounded border px-4 py-2 disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}

      <WhyChooseModal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
          fetchData();
        }}
        item={selectedItem}
      />
    </div>
  );
}
