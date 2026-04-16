import { AboutSection } from "@/components/sections/about-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";

export default function MainPage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
