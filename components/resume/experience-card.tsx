import Image from "next/image";
import { BentoCard } from "./bento-card";
import { experiences } from "@/data/experience";

export function ExperienceCard() {
  return (
    <BentoCard title="EXPERIENCE" className="col-span-1 md:col-span-2 lg:col-span-3">
      <div className="space-y-4">
        <p className="font-bold text-lg">
          <span className="text-[#374151]">const</span> experience = [
        </p>

        <div className="pl-4 space-y-4">
          {experiences.map((exp) => (
            <div key={exp.id} className="space-y-2">
              <div className="flex items-start gap-3">
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  width={exp.logoWidth}
                  height={exp.logoHeight}
                  className="h-7 w-auto opacity-80 flex-shrink-0 mt-0.5"
                />
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                    <span className="font-medium">{exp.company}</span>
                    <span className="text-[#6B7280]">|</span>
                    <span className="text-[#6B7280]">{exp.period}</span>
                  </div>
                  <p className="text-sm text-[#6B7280]">{exp.role}</p>
                </div>
              </div>

              <p className="pl-10 text-sm text-[#6B7280]">{exp.description}</p>
            </div>
          ))}
        </div>

        <p className="font-bold">];</p>
      </div>
    </BentoCard>
  );
}
