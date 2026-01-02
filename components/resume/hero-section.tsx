import Image from "next/image";

const experience = [
  {
    company: "Asure Software",
    role: "Software Engineer Intern",
    logo: "/asure-loho.svg",
  },
];

interface HeroSectionProps {
  mobileCompact?: boolean;
}

export function HeroSection({ mobileCompact = false }: HeroSectionProps) {
  // Mobile compact mode - only show experience section
  if (mobileCompact) {
    return (
      <div className="pt-2">
        <p className="text-[#6B7280] text-xs tracking-wider mb-2">
          {"// experience"}
        </p>
        <div className="flex flex-wrap gap-2">
          {experience.map((exp) => (
            <div
              key={exp.company}
              className="flex items-center gap-2 px-2 py-1.5 border border-[#171717]/20 rounded-sm
                         transition-all duration-300 ease-linear
                         hover:border-[#171717]/50 hover:shadow-[2px_2px_0px_0px_rgba(23,23,23,0.1)]"
            >
              <Image
                src={exp.logo}
                alt={exp.company}
                width={20}
                height={20}
                className="opacity-80"
              />
              <div className="text-xs">
                <p className="font-medium">{exp.company}</p>
                <p className="text-[#6B7280] text-[10px]">{exp.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Full desktop layout
  return (
    <section className="flex-1 flex flex-col justify-center text-left">
      <div className="space-y-6">
        {/* The statement */}
        <div>
          <p className="text-[#6B7280] text-sm tracking-wider mb-2">
            {"// index.ts"}
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            <span className="text-[#374151]">export default</span>
            <br />
            <span className="relative">
              lukeFournier
              <span className="inline-block w-3 h-10 lg:h-12 bg-[#171717] ml-2 animate-pulse align-middle" />
            </span>
          </h1>
        </div>

        {/* Single line context */}
        <p className="text-xl text-[#6B7280]">
          Software Engineer{" "}
          <span className="text-[#171717]/30">•</span>{" "}
          Austin, TX
        </p>

        {/* Experience summary */}
        <div className="pt-4">
          <p className="text-[#6B7280] text-xs tracking-wider mb-3">
            {"// experience"}
          </p>
          <div className="flex flex-wrap gap-4">
            {experience.map((exp) => (
              <div
                key={exp.company}
                className="flex items-center gap-3 px-3 py-2 border border-[#171717]/20 rounded-sm
                           transition-all duration-300 ease-linear
                           hover:border-[#171717]/50 hover:shadow-[2px_2px_0px_0px_rgba(23,23,23,0.1)]"
              >
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  width={24}
                  height={24}
                  className="opacity-80"
                />
                <div className="text-sm">
                  <p className="font-medium">{exp.company}</p>
                  <p className="text-[#6B7280] text-xs">{exp.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
