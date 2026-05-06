"use client";

import { Menu, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const navItems = ["Home", "About", "Skills", "Projects", "Services", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="sticky top-0 z-50 min-w-0 border-b border-white/10 bg-ink-950/78 backdrop-blur-2xl"
    >
      <nav className="mx-auto flex min-w-0 max-w-[1260px] items-center justify-between gap-2 px-3 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="C.SeifEddine home">
          <img src="/logo.png" alt="C.SeifEddine Logo" className="h-11 w-11 rounded-lg border border-cyan-300/20 bg-cyan-400/8 shadow-glow object-cover" />
          <span className="hidden text-base font-extrabold text-white min-[520px]:inline sm:text-lg">C.SeifEddine</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item === "Skills" ? "tech-stack" : item.toLowerCase()}`}
              className="group relative text-sm font-semibold text-slate-200 transition hover:text-white"
            >
              {item}
              <span
                className={`absolute -bottom-7 left-0 h-0.5 rounded-full bg-cyan-300 transition-all group-hover:w-full ${
                  item === "Home" ? "w-full shadow-[0_0_16px_rgba(32,216,255,0.9)]" : "w-0"
                }`}
              />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#contact" className="premium-button h-10 px-4 text-sm min-[420px]:px-5">
            Hire Me
            <Send className="hidden h-4 w-4 min-[420px]:block" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white md:hidden"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-ink-950/94 px-4 py-4 shadow-glow md:hidden">
          <div className="mx-auto grid max-w-[1260px] gap-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item === "Skills" ? "tech-stack" : item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="rounded-lg border border-white/8 bg-white/[0.045] px-4 py-3 text-sm font-bold text-slate-100 transition hover:border-cyan-300/35 hover:text-cyan-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  );
}
