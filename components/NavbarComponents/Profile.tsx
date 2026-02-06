"use client";

import { useEffect, useRef, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { User } from "lucide-react";

const ProfileMenu = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  if (!session) return null;

  const firstName = session.user?.name?.split(" ")[0];

  // close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-white"
      >
        <div className="w-9 h-9 rounded-full bg-pink-500 flex items-center justify-center">
          <User size={18} />
        </div>
        <span className="text-sm font-medium">{firstName}</span>
      </button>

      {/* Popup */}
      {open && (
        <div className="absolute right-0 mt-3 w-48 bg-gray-900 border border-white/10 rounded-xl shadow-xl overflow-hidden">
          <div className="px-4 py-3 text-sm text-gray-300">
            Signed in as
            <div className="font-medium text-white truncate">
              {session.user?.email}
            </div>
          </div>

          <div className="border-t border-white/10" />

          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="w-full text-left px-4 py-3 text-sm hover:bg-white/5 text-red-400"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
