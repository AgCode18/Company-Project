export default function CTASectionForm({ homepage, onChange }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-6 text-xl font-semibold">Call To Action (CTA)</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* CTA Title */}

        <div>
          <label className="mb-2 block font-medium">CTA Title</label>

          <input
            type="text"
            name="ctaTitle"
            value={homepage.ctaTitle}
            onChange={onChange}
            placeholder="Ready to Get Started?"
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* CTA Button Text */}

        <div>
          <label className="mb-2 block font-medium">CTA Button Text</label>

          <input
            type="text"
            name="ctaButtonText"
            value={homepage.ctaButtonText}
            onChange={onChange}
            placeholder="Contact Us"
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* CTA Description */}

      <div className="mt-6">
        <label className="mb-2 block font-medium">CTA Description</label>

        <textarea
          rows={5}
          name="ctaDescription"
          value={homepage.ctaDescription}
          onChange={onChange}
          placeholder="Write a short description encouraging users to take action..."
          className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* CTA Button Link */}

      <div className="mt-6">
        <label className="mb-2 block font-medium">CTA Button Link</label>

        <input
          type="text"
          name="ctaButtonLink"
          value={homepage.ctaButtonLink}
          onChange={onChange}
          placeholder="/contact"
          className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}
