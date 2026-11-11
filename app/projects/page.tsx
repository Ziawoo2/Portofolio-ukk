"use client";

import { useState } from "react";
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Tipe Data Projek dengan Galeri
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

// Data Semua Projek beserta Galeri Fotonya
const allProjects: Project[] = [
  {
    id: 1,
    title: "Stelk Studio Portfolio Website",
    category: "Web Dev",
    description:
      "Website portofolio duo interaktif berbasis Next.js & React dengan fitur state management, modul like/komentar, dan halaman admin.",
    longDescription:
      "Platform web portofolio kolaboratif yang dirancang untuk menampilkan karya desain UI/UX dan rekayasa perangkat lunak dengan pendekatan antarmuka modern, interaktif, serta responsif.",
    image: "/project1.jpg",
    gallery: ["/project1.jpg", "/porto2.png"],
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
    longDescription:
      "Eksplorasi perancangan interior 3D dengan pendekatan elemen kayu, pencahayaan alami, dan palet warna bumi (earthy tones) untuk menciptakan suasana hunian yang sejuk dan menenangkan.",
    image: "/project2.jpg",
    gallery: ["/project2.jpg", "/natur.jpg", "/natur2.jpg"],
    tags: ["3D Building", "UI/UX Design", "Spatial Layout"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "English Meeting Club Insta Feed",
    description:
      "Desain multi-panel feed Instagram dan materi publikasi visual kreatif untuk English Meeting Club.",
    longDescription:
      "Pengembangan aset visual sosial media organisasi yang mencakup tata letak grafis terpadu, pemilihan tipografi, dan komposisi warna konsisten untuk meningkatkan <i>branding</i> klub.",
    category: "Graphic Design",
    image: "/project3.jpg",
    gallery: ["/project3.jpg", "/emc.jpg", "/emc2.jpg"],
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
    longDescription:
      "Perancangan antarmuka aplikasi seluler yang berfokus pada pengalaman pengguna (UX) ramah lingkungan, fitur edukasi interaktif, dan ruang kolaborasi komunitas hijau.",
    image: "/ecolore.jpg",
    gallery: ["/ecolore.jpg", "/ecolore.png"],
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
    longDescription:
      "Detail desain tata ruang hunian yang menggabungkan elemen dekoratif klasik vintage dengan kenyamanan modern, menghasilkan ruang santai yang hangat bagi keluarga.",
    image: "/project5.png",
    gallery: ["/project5.png", "/cozy1.jpg"],
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
    longDescription:
      "Eksplorasi arsitektur brutalism kontemporer menggunakan bentuk struktural tegas, material ekspos, serta integrasi lanskap hijau terbuka.",
    image: "/project6.png",
    gallery: ["/project6.png", "/brutilisim.png", "/brutilisim2.png"],
    tags: ["3D Building", "Brutalism", "Nature"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState<number>(0);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImgIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImgIndex(0);
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setCurrentImgIndex((prev) => (prev + 1) % selectedProject.gallery.length);
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setCurrentImgIndex((prev) =>
      prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
    );
  };

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
                  <button
                    onClick={() => openModal(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-black text-[#FF6B97] hover:text-[#e05580] transition-colors cursor-pointer"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                  <Sparkles className="w-4 h-4 text-[#5CB88A]/40 group-hover:text-[#5CB88A] transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL POP-UP GALERI PROJEK (BROWSER CARD STYLE) */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-[2.5rem] max-w-2xl w-full overflow-hidden shadow-2xl border-4 border-[#5CB88A] relative flex flex-col max-h-[90vh]">
            
            {/* Control Bar Modal */}
            <div className="bg-[#5CB88A] px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-[#FF6B97]"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-[#FFC0D9]"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-[#C2F4C7]"></span>
              </div>
              <span className="text-white text-xs font-black truncate max-w-xs">
                {selectedProject.title}
              </span>
              <button
                onClick={closeModal}
                className="text-white hover:bg-white/20 p-1 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Modal */}
            <div className="p-6 overflow-y-auto text-left space-y-4">
              
              {/* Slider Foto Galeri */}
              <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden bg-slate-900 border-2 border-[#5CB88A]/30 shadow-inner">
                <Image
                  src={selectedProject.gallery[currentImgIndex]}
                  alt={`${selectedProject.title} preview`}
                  fill
                  className="object-cover transition-all duration-300"
                />

                {/* Navigasi Slide Gambar */}
                {selectedProject.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#5CB88A] p-2 rounded-full shadow-md transition-all cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#5CB88A] p-2 rounded-full shadow-md transition-all cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Counter Gambar */}
                <span className="absolute bottom-3 right-3 bg-black/60 text-white font-extrabold text-[10px] px-3 py-1 rounded-full backdrop-blur-md">
                  {currentImgIndex + 1} / {selectedProject.gallery.length}
                </span>
              </div>

              {/* Thumbnails Foto Kecil */}
              {selectedProject.gallery.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {selectedProject.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImgIndex(idx)}
                      className={`relative w-16 h-12 rounded-xl overflow-hidden border-2 transition-all cursor-pointer flex-shrink-0 ${
                        currentImgIndex === idx
                          ? "border-[#FF6B97] scale-105 shadow-md"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image src={img} alt="thumbnail" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Info Detail Projek */}
              <div>
                <span className="inline-block bg-[#FFC0D9]/50 text-[#FF6B97] text-xs font-black px-3 py-1 rounded-full mb-2 border border-[#FFC0D9]">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl font-black text-[#5CB88A]">
                  {selectedProject.title}
                </h3>
                <p className="text-slate-600 text-xs md:text-sm font-semibold mt-2 leading-relaxed">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {selectedProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#C2F4C7] text-[#5CB88A] font-extrabold text-[10px] px-3 py-1 rounded-xl border border-[#5CB88A]/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Aksi Link Demo / GitHub */}
              <div className="pt-3 flex gap-3">
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#5CB88A] text-white font-black text-xs rounded-full shadow-md hover:bg-[#4fa379] transition-all"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

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