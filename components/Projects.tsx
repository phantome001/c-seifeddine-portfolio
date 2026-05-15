"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ExternalLink,
  Github,
  Leaf,
  LineChart,
  QrCode,
  Stethoscope,
  UsersRound
} from "lucide-react";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tags: string[];
  visual?: "denti" | "attend" | "plant";
  image?: string;
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "DentiDZ - Dental Booking SaaS",
    description: "A multi-tenant platform connecting clinics and patients in Algeria. Features an Arabic RTL dashboard, a Flutter mobile app, and a secure FastAPI backend.",
    tags: ["FastAPI", "Next.js", "Flutter", "Supabase", "Tailwind CSS"],
    image: "/dentidz-banner.png",
    github: "https://github.com/phantome001/DentiDZ.git",
    demo: "https://denti-dz.vercel.app/login"
  },
  {
    title: "Educational Center Management",
    description: "A comprehensive platform to seamlessly manage educational and administrative processes with high efficiency.",
    tags: ["React", "TypeScript", "Vite", "Shadcn/UI"],
    image: "/edu-center.jpg",
    github: "https://github.com/phantome001/educational-centre-management.git",
    demo: "https://educational-centre-management.vercel.app/home"
  },
  {
    title: "Surgeon Portfolio & AI Triage",
    description: "A premium medical portfolio with an AI-powered triage companion to streamline patient care and appointments.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Gemini AI"],
    image: "/surgeon-portfolio.jpg",
    github: "https://github.com/phantome001/surgeon-portfolio.git",
    demo: "https://surgeon-portfolio-chi.vercel.app/"
  },
  {
    title: "Fandom Hub",
    description: "Social entertainment hub for anime, movies, series, games, reviews, lists, polls, and fandom communities.",
    tags: ["React 19", "Vite", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion", "Lucide", "i18n"],
    image: "/fandom-hub.jpg",
    github: "https://github.com/phantome001",
    demo: "#"
  }
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="projects" aria-labelledby="projects-title">
      <div className="flex items-center justify-between gap-4">
        <p className="section-kicker" id="projects-title">
          Featured Projects
        </p>
        <a href="#contact" className="hidden items-center gap-2 text-sm font-bold text-cyan-300 hover:text-white sm:flex">
          View all projects
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            className="glass-card group flex min-h-full flex-col p-0 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/55 hover:shadow-[0_0_58px_rgba(32,216,255,0.22)]"
          >
            {project.image ? (
              <div 
                className="group relative flex h-44 w-full cursor-pointer items-center justify-center overflow-hidden rounded-t-lg border-b border-white/5 bg-slate-950/50 sm:h-56"
                onClick={() => setSelectedImage(project.image!)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-slate-900/10" />
                <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/60 p-1.5 backdrop-blur-md">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-300">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                </div>
              </div>
            ) : (
              <ProjectPreview type={project.visual!} />
            )}

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h3 className="text-xl font-black text-white">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/10 bg-white/[0.055] px-2.5 py-1 text-[0.72rem] font-bold text-cyan-100 shadow-inner-line transition group-hover:border-cyan-300/25"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <a
                  href={project.github || "https://github.com/phantome001"}
                  className="ghost-button h-10 px-4 text-sm"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                  <Github className="h-4 w-4" aria-hidden="true" />
                </a>
                {project.demo === "#" ? (
                  <button
                    disabled
                    className="premium-button h-10 px-4 text-sm opacity-50 cursor-not-allowed"
                  >
                    Live Demo
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </button>
                ) : (
                  <a
                    href={project.demo || "https://github.com/phantome001"}
                    className="premium-button h-10 px-4 text-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Lightbox Modal - rendered via Portal to avoid parent transform issues */}
      {mounted && selectedImage && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-[90vw] max-w-lg rounded-xl border border-white/10 bg-slate-950 shadow-2xl sm:w-[70vw] md:w-[50vw] lg:w-[40vw] lg:max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Project Preview Enlarged" 
              className="h-auto w-full rounded-xl object-contain" 
            />
            <button 
              className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-white shadow-lg transition-colors hover:bg-slate-800"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </motion.div>
        </div>,
        document.body
      )}
    </section>
  );
}

function ProjectPreview({ type }: { type: Project["visual"] }) {
  const isPlant = type === "plant";
  const isAttend = type === "attend";
  const title = isPlant ? "AI Diagnosis" : isAttend ? "Attendance Hub" : "Clinic Overview";
  const metricOne = isPlant ? "94.8%" : isAttend ? "1,284" : "312";
  const metricTwo = isPlant ? "18" : isAttend ? "97%" : "$18.4k";
  const metricThree = isPlant ? "6" : isAttend ? "42" : "86";

  return (
    <div className="relative h-56 overflow-hidden rounded-t-lg border-b border-cyan-300/15 bg-[linear-gradient(135deg,#071b33,#06101f_58%,#090c22)] p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_28%,rgba(32,216,255,0.18),transparent_13rem),radial-gradient(circle_at_8%_84%,rgba(138,92,255,0.14),transparent_11rem)]" />

      <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-slate-950/58 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
        <div className="flex h-9 items-center justify-between border-b border-white/10 bg-white/[0.045] px-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-300/70" />
            <span className="h-2 w-2 rounded-full bg-amber-300/70" />
            <span className="h-2 w-2 rounded-full bg-emerald-300/70" />
          </div>
          <span className="text-[0.65rem] font-bold text-slate-400">{title}</span>
          <span className="h-4 w-12 rounded bg-cyan-300/10" />
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-[0.28fr_0.72fr]">
          <aside className="border-r border-white/10 bg-black/20 p-3">
            <span className="mb-4 block h-5 w-20 rounded bg-cyan-300/18" />
            {[1, 2, 3, 4].map((item) => (
              <span key={item} className="mb-3 block h-2.5 rounded bg-slate-200/12" />
            ))}
          </aside>

          <div className="grid min-h-0 grid-rows-[auto_1fr] gap-3 p-3">
            <div className="grid grid-cols-3 gap-2">
              <Metric value={metricOne} label={isPlant ? "Accuracy" : isAttend ? "Check-ins" : "Patients"} />
              <Metric value={metricTwo} label={isPlant ? "Models" : isAttend ? "Verified" : "Revenue"} />
              <Metric value={metricThree} label={isPlant ? "Classes" : isAttend ? "Reports" : "Visits"} />
            </div>

            <div className="grid min-h-0 grid-cols-[1.05fr_0.95fr] gap-3">
              <div className="rounded-md border border-white/10 bg-white/[0.055] p-3">
                <div className="flex h-full items-end gap-1.5">
                  {[38, 62, 45, 78, 56, 72, 88].map((height, item) => (
                    <span
                      key={item}
                      className="flex-1 rounded-t bg-gradient-to-t from-blue-600 via-sky-400 to-cyan-200 shadow-[0_0_14px_rgba(32,216,255,0.25)]"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-md border border-white/10 bg-white/[0.055] p-3">
                {isPlant ? <PlantPanel /> : isAttend ? <AttendancePanel /> : <ClinicPanel />}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-cyan-300/20 bg-slate-950/70 px-3 py-1 text-[0.68rem] font-bold text-cyan-100 backdrop-blur-xl">
        {isAttend ? <CalendarCheck className="h-3.5 w-3.5" /> : isPlant ? <Leaf className="h-3.5 w-3.5" /> : <Stethoscope className="h-3.5 w-3.5" />}
        Live
      </div>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.055] px-2 py-2">
      <p className="text-sm font-black text-white">{value}</p>
      <p className="mt-1 truncate text-[0.62rem] font-semibold text-slate-400">{label}</p>
    </div>
  );
}

function ClinicPanel() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex items-center justify-between">
        <Stethoscope className="h-8 w-8 text-cyan-200" aria-hidden="true" />
        <CheckCircle2 className="h-5 w-5 text-emerald-300" aria-hidden="true" />
      </div>
      <div className="space-y-2">
        <span className="block h-2 rounded bg-cyan-300/25" />
        <span className="block h-2 w-4/5 rounded bg-white/14" />
        <span className="block h-2 w-2/3 rounded bg-white/10" />
      </div>
    </div>
  );
}

function AttendancePanel() {
  return (
    <div className="flex h-full items-center justify-center gap-4">
      <QrCode className="h-16 w-16 text-cyan-200" aria-hidden="true" />
      <UsersRound className="h-9 w-9 text-purple-200" aria-hidden="true" />
    </div>
  );
}

function PlantPanel() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2">
      <Leaf className="h-16 w-16 text-emerald-300 drop-shadow-[0_0_24px_rgba(74,222,128,0.55)]" aria-hidden="true" />
      <LineChart className="h-9 w-9 text-cyan-200" aria-hidden="true" />
    </div>
  );
}
