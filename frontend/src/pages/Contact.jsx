import { useState } from "react";
import { createContact } from "../services/contact.service";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setSuccess("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await createContact(form);

      setSuccess("Your enquiry has been submitted successfully.");

      setForm(initialForm);
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-4xl font-bold">
          Contact Us
        </h1>

        <p className="mb-8 text-gray-500">
          We'd love to hear from you. Fill out the form below and we'll get
          back to you as soon as possible.
        </p>

        {success && (
          <div className="mb-6 rounded-lg bg-green-100 p-4 text-green-700">
            {success}
          </div>
        )}

        {error && (
          <div className="mb-6 rounded-lg bg-red-100 p-4 text-red-700">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}