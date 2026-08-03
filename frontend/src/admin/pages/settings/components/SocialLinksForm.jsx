export default function SocialLinksForm({ settings, onChange }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-6 text-xl font-semibold">Social Media Links</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Facebook */}

        <div>
          <label className="mb-2 block font-medium">Facebook</label>

          <input
            type="url"
            name="facebook"
            value={settings.facebook}
            onChange={onChange}
            placeholder="https://facebook.com/yourpage"
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Instagram */}

        <div>
          <label className="mb-2 block font-medium">Instagram</label>

          <input
            type="url"
            name="instagram"
            value={settings.instagram}
            onChange={onChange}
            placeholder="https://instagram.com/yourpage"
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* LinkedIn */}

        <div>
          <label className="mb-2 block font-medium">LinkedIn</label>

          <input
            type="url"
            name="linkedin"
            value={settings.linkedin}
            onChange={onChange}
            placeholder="https://linkedin.com/company/yourcompany"
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Twitter / X */}

        <div>
          <label className="mb-2 block font-medium">Twitter (X)</label>

          <input
            type="url"
            name="twitter"
            value={settings.twitter}
            onChange={onChange}
            placeholder="https://x.com/yourcompany"
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* YouTube */}

        <div className="md:col-span-2">
          <label className="mb-2 block font-medium">YouTube</label>

          <input
            type="url"
            name="youtube"
            value={settings.youtube}
            onChange={onChange}
            placeholder="https://youtube.com/@yourcompany"
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
