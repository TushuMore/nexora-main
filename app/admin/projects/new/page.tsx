"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewProject() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    liveUrl: "",
    tech: "",
  });

  const submit = async () => {
    await fetch("/api/admin/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        tech: form.tech.split(","),
        status: "published",
      }),
    });

    router.push("/admin/projects");
  };

  return (
    <div className="p-8 text-white max-w-xl">
      <div className="my-10">
        <h1 className="text-3xl font-semibold">Add New Project</h1>
        <p className="text-gray-400 mt-2">
          Create and publish a new project for Nexora.
        </p>
      </div>

      <div className="space-y-6 bg-gray-900/60 border border-white/10 rounded-3xl p-8">
        <Field
          label="Project Title"
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <Field
          label="Image URL"
          onChange={(e) =>
            setForm({ ...form, image: e.target.value })
          }
        />

        <Field
          label="Live URL"
          onChange={(e) =>
            setForm({ ...form, liveUrl: e.target.value })
          }
        />

        <Field
          label="Tech Stack (comma separated)"
          onChange={(e) =>
            setForm({ ...form, tech: e.target.value })
          }
        />

        <div className="relative">
          <textarea
            rows={4}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
            className="peer w-full bg-transparent border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-pink-500 transition resize-none"
          />
          <label className="absolute left-4 top-4 text-gray-400 text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-pink-500 peer-focus:bg-gray-900 px-1 transition-all">
            Project Description
          </label>
        </div>

        <button
          onClick={submit}
          className="w-full mt-4 py-4 rounded-full font-medium
          bg-gradient-to-r from-pink-500 to-fuchsia-500
          hover:opacity-90 transition"
        >
          Save Project
        </button>
      </div>
    </div>
  );
}

/* Reusable Input */
function Field({
  label,
  onChange,
}: {
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        className="peer w-full bg-transparent border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-pink-500 transition"
      />
      <label className="absolute left-4 top-4 text-gray-400 text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-pink-500 peer-focus:bg-gray-900 px-1 transition-all">
        {label}
      </label>
    </div>
  );
}
