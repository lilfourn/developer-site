import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BentoCard } from "@/components/resume/bento-card";
import { experiences } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Luke Fournier's experience as an Austin software engineer, including an incoming software engineering internship at Dimensional Fund Advisors and prior AI systems work at Asure Software.",
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    url: "https://lukefournier.com/experience",
  },
};

export default function ExperiencePage() {
  return (
    <main
      id="main"
      tabIndex={-1}
      className="min-h-screen px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 max-w-5xl mx-auto"
    >
      {/* Header - matching about page style */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
          <span className="text-[#6B7280]"># </span>
          EXPERIENCE.md
        </h1>
        <p className="text-[#6B7280] text-xs sm:text-sm">
          {"// git log --oneline"}
        </p>
      </div>

      {/* Experience Cards */}
      <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
        {experiences.map((exp) => (
          <BentoCard key={exp.id} title={exp.cardTitle.toUpperCase()} className="overflow-visible">
            {/* Company Header */}
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              {exp.logo && (
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  width={exp.logoWidth}
                  height={exp.logoHeight}
                  className="h-10 w-auto sm:h-12 opacity-80 flex-shrink-0"
                />
              )}
              <div className="flex-1 min-w-0">
                <h2 className="text-lg sm:text-xl font-bold">{exp.company}</h2>
                <p className="text-[#374151] text-sm sm:text-base">{exp.role}</p>
                <p className="text-xs sm:text-sm text-[#6B7280] mt-0.5">
                  {exp.location} <span className="text-[#171717]/30">•</span> {exp.period}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-[#6B7280] text-xs sm:text-sm mb-4 sm:mb-6 italic">
              {exp.description}
            </p>

            {exp.highlights?.length ? (
              <div className="mb-4 sm:mb-6">
                <p className="text-[#6B7280] text-xs mb-2 sm:mb-3 font-mono">{"// key contributions"}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                      <span className="text-green-600 flex-shrink-0 mt-0.5">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {exp.techStack?.length ? (
              <div className="mb-4 sm:mb-6">
                <p className="text-[#6B7280] text-xs mb-2 sm:mb-3 font-mono">{"// tech stack"}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-1 sm:py-1.5
                             border border-[#171717]/20 rounded-sm
                             hover:border-[#171717]/40 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            {exp.metrics ? (
              <div className="pt-4 border-t border-[#171717]/10">
                <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                  <div>
                    <p className="text-lg sm:text-2xl font-bold">{exp.metrics.linesOfCode}</p>
                    <p className="text-[10px] sm:text-xs text-[#6B7280]">Lines of Code</p>
                  </div>
                  <div>
                    <p className="text-lg sm:text-2xl font-bold">{exp.metrics.pullRequests}</p>
                    <p className="text-[10px] sm:text-xs text-[#6B7280]">Pull Requests</p>
                  </div>
                  <div>
                    <p className="text-lg sm:text-2xl font-bold">{exp.metrics.deployments}</p>
                    <p className="text-[10px] sm:text-xs text-[#6B7280]">Deployments</p>
                  </div>
                </div>
              </div>
            ) : null}
          </BentoCard>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="mb-8 sm:mb-12">
        <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
          <span className="text-[#6B7280]">## </span>
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <BentoCard title="LANGUAGES">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {["Python", "JavaScript", "TypeScript", "SQL", "R"].map((skill) => (
                <span
                  key={skill}
                  className="text-[10px] sm:text-xs px-2 py-1 bg-[#171717]/5 rounded-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </BentoCard>

          <BentoCard title="CLOUD_&_DEVOPS">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {["AWS Lambda", "DynamoDB", "API Gateway", "Jenkins", "CI/CD"].map((skill) => (
                <span
                  key={skill}
                  className="text-[10px] sm:text-xs px-2 py-1 bg-[#171717]/5 rounded-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </BentoCard>

          <BentoCard title="AI_&_DATA">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {["Claude/Bedrock", "LLM Engineering", "Data Analysis", "Prompt Design"].map((skill) => (
                <span
                  key={skill}
                  className="text-[10px] sm:text-xs px-2 py-1 bg-[#171717]/5 rounded-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </BentoCard>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-6 sm:py-8 border-t border-[#171717]/10">
        <p className="text-[#6B7280] text-xs sm:text-sm mb-3 sm:mb-4">
          {"// Want to work together?"}
        </p>
        <Link
          href="/contact"
          className="inline-block group relative px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base
                   border border-[#171717]/20 rounded-sm hover:border-[#171717]/50
                   transition-all duration-300 ease-linear hover:shadow-[4px_4px_0px_0px_rgba(23,23,23,0.1)]"
        >
          <span className="text-[#374151]">return</span> contact();
          {/* Corner accents */}
          <span className="absolute top-0 left-0 w-0 h-px bg-[#171717] transition-all duration-300 ease-linear group-hover:w-2" />
          <span className="absolute top-0 left-0 w-px h-0 bg-[#171717] transition-all duration-300 ease-linear group-hover:h-2" />
          <span className="absolute bottom-0 right-0 w-0 h-px bg-[#171717] transition-all duration-300 ease-linear group-hover:w-2" />
          <span className="absolute bottom-0 right-0 w-px h-0 bg-[#171717] transition-all duration-300 ease-linear group-hover:h-2" />
        </Link>
      </div>
    </main>
  );
}
