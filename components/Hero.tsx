"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatedNumber } from "./reusable/AnimateNumber";

export default function Hero() {
  const [projectCount, setProjectCount] = useState(0);
useEffect(() => {
  async function fetchCount() {
    try {
      const res = await fetch("/api/admin/stats");
      const data = await res.json();

      // 🔥 correct field
      setProjectCount(Number(data?.projects) || 0);

    } catch (error) {
      console.error("Failed to fetch project count");
      setProjectCount(0);
    }
  }

  fetchCount();
}, []);


  return (
    <section className="relative min-h-screen bg-gray-950 overflow-hidden">
      
      {/* Huge Background Text */}
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        text-[20vw] font-extrabold tracking-tight text-white/5 select-none">
        NEXORA
      </h1>

      {/* Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/20 blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/20 blur-[140px]" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex min-h-screen items-center justify-between px-10 md:px-24">
        
        {/* LEFT CONTENT */}
        <div className="max-w-3xl">
          <span className="inline-block mb-6 text-sm tracking-widest text-gray-400">
            DESIGN • DEVELOPMENT • BRANDING
          </span>

          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            We craft digital <br />
            experiences that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-500">
              elevate brands
            </span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg max-w-xl">
            Nexora is a modern web agency building high-impact websites,
            clean UI systems and scalable digital products.
          </p>

          <div className="mt-10 flex gap-6">
            <Link href={'/client-project'} className="px-8 py-3 rounded-lg bg-white text-gray-950 font-semibold hover:scale-105 transition">
              Start a Project
            </Link>
            <Link
              href={"/projects"}
              className="px-8 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition"
            >
              View Work
            </Link>
          </div>
        </div>

        {/* RIGHT STATS – PREMIUM */}
        <div className="hidden md:flex flex-col gap-14 items-end">

          <div className="relative text-right">
            <span className="absolute -right-6 top-2 h-full w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
            <AnimatedNumber value={projectCount} suffix="+" />
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-gray-400">
              Projects Done
            </p>
          </div>

          <div className="relative text-right">
            <span className="absolute -right-6 top-2 h-full w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
            <AnimatedNumber value={3} suffix="+" />
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-gray-400">
              Years Experience
            </p>
          </div>

          <div className="relative text-right">
            <span className="absolute -right-6 top-2 h-full w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
            <AnimatedNumber value={5} suffix="+" />
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-gray-400">
              Happy Clients
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
