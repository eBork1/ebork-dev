import { Button } from "@/components/ui/button";
import { NAME_MASK } from "../particles-options/name-mask";
import { NameParticles } from "../NameParticles";
import { BackgroundParticles } from "../BackgroundParticles";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="
        relative 
        min-h-screen 
        snap-start 
        flex 
        items-center 
        justify-center 
        px-6 
        overflow-hidden
      "
    >
      {/* <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10">
        <div>Left column</div>
        <div>Right column</div>
      </div> */}
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
          Software Engineer • Full Stack
        </p>

        <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-white">
          Hi, I'm{" "}
          <span className="text-cyan-400">Ethan</span>
        </h1>

        <p className="text-slate-300 text-lg max-w-xl mx-auto">
          Full-stack engineer who likes building things that feel good to use and easy to maintain.
          From backend logic to UI polish, I enjoy the whole process.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <Button size="lg" asChild>
            <a href="#projects">View Projects</a>
          </Button>

          <Button variant="outline" size="lg" asChild>
            <a href="/resume.pdf" target="_blank">
              Resume
            </a>
          </Button>
        </div>
      </div>
      <BackgroundParticles id="heroParticles" />
    </section>
  );
}
