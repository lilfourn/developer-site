import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HeroSection } from "../components/resume/hero-section";
import { ExperienceCard } from "../components/resume/experience-card";
import { SkillsCard } from "../components/resume/skills-card";
import { EducationCard } from "../components/resume/education-card";
import { ProjectsCard } from "../components/resume/projects-card";
import { LeadershipCard } from "../components/resume/leadership-card";
import { ContactForm } from "../components/resume/contact-form";
import { experiences } from "@/data/experience";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "https://lukefournier.com/",
  },
};

export default function Home() {
  return (
    <main
      id="main"
      tabIndex={-1}
      className="min-h-screen px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 max-w-5xl mx-auto"
    >
      {/* Hero Section - Mobile: centered impactful layout, Desktop: side by side */}
      <div className="mb-8 sm:mb-10 md:mb-12 mt-2 sm:mt-8 md:mt-16">
        {/* Mobile layout - centered, impactful design */}
        <div className="md:hidden">
          <div className="relative border border-[#171717]/20 rounded-sm p-6 sm:p-8 group
                        hover:border-[#171717]/40 transition-all duration-300">
            {/* Corner accents */}
            <span className="absolute top-0 left-0 w-0 h-0.5 bg-[#171717] transition-all duration-300 ease-linear group-hover:w-8" />
            <span className="absolute top-0 left-0 w-0.5 h-0 bg-[#171717] transition-all duration-300 ease-linear group-hover:h-8" />
            <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#171717] transition-all duration-300 ease-linear group-hover:w-8" />
            <span className="absolute bottom-0 right-0 w-0.5 h-0 bg-[#171717] transition-all duration-300 ease-linear group-hover:h-8" />

            {/* Centered content */}
            <div className="flex flex-col items-center text-center">
              {/* Profile Image */}
              <div
                className="mb-6"
                style={{
                  maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                }}
              >
                <Image
                  src="/profile-picture.svg"
                  alt="Luke Fournier, Austin software engineer"
                  width={140}
                  height={140}
                  className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px]"
                  priority
                />
              </div>

              {/* Name & Title */}
              <div className="space-y-4 w-full">
                <div>
                  <p className="text-[#6B7280] text-xs tracking-wider mb-2">{"// index.ts"}</p>
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
                    <span className="text-[#374151]">export default</span>
                    <br />
                    <span className="relative">
                      lukeFournier
                      <span className="inline-block w-2 h-6 sm:h-7 bg-[#171717] ml-1 animate-pulse align-middle" />
                    </span>
                  </h1>
                </div>

                {/* Role & Location */}
                <p className="text-base sm:text-lg text-[#6B7280]">
                  Austin, TX <span className="text-[#171717]/30">•</span>{" "}
                  Software Engineer &amp; Developer{" "}
                  <span className="text-[#171717]/30">•</span> UT Austin
                </p>

                {/* Divider */}
                <div className="w-16 h-px bg-[#171717]/20 mx-auto" />

                {/* Experience */}
                <div className="pt-2">
                  <p className="text-[#6B7280] text-xs tracking-wider mb-3">{"// experience"}</p>
                  <Link
                    href="/experience"
                    className="inline-flex w-full flex-col items-stretch gap-3 px-4 py-2.5 border border-[#171717]/20 rounded-sm
                             transition-all duration-300 ease-linear
                             hover:border-[#171717]/50 hover:shadow-[2px_2px_0px_0px_rgba(23,23,23,0.1)]"
                  >
                    {experiences.map((exp) => (
                      <div key={exp.id} className="flex items-center gap-3">
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          width={exp.logoWidth}
                          height={exp.logoHeight}
                          className="h-6 w-auto opacity-80 flex-shrink-0"
                        />
                        <div className="text-left min-w-0">
                          <p className="font-medium text-sm">{exp.company}</p>
                          <p className="text-[#6B7280] text-xs">{exp.role}</p>
                        </div>
                      </div>
                    ))}
                  </Link>
                </div>
              </div>
            </div>
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
              alt="Luke Fournier, Austin software engineer"
              width={350}
              height={350}
              className="w-[350px] h-[350px]"
              priority
            />
          </div>
          <HeroSection />
        </div>
      </div>

      <section aria-labelledby="about-summary" className="mb-8 sm:mb-10 md:mb-12">
        <h2
          id="about-summary"
          className="text-[#6B7280] text-xs sm:text-sm uppercase tracking-widest mb-2"
        >
          {"// About"}
        </h2>
        <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
          I&apos;m an Austin software engineer and developer at UT Austin building
          AI-powered products. If you&apos;re looking for Austin developers to
          collaborate on modern web or AI projects, I&apos;m open to
          conversations.
        </p>
      </section>

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
