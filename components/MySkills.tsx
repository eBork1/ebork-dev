import { SKILLS, Skill } from "@/data/skills";

export function MySkills() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {SKILLS.filter((s) => s.iconEnabled).map((skill: Skill) => (
        <div
          key={skill.name}
          className="
              group relative rounded-2xl p-[1px]
              bg-gradient-to-br from-sky-500/70 via-fuchsia-500/70 to-pink-500/70
              transition-all duration-300
              hover:from-sky-400 hover:via-fuchsia-400 hover:to-pink-400
            "
        >
          <div
            className="
              flex h-36 flex-col items-center justify-center gap-3
              rounded-2xl bg-slate-950/90 px-6
              text-center
            "
          >
            <img
              src={skill.iconPath}
              alt={skill.name}
              className="
                  h-12 w-12
                  transition-transform duration-300
                  group-hover:scale-110
                "
            />

            <span className="text-xs tracking-wide text-slate-200">
              {skill.name.toUpperCase()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
