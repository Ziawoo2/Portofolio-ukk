"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  FolderKanban,
  Mail,
  Sparkles,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Projects", href: "/projects", icon: FolderKanban },
  { name: "Contacts", href: "/contacts", icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center bg-[#5CB88A] p-3 rounded-full shadow-2xl border-2 border-[#C2F4C7]">
      {/* Icon Top Accent */}
      <div className="mb-4 text-[#FFC0D9] animate-pulse">
        <Sparkles className="w-5 h-5" />
      </div>

      {/* Nav Links List */}
      <nav className="flex flex-col gap-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`group relative p-3 rounded-full transition-all duration-200 flex items-center justify-center ${
                isActive
                  ? "bg-[#FFC0D9] text-[#FF6B97] shadow-md scale-110"
                  : "text-white hover:bg-[#C2F4C7]/30 hover:scale-105"
              }`}
            >
              <Icon className="w-5 h-5" />

              {/* Tooltip Label (muncul saat hover) */}
              <span className="absolute left-14 bg-white text-[#5CB88A] text-xs font-black px-3 py-1.5 rounded-full shadow-lg border border-[#C2F4C7] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Accent */}
      <div className="mt-4 w-2 h-2 rounded-full bg-[#C2F4C7]"></div>
    </aside>
  );
}