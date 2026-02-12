"use client";

import { useEffect, useState } from "react";
import { CalendarDays, IndianRupee, Clock } from "lucide-react";

export default function ClientProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      const res = await fetch(
        "/api/client-projects"
      );
      const data = await res.json();
      setProjects(data);
      setLoading(false);
    }

    fetchProjects();
  }, []);

  return (
    <section className="min-h-screen bg-black text-white p-8">
      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold">
          Client Projects
        </h1>
        <p className="text-gray-400 mt-1">
          All client submitted project requests
        </p>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-gray-400">
          Loading projects...
        </p>
      )}

      {/* NO DATA */}
      {!loading && projects.length === 0 && (
        <p className="text-gray-500">
          No client projects found.
        </p>
      )}

      {/* PROJECT LIST */}
      <div className="grid gap-6">
        {projects.map((project) => (
          <div
            key={project._id}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900 to-gray-800 p-6 hover:scale-[1.01] transition"
          >
            {/* TOP ROW */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  {project.name}
                </h2>
                <p className="text-indigo-400 text-sm mt-1">
                  {project.projectType}
                </p>
              </div>

              <div className="flex gap-3 flex-wrap">
                <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                  <IndianRupee size={14} />
                  {project.budget}
                </span>

                <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-400">
                  <Clock size={14} />
                  {project.timeline}
                </span>
              </div>
            </div>

            {/* DESCRIPTION */}
            {project.description && (
              <p className="text-gray-300 mt-4 text-sm leading-relaxed">
                {project.description}
              </p>
            )}

            {/* FOOTER */}
            <div className="flex items-center gap-2 mt-5 text-gray-400 text-xs">
              <CalendarDays size={14} />
              {new Date(
                project.createdAt
              ).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
