'use client'

import React, { useState } from "react";
import HeadingButton from "./HeadingButton";
import FreeCallModal from "./FreeCallModal";
import Link from "next/link";


const CTASection = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative overflow-hidden py-32 px-6">
        
      {/* Glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/20 blur-[200px]" />
      </div>

      <div className="mx-auto max-w-5xl text-center">
        {/* Tag */}
        {/* <span className="inline-block mb-6 rounded-full border border-white/20 bg-white/5 px-6 py-2 text-sm text-gray-300">
          Ready to build something powerful?
        </span> */}
        <HeadingButton Heading="Ready to build something powerful?"/>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Let’s turn your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
            idea
          </span>{" "}
          into a high-impact product
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
          Nexora helps founders and brands design, build, and launch products
          that actually make an impact.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link href={'/client-project'} className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition">
            Start Your Project
          </Link>

         {/* CTA Section */}
      <button
        onClick={() => setOpen(true)}
        className="px-8 py-4 rounded-full border border-white/30 text-white"
      >
        Book a Free Call
      </button>

      <FreeCallModal open={open} setOpen={setOpen} />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
