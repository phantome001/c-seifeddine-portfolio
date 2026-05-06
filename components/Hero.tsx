"use client";

import {
  ArrowRight,
  Atom,
  BrainCircuit,
  Code2,
  Database,
  Download,
  Send,
  Sparkles,
  Star,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";

const techBadges = [
  { label: "React", icon: Atom, className: "left-2 top-[17%] xl:left-4" },
  { label: "Next.js", icon: Code2, className: "-left-2 top-[40%] xl:left-0" },
  { label: "FastAPI", icon: Zap, className: "left-4 top-[65%] xl:left-8" },
  { label: "PostgreSQL", icon: Database, className: "right-4 top-[27%] xl:right-8" },
  { label: "AI", icon: BrainCircuit, className: "right-8 top-[56%] xl:right-12" }
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative grid min-w-0 items-center gap-8 py-6 sm:gap-10 sm:py-10 lg:min-h-[690px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:py-16 xl:gap-20"
    >
      <motion.div className="relative z-10 min-w-0 max-w-3xl overflow-hidden">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/24 bg-cyan-400/7 px-4 py-2 text-xs font-semibold text-slate-100 shadow-glow">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(22,242,197,0.9)]" />
          Available for Full-Time & Freelance
        </div>

        <h1 className="max-w-full break-words text-[1.7rem] font-black leading-[1.1] text-white min-[375px]:text-[2rem] min-[420px]:text-[2.35rem] sm:text-5xl md:text-6xl lg:text-[4.85rem] lg:leading-[1.02] xl:text-[5.35rem]">
          <span className="block lg:inline">Full Stack</span>
          <span className="hidden lg:inline"> </span>
          <span className="block lg:inline">Developer</span>
          <span className="mt-2 block bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent">
            <span className="block min-[520px]:inline">Information</span>
            <span className="hidden min-[520px]:inline"> </span>
            <span className="block min-[520px]:inline">Systems</span>
            <span className="hidden min-[520px]:inline"> </span>
            <span className="block min-[520px]:inline">Engineer</span>
          </span>
        </h1>

        <p className="mt-6 max-w-full break-words text-base leading-8 text-slate-300 sm:max-w-2xl sm:text-lg">
          I design and build scalable web platforms, decision-ready dashboards, secure APIs, and AI-enhanced products
          that turn business requirements into reliable digital systems.
        </p>

        <div className="mt-6 grid w-full max-w-full grid-cols-1 gap-3 min-[480px]:grid-cols-2 min-[640px]:max-w-2xl min-[640px]:grid-cols-3 sm:mt-8">
          <a href="#projects" className="premium-button h-12 min-w-0 px-3 text-sm min-[420px]:px-5">
            View Projects
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
          <a href="#contact" className="ghost-button h-12 min-w-0 px-3 text-sm min-[420px]:px-5">
            Contact Me
            <Send className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="/seifeddine-chebel-cv.pdf"
            download
            className="ghost-button h-12 min-w-0 px-3 text-sm min-[420px]:px-5"
          >
            Download CV
            <Download className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-9 grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-3 min-[520px]:flex min-[520px]:flex-wrap min-[520px]:gap-5">
          <div className="flex -space-x-3">
            {["#d8b18a", "#c98c65", "#f0c79f", "#9ed1ff"].map((color, index) => (
              <span
                key={color}
                className="h-10 w-10 rounded-full border-2 border-ink-950 shadow-glow"
                style={{
                  background: `linear-gradient(145deg, ${color}, #0a172b ${index === 3 ? "70%" : "74%"})`
                }}
              />
            ))}
          </div>
          <p className="max-w-48 text-sm font-medium leading-5 text-slate-300">
            Trusted by teams building serious digital products
          </p>
          <span className="hidden h-8 w-px bg-white/15 sm:block" />
          <div className="col-span-2 flex items-center gap-2 text-sm min-[520px]:col-span-1">
            <span className="flex items-center gap-0.5 text-amber-300">
              {[1, 2, 3, 4, 5].map((item) => (
                <Star key={item} className="h-4 w-4 fill-current" aria-hidden="true" />
              ))}
            </span>
            <span className="font-semibold text-slate-200">5.0</span>
          </div>
        </div>
      </motion.div>

      <motion.div className="relative mx-auto flex min-h-[340px] min-w-0 max-w-full items-center justify-center overflow-hidden rounded-lg border border-cyan-300/10 bg-[linear-gradient(135deg,rgba(6,22,42,0.44),rgba(2,7,18,0.52))] px-4 py-6 shadow-[0_35px_110px_rgba(0,0,0,0.24)] min-[375px]:min-h-[380px] sm:min-h-[520px] sm:w-full sm:max-w-[650px] sm:py-8 lg:justify-end lg:overflow-visible lg:border-0 lg:bg-transparent lg:shadow-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_36%,rgba(32,216,255,0.18),transparent_21rem)]" />
        <div className="absolute h-[280px] w-[280px] rounded-full border border-cyan-300/25 shadow-[0_0_110px_rgba(32,216,255,0.22)] min-[375px]:h-[320px] min-[375px]:w-[320px] sm:h-[470px] sm:w-[470px]" />
        <div className="absolute h-[230px] w-[230px] rounded-full border border-purple-400/35 shadow-[0_0_95px_rgba(138,92,255,0.24)] min-[375px]:h-[270px] min-[375px]:w-[270px] sm:h-[405px] sm:w-[405px]" />
        <div className="absolute h-[170px] w-[170px] animate-pulseGlow rounded-full border border-cyan-300/60 min-[375px]:h-[210px] min-[375px]:w-[210px] sm:h-[320px] sm:w-[320px]" />
        <div className="absolute h-[1px] w-[78%] rotate-[-18deg] bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />
        <div className="absolute h-[1px] w-[70%] rotate-[24deg] bg-gradient-to-r from-transparent via-purple-300/25 to-transparent" />

        <div className="relative z-10 mr-4 flex h-[260px] w-[210px] flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-slate-950/60 shadow-[0_0_70px_rgba(22,136,255,0.15)] backdrop-blur-xl min-[375px]:h-[300px] min-[375px]:w-[240px] sm:mr-20 sm:h-[430px] sm:w-[340px] sm:rounded-[2.5rem] lg:mr-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(32,216,255,0.15),transparent_12rem)]" />
          <img 
            src="/logo.png" 
            alt="C.SeifEddine Logo" 
            className="relative z-20 mb-4 h-36 w-36 rounded-[1.2rem] border border-cyan-300/30 object-contain shadow-[0_0_45px_rgba(32,216,255,0.4)] min-[375px]:h-44 min-[375px]:w-44 sm:mb-8 sm:h-64 sm:w-64 sm:rounded-[1.5rem]" 
          />
          <span className="absolute bottom-8 z-30 rotate-[-4deg] text-lg font-black italic text-cyan-300 drop-shadow-[0_0_14px_rgba(32,216,255,0.82)] min-[375px]:bottom-10 min-[375px]:text-xl sm:bottom-16 sm:text-3xl">
            C.SeifEddine
          </span>
          <Sparkles className="absolute right-8 top-16 h-5 w-5 text-cyan-200 sm:right-10 sm:top-20" />
        </div>

        {techBadges.map(({ label, icon: Icon, className }, index) => (
          <motion.div
            key={label}
            animate={{ y: [0, index % 2 ? 9 : -9, 0] }}
            transition={{ repeat: Infinity, duration: 5 + index * 0.45, ease: "easeInOut" }}
            className={`absolute z-20 hidden items-center gap-3 rounded-lg border border-cyan-200/22 bg-slate-950/72 px-4 py-3 text-sm font-bold text-white shadow-glow backdrop-blur-xl sm:flex ${className}`}
          >
            <Icon className="h-6 w-6 text-cyan-300" aria-hidden="true" />
            {label}
          </motion.div>
        ))}

        <span className="absolute right-8 top-16 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(32,216,255,1)]" />
        <span className="absolute left-16 top-24 h-1 w-1 rounded-full bg-purple-300 shadow-[0_0_18px_rgba(138,92,255,1)]" />
        <span className="absolute bottom-24 right-20 h-1 w-1 rounded-full bg-cyan-100" />
      </motion.div>
    </section>
  );
}
