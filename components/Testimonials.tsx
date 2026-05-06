"use client";

import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Dr. Amine Yelles",
    role: "Chief Medical Officer",
    text: "SeifEddine's work on our medical platform was outstanding. The AI-powered triage he integrated significantly streamlined our entire patient workflow.",
    color: "#e8c0a2"
  },
  {
    name: "Omar Bouzid",
    role: "IT Security Director",
    text: "A highly skilled professional. He conducted thorough penetration tests and provided invaluable insights for our server administration and security.",
    color: "#c98c65"
  }
];

const logos = ["Upwork", "Freelancer", "Fiverr", "GitHub", "Supabase", "CompTIA", "Vercel"];

export default function Testimonials() {
  return (
    <section id="testimonials" className="grid gap-5 xl:grid-cols-[1.34fr_0.66fr]">
      <div>
        <p className="section-kicker">What Clients Say</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <motion.article key={testimonial.name} className="glass-card p-5">
              <Quote className="h-9 w-9 text-cyan-300/80" aria-hidden="true" />
              <p className="mt-3 text-sm leading-7 text-slate-200">{testimonial.text}</p>
              <div className="mt-5 flex flex-col items-start justify-between gap-3 min-[420px]:flex-row min-[420px]:items-center">
                <div className="flex items-center gap-3">
                  <span
                    className="h-10 w-10 rounded-full border border-white/20"
                    style={{ background: `linear-gradient(145deg, ${testimonial.color}, #07101f 76%)` }}
                  />
                  <div>
                    <p className="text-sm font-black text-white">{testimonial.name}</p>
                    <p className="text-xs text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap text-sm text-amber-300">
                  <span className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <Star key={item} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                    ))}
                  </span>
                  <span className="text-slate-300">5.0</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <motion.div className="glass-card p-5">
        <p className="section-kicker">Trusted By</p>
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 xl:grid-cols-2">
          {logos.map((logo) => (
            <span key={logo} className="text-xl font-black text-slate-400 transition hover:text-white">
              {logo}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
