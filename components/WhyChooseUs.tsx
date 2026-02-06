import { Rocket, ShieldCheck, Sparkles, MessageCircle } from "lucide-react";

const reasons = [
  {
    title: "Conversion-Focused Design",
    desc: "We design with psychology, not just aesthetics.",
    icon: Sparkles,
  },
  {
    title: "Blazing Fast Performance",
    desc: "Next.js, Tailwind & modern stack for lightning speed.",
    icon: Rocket,
  },
  {
    title: "Secure & Scalable",
    desc: "Built to grow with your business securely.",
    icon: ShieldCheck,
  },
  {
    title: "Direct Founder Support",
    desc: "No middlemen. You talk directly with the creator.",
    icon: MessageCircle,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-32 px-6 md:px-20 overflow-hidden">
      
      {/* Glow Line */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-[75%] mt-80 bg-gradient-to-b from-pink-500 via-purple-500 to-transparent opacity-40" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-24">
        <h2 className="text-5xl font-bold text-white">
          Why Choose Nexora
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          We don&apos;t just build websites. We build digital experiences that convert.
        </p>
      </div>

      {/* Timeline Items */}
      <div className="relative max-w-5xl mx-auto space-y-16">
        {reasons.map((item, i) => {
          const Icon = item.icon;
          const isLeft = i % 2 === 0;

          return (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-center ${
                isLeft ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Card */}
              <div className="w-full md:w-1/2 p-6">
                <div className="relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 hover:border-pink-500/40 transition">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                      <Icon className="text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 mt-4">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Dot */}
              <div className="hidden md:block w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 border-4 border-black z-10" />

              {/* Empty Space */}
              <div className="hidden md:block w-1/2" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
