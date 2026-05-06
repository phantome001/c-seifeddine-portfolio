"use client";

import { Github, Linkedin, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { label: "Email", value: "chebeleddine@gmail.com", href: "mailto:chebeleddine@gmail.com", icon: Mail },
  { label: "GitHub", value: "github.com/phantome001", href: "https://github.com/phantome001", icon: Github },
  { label: "LinkedIn", value: "linkedin.com/in/ghost-seif-175466264", href: "https://www.linkedin.com/in/ghost-seif-175466264", icon: Linkedin }
];

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="glass-card grid gap-6 overflow-visible p-4 sm:p-6 lg:grid-cols-[1.05fr_1.1fr_1fr] lg:items-center"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-cyan-200/28 bg-gradient-to-br from-blue-600 to-cyan-500 shadow-glow">
          <Mail className="h-8 w-8 text-white" aria-hidden="true" />
        </div>
        <div>
          <h2 className="text-xl font-black text-white min-[375px]:text-2xl">Let&apos;s build something remarkable together.</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
            Have a product idea, dashboard, API, or automation workflow in mind? I&apos;d be glad to discuss it.
          </p>
        </div>
      </div>

      <div className="min-w-0 space-y-4 border-y border-white/10 py-5 lg:border-x lg:border-y-0 lg:px-8 lg:py-0">
        {links.map(({ label, value, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="flex min-w-0 items-center gap-3 text-sm min-[420px]:gap-4"
          >
            <Icon className="h-5 w-5 text-cyan-300" aria-hidden="true" />
            <span className="w-16 shrink-0 font-bold text-white min-[420px]:w-20">{label}</span>
            <span className="block min-w-0 flex-1 truncate text-cyan-300">{value}</span>
          </a>
        ))}
      </div>

      <div className="text-center lg:text-right">
        <a 
          href="https://t.me/seifski" 
          target="_blank" 
          rel="noreferrer" 
          className="premium-button h-14 w-full max-w-full px-6 text-base sm:px-8 lg:max-w-sm"
        >
          <Send className="h-5 w-5" aria-hidden="true" />
          Send Me a Message
        </a>
        <p className="mt-4 text-sm text-slate-400">I usually reply within a few hours.</p>
      </div>
    </motion.section>
  );
}
