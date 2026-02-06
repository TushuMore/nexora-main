"use client";

import { useEffect, useState } from "react";

type User = {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "user";
};

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("/api/admin/users");
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    }

    fetchUsers();
  }, []);

  return (
    <section className="p-8 text-white">
      {/* HEADER */}
      <div className="my-8">
        <h1 className="text-3xl font-semibold">Users</h1>
        <p className="text-gray-400 mt-1">
          All registered users of Nexora
        </p>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-gray-900">
        <table className="w-full text-left">
          <thead className="bg-gray-950 border-b border-white/10">
            <tr>
              <th className="px-6 py-4 text-sm text-gray-400">
                Name
              </th>
              <th className="px-6 py-4 text-sm text-gray-400">
                Email
              </th>
              <th className="px-6 py-4 text-sm text-gray-400">
                Role
              </th>
            </tr>
          </thead>

          <tbody>
            {loading && (
              <tr>
                <td
                  colSpan={3}
                  className="px-6 py-6 text-center text-gray-400"
                >
                  Loading users...
                </td>
              </tr>
            )}

            {!loading && users.length === 0 && (
              <tr>
                <td
                  colSpan={3}
                  className="px-6 py-6 text-center text-gray-400"
                >
                  No users found
                </td>
              </tr>
            )}

            {users.map((user) => (
              <tr
                key={user._id}
                className="border-b border-white/5 hover:bg-white/5 transition"
              >
                <td className="px-6 py-4 font-medium">
                  {user.name}
                </td>
                <td className="px-6 py-4 text-gray-300">
                  {user.email}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.role === "admin"
                        ? "bg-pink-500/20 text-pink-400"
                        : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
