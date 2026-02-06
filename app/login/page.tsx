"use client";

import { motion, easeOut } from "framer-motion";
import { Eye, EyeOff, Github, Chrome } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function LoginPage() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false, // IMPORTANT
    });

    setLoading(false);

    if (res?.error) {
      toast.error("Invalid email or password");
      return;
    }

    toast.success("Login successful 🚀");
    router.push("/");
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 text-white">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md bg-gray-900 border border-white/10 rounded-3xl p-10"
      >
        <h2 className="text-3xl font-semibold mb-2">Login</h2>
        <p className="text-gray-400 mb-8">
          Enter your credentials to continue
        </p>

        <form className="space-y-6" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email address"
            className="peer w-full bg-transparent border border-white/10 rounded-xl px-4 py-4 focus:border-pink-500 outline-none"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="relative">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              className="peer w-full bg-transparent border border-white/10 rounded-xl px-4 py-4 focus:border-pink-500 outline-none"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
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
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* OR */}
        <div className="my-8 flex items-center gap-4 text-gray-500 text-sm">
          <span className="flex-1 h-px bg-white/10" />
          OR
          <span className="flex-1 h-px bg-white/10" />
        </div>

        {/* SOCIAL LOGIN */}
        <div className="flex gap-4">
          <SocialBtn
            icon={Chrome}
            text="Google"
            onClick={() => signIn("google")}
          />
          <SocialBtn
            icon={Github}
            text="GitHub"
            onClick={() => signIn("github")}
          />
        </div>

        <p className="text-center text-gray-400 mt-8">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-pink-500 hover:underline">
            Sign up
          </Link>
        </p>
      </motion.div>
    </section>
  );
}

/* SOCIAL BUTTON */
function SocialBtn({ icon: Icon, text, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="flex-1 flex items-center justify-center gap-2 border border-white/10 rounded-full py-3 hover:border-pink-500/50 transition"
    >
      <Icon size={18} />
      {text}
    </button>
  );
}
