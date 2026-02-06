import {
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-[80%] bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6 md:px-20 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white tracking-wide">
              Nexora
            </h2>
            <p className="text-gray-400 text-sm mt-2 max-w-xs">
              We design & build digital experiences that help brands move faster
              and look sharper.
            </p>
          </div>

          {/* Links */}
          {/* <div className="flex justify-center gap-8 text-sm">
            {["Services", "Process", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-400 hover:text-white transition group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-pink-400 to-purple-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div> */}

          {/* CTA + Social */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <a
              href="/contact"
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur border border-white/10 text-white text-sm hover:bg-white/10 transition"
            >
              Let&apos;s work together
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
              />
            </a>

            <div className="flex gap-3">
              {[Instagram, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:scale-110 transition"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-3">
          <span>© {new Date().getFullYear()} Nexora. All rights reserved.</span>
          <span className="opacity-70">
            Crafted with precision & passion ✨
          </span>
        </div>
      </div>
    </footer>
  );
}
