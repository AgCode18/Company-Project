export default function SEOForm({
  settings,
  onChange,
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">

      <h2 className="mb-6 text-xl font-semibold">
        SEO Settings
      </h2>

      {/* SEO Title */}

      <div className="mb-6">
        <label className="mb-2 block font-medium">
          SEO Title
        </label>

        <input
          type="text"
          name="seoTitle"
          value={settings.seoTitle}
          onChange={onChange}
          placeholder="Website SEO Title"
          className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* SEO Description */}

      <div className="mb-6">
        <label className="mb-2 block font-medium">
          SEO Description
        </label>

        <textarea
          rows={4}
          name="seoDescription"
          value={settings.seoDescription}
          onChange={onChange}
          placeholder="Write a short SEO description..."
          className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* SEO Keywords */}

      <div>
        <label className="mb-2 block font-medium">
          SEO Keywords
        </label>

        <input
          type="text"
          name="seoKeywords"
          value={settings.seoKeywords}
          onChange={onChange}
          placeholder="loan, finance, company, banking"
          className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <p className="mt-2 text-sm text-gray-500">
          Separate keywords using commas.
        </p>
      </div>

    </div>
  );
}