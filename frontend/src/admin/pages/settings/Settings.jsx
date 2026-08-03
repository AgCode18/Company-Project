import { useEffect, useState } from "react";

import CompanyForm from "./components/CompanyForm.jsx";
import SocialLinksForm from "./components/SocialLinksForm.jsx";
import SEOForm from "./components/SEOForm.jsx";

import {
  getWebsiteSettings,
  updateWebsiteSettings,
} from "../../../services/settings.service.js";

export default function Settings() {
  const [settings, setSettings] = useState({
    companyName: "",
    tagline: "",
    email: "",
    phone: "",
    whatsapp: "",
    address: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    youtube: "",
    footerText: "",
    seoTitle: "",
    seoDescription: "",
    seoKeywords: "",
    logo: null,
    favicon: null,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const { data } = await getWebsiteSettings();

      setSettings((prev) => ({
        ...prev,
        ...data.data,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setSettings((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData();

      Object.entries(settings).forEach(([key, value]) => {
        if (value !== null && value !== "") {
          formData.append(key, value);
        }
      });

      await updateWebsiteSettings(formData);

      alert("Settings updated successfully.");
    } catch (error) {
      console.error(error);

      alert("Failed to update settings.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Website Settings</h1>

        <p className="text-gray-500">
          Manage your website information and SEO settings.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <CompanyForm settings={settings} onChange={handleChange} />

        <SocialLinksForm settings={settings} onChange={handleChange} />

        <SEOForm settings={settings} onChange={handleChange} />

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-6 text-xl font-semibold">Branding</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-medium">Logo</label>

              <input
                type="file"
                name="logo"
                accept="image/*"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">Favicon</label>

              <input
                type="file"
                name="favicon"
                accept="image/*"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-blue-600 px-8 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save Settings"}
        </button>
      </form>
    </div>
  );
}
