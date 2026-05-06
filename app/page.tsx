import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="px-1 py-2 text-white min-[375px]:px-2 min-[375px]:py-3 sm:px-5 lg:px-8 lg:py-8">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[1.4rem] border border-white/10 bg-ink-950/70 shadow-[0_40px_120px_rgba(0,0,0,0.44)] backdrop-blur-2xl">
        <Navbar />

        <div className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(2,7,18,0.34),rgba(2,7,18,0.82))]">
          <div className="absolute left-0 top-0 h-px w-full bg-neon-line opacity-60" />
          <div className="mx-auto flex min-w-0 max-w-[1260px] flex-col gap-5 px-4 py-7 sm:px-6 lg:px-8 lg:py-9">
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <Services />
            <Testimonials />
            <Contact />
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
