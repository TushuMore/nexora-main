"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Startup Founder",
    feedback:
      "Nexora transformed our idea into a beautiful, high-performing product. The process was smooth and transparent.",
  },
  {
    name: "Priya Deshmukh",
    role: "Marketing Lead",
    feedback:
      "Clean design, fast delivery, and amazing communication. Highly recommended!",
  },
  {
    name: "Rahul Patil",
    role: "E-commerce Owner",
    feedback:
      "Our website speed and conversions improved significantly after working with Nexora.",
  },
  {
    name: "Sneha Kulkarni",
    role: "Product Manager",
    feedback:
      "They truly understand UI/UX and modern development. The results speak for themselves.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative pb-32 px-6 md:px-20 overflow-hidden">
      {/* Background Accent */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.12),transparent_65%)]" /> */}

      {/* Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-5xl font-bold text-white tracking-tight">
          What Clients Say
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          Trusted by founders, startups, and growing brands.
        </p>
      </div>

      {/* Swiper */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
        //   pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          className="pb-14"
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i} className="h-auto">
              {/* Card */}
              <div className=" group relative h-full min-h-65 flex flex-col justify-between rounded-3xl bg-white/[0.035] border border-white/10 backdrop-blur-xl p-8 transition-all duration-300  hover:border-white/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

                {/* Hover Glow */}
                {/* <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-pink-500 to-purple-500 opacity-0 blur-2xl transition group-hover:opacity-15" /> */}

                

                {/* Feedback */}
                <p className="relative z-10 text-gray-300 text-lg leading-relaxed">
                  “{item.feedback}”
                </p>

                {/* User Info */}
                <div className="relative z-10 mt-8">
                  <h4 className="text-white font-semibold text-lg">
                    {item.name}
                  </h4>
                  <span className="text-gray-400 text-sm">
                    {item.role}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
