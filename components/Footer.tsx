import { Code2, Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { label: "GitHub", href: "https://github.com/phantome001", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ghost-seif-175466264", icon: Linkedin },
  { label: "Email", href: "mailto:chebeleddine@gmail.com", icon: Mail }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950/80">
      <div className="mx-auto grid max-w-[1260px] gap-5 px-4 py-6 sm:px-6 sm:gap-6 md:grid-cols-[1fr_auto_1fr] lg:px-8">
        <div>
          <a href="#home" className="inline-flex items-center gap-3">
            <img src="/logo.png" alt="C.SeifEddine Logo" className="h-8 w-8 rounded-md border border-cyan-300/20 object-cover" />
            <span className="font-extrabold text-white">C.SeifEddine</span>
          </a>
          <p className="mt-2 text-xs text-slate-400">&copy; 2026 C.SeifEddine. All rights reserved.</p>
        </div>

        <div className="flex items-center justify-start gap-3 md:justify-center">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:text-cyan-300 hover:shadow-glow"
              aria-label={label}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 text-left md:justify-end md:text-right">
          <p className="max-w-56 text-sm leading-6 text-slate-300">Code is my craft. Impact is my purpose.</p>
          <Code2 className="h-8 w-8 text-cyan-300" aria-hidden="true" />
        </div>
      </div>
    </footer>
  );
}
