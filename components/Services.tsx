"use client";

import { ArrowRight, BrainCircuit, Globe2, ShieldCheck, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

const services: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Web & Mobile Development",
    description: "Custom front-end and back-end solutions using React, Next.js, and Flutter.",
    icon: Globe2
  },
  {
    title: "Cybersecurity & Admin",
    description: "Server administration, penetration testing, and security auditing (CompTIA Security+, eJPTv1).",
    icon: ShieldCheck
  },
  {
    title: "AI & Machine Learning",
    description: "Image classification, neural networks, and integrating practical AI intelligence.",
    icon: BrainCircuit
  },
  {
    title: "Freelance & Consulting",
    description: "Tailored software applications, academic support, and modern technology consulting.",
    icon: Briefcase
  }
];

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title">
      <p className="section-kicker" id="services-title">
        What I Do
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {services.map(({ title, description, icon: Icon }) => (
          <motion.article
            key={title}
            className="group glass-card flex items-center gap-4 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-glow"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-cyan-300/20 bg-gradient-to-br from-blue-600/70 to-purple-600/55 shadow-glow">
              <Icon className="h-7 w-7 text-white" aria-hidden="true" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-extrabold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
            </div>
            <ArrowRight className="h-5 w-5 shrink-0 text-cyan-300 transition group-hover:translate-x-1" aria-hidden="true" />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
