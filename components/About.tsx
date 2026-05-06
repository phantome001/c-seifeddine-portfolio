"use client";

import { Box, CodeXml, GraduationCap, Mail, MapPin, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type Stat = {
  value: string;
  label: string;
  icon: LucideIcon;
  tone: string;
};

const stats: Stat[] = [
  { value: "7+", label: "Years Experience", icon: GraduationCap, tone: "text-blue-300" },
  { value: "10+", label: "Completed Projects", icon: CodeXml, tone: "text-purple-300" },
  { value: "20+", label: "Technologies Mastered", icon: Box, tone: "text-violet-300" },
  { value: "Sec/Dev", label: "Core Focus Areas", icon: Target, tone: "text-fuchsia-300" }
];

export default function About() {
  return (
    <section id="about" className="glass-card p-4 sm:p-6 lg:p-7">
      <div className="grid gap-7 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
        <motion.div>
          <p className="section-kicker">About Me</p>
          <h2 className="mt-4 text-xl font-black text-white min-[375px]:text-2xl sm:text-3xl">Hello, I&apos;m C.SeifEddine.</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            I&apos;m a Full Stack Developer and Information Systems Engineer focused on building scalable, secure, and
            intelligent digital products. I turn complex requirements into reliable systems with clean code,
            thoughtful interfaces, and strong product thinking.
          </p>

          <div className="mt-7 grid gap-x-6 gap-y-4 text-sm text-slate-300 sm:grid-cols-2">
            <Info icon={MapPin} label="Location" value="Algeria" />
            <Info icon={Mail} label="Email" value="chebeleddine@gmail.com" />
            <Info icon={Zap} label="Availability" value="Open to work" />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map(({ value, label, icon: Icon, tone }) => (
            <motion.div
              key={label}
              className="group rounded-lg border border-cyan-300/18 bg-white/[0.045] p-5 text-center shadow-inner-line transition hover:-translate-y-1 hover:border-cyan-300/42 hover:bg-white/[0.07] hover:shadow-glow"
            >
              <Icon className={`mx-auto h-9 w-9 ${tone} drop-shadow-[0_0_14px_rgba(32,216,255,0.65)]`} />
              <p className="mt-4 text-2xl font-black text-white min-[375px]:text-3xl">{value}</p>
              <p className="mt-2 text-sm font-medium leading-5 text-slate-300">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Info({
  icon: Icon,
  label,
  value
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 h-4 w-4 text-cyan-300" aria-hidden="true" />
      <div className="min-w-0">
        <p className="text-xs text-slate-400">{label}</p>
        <p className="mt-1 break-words font-semibold text-white">{value}</p>
      </div>
    </div>
  );
}
