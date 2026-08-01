export default function SearchBox({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search..."
      className="w-72 rounded-lg border px-4 py-2"
    />
  );
}
