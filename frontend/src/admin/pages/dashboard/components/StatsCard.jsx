export default function StatsCard({
  title,
  value,
  icon,
  color = "bg-blue-500",
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow transition hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>
        </div>

        <div
          className={`${color} rounded-full p-4 text-white`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}