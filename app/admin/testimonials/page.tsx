"use client";

import { useState, useEffect } from "react";

export default function AdminTestimonials() {
  const [form, setForm] = useState({
    name: "",
    role: "",
    message: "",
  });

  const [testimonials, setTestimonials] = useState<any[]>([]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  async function fetchTestimonials() {
    const res = await fetch("/api/testimonials");
    const data = await res.json();
    setTestimonials(data);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/testimonials", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({ name: "", role: "", message: "" });
    fetchTestimonials();
  };

  return (
    <section className="p-8 text-white min-h-screen mt-10">
      
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">
          Testimonials
        </h1>
        <p className="text-gray-400 mt-2">
          Manage client feedback for Nexora
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        
        {/* ================= FORM CARD ================= */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl h-max">
          <h2 className="text-xl font-semibold mb-6">
            Add New Testimonial
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            <input
              placeholder="Client Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              required
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-pink-500 focus:outline-none transition"
            />

            <input
              placeholder="Role (Founder, CEO...)"
              value={form.role}
              onChange={(e) =>
                setForm({ ...form, role: e.target.value })
              }
              required
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-pink-500 focus:outline-none transition"
            />

            <textarea
              placeholder="Client Message"
              rows={4}
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              required
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-pink-500 focus:outline-none transition resize-none"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-pink-500 text-white font-semibold hover:scale-[1.02] transition"
            >
              Add Testimonial
            </button>
          </form>
        </div>

        {/* ================= LIST CARD ================= */}
        <div>
          <h2 className="text-xl font-semibold mb-6">
            Existing Testimonials
          </h2>

          <div className="space-y-6">
            {testimonials.length === 0 && (
              <p className="text-gray-500">
                No testimonials added yet.
              </p>
            )}

            {testimonials.map((t) => (
              <div
                key={t._id}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-white/30 transition"
              >
                <p className="text-gray-300 mb-4 leading-relaxed">
                  “{t.message}”
                </p>

                <div>
                  <h3 className="font-semibold text-white">
                    {t.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
