"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Heart,
  Star,
  Flower2,
  Code2,
  Paintbrush,
  Smile,
  ArrowLeft,
  Palette,
  ExternalLink,
  FolderKanban,
  ArrowRight,
  Quote,
  MessageSquareHeart,
  Award,
  CheckCircle2,
  Minus,
  Maximize2,
  X,
  Lock,
} from "lucide-react";

// Tipe Data Sertifikat
interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: string;
  image: string; // Gambar sertifikat
}

// Data Sertifikat / Achievement dengan Gambar
const certificates: Certificate[] = [
  {
    id: 1,
    title: "Developed A Website With WIX",
    issuer: "Coursera",
    year: "2026",
    image: "/sertif.jpg", // Ganti dengan path gambar sertifikatmu yang sebenarnya
  },
  {
    id: 2,
    title: "Graphic Design : Pop your LinkedIn with 3D effects",
    issuer: "Coursera",
    year: "2026",
    image: "/sertif2.jpg", // Ganti dengan path gambar sertifikatmu yang sebenarnya
  },
  {
    id: 3,
    title: "Build a website with wordpress",
    issuer: "Coursera",
    year: "2026",
    image: "/sertif1.jpg", // Ganti dengan path gambar sertifikatmu yang sebenarnya
  },
];

// Data 3 Projek Pilihan
const featuredProjects = [
  {
    id: 1,
    title: "Portofolio & Aplikasi Laravel",
    description:
      "Sistem aplikasi web berbasis Laravel dengan manajemen database interaktif dan struktur backend yang solid.",
    image: "/project1.jpg",
    tags: ["Laravel", "PHP", "MySQL"],
    link: "/projects",
  },
  {
    id: 2,
    title: "Interior Design: Nature-Like Vibes",
    description:
      "Konsep tata ruang estetik dan visual 3D bertema nuansa alam yang menenangkan dan sejuk.",
    image: "/project2.jpg",
    tags: ["UI/UX Design", "3D Building", "Nature Vibes"],
    link: "/projects",
  },
  {
    id: 3,
    title: "English Meeting Club Insta Feed",
    description:
      "Desain multi-panel feed Instagram dan materi publikasi visual kreatif untuk English Meeting Club.",
    image: "/project3.jpg",
    tags: ["Graphic Design", "Social Media", "Branding"],
    link: "/projects",
  },
];

// Data Testimoni Pesan Teman
const testimonials = [
  {
    id: 1,
    name: "Fatimah Azzahra",
    role: "UI/UX Partner (Stelk Studio)",
    text: "Zia itu kalo ngoding frontend rapi banget! Selalu bisa mewujudkan desain UI jadi komponen web interaktif yang imut dan responsif.",
  },
  {
    id: 2,
    name: "English Meeting Club",
    role: "Organization Team",
    text: "Feeds Instagram buatan Zia selalu aesthetic dan eye-catching! Visualnya bikin feeds kita kelihatan profesional dan hidup.",
  },
  {
    id: 3,
    name: "Classmate XI Desktop",
    role: "RPL Student",
    text: "Coding Next.js & Laravel-nya sat-set, plus punya selera desain yang estetik banget. Partner project yang super seru!",
  },
];

export default function AboutPage() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const openCertModal = (cert: Certificate) => {
    setSelectedCert(cert);
  };

  const closeCertModal = () => {
    setSelectedCert(null);
  };

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 text-center overflow-hidden relative py-12 gap-12"
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

      {/* CONTAINER BARIS ATAS (GRID 2 KOLOM: ABOUT ME & TESTIMONI) */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* KOLOM KIRI: CARD ABOUT ME */}
        <div className="lg:col-span-7 relative bg-white/95 backdrop-blur-md p-6 md:p-10 rounded-[2.5rem] shadow-2xl border-2 border-[#5CB88A]/30 flex flex-col items-center">
          
          <div className="absolute -top-5 -left-2 bg-white text-slate-700 text-xs md:text-sm font-extrabold px-4 py-2 rounded-full shadow-lg border border-slate-200 flex items-center gap-2 rotate-[-4deg]">
            <Smile className="w-4 h-4 text-[#FF6B97]" />
            <span>About Zia</span>
          </div>

          <div className="absolute -top-5 -right-2 bg-white text-slate-700 text-xs md:text-sm font-extrabold px-4 py-2 rounded-full shadow-lg border border-slate-200 flex items-center gap-2 rotate-[4deg]">
            <Sparkles className="w-4 h-4 text-[#5CB88A]" />
            <span>Get To Know Me</span>
          </div>

          {/* FOTO PROFIL KOTAK */}
          <div className="relative w-full mb-6 mt-4">
            <div className="w-full h-56 md:h-72 rounded-3xl p-2 bg-gradient-to-tr from-[#FFC0D9] via-[#5CB88A] to-[#FF6B97] shadow-xl">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100 border-2 border-white">
                <Image
                  src="/photo3.jpg"
                  alt="Foto Syazia"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <Sparkles className="absolute -bottom-2 -left-2 w-7 h-7 text-[#FF6B97] animate-spin-slow z-20" />
            <Star className="absolute top-2 -right-2 w-6 h-6 text-[#5CB88A] fill-[#C2F4C7] z-20" />

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-[#5CB88A] text-xs md:text-sm font-bold px-5 py-1.5 rounded-full shadow-md border border-[#5CB88A]/30 z-20">
              UI Enthusiast
            </div>
          </div>

          <div className="mt-2 text-center">
            <h1 className="text-3xl md:text-4xl font-black text-[#5CB88A] tracking-tight">
              Syazia Kamilah Putri
            </h1>
            <p className="text-[#FF6B97] font-bold text-sm md:text-base mt-1">
              Web Developer & UI/UX Designer
            </p>
          </div>

          <p className="text-slate-700 text-sm md:text-base leading-relaxed font-semibold mt-4 text-center">
            Hai! Aku Syazia Kamilah, siswi RPL yang gemar meracik kode web sekaligus dunia desain visual. Fokus utamaku ada di pengembangan web app menggunakan <span className="text-[#5CB88A] font-bold">Next.js</span>, <span className="text-[#5CB88A] font-bold">React</span>, dan <span className="text-[#5CB88A] font-bold">Laravel</span>. Selain dunia frontend & UI design, aku juga senang menyalurkan imajinasi lewat eksplorasi tata ruang 3D dan kreasi visual estetik!
          </p>

          <div className="w-full mt-6 pt-4 border-t border-[#5CB88A]/20">
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-[#FFC0D9]/50 text-[#FF6B97] font-extrabold text-xs px-3.5 py-1.5 rounded-full border border-[#FFC0D9] flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5" /> Next.js, React & Laravel
              </span>
              <span className="bg-[#FFC0D9]/50 text-[#FF6B97] font-extrabold text-xs px-3.5 py-1.5 rounded-full border border-[#FFC0D9] flex items-center gap-1.5">
                <Paintbrush className="w-3.5 h-3.5" /> 3D Building
              </span>
              <span className="bg-[#FFC0D9]/50 text-[#FF6B97] font-extrabold text-xs px-3.5 py-1.5 rounded-full border border-[#FFC0D9] flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5" /> UI/UX Design
              </span>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="/"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-[#5CB88A] text-white font-extrabold text-sm rounded-full shadow-lg hover:bg-[#4fa379] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Kembali ke Home</span>
            </Link>
          </div>
        </div>

        {/* KOLOM KANAN: TESTIMONI */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl border-2 border-[#5CB88A]/30 shadow-md flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquareHeart className="w-5 h-5 text-[#FF6B97]" />
              <h2 className="text-lg font-black text-[#5CB88A]">
                Words From Friends
              </h2>
            </div>
            <Sparkles className="w-4 h-4 text-[#FF6B97] animate-pulse" />
          </div>

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white/90 backdrop-blur-md p-5 rounded-3xl shadow-lg border-2 border-[#5CB88A]/20 text-left relative flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200"
            >
              <Quote className="absolute top-4 right-4 w-6 h-6 text-[#FFC0D9]/60 rotate-180" />
              <p className="text-slate-700 text-xs md:text-sm font-semibold leading-relaxed mb-4 italic">
                "{item.text}"
              </p>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <div className="w-9 h-9 rounded-full bg-[#C2F4C7] border border-[#5CB88A]/40 flex items-center justify-center text-[#5CB88A] font-black text-xs shadow-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xs md:text-sm font-extrabold text-[#5CB88A]">
                    {item.name}
                  </h3>
                  <p className="text-[10px] md:text-xs font-bold text-[#FF6B97]">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* SEKSI BARU: CERTIFICATES & CERTIFICATIONS */}
      <section className="max-w-6xl w-full flex flex-col items-center mt-2">
        <div className="flex items-center gap-2 mb-6 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full border border-[#5CB88A]/30 shadow-md">
          <Award className="w-5 h-5 text-[#FF6B97]" />
          <h2 className="text-xl md:text-2xl font-black text-[#5CB88A] tracking-tight">
            Certificates & Achievements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => openCertModal(cert)}
              className="group bg-white/90 backdrop-blur-md rounded-3xl p-5 shadow-xl border-2 border-[#5CB88A]/30 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 relative cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#FFC0D9]/50 border border-[#FF6B97]/30 flex items-center justify-center text-[#FF6B97] group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-extrabold text-[#5CB88A] bg-[#C2F4C7] px-3 py-1 rounded-full border border-[#5CB88A]/20">
                    {cert.year}
                  </span>
                </div>

                <h3 className="text-base font-black text-[#5CB88A] mb-1 leading-snug group-hover:text-[#4fa379] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-slate-500 text-xs font-bold mb-4 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B97]" />
                  <span>{cert.issuer}</span>
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-black text-[#FF6B97]">
                <span>Lihat Sertifikat ✨</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL POP-UP PREVIEW SERTIFIKAT */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-[2.5rem] max-w-xl w-full overflow-hidden shadow-2xl border-4 border-[#5CB88A] relative flex flex-col">
            
            {/* Control Bar Modal */}
            <div className="bg-[#5CB88A] px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-[#FF6B97]"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-[#FFC0D9]"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-[#C2F4C7]"></span>
              </div>
              <span className="text-white text-xs font-black truncate max-w-xs">
                {selectedCert.title}
              </span>
              <button
                onClick={closeCertModal}
                className="text-white hover:bg-white/20 p-1 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Modal */}
            <div className="p-6 text-left space-y-4">
              <div className="relative w-full h-64 md:h-72 rounded-2xl overflow-hidden bg-slate-900 border-2 border-[#5CB88A]/30 shadow-inner">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <span className="inline-block bg-[#FFC0D9]/50 text-[#FF6B97] text-xs font-black px-3 py-1 rounded-full mb-2 border border-[#FFC0D9]">
                  Issuer: {selectedCert.issuer} ({selectedCert.year})
                </span>
                <h3 className="text-xl font-black text-[#5CB88A]">
                  {selectedCert.title}
                </h3>
                <p className="text-slate-600 text-xs md:text-sm font-semibold mt-1">
                  Sertifikat resmi kelulusan kursus digital dan peningkatan keahlian.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PROYEK TERLAKSANA DI BAWAH */}
      <section className="max-w-6xl w-full flex flex-col items-center mt-2">
        <div className="flex items-center gap-2 mb-6 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full border border-[#5CB88A]/30 shadow-md">
          <FolderKanban className="w-5 h-5 text-[#FF6B97]" />
          <h2 className="text-xl md:text-2xl font-black text-[#5CB88A] tracking-tight">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white/90 backdrop-blur-md rounded-3xl p-5 shadow-xl border-2 border-[#5CB88A]/30 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                <div className="relative w-full h-40 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-lg font-black text-[#5CB88A] mb-1">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-xs md:text-sm font-semibold leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-extrabold bg-[#C2F4C7] text-[#5CB88A] px-2.5 py-1 rounded-full border border-[#5CB88A]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.link}
                  className="inline-flex items-center gap-1.5 text-xs font-black text-[#FF6B97] hover:text-[#e05580] transition-colors"
                >
                  <span>Lihat Detail</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-[#FFC0D9] text-[#FF6B97] hover:bg-[#FF6B97] hover:text-white font-extrabold rounded-full shadow-md border-2 border-[#FF6B97]/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Lihat Semua Projek</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </main>
  );
}