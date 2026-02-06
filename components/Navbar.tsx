"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { DiMeteor } from "react-icons/di";
import { useSession } from "next-auth/react";

import ProfileMenu from "./NavbarComponents/Profile";
import MobileProfileMenu from "./NavbarComponents/MobileNav";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  const isAdmin = session?.user?.role === "admin";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-black/5 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="flex gap-2 items-center text-white text-2xl font-bold"
        >
          <DiMeteor className="text-[#ff00ae] text-4xl" />
          Nexora
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-8 text-[16px]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`relative transition ${
                    isActive
                      ? "text-white"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}

          {/* ADMIN – DESKTOP */}
          {isAdmin && (
            <li>
              <Link
                href="/admin"
                className={`relative transition ${
                  pathname.startsWith("/admin")
                    ? "text-white"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                Admin
                {pathname.startsWith("/admin") && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
                )}
              </Link>
            </li>
          )}
        </ul>

        {/* RIGHT SIDE – DESKTOP */}
        <div className="hidden md:flex items-center gap-4">
          {!session ? (
            <Link
              href="/login"
              className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition"
            >
              Signup
            </Link>
          ) : (
            <ProfileMenu />
          )}
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* MOBILE NAV */}
      {open && (
        <div className="md:hidden bg-gray-950 border-t border-white/10">
          <ul className="flex flex-col gap-6 px-6 py-6">
            {navLinks.map((link) => (
              <li key={link.name} onClick={() => setOpen(false)}>
                <Link
                  href={link.href}
                  className={`block text-lg ${
                    pathname === link.href
                      ? "text-white font-semibold"
                      : "text-gray-400"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* ADMIN – MOBILE */}
            {isAdmin && (
              <li onClick={() => setOpen(false)}>
                <Link
                  href="/admin"
                  className={`block text-lg ${
                    pathname.startsWith("/admin")
                      ? "text-white font-semibold"
                      : "text-gray-400"
                  }`}
                >
                  Admin
                </Link>
              </li>
            )}

            {!session ? (
              <Link
                href="/login"
                className="mt-4 px-5 py-2 rounded-full bg-white text-black font-medium text-center"
              >
                Signup
              </Link>
            ) : (
              <MobileProfileMenu />
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
