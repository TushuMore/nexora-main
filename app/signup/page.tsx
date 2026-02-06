"use client";

import { motion, easeOut } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function SignupPage() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 1️⃣ REGISTER USER
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      setLoading(false);
      alert(data.message || "Registration failed");
      return;
    }

    // 2️⃣ AUTO LOGIN AFTER REGISTER
    const loginRes = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    setLoading(false);

    if (loginRes?.error) {
      alert("Account created but login failed");
      return;
    }

    // 3️⃣ REDIRECT TO HOME
    router.push("/");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-white">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md bg-gray-900 border border-white/10 rounded-3xl p-10"
      >
        <h2 className="text-3xl font-semibold mb-2">Create Account</h2>
        <p className="text-gray-400 mb-8">
          Join Nexora and start building smarter.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <Input
            label="Full Name"
            type="text"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <Input
            label="Email Address"
            type="email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <div className="relative">
            <input
              type={show ? "text" : "password"}
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              className="peer w-full bg-transparent border border-white/10 rounded-xl px-4 py-4 focus:border-pink-500 outline-none"
              required
            />
            <label className="label">Password</label>
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-4 top-4 text-gray-400"
            >
              {show ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button
            disabled={loading}
            className="w-full py-4 rounded-full bg-pink-500 hover:bg-pink-600 transition font-medium disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-gray-400 mt-8">
          Already have an account?{" "}
          <Link href="/login" className="text-pink-500 hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </section>
  );
}

/* INPUT COMPONENT */
function Input({
  label,
  type,
  value,
  onChange,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="peer w-full bg-transparent border border-white/10 rounded-xl px-4 py-4 focus:border-pink-500 outline-none"
        required
      />
      <label className="label">{label}</label>
    </div>
  );
}
