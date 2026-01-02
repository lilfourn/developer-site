import { BentoCard } from "./bento-card";

const techStack = [
  "Python",
  "AWS Lambda",
  "Bedrock (Claude)",
  "DynamoDB",
  "Jenkins",
  "CI/CD",
];

export function ExperienceCard() {
  return (
    <BentoCard title="EXPERIENCE" className="col-span-1 md:col-span-2 lg:col-span-3">
      <div className="space-y-4">
        <div>
          <p className="font-bold text-lg">
            <span className="text-[#374151]">async function</span>{" "}
            buildAIAgent() {"{"}
          </p>
          <div className="flex items-center gap-2 pl-4 text-sm">
            <span className="text-[#6B7280]">@</span>
            <span>Asure Software</span>
            <span className="text-[#6B7280]">|</span>
            <span className="text-[#6B7280]">June 2025 - August 2025</span>
          </div>
        </div>

        <div className="pl-4 space-y-3">
          <p className="text-[#6B7280] text-sm">{"// Tech stack"}</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 border border-[#171717]/30 rounded-sm text-xs
                           transition-all duration-300 ease-linear
                           hover:bg-[#171717] hover:text-[#CCCCCC] cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="space-y-2 text-sm pt-2">
            <p className="text-[#6B7280]">{"// Highlights"}</p>
            <p className="pl-4">
              <span className="text-[#6B7280]">-</span> Built production-ready AI agent for Canada Tax Branch
            </p>
            <p className="pl-4">
              <span className="text-[#6B7280]">-</span> Architected end-to-end cloud infrastructure on AWS
            </p>
            <p className="pl-4">
              <span className="text-[#6B7280]">-</span> Shipped customer-facing LLM feature to production
            </p>
          </div>
        </div>

        <p className="font-bold">{"}"}</p>
      </div>
    </BentoCard>
  );
}
