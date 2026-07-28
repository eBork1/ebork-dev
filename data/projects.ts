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
  {
    name: "Who's My Saint",
    description:
      "A Catholic saint matching app. Answer a few reflective questions about who you are and what you're seeking, and get paired with a patron saint chosen just for you. Read their story, keep their intercession close, and discover the companion in the communion of saints who fits your season of life.",
    techStack: [
      "React Native",
      "Expo",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Railway",
    ],
    liveUrl: "https://www.cloudofwitnesses.app/",
  },
];
