export default function AboutSectionForm({ homepage, onChange }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-6 text-xl font-semibold">About Section</h2>

      {/* About Title */}

      <div className="mb-6">
        <label className="mb-2 block font-medium">About Title</label>

        <input
          type="text"
          name="aboutTitle"
          value={homepage.aboutTitle}
          onChange={onChange}
          placeholder="About Our Company"
          className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* About Description */}

      <div>
        <label className="mb-2 block font-medium">About Description</label>

        <textarea
          rows={6}
          name="aboutDescription"
          value={homepage.aboutDescription}
          onChange={onChange}
          placeholder="Write a short description about your company..."
          className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}
