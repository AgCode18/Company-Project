export default function ImageUploader({
  homepage,
  onChange,
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">

      <h2 className="mb-6 text-xl font-semibold">
        Homepage Images
      </h2>

      <div className="grid gap-8 md:grid-cols-2">

        {/* Hero Background Image */}

        <div>
          <label className="mb-2 block font-medium">
            Hero Background Image
          </label>

          {homepage.heroBackgroundImage &&
            typeof homepage.heroBackgroundImage === "string" && (
              <img
                src={homepage.heroBackgroundImage}
                alt="Hero Background"
                className="mb-4 h-40 w-full rounded-lg border object-cover"
              />
            )}

          <input
            type="file"
            name="heroBackgroundImage"
            accept="image/*"
            onChange={onChange}
            className="w-full rounded-lg border p-2"
          />
        </div>

        {/* About Section Image */}

        <div>
          <label className="mb-2 block font-medium">
            About Section Image
          </label>

          {homepage.aboutImage &&
            typeof homepage.aboutImage === "string" && (
              <img
                src={homepage.aboutImage}
                alt="About Section"
                className="mb-4 h-40 w-full rounded-lg border object-cover"
              />
            )}

          <input
            type="file"
            name="aboutImage"
            accept="image/*"
            onChange={onChange}
            className="w-full rounded-lg border p-2"
          />
        </div>

      </div>

    </div>
  );
}