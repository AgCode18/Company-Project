export default function CategoryFilter({
  categories = [],
  value,
  onChange,
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
    >
      <option value="">All Categories</option>

      {categories.map((category) => (
        <option
          key={category.id}
          value={category.slug}
        >
          {category.name}
        </option>
      ))}
    </select>
  );
}