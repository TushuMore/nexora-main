"use client";

import { useEffect, useState } from "react";

type Contact = {
  _id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  createdAt: string;
};

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContacts() {
      const res = await fetch("/api/admin/contacts");
      const data = await res.json();
      setContacts(data);
      setLoading(false);
    }

    fetchContacts();
  }, []);

  return (
    <section className="p-8 text-white">
      {/* HEADER */}
      <div className="my-8">
        <h1 className="text-3xl font-semibold">
          Contact Messages
        </h1>
        <p className="text-gray-400 mt-1">
          Messages received from website contact form
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
                Subject
              </th>
              <th className="px-6 py-4 text-sm text-gray-400">
                Message
              </th>
              <th className="px-6 py-4 text-sm text-gray-400">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {loading && (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-6 text-center text-gray-400"
                >
                  Loading contacts...
                </td>
              </tr>
            )}

            {!loading && contacts.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-6 text-center text-gray-400"
                >
                  No messages found
                </td>
              </tr>
            )}

            {contacts.map((item) => (
              <tr
                key={item._id}
                className="border-b border-white/5 hover:bg-white/5 transition"
              >
                <td className="px-6 py-4 font-medium">
                  {item.name}
                </td>
                <td className="px-6 py-4 text-gray-300">
                  {item.email}
                </td>
                <td className="px-6 py-4 text-gray-300">
                  {item.subject || "—"}
                </td>
                <td className="px-6 py-4 text-gray-300 max-w-md truncate">
                  {item.message}
                </td>
                <td className="px-6 py-4 text-gray-400 text-sm">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
