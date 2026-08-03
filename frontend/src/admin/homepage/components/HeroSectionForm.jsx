export default function HeroSectionForm({ homepage, onChange }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-6 text-xl font-semibold">Hero Section</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Hero Title */}

        <div>
          <label className="mb-2 block font-medium">Hero Title</label>

          <input
            type="text"
            name="heroTitle"
            value={homepage.heroTitle}
            onChange={onChange}
            placeholder="Welcome to Our Company"
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Hero Button Text */}

        <div>
          <label className="mb-2 block font-medium">Hero Button Text</label>

          <input
            type="text"
            name="heroButtonText"
            value={homepage.heroButtonText}
            onChange={onChange}
            placeholder="Get Started"
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Hero Subtitle */}

      <div className="mt-6">
        <label className="mb-2 block font-medium">Hero Subtitle</label>

        <textarea
          rows={4}
          name="heroSubtitle"
          value={homepage.heroSubtitle}
          onChange={onChange}
          placeholder="Write a short introduction about your company..."
          className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Hero Button Link */}

      <div className="mt-6">
        <label className="mb-2 block font-medium">Hero Button Link</label>

        <input
          type="text"
          name="heroButtonLink"
          value={homepage.heroButtonLink}
          onChange={onChange}
          placeholder="/contact"
          className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}
