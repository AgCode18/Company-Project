export default function ContactFilters({
  search,
  setSearch,
  isRead,
  setIsRead,
}) {
  return (
    <div className="rounded-xl bg-white p-5 shadow">
      <div className="grid gap-4 md:grid-cols-2">
        {/* Search */}

        <input
          type="text"
          placeholder="Search by name, email or subject..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Read Status */}

        <select
          value={isRead}
          onChange={(e) => setIsRead(e.target.value)}
          className="rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Enquiries</option>

          <option value="true">Read</option>

          <option value="false">Unread</option>
        </select>
      </div>
    </div>
  );
}