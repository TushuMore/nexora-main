import Image from "next/image";

export default function VisionTargets() {
  return (
    <section className="w-full py-28 flex justify-center">
      <div className="max-w-6xl w-full px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-wider">
            Vision & Targets
          </h1>
          <p className="mt-4 text-gray-400 text-lg">
            What drives us forward and what we aim to achieve
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Vision Card */}
          <div className="
            relative rounded-3xl overflow-hidden
            border border-white/20
            bg-white/5 backdrop-blur-xl
            shadow-[0_0_50px_rgba(255,255,255,0.06)]
            hover:scale-[1.02] transition
          ">
            <Image
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              alt="Vision"
              width={800}
              height={600}
              className="h-60 w-full object-cover opacity-80"
            />

            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Our Vision
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Our vision is to build digital experiences that go beyond
                aesthetics — products that are fast, scalable, and meaningful.
                At Nexora, we aim to empower brands with technology that drives
                real growth, trust, and long-term impact.
              </p>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent pointer-events-none" />
          </div>

          {/* Target Card */}
          <div className="
            relative rounded-3xl overflow-hidden
            border border-white/20
            bg-white/5 backdrop-blur-xl
            shadow-[0_0_50px_rgba(255,255,255,0.06)]
            hover:scale-[1.02] transition
          ">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
              alt="Targets"
              width={800}
              height={600}
              className="h-60 w-full object-cover opacity-80"
            />

            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Our Targets
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Our target is clear — deliver high-quality digital solutions,
                build long-term client partnerships, and constantly innovate.
                We focus on measurable results, modern tech stacks, and
                performance-driven design that helps businesses scale.
              </p>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
