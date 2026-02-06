"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Project = {
  _id: string;
  title: string;
  description: string;
  status: "draft" | "published";
  tech: string[];
  image?: string;
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/admin/projects")
      .then((res) => res.json())
      .then(setProjects);
  }, []);

  return (
    <div className="p-8 text-white">
      {/* HEADER */}
      <div className="flex justify-between items-center my-8">
        <div>
          <h1 className="text-3xl font-semibold">Projects</h1>
          <p className="text-gray-400 text-sm">
            Manage all Nexora projects
          </p>
        </div>

        <Link
          href="/admin/projects/new"
          className="px-5 py-2 bg-pink-500 hover:bg-pink-600 transition rounded-full font-medium"
        >
          + New Project
        </Link>
      </div>

      {/* LIST */}
      <div className="space-y-4">
        {projects.map((p) => (
          <div
            key={p._id}
            className="bg-gray-900 border border-white/10 rounded-2xl p-5 hover:border-pink-500/40 transition"
          >
            <div className="flex items-start justify-between gap-6">
              {/* LEFT */}
              <div className="flex gap-4">
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-20 h-20 rounded-xl object-cover border border-white/10"
                  />
                )}

                <div>
                  <h2 className="text-lg font-semibold">
                    {p.title}
                  </h2>

                  <p className="text-sm text-gray-400 mt-1 max-w-xl">
                    {p.description}
                  </p>

                  {/* TECH */}
                  {p.tech?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {p.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col items-end gap-3">
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${
                    p.status === "published"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {p.status}
                </span>

                <Link
                  href={`/admin/projects/${p._id}`}
                  className="text-pink-400 text-sm hover:underline"
                >
                  Edit →
                </Link>
              </div>
            </div>
          </div>
        ))}

        {projects.length === 0 && (
          <div className="text-gray-400 text-center py-20">
            No projects found
          </div>
        )}
      </div>
    </div>
  );
}
