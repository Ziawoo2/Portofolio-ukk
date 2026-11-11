  import Image from "next/image";
  import Link from "next/link";
  import { Sparkles, Code2, Paintbrush, Heart, Star, Flower2, ArrowRight } from "lucide-react";

  export default function HomePage() {
    return (
      <main
        className="min-h-screen flex flex-col items-center justify-center p-8 text-left overflow-hidden relative"
        style={{
          backgroundColor: "#C2F4C7",
          backgroundImage: "radial-gradient(#5CB88A 1.8px, transparent 1.8px)",
          backgroundSize: "26px 26px",
        }}
      >
        {/* DEKORASI LUAR (Background elements) */}
        <div className="absolute top-12 left-12 text-[#FF6B97]/70 animate-bounce delay-100 hidden md:block">
          <Flower2 className="w-10 h-10 rotate-12" />
        </div>
        <div className="absolute bottom-16 left-20 text-[#5CB88A]/60 animate-pulse hidden md:block">
          <Star className="w-8 h-8 fill-[#5CB88A]/30 -rotate-12" />
        </div>
        <div className="absolute top-20 right-24 text-[#FFC0D9] animate-pulse hidden md:block">
          <Heart className="w-9 h-9 fill-[#FFC0D9] rotate-45" />
        </div>
        <div className="absolute bottom-20 right-16 text-[#5CB88A] animate-bounce delay-300 hidden md:block">
          <Sparkles className="w-10 h-10" />
        </div>

        {/* CARD UTAMA */}
        <div className="relative max-w-3xl w-full bg-white/90 backdrop-blur-md p-10 md:p-12 rounded-[2.5rem] shadow-2xl border-2 border-[#5CB88A]/30 flex flex-col md:flex-row items-center gap-10">
          
          {/* Floating Badges */}
          <div className="absolute -top-5 -right-2 bg-white text-slate-700 text-sm font-extrabold px-4 py-2 rounded-full shadow-lg border border-slate-200 flex items-center gap-2 rotate-[3deg] hover:scale-105 transition-transform">
            <Code2 className="w-4 h-4 text-[#5CB88A]" />
            <span>Web Dev</span>
          </div>

          <div className="absolute -top-4 right-36 bg-white text-slate-700 text-sm font-extrabold px-4 py-2 rounded-full shadow-lg border border-slate-200 flex items-center gap-2 rotate-[-4deg] hover:scale-105 transition-transform">
            <Paintbrush className="w-4 h-4 text-[#FF6B97]" />
            <span>UI & Design</span>
          </div>

          {/* FOTO PROFIL & DEKORASI CUTE (Kiri) */}
          <div className="relative flex-shrink-0">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 bg-[#FF6B97] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1">
              <Heart className="w-3 h-3 fill-white" />
              <span>Syazia</span>
            </div>

            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full p-2.5 bg-gradient-to-tr from-[#FFC0D9] via-[#5CB88A] to-[#FF6B97] shadow-xl">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-100 border-2 border-white">
                <Image
                  src="/pfp.jpeg"
                  alt="Foto Syazia"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <Sparkles className="absolute bottom-2 -left-2 w-7 h-7 text-[#FF6B97] animate-spin-slow" />
            <Star className="absolute top-2 -right-2 w-6 h-6 text-[#5CB88A] fill-[#C2F4C7]" />

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-[#5CB88A] text-xs font-bold px-4 py-1.5 rounded-full shadow-md border border-[#5CB88A]/30">
              Designer & Developer
            </div>
          </div>

          {/* BAGIAN TEKS & TOMBOL DI BAWAHNYA */}
          <div className="flex-1 text-center md:text-left mt-4 md:mt-0">
            
            {/* Judul Portofolio */}
            <div className="relative inline-block mb-4">
              <Star className="absolute -top-4 -right-6 w-6 h-6 text-[#FF6B97] fill-[#FFC0D9] animate-bounce" />
              <h1 className="text-4xl md:text-5xl font-black text-[#5CB88A] tracking-tight leading-tight">
                Welcome to <br className="hidden md:block" />
                my Portofolio!
              </h1>
            </div>

            {/* Teks Perkenalan (2 baris ke bawah seperti semula) */}
            <p className="text-slate-700 text-lg md:text-xl leading-relaxed font-semibold mb-6">
              Hi! my name is Syazia. people call me Zia tho for short, Check out my portofolio!
            </p>

            {/* Tombol My Projects diposisikan di bawah teks */}
            <div className="flex items-center justify-center md:justify-start">
              <Link
                href="/projects"
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 bg-[#5CB88A] text-white font-extrabold rounded-full shadow-lg hover:bg-[#4fa379] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>My Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </main>
    );
  }