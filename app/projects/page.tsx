"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Heart,
  Star,
  Flower2,
  ArrowLeft,
  ExternalLink,
  FolderKanban,
  Maximize2,
  Minus,
  X,
  Lock,
} from "lucide-react";

// Data Semua Projek
const allProjects = [
  {
    id: 1,
    title: "Stelk Studio Portfolio Website",
    category: "Web Dev",
    description:
      "Website portofolio duo interaktif berbasis Next.js & React dengan fitur state management, modul like/komentar, dan halaman admin.",
    image: "/project1.jpg",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Interior Design: Nature-Like Vibes",
    category: "Interior Design",
    description:
      "Konsep tata ruang estetik dan visual 3D bertema nuansa alam yang menenangkan dan sejuk.",
    image: "/project2.jpg",
    tags: ["3D Building", "UI/UX Design", "Spatial Layout"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "English Meeting Club Insta Feed",
    description:
      "Desain multi-panel feed Instagram dan materi publikasi visual kreatif untuk English Meeting Club.",
    category: "Graphic Design",
    image: "/project3.jpg",
    tags: ["Graphic Design", "Social Media", "Branding"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Eco-Lore",
    category: "UI/UX",
    description:
      "EcoLore adalah aplikasi ramah lingkungan yang mengedukasi pengguna tentang isu lingkungan sekaligus menyediakan ruang komunitas bagi sesama pencinta lingkungan.",
    image: "/ecolore.jpg",
    tags: ["UI/UX", "Figma", "Eco"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,  
    title: "The Cozy Retreat",
    category: "Interior Design",
    description:
      "Desain ruang keluarga bergaya vintage dengan warna netral hangat, sentuhan floral, dan suasana yang nyaman serta menenangkan.",
    image: "/project5.png",
    tags: ["Vintage Style", "Residential Design", "Cozy Interior"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Brutalism House",
    category: "3D Build",
    description:
      "Desain rumah modern minimalis dengan bentuk geometris, material beton ekspos, dan vegetasi tropis yang menciptakan kesan natural sekaligus kontemporer.",
    image: "/project6.png",
    tags: ["3D Building", "Brutalism", "Nature"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectsPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-start p-4 md:p-8 text-center overflow-hidden relative py-12 gap-8"
      style={{
        backgroundColor: "#C2F4C7",
        backgroundImage: "radial-gradient(#5CB88A 1.8px, transparent 1.8px)",
        backgroundSize: "26px 26px",
      }}
    >
      {/* DEKORASI LUAR (Background Doodles) */}
      <div className="absolute top-10 left-10 text-[#FF6B97]/70 animate-bounce delay-100 hidden md:block">
        <Flower2 className="w-10 h-10 rotate-12" />
      </div>
      <div className="absolute bottom-12 left-16 text-[#5CB88A]/60 animate-pulse hidden md:block">
        <Star className="w-8 h-8 fill-[#5CB88A]/30 -rotate-12" />
      </div>
      <div className="absolute top-16 right-16 text-[#FFC0D9] animate-pulse hidden md:block">
        <Heart className="w-9 h-9 fill-[#FFC0D9] rotate-45" />
      </div>
      <div className="absolute bottom-16 right-12 text-[#5CB88A] animate-bounce delay-300 hidden md:block">
        <Sparkles className="w-10 h-10" />
      </div>

      {/* HEADER SECTION - BROWSER WINDOW STYLE */}
      <div className="max-w-6xl w-full bg-white/95 backdrop-blur-md rounded-[2.5rem] shadow-2xl border-4 border-[#5CB88A]/40 overflow-hidden flex flex-col items-center">
        {/* Top Control Bar Browser */}
        <div className="w-full bg-[#5CB88A] px-6 py-3 flex items-center justify-between border-b-2 border-[#5CB88A]/20">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-[#FF6B97] inline-block shadow-sm"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-[#FFC0D9] inline-block shadow-sm"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-[#C2F4C7] inline-block shadow-sm"></span>
          </div>

          <div className="hidden sm:flex items-center gap-2 bg-white/90 text-[#5CB88A] text-xs font-bold px-5 py-1.5 rounded-full shadow-inner border border-[#C2F4C7] w-1/2 justify-center">
            <Lock className="w-3 h-3 text-[#FF6B97]" />
            <span>https://syazia.dev/projects</span>
          </div>

          <div className="flex items-center gap-3 text-white/80">
            <Minus className="w-4 h-4 cursor-pointer hover:text-white" />
            <Maximize2 className="w-3.5 h-3.5 cursor-pointer hover:text-white" />
            <X className="w-4 h-4 cursor-pointer hover:text-white" />
          </div>
        </div>

        {/* Header Content */}
        <div className="p-8 md:p-10 w-full flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-[#FFC0D9]/50 text-[#FF6B97] px-4 py-1.5 rounded-full text-xs font-extrabold mb-3 border border-[#FFC0D9]">
            <FolderKanban className="w-4 h-4" />
            <span>My Works & Showcase</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-[#5CB88A] tracking-tight">
            My Creative Projects 🎨
          </h1>
          <p className="text-slate-600 text-sm md:text-base font-semibold mt-2 max-w-xl">
            Kumpulan hasil karya web development, antarmuka UI/UX, eksplorasi tata ruang 3D, hingga desain visual yang pernah aku buat!
          </p>
        </div>
      </div>

      {/* GRID PROJECTS SECTION */}
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {allProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white/90 backdrop-blur-md rounded-3xl p-5 shadow-xl border-2 border-[#5CB88A]/30 flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div>
                {/* Image Frame ala Browser Window */}
                <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-4 shadow-inner">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#FF6B97] text-[10px] font-black px-3 py-1 rounded-full shadow-md border border-[#FFC0D9]">
                    {project.category}
                  </span>
                </div>

                {/* Project Title & Description */}
                <h3 className="text-lg font-black text-[#5CB88A] mb-2 leading-snug group-hover:text-[#4fa379] transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-xs md:text-sm font-semibold leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-extrabold bg-[#C2F4C7] text-[#5CB88A] px-2.5 py-1 rounded-full border border-[#5CB88A]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <Link
                    href={project.demoUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-black text-[#FF6B97] hover:text-[#e05580] transition-colors"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                  <Sparkles className="w-4 h-4 text-[#5CB88A]/40 group-hover:text-[#5CB88A] transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER NAV BUTTON */}
      <div className="mt-4">
        <Link
          href="/"
          className="group relative inline-flex items-center gap-2 px-6 py-3 bg-[#5CB88A] text-white font-extrabold text-sm rounded-full shadow-lg hover:bg-[#4fa379] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Kembali ke Home</span>
        </Link>
      </div>
    </main>
  );
}