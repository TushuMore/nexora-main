import Hero from "@/components/Hero";
import LightRays from "@/components/LightRays";
import LogoLoop from "@/components/LogoLoop";
import StatResults from "@/components/StatResults";
import CircularText from "../components/CircularText";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import VisionTargets from "@/components/VisionTargets";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessOfWork from "@/components/ProcessOfWork";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import ProjectsSection from "@/components/ProjectSection";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

export default function Home() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* BACKGROUND LIGHT */}
      {/* <div className="pointer-events-none absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-left"
          raysColor="#ff00ae"
          raysSpeed={0.1}
          lightSpread={2}
          rayLength={5}
          followMouse={false}
          mouseInfluence={0}
          noiseAmount={0}
          distortion={0}
          pulsating={false}
          fadeDistance={0.4}
          saturation={0.8}
        />
      </div> */}

      <button
        className="
    fixed
    bottom-10 right-10
    z-50
  "
      >
        <CircularText
          text="CREATE*NOW*WITH*NEXORA*"
          onHover="speedUp"
          spinDuration={20}
          className="custom-class hidden sm:block"
        />
      </button>

      {/* CONTENT */}
      <div className="relative z-10">
        <Hero />
        {/* yaha baaki components freely add karo */}

        {/* <WorkedWith/> */}

        <div
          style={{
            height: "200px",
            position: "relative",
            overflow: "hidden",
            color: "#ffffff",
          }}
          className="mt-20 w-7xl mx-auto"
        >
          {/* Basic horizontal loop */}
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#020617"
            ariaLabel="Technology partners"
          />
        </div>

        {/* Results  */}
        {/* <StatResults /> */}

        {/* Projects  */}
        <ProjectsSection/>

        {/* Service  */}
        <Services/>

        {/* Vision Target  */}
        {/* <VisionTargets/> */}

        {/* Why choose us  */}
        <WhyChooseUs/>

        {/* Procces of work  */}
        <ProcessOfWork/>

          {/* Testimonials  */}
          <Testimonials/>

          {/* CTA  */}
          <CTASection/>

        {/* Above this all components should attatched  */}
      </div>
    </section>
  );
}
