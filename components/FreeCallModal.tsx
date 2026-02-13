"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const FreeCallModal = ({ open, setOpen }: any) => {
  const { data: session } = useSession();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Check if user is logged in
    if (!session) {
      toast.error("Please login to book a call!");
      router.push("/login"); // optional: redirect to login page
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/book-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, userEmail: session.user?.email }),
      });

      if (!res.ok) throw new Error("Failed");

      toast.success("Call booked! We’ll contact you shortly 🚀");

      setForm({ name: "", phone: "", email: "", message: "" });
      setOpen(false);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-gray-950 p-8 shadow-2xl">
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X />
        </button>

        <h3 className="text-2xl font-semibold text-white">
          Book a Free Strategy Call
        </h3>
        <p className="mt-2 text-gray-400">
          Tell us about your idea. We’ll contact you shortly.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
            required
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
            required
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
            required
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            rows={4}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-white py-3 font-semibold text-black transition hover:scale-105 disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit & Book Call"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FreeCallModal;
