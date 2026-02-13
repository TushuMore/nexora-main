"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const contactInfo = [
  { icon: Mail, label: "Email", value: "contact@example.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA" },
];

export default function ContactPage() {
  const { data: session } = useSession();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // ✅ Check if user is logged in
    if (!session) {
      toast.error("Please login to send a message!");
      router.push("/login"); // optional: redirect to login page
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, userEmail: session.user?.email }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      toast.success("Message sent successfully 🚀");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-28 text-white">
      {/* HERO */}
      <motion.div className="text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Let&apos;s <span className="text-pink-500">Talk</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Have a project, idea or collaboration in mind?
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* LEFT INFO */}
        <div className="space-y-6">
          {contactInfo.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-gray-900 border border-white/10 rounded-2xl p-6"
            >
              <item.icon className="w-6 h-6 text-pink-500" />
              <div>
                <p className="text-sm text-gray-400">{item.label}</p>
                <p>{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 border border-white/10 rounded-3xl p-10 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="Your Name"
              value={form.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setForm({ ...form, name: e.target.value })
              }
            />
            <Input
              label="Email Address"
              type="email"
              value={form.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setForm({ ...form, email: e.target.value })
              }
            />
          </div>

          <Input
            label="Subject"
            value={form.subject}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setForm({ ...form, subject: e.target.value })
            }
          />

          <textarea
            rows={5}
            value={form.message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setForm({ ...form, message: e.target.value })
            }
            className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-4"
            placeholder="Your Message"
          />

          <button
            disabled={loading}
            className="w-full bg-pink-500 rounded-full py-4 flex justify-center gap-2"
          >
            {loading ? "Sending..." : "Send Message"}
            <Send className="w-4 h-4" />
          </button>

          {success && (
            <p className="text-green-400 text-center">
              Message sent successfully 🚀
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

/* INPUT */
function Input({ label, type = "text", ...props }: any) {
  return (
    <input
      type={type}
      placeholder={label}
      className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-4"
      {...props}
    />
  );
}
