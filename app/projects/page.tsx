"use client";

import { useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard";

type Project = {
  _id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects"); // public projects API
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error("Failed to fetch projects", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="relative bg-gray-950 py-40 overflow-hidden">
      {/* LEFT VERTICAL BACKGROUND TEXT */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2">
        <h2 className="text-[20rem] font-extrabold text-white/5 rotate-[-90deg] tracking-tight select-none">
          WORK
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-20 grid lg:grid-cols-12 gap-16">
        {/* LEFT – Sticky Title */}
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <span className="text-sm tracking-[0.3em] uppercase text-gray-500">
              Our Work
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-bold text-white leading-tight">
              Crafted <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-500">
              digital <br /> experiences
            </span>
            </h1>

            <p className="mt-6 text-gray-400 text-lg max-w-sm">
              A selection of projects where strategy, design, and engineering
              meet to build meaningful digital products.
            </p>
          </div>
        </div>

        {/* RIGHT – Projects */}
        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-14">
          {loading && (
            <p className="text-gray-400 col-span-2 text-center">
              Loading projects...
            </p>
          )}

          {!loading && projects.length === 0 && (
            <p className="text-gray-400 col-span-2 text-center">
              No projects found.
            </p>
          )}

          {!loading &&
            projects.map((project, index) => (
              <div
                key={project._id}
                className={index % 2 === 0 ? "mt-24" : ""}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  image={project.image}
                  link={project.link}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
