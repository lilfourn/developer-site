import Image from "next/image";
import { HeroSection } from "../components/resume/hero-section";
import { ExperienceCard } from "../components/resume/experience-card";
import { SkillsCard } from "../components/resume/skills-card";
import { EducationCard } from "../components/resume/education-card";
import { ProjectsCard } from "../components/resume/projects-card";
import { LeadershipCard } from "../components/resume/leadership-card";
import { ContactForm } from "../components/resume/contact-form";

export default function Home() {
  return (
    <main className="min-h-screen px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 max-w-5xl mx-auto">
      {/* Hero Section - Mobile: compact inline layout, Desktop: side by side */}
      <div className="mb-8 sm:mb-10 md:mb-12 mt-4 sm:mt-8 md:mt-16">
        {/* Mobile layout - integrated compact design */}
        <div className="md:hidden">
          <div className="flex items-start gap-4 mb-4">
            <div
              className="flex-shrink-0"
              style={{
                maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
              }}
            >
              <Image
                src="/profile-picture.svg"
                alt="Luke Fournier"
                width={100}
                height={100}
                className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]"
              />
            </div>
            <div className="flex-1 pt-1">
              <p className="text-[#6B7280] text-xs tracking-wider mb-1">{"// index.ts"}</p>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight leading-tight">
                <span className="text-[#374151]">export default</span>
                <br />
                <span className="relative">
                  lukeFournier
                  <span className="inline-block w-1.5 h-5 sm:h-6 bg-[#171717] ml-1 animate-pulse align-middle" />
                </span>
              </h1>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm sm:text-base text-[#6B7280]">
              Software Engineer <span className="text-[#171717]/30">•</span> Austin, TX
            </p>
            <HeroSection mobileCompact />
          </div>
        </div>

        {/* Desktop layout - original side by side */}
        <div className="hidden md:flex md:flex-row items-center gap-8">
          <div
            className="flex-shrink-0"
            style={{
              maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
            }}
          >
            <Image
              src="/profile-picture.svg"
              alt="Luke Fournier"
              width={350}
              height={350}
              className="w-[350px] h-[350px]"
            />
          </div>
          <HeroSection />
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        <ExperienceCard />
        <SkillsCard />
        <EducationCard />
        <ProjectsCard />
        <LeadershipCard />
      </div>

      <ContactForm />
    </main>
  );
}
