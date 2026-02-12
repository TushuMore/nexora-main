"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Users,
  FolderKanban,
  MessageSquare,
  Star,
  Clock,
  PhoneCall,
  Briefcase,
} from "lucide-react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    users: 0,
    projects: 0,
    contacts: 0,
    testimonials: 0,
    clientProjects: 0,
  });

  const [calls, setCalls] = useState<any[]>([]);

  /* ---------------- FETCH STATS ---------------- */
  useEffect(() => {
    async function fetchStats() {
      const res = await fetch("/api/admin/stats");
      const data = await res.json();
       console.log("STATS DATA:", data);
      setStats(data);
    }
    fetchStats();
  }, []);

  /* ---------------- FETCH CALLS ---------------- */
  useEffect(() => {
    fetch("/api/book-call")
      .then((res) => res.json())
      .then((data) => setCalls(data));
  }, []);

  /* ---------------- TIME CHECK ---------------- */
  const isUrgent = (createdAt: string) => {
    const diffHours =
      (Date.now() - new Date(createdAt).getTime()) /
      (1000 * 60 * 60);
    return diffHours > 24;
  };

  /* ---------------- MARK CONTACTED ---------------- */
  const markAsContacted = async (id: string) => {
    await fetch("/api/book-call", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    setCalls((prev) =>
      prev.map((call) =>
        call._id === id
          ? { ...call, status: "contacted" }
          : call
      )
    );
  };

  /* ---------------- DASHBOARD CARDS ---------------- */
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
      title: "Client Projects",
      value: stats.clientProjects,
      icon: Briefcase,
      href: "/admin/client-projects",
      color: "from-indigo-500 to-purple-600",
    },
    {
      title: "Testimonials",
      value: stats.testimonials,
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
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6">
        {cards.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gray-900 p-6 transition hover:scale-[1.03]"
          >
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

      {/* ================= BOOKED CALLS ================= */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">
          Booked Calls
        </h2>

        <div className="space-y-4">
          {calls.length === 0 && (
            <p className="text-gray-400">
              No calls booked yet.
            </p>
          )}

          {calls.map((call) => (
            <div
              key={call._id}
              className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 rounded-2xl border border-white/10 bg-gray-900 p-6"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-semibold">
                    {call.name}
                  </h3>

                  {call.status !== "contacted" && (
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        isUrgent(call.createdAt)
                          ? "bg-red-500/20 text-red-400"
                          : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {isUrgent(call.createdAt)
                        ? "Over 24 hrs"
                        : "Under 24 hrs"}
                    </span>
                  )}

                  {call.status === "contacted" && (
                    <span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-400">
                      Contacted
                    </span>
                  )}
                </div>

                <p className="text-gray-400 text-sm mt-1">
                  {call.email} · {call.phone}
                </p>

                {call.message && (
                  <p className="text-gray-300 mt-2 text-sm max-w-2xl">
                    {call.message}
                  </p>
                )}

                <div className="flex items-center gap-2 mt-3 text-gray-400 text-xs">
                  <Clock size={14} />
                  {new Date(
                    call.createdAt
                  ).toLocaleString()}
                </div>
              </div>

              {call.status !== "contacted" && (
                <button
                  onClick={() =>
                    markAsContacted(call._id)
                  }
                  className="flex items-center gap-2 rounded-full bg-white px-6 py-2 text-black text-sm font-medium hover:scale-105 transition"
                >
                  <PhoneCall size={16} />
                  Mark as Contacted
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
