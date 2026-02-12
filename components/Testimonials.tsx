"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type Testimonial = {
  _id: string;
  name: string;
  role: string;
  message: string;
};

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const res = await fetch("/api/testimonials");
        const data = await res.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Failed to load testimonials");
      } finally {
        setLoading(false);
      }
    }

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <section className="py-32 text-center text-gray-400">
        Loading testimonials...
      </section>
    );
  }

  if (!testimonials.length) {
    return null; // hide section if no testimonials
  }

  return (
    <section className="relative pb-32 px-6 md:px-20 overflow-hidden">
      
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
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          className="pb-14"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item._id} className="h-auto">
              <div className="group relative h-full min-h-65 flex flex-col justify-between rounded-3xl bg-white/[0.035] border border-white/10 backdrop-blur-xl p-8 transition-all duration-300 hover:border-white/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

                {/* Message */}
                <p className="relative z-10 text-gray-300 text-lg leading-relaxed">
                  “{item.message}”
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
