

export default function LogoUploader({ settings, onChange }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-6 text-xl font-semibold">Branding</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Logo */}

        <div>
          <label className="mb-2 block font-medium">Company Logo</label>

          {settings.logo && typeof settings.logo === "string" && (
            <img
              src={settings.logo}
              alt="Logo"
              className="mb-4 h-20 rounded border object-contain"
            />
          )}

          <input
            type="file"
            name="logo"
            accept="image/*"
            onChange={onChange}
            className="w-full rounded-lg border p-2"
          />
        </div>

        {/* Favicon */}

        <div>
          <label className="mb-2 block font-medium">Favicon</label>

          {settings.favicon && typeof settings.favicon === "string" && (
            <img
              src={settings.favicon}
              alt="Favicon"
              className="mb-4 h-12 w-12 rounded border object-contain"
            />
          )}

          <input
            type="file"
            name="favicon"
            accept="image/*"
            onChange={onChange}
            className="w-full rounded-lg border p-2"
          />
        </div>
      </div>
    </div>
  );
}

