import { Search, X } from "lucide-react";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
  onClear,
}) {
  return (
    <div className="relative w-full">

      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-11 pr-12 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />

      {value && (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500"
        >
          <X size={18} />
        </button>
      )}

    </div>
  );
}