import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Sparkles, Heart } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syazia Kamilah Putri | Portfolio",
  description: "Web Developer & UI/UX Designer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${inter.className} flex flex-col min-h-screen bg-[#C2F4C7]`}>
        {/* Navbar Sidebar Kiri */}
        <Navbar />

        {/* Konten Halaman (Diberi padding kiri md:pl-20 agar tidak tertutup sidebar) */}
        <div className="flex-grow">{children}</div>

        {/* Footer Global */}
        <footer className="w-full bg-white/90 backdrop-blur-md border-t-2 border-[#5CB88A]/30 py-6 px-4 text-center md:pl-20">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm font-bold text-slate-600">
            <div className="flex items-center gap-1.5">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-[#FF6B97] fill-[#FFC0D9]" />
              <span>by <strong className="text-[#5CB88A]">Syazia Kamilah Putri</strong></span>
            </div>
            <div className="text-slate-500 font-semibold">
              © 2026 • RPL Student & Developer 💻✨
            </div>
            <div className="flex items-center gap-2 text-[#FF6B97]">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Always Learning & Building</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );  
}