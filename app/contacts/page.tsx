"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Heart,
  Star,
  Flower2,
  ArrowLeft,
  Maximize2,
  Minus,
  X,
  Lock,
  Mail,
  Send,
  MessageCircle,
  Globe,
  MapPin,
  Smile,
  FileText,
  CheckCircle,
} from "lucide-react";

export default function ContactsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Set status jadi true (pesan terkirim & form "hilang" diganti pesan sukses)
    setIsSubmitted(true);
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
      <div className="max-w-4xl w-full bg-white/95 backdrop-blur-md rounded-[2.5rem] shadow-2xl border-4 border-[#5CB88A]/40 overflow-hidden flex flex-col items-center">
        {/* Top Control Bar Browser */}
        <div className="w-full bg-[#5CB88A] px-6 py-3 flex items-center justify-between border-b-2 border-[#5CB88A]/20">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-[#FF6B97] inline-block shadow-sm"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-[#FFC0D9] inline-block shadow-sm"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-[#C2F4C7] inline-block shadow-sm"></span>
          </div>

          <div className="hidden sm:flex items-center gap-2 bg-white/90 text-[#5CB88A] text-xs font-bold px-5 py-1.5 rounded-full shadow-inner border border-[#C2F4C7] w-1/2 justify-center">
            <Lock className="w-3 h-3 text-[#FF6B97]" />
            <span>https://syazia.dev/contacts</span>
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
            <Sparkles className="w-4 h-4" />
            <span>Let's Connect</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-[#5CB88A] tracking-tight">
            Get in Touch 💌
          </h1>
          <p className="text-slate-600 text-sm md:text-base font-semibold mt-2 max-w-lg">
            Punya pertanyaan, tawaran projek kolaborasi, atau sekadar ingin menyapa? Jangan ragu untuk mengirimkan pesan di bawah ini!
          </p>
        </div>
      </div>

      {/* MAIN CONTENT GRID (FORM & SOCIAL INFO) */}
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 gap-6 text-left">
        
        {/* KOLOM KIRI: INFO KONTAK, WHATSAPP, GITHUB & CV (5 Kolom) */}
        <div className="md:col-span-5 bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-[2.5rem] shadow-xl border-2 border-[#5CB88A]/30 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-black text-[#5CB88A] mb-4 flex items-center gap-2">
              <Smile className="w-5 h-5 text-[#FF6B97]" />
              <span>Reach Me Out</span>
            </h2>
            <p className="text-slate-600 text-xs md:text-sm font-semibold mb-6 leading-relaxed">
              Kamu juga bisa langsung menghubungiku melalui WhatsApp atau platform di bawah ini:
            </p>

            {/* List Kontak Info */}
            <div className="space-y-4">
              <a
                href="mailto:syazia91@email.com"
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#C2F4C7]/40 hover:bg-[#C2F4C7] transition-colors border border-[#5CB88A]/20 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#5CB88A] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-extrabold uppercase text-slate-500">Email Me</p>
                  <p className="text-xs md:text-sm font-black text-[#5CB88A]">syazia91@email.com</p>
                </div>
              </a>

              <a
                href="https://wa.me/6281242084050"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#FFC0D9]/30 hover:bg-[#FFC0D9]/60 transition-colors border border-[#FFC0D9] group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FF6B97] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-extrabold uppercase text-slate-500">WhatsApp</p>
                  <p className="text-xs md:text-sm font-black text-[#FF6B97]">+62 812-4208-4050</p>
                </div>
              </a>

              <a
                href="https://drive.google.com/file/d/1_udCLXG6CSRPWWzc0CoTbxCwAmLlGrEl/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#FFC0D9]/50 hover:bg-[#FFC0D9] transition-colors border-2 border-dashed border-[#FF6B97]/50 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FF6B97] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-extrabold uppercase text-slate-500">Curriculum Vitae</p>
                  <p className="text-xs md:text-sm font-black text-[#FF6B97]">View / Download CV ✨</p>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-slate-500 text-xs font-bold">
            <MapPin className="w-4 h-4 text-[#FF6B97]" />
            <span>Makassar, Sulawesi Selatan</span>
          </div>
        </div>

        {/* KOLOM KANAN: FORM KONTAK INTERAKTIF (7 Kolom) */}
        <div className="md:col-span-7 bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-[2.5rem] shadow-xl border-2 border-[#5CB88A]/30 flex flex-col justify-center">
          
          {isSubmitted ? (
            /* TAMPILAN KALO BERHASIL DISUBMIT (FORM "HILANG" DIGANTI PESAN SUKSES) */
            <div className="flex flex-col items-center justify-center text-center py-10 px-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#C2F4C7] text-[#5CB88A] flex items-center justify-center mb-4 shadow-md border-2 border-[#5CB88A]/40">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-[#5CB88A] mb-2">
                Pesan Terkirim! 🎉
              </h3>
              <p className="text-slate-600 text-xs md:text-sm font-semibold mb-6 max-w-xs">
                Makasih banyak sudah mampir dan mengirim pesan, Zia akan segera membacanya!
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: "", email: "", message: "" });
                }}
                className="px-6 py-2.5 bg-[#FFC0D9] text-[#FF6B97] font-extrabold text-xs md:text-sm rounded-full shadow-md border border-[#FF6B97]/30 hover:bg-[#FF6B97] hover:text-white transition-all"
              >
                Kirim Pesan Lainnya
              </button>
            </div>
          ) : (
            /* FORM UTAMA */
            <div>
              <h2 className="text-xl font-black text-[#5CB88A] mb-4 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-[#FF6B97]" />
                <span>Send a Message</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-extrabold text-slate-600 mb-1.5 text-left">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nama kamu..."
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 text-xs md:text-sm font-semibold focus:outline-none focus:border-[#5CB88A] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-600 mb-1.5 text-left">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@domain.com..."
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 text-xs md:text-sm font-semibold focus:outline-none focus:border-[#5CB88A] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-600 mb-1.5 text-left">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tulis pesan atau kolaborasi di sini..."
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 text-xs md:text-sm font-semibold focus:outline-none focus:border-[#5CB88A] transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#5CB88A] text-white font-extrabold text-sm rounded-2xl shadow-lg hover:bg-[#4fa379] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          )}

        </div>

      </div>

      {/* FOOTER NAV BUTTON */}
      <div className="mt-2">
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