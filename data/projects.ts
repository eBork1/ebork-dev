export type Project = {
  name: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    name: "Lumenform",
    description:
      "An OCIA cohort-based formation platform designed to replace scattered email workflows with a structured weekly experience. Lumenform helps coordinators manage sessions, content, and participant engagement in one place.",
    techStack: [
      "Next.js",
      "React",
      "Mantine UI",
      "ASP.NET Core",
      "Entity Framework Core",
      "PostgreSQL",
    ],
  },
];
