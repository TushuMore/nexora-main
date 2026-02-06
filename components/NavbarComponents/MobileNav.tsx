"use client";

import { signOut, useSession } from "next-auth/react";
import { User, Shield } from "lucide-react";
import Link from "next/link";

const MobileProfileMenu = () => {
  const { data: session } = useSession();

  if (!session) return null;

  const firstName = session.user?.name?.split(" ")[0];

  return (
    <div className="mt-6 border-t border-white/10 pt-6 space-y-4">
      {/* USER INFO */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
          <User size={18} />
        </div>
        <div className="min-w-0">
          <p className="text-white font-medium leading-tight">
            {firstName}
          </p>
          <p className="text-xs text-gray-400 truncate">
            {session.user?.email}
          </p>
        </div>
      </div>

      {/* ADMIN LINK */}
      <Link
        href="/admin"
        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition text-white"
      >
        <Shield size={18} />
        <span className="text-sm font-medium">Admin Panel</span>
      </Link>

      {/* LOGOUT */}
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="w-full px-5 py-3 rounded-full bg-red-500/90 hover:bg-red-500 transition text-white font-medium"
      >
        Logout
      </button>
    </div>
  );
};

export default MobileProfileMenu;
