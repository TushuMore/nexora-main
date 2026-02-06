"use client";

import { useEffect, useState } from "react";
import HeadingButton from "./HeadingButton";

const stats = [
  { label: "Projects", value: 48 },
  { label: "Clients", value: 22 },
  { label: "Years Experience", value: 3 },
];

export default function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts((prev) => {
          const updated = [...prev];
          if (updated[index] < stat.value) {
            updated[index] += 1;
          }
          return updated;
        });
      }, 30);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="w-full flex flex-col justify-center py-24">
      <HeadingButton Heading="Trusted Result" />

      {/* 🔥 Heading */}
      <div className="text-center mb-16">
        <h1
          className="
            text-4xl sm:text-5xl lg:text-6xl
            font-extrabold uppercase tracking-wider
            text-white
          "
        >
          By the Numbers
        </h1>

        <p className="mt-4 text-gray-400 text-lg">
          Our impact, measured through real results
        </p>
      </div>
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-3 gap-12 px-6 mx-auto">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="
              relative rounded-3xl border border-white/10
              bg-white/5 backdrop-blur-xl
              shadow-[0_0_40px_rgba(255,255,255,0.05)]
              p-10 text-center
              transition hover:scale-105
            "
          >
            <h2 className="text-6xl font-extrabold text-white">
              {counts[index]}
              <span className="text-pink-400">+</span>
            </h2>

            <p className="mt-4 text-lg tracking-wide text-gray-300 uppercase">
              {stat.label}
            </p>

            {/* soft glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-500/10 to-transparent pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
}
