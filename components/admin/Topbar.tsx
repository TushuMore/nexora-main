"use client";

import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";

export default function Topbar() {
  return (
    <header className="h-16 bg-gray-950 flex items-center justify-between px-6 pt-25">
      {/* Left */}
      <div>
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <p className="text-xs text-gray-400">
          Manage Nexora content here
        </p>
      </div>

      {/* Right */}
      <button
        onClick={() => signOut()}
        className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
      >
        <FiLogOut size={16} />
        Logout
      </button>
    </header>
  );
}
