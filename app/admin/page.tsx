"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Users,
  FolderKanban,
  MessageSquare,
  Star,
} from "lucide-react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    users: 0,
    projects: 0,
    contacts: 0,
  });

  useEffect(() => {
    async function fetchStats() {
      const res = await fetch("/api/admin/stats");
      const data = await res.json();
      setStats(data);
    }
    fetchStats();
  }, []);

  const cards = [
    {
      title: "Users",
      value: stats.users,
      icon: Users,
      href: "/admin/users",
      color: "from-pink-500 to-purple-500",
    },
    {
      title: "Projects",
      value: stats.projects,
      icon: FolderKanban,
      href: "/admin/projects",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Testimonials",
      value: 12, // ❌ DB nahi
      icon: Star,
      href: "/admin/testimonials",
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Contacts",
      value: stats.contacts,
      icon: MessageSquare,
      href: "/admin/contacts",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="p-8 text-white">
      {/* HEADER */}
      <div className="my-8">
        <h1 className="text-3xl font-semibold">
          Admin Dashboard
        </h1>
        <p className="text-gray-400 mt-1">
          Manage Nexora from one place
        </p>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gray-900 p-6 transition hover:scale-[1.03]"
          >
            {/* Gradient glow */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-gradient-to-br ${item.color}`}
            />

            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">
                  {item.title}
                </p>
                <h2 className="text-4xl font-bold mt-2">
                  {item.value}
                </h2>
              </div>

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${item.color}`}
              >
                <item.icon size={22} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
