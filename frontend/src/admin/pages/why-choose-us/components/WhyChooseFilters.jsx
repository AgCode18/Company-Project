export default function WhyChooseFilters({
  search,
  setSearch,
  isActive,
  setIsActive,
}) {
  const handleReset = () => {
    setSearch("");
    setIsActive("");
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow">

      <div className="grid gap-4 md:grid-cols-3">

        {/* Search */}

        <div>
          <label className="mb-2 block font-medium">
            Search
          </label>

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search by title..."
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Status */}

        <div>
          <label className="mb-2 block font-medium">
            Status
          </label>

          <select
            value={isActive}
            onChange={(e) =>
              setIsActive(e.target.value)
            }
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">
              All
            </option>

            <option value="true">
              Active
            </option>

            <option value="false">
              Inactive
            </option>
          </select>
        </div>

        {/* Reset */}

        <div className="flex items-end">

          <button
            type="button"
            onClick={handleReset}
            className="w-full rounded-lg bg-gray-600 px-4 py-3 text-white hover:bg-gray-700"
          >
            Reset Filters
          </button>

        </div>

      </div>

    </div>
  );
}