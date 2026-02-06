import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  link,
}: ProjectCardProps) {
  return (
    <div className="group relative h-[500px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]">
      
      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-indigo-500/10 via-transparent to-fuchsia-500/10" />

      {/* Image */}
      <div className="relative h-[210px] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-[290px] p-6">
        <div>
          <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-indigo-400 transition">
            {title}
          </h3>

          <p className="mt-3 text-sm text-gray-400 leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* Tech Stack */}
          <div className="mt-5 flex flex-wrap gap-2">
            {tech.map((item, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur text-gray-300 hover:text-white hover:border-white/20 transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <a
          href={link}
          className="inline-flex items-center justify-between gap-2 text-sm text-white mt-6"
        >
          <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-indigo-400 after:transition-all after:duration-300 group-hover:after:w-full">
            View Project
          </span>

          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>
      </div>
    </div>
  );
}
