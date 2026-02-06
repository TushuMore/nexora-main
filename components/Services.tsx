import {
  Code2,
  Palette,
  ShoppingBag,
  Zap,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "Fast, scalable and conversion-focused websites using modern tech.",
    icon: Code2,
    gradient: "from-pink-500 to-purple-500",
  },
  {
    title: "UI / UX Design",
    desc: "Pixel-perfect, user-friendly designs that feel premium.",
    icon: Palette,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "E-Commerce",
    desc: "High-performing online stores optimized for growth.",
    icon: ShoppingBag,
    gradient: "from-orange-500 to-rose-500",
  },
  {
    title: "Performance & SEO",
    desc: "Lightning-fast websites that rank and convert better.",
    icon: Zap,
    gradient: "from-emerald-500 to-lime-500",
  },
];

export default function Services() {
  return (
    <section className="relative pb-32 pt-10 px-6 md:px-20  overflow-hidden">

        {/* Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-[80%] bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-60" />
      
      {/* Background blur */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ff00ae]/20 blur-[120px]" /> */}

      {/* Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-5xl font-bold text-white">
          Our Expertise
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          We design, build and scale digital products with precision.
        </p>
      </div>

      {/* Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <div
              key={i}
              className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-3"
            >
              {/* Hover Gradient */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-15 blur-2xl transition`}
              />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}
              >
                <Icon className="text-white w-7 h-7" />
              </div>

              <h3 className="text-2xl font-semibold text-white relative z-10">
                {service.title}
              </h3>
              <p className="text-gray-400 mt-3 relative z-10">
                {service.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
