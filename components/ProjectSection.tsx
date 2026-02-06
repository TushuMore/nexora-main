"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProjectCard from "@/components/ProjectCard";

import "swiper/css";
import "swiper/css/navigation";

type Project = {
  _id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
};

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch("/api/projects")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch");
      }
      return res.json();
    })
    .then((data) => {
      setProjects(data);
    })
    .catch((err) => {
      console.error("Fetch error:", err);
    })
    .finally(() => {
      setLoading(false);
    });
}, []);



  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl font-bold text-white tracking-tight">
            Selected Projects
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Work that speaks for itself.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-400">
            Loading projects...
          </p>
        )}

        {/* Empty state */}
        {!loading && projects.length === 0 && (
          <p className="text-center text-gray-400">
            No projects found.
          </p>
        )}

        {/* Slider */}
        {!loading && projects.length > 0 && (
          <Swiper
            modules={[Navigation]}
            loop
            spaceBetween={32}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project._id}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  image={project.image}
                  link={project.link}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}
