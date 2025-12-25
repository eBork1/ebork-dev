"use client";

import { ParallaxText } from "@/components/shared/parallax-text";
import { BackgroundParticles } from "../BackgroundParticles";
import { MySkills } from "../MySkills";
import { motion, type Variants } from "framer-motion";

const skills: string[] = [
  "Javascript",
  "Typescript",
  "Python",
  "C#",
  "PHP",
  "MySQL",
  "PostgreSQL",
  "Angular",
  "React",
  "Django",
  ".NET",
  "Flutter",
  "Laravel",
];

const ICONS: string[] = [
  "TypeScript",
  "JavaScript",
  "Python",
  "C# / .NET",
  "SQL",
  "Postgres",
  "Angular",
  "React",
];

export function AboutSection() {
  function formatSkills(skills: string[]): string {
    return skills.join(" · ") + " · ";
  }

  const skillFeedText: string = formatSkills(skills);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.28,
        delayChildren: 0.2
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

  return (
    <section id="skills" className="relative h-[220vh] snap-start">
      {/* Sticky container that stays while you scroll through this section */}
      <div className="sticky top-0 h-screen flex flex-col gap-10 pt-8 pb-24">
        {/* Auto-scrolling banner that sticks to the top */}
        <div className="w-screen -mx-[calc((100vw-100%)/2)] overflow-hidden">
          <ParallaxText baseVelocity={80}>{skillFeedText}</ParallaxText>
          <ParallaxText baseVelocity={-80}>{skillFeedText}</ParallaxText>
        </div>

        {/* Static content beneath the sticky bar */}
        <div className="flex-1 flex items-center justify-center px-6">
          <motion.div
            className="max-w-6xl w-full space-y-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="text-center" variants={item}>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                About Me
              </h2>
              <div className="mt-4 mx-auto h-1 w-16 bg-slate-600 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="space-y-4 text-center md:text-left"
                variants={item}
              >
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  I&apos;m a Software Engineer with a passion for building
                  full-stack applications that are scalable, efficient, and
                  user-focused. I enjoy taking ideas from concept to deployment,
                  whether that means designing clean APIs, architecting
                  databases, or crafting responsive front-end experiences.
                </p>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  I&apos;m always looking to grow as a developer, expand my
                  technical expertise, and connect with others who are building
                  impactful solutions.
                </p>
              </motion.div>

              <motion.div variants={item}>
                <MySkills />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <BackgroundParticles id="skillsParticles" hoverEventsEnabled={false} />
    </section>
  );
}
