export default function Pagination({
  page,

  totalPages,

  onPageChange,
}) {
  return (
    <div className="mt-6 flex items-center justify-end gap-3">
      <button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className="rounded border px-4 py-2"
      >
        Previous
      </button>

      <span>
        {page} / {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        className="rounded border px-4 py-2"
      >
        Next
      </button>
    </div>
  );
}
