"use client";

import { motion, type Variants } from "framer-motion";
import { BackgroundParticles } from "../BackgroundParticles";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/data/projects";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.28,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-xl p-px bg-linear-to-br from-sky-500/70 via-fuchsia-500/70 to-pink-500/70 hover:from-sky-400 hover:via-fuchsia-400 hover:to-pink-400 transition-all duration-300">
      <div className="bg-slate-950/90 rounded-xl p-6 h-full flex flex-col gap-5">
        {/* Name */}
        <h3 className="text-2xl font-bold tracking-tight text-white">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-slate-800/80 text-slate-300 border border-slate-700/60"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 pt-1">
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          )}

          {project.liveUrl ? (
            <Button size="sm" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live App
              </a>
            </Button>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium tracking-wide bg-cyan-950/60 text-cyan-400 border border-cyan-800/50">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative min-h-screen snap-start flex items-center justify-center px-6 overflow-hidden"
    >
      <motion.div
        className="max-w-6xl w-full space-y-12 py-24"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="text-center" variants={item}>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Projects
          </h2>
          <div className="mt-4 mx-auto h-1 w-16 bg-slate-600 rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={item}
        >
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </motion.div>
      </motion.div>

      <BackgroundParticles id="projectsParticles" hoverEventsEnabled={false} />
    </section>
  );
}
