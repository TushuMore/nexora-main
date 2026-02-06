import { Search, Palette, Code2, Rocket } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Discovery & Planning",
    desc: "Understanding your goals, users, and scope to define a clear roadmap.",
    icon: Search,
    gradient: "from-pink-500 to-purple-500",
  },
  {
    step: "02",
    title: "Design & Experience",
    desc: "Designing clean, intuitive, and conversion-focused user experiences.",
    icon: Palette,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    step: "03",
    title: "Development",
    desc: "Building fast, scalable, and secure solutions with modern tech.",
    icon: Code2,
    gradient: "from-orange-500 to-rose-500",
  },
  {
    step: "04",
    title: "Launch & Optimization",
    desc: "Launching, monitoring, and optimizing for long-term growth.",
    icon: Rocket,
    gradient: "from-emerald-500 to-lime-500",
  },
];

export default function Process() {
  return (
    <section className="relative pb-36 pt-10 px-6 md:px-20">

        {/* Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-[80%] bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-60" />
      
      {/* Subtle background accent */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_65%)]" /> */}

      {/* Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-24">
        <h2 className="text-5xl font-bold text-white tracking-tight">
          Our Process
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          A refined workflow designed to deliver clarity and results.
        </p>
      </div>

      {/* Process Cards */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-12">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div
              key={i}
              className="group relative flex gap-6 items-start rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-xl p-7 md:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            >
              {/* Hover Glow */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.gradient} opacity-0 blur-2xl transition group-hover:opacity-15`}
              />

              {/* Icon */}
              <div
                className={`relative z-10 flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}
              >
                <Icon className="text-white w-7 h-7" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <span className="text-xs text-gray-400 tracking-widest uppercase">
                  Step {step.step}
                </span>
                <h3 className="text-2xl font-semibold text-white mt-1">
                  {step.title}
                </h3>
                <p className="text-gray-400 mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
