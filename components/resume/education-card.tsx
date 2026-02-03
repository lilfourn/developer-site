import Image from "next/image";
import { BentoCard } from "./bento-card";

export function EducationCard() {
  return (
    <BentoCard title="EDUCATION" className="col-span-1 relative">
      <Image
        src="/ut-logo.png"
        alt="University of Texas"
        width={36}
        height={36}
        className="absolute top-3 right-3"
      />
      <div className="space-y-2">
        <p className="font-bold text-lg">
          <span className="text-[#374151]">class</span> UTAustin {"{"}
        </p>
        <div className="pl-4 text-sm space-y-1">
          <p>
            <span className="text-[#6B7280]">degree:</span> &quot;BS Economics&quot;
          </p>
          <p>
            <span className="text-[#6B7280]">minors:</span> [&quot;CS&quot;, &quot;Business&quot;, &quot;Data Science&quot;]
          </p>
          <p>
            <span className="text-[#6B7280]">gpa:</span>{" "}
            <span className="font-medium">3.77</span>
          </p>
          <p>
            <span className="text-[#6B7280]">expected:</span> &quot;May 2027&quot;
          </p>
        </div>
        <p className="font-bold">{"}"}</p>
      </div>
    </BentoCard>
  );
}
