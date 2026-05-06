"use client";

import { Atom, BrainCircuit, CircleDot, Container, Database, Github, Hexagon, Shield, Smartphone, Zap } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

const technologies: Array<{
  label: string;
  icon: LucideIcon | "TS";
  color: string;
}> = [
  { label: "React", icon: Atom, color: "text-cyan-300" },
  { label: "Next.js", icon: CircleDot, color: "text-slate-100" },
  { label: "TypeScript", icon: "TS", color: "text-blue-300" },
  { label: "Node.js", icon: Hexagon, color: "text-lime-300" },
  { label: "FastAPI", icon: Zap, color: "text-teal-300" },
  { label: "PostgreSQL", icon: Database, color: "text-sky-300" },
  { label: "Docker", icon: Container, color: "text-blue-300" },
  { label: "GitHub", icon: Github, color: "text-slate-100" },
  { label: "Flutter", icon: Smartphone, color: "text-sky-300" },
  { label: "AI / ML", icon: BrainCircuit, color: "text-purple-300" },
  { label: "Cybersecurity", icon: Shield, color: "text-red-400" },
  { label: "Python", icon: Hexagon, color: "text-yellow-300" }
];

export default function TechStack() {
  return (
    <section id="tech-stack" aria-labelledby="tech-stack-title">
      <p className="section-kicker" id="tech-stack-title">
        Tech Stack
      </p>
      <div className="mt-4 grid grid-cols-3 gap-2 min-[480px]:gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-10">
        {technologies.map(({ label, icon, color }) => {
          const Icon = icon === "TS" ? null : icon;

          return (
            <motion.div
              key={label}
              className="group flex min-h-24 flex-col items-center justify-center rounded-lg border border-cyan-300/18 bg-white/[0.045] p-4 text-center shadow-inner-line transition hover:-translate-y-1 hover:border-cyan-300/45 hover:bg-cyan-300/[0.07] hover:shadow-glow"
            >
              {Icon ? (
                <Icon className={`h-10 w-10 ${color} drop-shadow-[0_0_14px_rgba(32,216,255,0.65)]`} />
              ) : (
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-500/80 text-lg font-black text-white shadow-glow">
                  TS
                </span>
              )}
              <span className="mt-3 text-sm font-semibold text-slate-100">{label}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
