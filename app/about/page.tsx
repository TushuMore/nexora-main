import { Sparkles, Target, Layers, Rocket } from "lucide-react";

export default function AboutPage() {
  return (
    <section className=" text-white">
      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 pt-32 pb-24">
        <span className="text-sm text-gray-400">About Nexora</span>

        <h1 className="mt-4 text-5xl md:text-6xl font-bold leading-tight max-w-3xl">
  We design and build{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-500 to-pink-500 animate-gradient">
    digital experiences
  </span>{" "}
  that help brands grow.
</h1>


        <p className="mt-6 text-gray-400 max-w-2xl text-lg">
          Nexora is a creative web agency focused on crafting high-performance,
          visually striking, and user-friendly websites for startups, creators,
          and growing businesses.
        </p>
      </div>

      {/* STORY */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-24 border-t border-white/10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl text-pink-500 font-semibold">Our Story</h2>
            <p className="text-gray-400 mt-6 leading-relaxed ">
              Nexora was founded with a simple belief — websites should not just
              look good, they should perform, convert, and scale with your
              business.
              <br /><br />
              After working with multiple brands and creators, we realized that
              most businesses struggle with poor UI, slow websites, and unclear
              digital direction. That’s where Nexora steps in.
            </p>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl  hover:border-pink-500/40 p-10">
            <h3 className="text-xl font-medium mb-4">
              What we believe in
            </h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li>• Design with purpose, not decoration</li>
              <li>• Performance is as important as visuals</li>
              <li>• Simple UX beats complex layouts</li>
              <li>• Long-term partnerships over quick projects</li>
            </ul>
          </div>
        </div>
      </div>

      {/* MISSION / VISION */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-24">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To help brands grow online through clean design, smart UX, and modern web technologies.",
            },
            {
              icon: Rocket,
              title: "Our Vision",
              text: "To become a trusted digital partner for businesses worldwide.",
            },
            {
              icon: Sparkles,
              title: "Our Approach",
              text: "We combine strategy, design, and development to create impactful digital products.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl  hover:border-pink-500/40 p-8"
            >
              <item.icon className="w-6 h-6 mb-4 text-pink-500" />
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CAPABILITIES */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-24 border-t border-white/10">
        <h2 className="text-3xl font-semibold mb-12 text-pink-500">
          What We Do Best
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "UI/UX Design",
            "Website Development",
            "Next.js Applications",
            "Landing Pages",
            "Performance Optimization",
            "SEO-Friendly Architecture",
            "CMS & Admin Panels",
            "Brand-Focused Design",
          ].map((skill, i) => (
            <div
              key={i}
              className="rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl  hover:border-pink-500/40 px-5 py-4 text-sm text-gray-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* PROCESS SNAPSHOT */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-24">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Discover" },
            { step: "02", title: "Design" },
            { step: "03", title: "Develop" },
            { step: "04", title: "Deliver" },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl  hover:border-pink-500/40 p-6"
            >
              <span className="text-gray-500 text-sm">{item.step}</span>
              <h3 className="mt-2 text-lg font-semibold text-pink-500">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                A simple, transparent process focused on quality and results.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-white/10 py-24">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold">
            Let&apos;s build something meaningful together.
          </h2>
          <p className="text-gray-400 mt-4">
            Have a project in mind? We&apos;d love to hear about it.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 px-8 py-3 rounded-xl bg-white text-black font-medium hover:bg-pink-500 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
