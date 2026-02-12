"use client";

import { useEffect, useState } from "react";

export default function TestimonialsSection() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <section className="py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          What Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item) => (
            <div
              key={item._id}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <p className="text-gray-300 mb-6">
                "{item.message}"
              </p>

              <h4 className="font-semibold">
                {item.name}
              </h4>

              <p className="text-sm text-gray-400">
                {item.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
