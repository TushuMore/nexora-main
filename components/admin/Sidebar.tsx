import Link from "next/link";

const links = [
  { name: "Dashboard", href: "/admin" },
  { name: "Projects", href: "/admin/projects" },
  { name: "Blogs", href: "/admin/blogs" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900/30 p-5">
      <h2 className="text-xl font-bold mb-6">Nexora Admin</h2>

      <nav className="space-y-3">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="block text-gray-300 hover:text-white"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
