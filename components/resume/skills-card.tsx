import { BentoCard } from "./bento-card";

const skills = {
  languages: ["Python", "JavaScript", "TypeScript", "R", "SQL"],
  frameworks: ["Next.js", "Node.js"],
  markup: ["HTML", "CSS"],
  tools: ["Excel", "Canva"],
};

export function SkillsCard() {
  return (
    <BentoCard title="SKILLS" className="col-span-1 md:col-span-2 lg:col-span-3">
      <div className="space-y-3">
        <p className="text-[#374151] font-medium">
          type <span className="font-bold">TechStack</span> = {"{"}
        </p>

        <div className="pl-4 sm:pl-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-4 text-sm">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <p className="text-[#6B7280] mb-1">{category}:</p>
              <div className="pl-2">
                {items.map((item, i) => (
                  <p key={item} className="group cursor-default">
                    <span className="text-[#6B7280]">|</span>{" "}
                    <span className="transition-all duration-300 ease-linear group-hover:font-bold">
                      "{item}"
                    </span>
                    {i < items.length - 1 && (
                      <span className="text-[#6B7280]">,</span>
                    )}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-[#374151] font-medium">{"}"}</p>
      </div>
    </BentoCard>
  );
}
