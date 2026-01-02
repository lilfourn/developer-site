import Image from "next/image";
import { BentoCard } from "@/components/resume/bento-card";
import { InstagramVideo } from "@/components/instagram-embed";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 max-w-5xl mx-auto">
      {/* README Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
          <span className="text-[#6B7280]"># </span>
          README.md
        </h1>
        <p className="text-[#6B7280] text-xs sm:text-sm">
          {"// Last updated: " + new Date().toLocaleDateString()}
        </p>
      </div>

      {/* Hero Section with Large Profile */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
        <BentoCard title="PROFILE" className="lg:col-span-1 lg:row-span-2">
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 mb-3 sm:mb-4 overflow-hidden rounded-sm">
              <Image
                src="/profile-picture.svg"
                alt="Luke Fournier"
                fill
                className="object-contain scale-125"
              />
            </div>
            <div className="text-center space-y-1">
              <p className="font-bold text-base sm:text-lg">Luke Fournier</p>
              <p className="text-[#6B7280] text-xs sm:text-sm">@lilfourn</p>
              <div className="flex gap-2 justify-center mt-2">
                <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 border border-[#171717]/20 rounded-sm">
                  Austin, TX
                </span>
                <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 border border-[#171717]/20 rounded-sm">
                  He/Him
                </span>
              </div>
            </div>
          </div>
        </BentoCard>

        <BentoCard title="BIO" className="lg:col-span-2">
          <div className="space-y-3">
            <div className="text-sm">
              <p className="text-[#6B7280] mb-2">{"/**"}</p>
              <p className="pl-2 text-[#6B7280]">
                * Economics student at UT Austin with a passion for
              </p>
              <p className="pl-2 text-[#6B7280]">
                * building software that solves real problems. I love
              </p>
              <p className="pl-2 text-[#6B7280]">
                * the intersection of data, AI, and user experience.
              </p>
              <p className="pl-2 text-[#6B7280]">
                * Currently exploring how LLMs can transform everyday
              </p>
              <p className="pl-2 text-[#6B7280]">
                * workflows and make complex tasks accessible to everyone.
              </p>
              <p className="text-[#6B7280]">{" */"}</p>
            </div>
            <div className="pt-2 border-t border-[#171717]/10">
              <p className="text-sm">
                <span className="text-[#374151]">const</span> status ={" "}
                <span className="text-green-600">{'"Open to opportunities"'}</span>;
              </p>
            </div>
          </div>
        </BentoCard>

        <BentoCard title="QUICK_STATS" className="lg:col-span-2">
          <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
            <div>
              <p className="text-lg sm:text-2xl font-bold">3.77</p>
              <p className="text-[10px] sm:text-xs text-[#6B7280]">GPA</p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-bold">2027</p>
              <p className="text-[10px] sm:text-xs text-[#6B7280]">Graduation</p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-bold">3</p>
              <p className="text-[10px] sm:text-xs text-[#6B7280]">Minors</p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-bold">1</p>
              <p className="text-[10px] sm:text-xs text-[#6B7280]">Internship</p>
            </div>
          </div>
        </BentoCard>
      </div>

      {/* Interface Definition - Values */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
        <BentoCard title="INTERFACE" className="md:col-span-2">
          <div className="space-y-2 text-sm">
            <p>
              <span className="text-[#374151]">interface</span>{" "}
              <span className="font-bold">LukeFournier</span> {"{"}
            </p>
            <div className="pl-4 space-y-1">
              <p>
                <span className="text-[#6B7280]">mindset:</span>{" "}
                {'"Growth-oriented"'};
              </p>
              <p>
                <span className="text-[#6B7280]">approach:</span>{" "}
                {'"Ship fast, iterate faster"'};
              </p>
              <p>
                <span className="text-[#6B7280]">values:</span> [
                <span className="text-green-600">{'"Curiosity"'}</span>,{" "}
                <span className="text-green-600">{'"Ownership"'}</span>,{" "}
                <span className="text-green-600">{'"Impact"'}</span>];
              </p>
              <p>
                <span className="text-[#6B7280]">superpower:</span>{" "}
                {'"Turning ideas into products"'};
              </p>
            </div>
            <p>{"}"}</p>
          </div>
        </BentoCard>
      </div>

      {/* Quote */}
      <div className="mb-6 sm:mb-8">
        <BentoCard title="PHILOSOPHY" className="col-span-full">
          <div className="relative py-6 sm:py-10 px-2 sm:px-6 md:px-12">
            {/* Large decorative quotes */}
            <span className="absolute top-0 sm:top-2 left-1 sm:left-4 text-4xl sm:text-6xl md:text-8xl text-[#171717]/10 font-serif leading-none select-none">
              &ldquo;
            </span>
            <span className="absolute bottom-0 right-1 sm:right-4 text-4xl sm:text-6xl md:text-8xl text-[#171717]/10 font-serif leading-none select-none">
              &rdquo;
            </span>

            {/* Quote content */}
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <blockquote className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed tracking-tight">
                <span className="text-[#374151]">A desire to succeed</span>
                <span className="text-[#171717]"> without </span>
                <span className="text-[#374151]">a burden to learn</span>
                <span className="text-[#171717]"> is a </span>
                <span className="text-[#171717] italic">fool&apos;s errand</span>
              </blockquote>

              {/* Decorative line */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
                <span className="h-px w-8 sm:w-12 bg-[#171717]/20" />
                <span className="text-[10px] sm:text-xs text-[#6B7280] tracking-widest uppercase">Live by</span>
                <span className="h-px w-8 sm:w-12 bg-[#171717]/20" />
              </div>
            </div>
          </div>
        </BentoCard>
      </div>

      {/* Roadmap Timeline */}
      <div className="mb-6 sm:mb-8">
        <BentoCard title="ROADMAP" className="col-span-full">
          <div className="space-y-6">
            <p className="text-sm text-[#6B7280]">
              {"// git log --oneline --graph"}
            </p>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-3 top-0 bottom-0 w-px bg-[#171717]/20" />

              {/* Timeline Items */}
              <div className="space-y-6">
                {/* Past */}
                <TimelineItem
                  year="2023"
                  status="merged"
                  title="Started at UT Austin"
                  description="Began BS Economics with CS, Business, and Data Science minors"
                />

                <TimelineItem
                  year="2024"
                  status="merged"
                  title="First Software Internship"
                  description="Joined Asure Software as Software Engineer Intern"
                />

                <TimelineItem
                  year="2025"
                  status="in-progress"
                  title="Building in Public"
                  description="Shipping personal projects like Sentinal, exploring AI applications"
                />

                {/* Future */}
                <TimelineItem
                  year="2026"
                  status="planned"
                  title="Summer Internship"
                  description="Looking for opportunities in AI/ML, Full-Stack, or FinTech"
                  placeholder
                />

                <TimelineItem
                  year="2027"
                  status="planned"
                  title="BS Economics Graduation"
                  description="Complete undergrad at UT Austin with CS, Business & Data Science minors"
                  placeholder
                />

                <TimelineItem
                  year="2028+"
                  status="planned"
                  title="MSCS & NCAA Lacrosse"
                  description="Pursue Master's in Computer Science while playing lacrosse at the NCAA level"
                  placeholder
                />
              </div>
            </div>
          </div>
        </BentoCard>
      </div>

      {/* Interests Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
        <BentoCard title="INTERESTS[0]" className="relative overflow-hidden">
          <div className="aspect-[4/3] sm:aspect-square bg-gradient-to-br from-[#171717]/5 to-[#171717]/10 rounded-sm mb-2 sm:mb-3 overflow-hidden">
            <Image
              src="/ai-interest.png"
              alt="AI & Machine Learning"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-medium text-sm sm:text-base">AI & Machine Learning</p>
          <p className="text-[10px] sm:text-xs text-[#6B7280] mt-0.5 sm:mt-1">
            Building tools that augment human capability
          </p>
        </BentoCard>

        <BentoCard title="INTERESTS[1]" className="relative overflow-hidden">
          <div className="aspect-[4/3] sm:aspect-square bg-gradient-to-br from-[#171717]/5 to-[#171717]/10 rounded-sm mb-2 sm:mb-3 overflow-hidden">
            <Image
              src="/economics-interest.png"
              alt="Data & Economics"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-medium text-sm sm:text-base">Data & Economics</p>
          <p className="text-[10px] sm:text-xs text-[#6B7280] mt-0.5 sm:mt-1">
            Finding patterns and making data-driven decisions
          </p>
        </BentoCard>

        <BentoCard title="INTERESTS[2]" className="relative overflow-hidden sm:col-span-2 md:col-span-1">
          <div className="aspect-[4/3] sm:aspect-square bg-gradient-to-br from-[#171717]/5 to-[#171717]/10 rounded-sm mb-2 sm:mb-3 overflow-hidden">
            <Image
              src="/system-design-interests.png"
              alt="Product & Design"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-medium text-sm sm:text-base">Product & Design</p>
          <p className="text-[10px] sm:text-xs text-[#6B7280] mt-0.5 sm:mt-1">
            Crafting experiences that feel intuitive and delightful
          </p>
        </BentoCard>
      </div>

      {/* Learning & Hobbies Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 md:items-stretch">
        {/* Left column - stacked cards */}
        <div className="flex flex-col gap-3 sm:gap-4 h-full">
          <BentoCard title="CURRENTLY_LEARNING" className="flex-1">
            <div className="space-y-2 text-xs sm:text-sm">
              <p className="text-[#6B7280]">{"// npx learning-stack"}</p>
              <div className="space-y-1.5 sm:space-y-1">
                <ProgressItem label="JavaScript" progress={35} />
                <ProgressItem label="Python" progress={50} />
                <ProgressItem label="LLM Engineering" progress={70} />
                <ProgressItem label="System Design" progress={55} />
                <ProgressItem label="Rust" progress={40} />
                <ProgressItem label="Cloud Architecture" progress={35} />
              </div>
            </div>
          </BentoCard>

          <BentoCard title="WHEN_NOT_CODING" className="flex-1">
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <p className="text-[#6B7280]">{"// hobbies.forEach(h => enjoy(h))"}</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {[
                  "Basketball 🏀",
                  "Hiking 🥾",
                  "Coffee ☕",
                  "Podcasts 🎧",
                  "Chess ♟️",
                  "Travel ✈️",
                ].map((hobby) => (
                  <span
                    key={hobby}
                    className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 border border-[#171717]/20 rounded-sm hover:border-[#171717]/50 transition-all duration-300"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>
        </div>

        {/* Right column - Instagram */}
        <BentoCard title="IN_ACTION" className="md:col-span-1">
          <div className="flex flex-col items-center gap-3">
            <p className="text-[#6B7280] text-xs self-start">{"// highlight.reel"}</p>
            <InstagramVideo url="https://www.instagram.com/p/DIWUAGdRghx/" />
            <p className="text-xs text-[#6B7280] text-center">
              Wildest play of the season vs SMU
            </p>
          </div>
        </BentoCard>
      </div>

      {/* Goals / Vision */}
      <BentoCard title="VISION_2030" className="mb-6 sm:mb-8">
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
          {/* Photo */}
          <div className="md:w-1/3 flex-shrink-0">
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <Image
                src="/vision-photo.png"
                alt="Vision 2030"
                width={300}
                height={375}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Goals */}
          <div className="flex-1 space-y-3 sm:space-y-4">
            <p className="text-xs sm:text-sm text-[#6B7280]">{"// goals.map(g => pursue(g))"}</p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-green-600 w-3 text-center">{">"}</span>
                <p className="text-sm"><span className="text-[#374151]">await</span> buildProductsPeopleLove()</p>
              </div>
              <p className="pl-5 text-xs text-[#6B7280]">{"// Create software that makes a meaningful difference"}</p>

              <div className="flex items-center gap-2">
                <span className="text-green-600 w-3 text-center">{">"}</span>
                <p className="text-sm"><span className="text-[#374151]">await</span> workOnHardProblems()</p>
              </div>
              <p className="pl-5 text-xs text-[#6B7280]">{"// Tackle AI, economics, and society challenges"}</p>

              <div className="flex items-center gap-2">
                <span className="text-green-600 w-3 text-center">{">"}</span>
                <p className="text-sm"><span className="text-[#374151]">await</span> giveBack()</p>
              </div>
              <p className="pl-5 text-xs text-[#6B7280]">{"// Mentor others and contribute to open source"}</p>
            </div>
          </div>
        </div>
      </BentoCard>

      {/* CTA */}
      <div className="text-center py-6 sm:py-8 border-t border-[#171717]/10">
        <p className="text-[#6B7280] text-xs sm:text-sm mb-3 sm:mb-4">
          {"// Want to connect?"}
        </p>
        <a
          href="/"
          className="inline-block group relative px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base border border-[#171717]/20 rounded-sm hover:border-[#171717]/50 transition-all duration-300 ease-linear hover:shadow-[4px_4px_0px_0px_rgba(23,23,23,0.1)]"
        >
          <span className="text-[#374151]">return</span> home();
          {/* Corner accents */}
          <span className="absolute top-0 left-0 w-0 h-px bg-[#171717] transition-all duration-300 ease-linear group-hover:w-2" />
          <span className="absolute top-0 left-0 w-px h-0 bg-[#171717] transition-all duration-300 ease-linear group-hover:h-2" />
          <span className="absolute bottom-0 right-0 w-0 h-px bg-[#171717] transition-all duration-300 ease-linear group-hover:w-2" />
          <span className="absolute bottom-0 right-0 w-px h-0 bg-[#171717] transition-all duration-300 ease-linear group-hover:h-2" />
        </a>
      </div>
    </main>
  );
}

// Timeline Item Component
function TimelineItem({
  year,
  status,
  title,
  description,
  placeholder = false,
}: {
  year: string;
  status: "merged" | "in-progress" | "planned";
  title: string;
  description: string;
  placeholder?: boolean;
}) {
  const statusColors = {
    merged: "bg-green-500",
    "in-progress": "bg-yellow-500 animate-pulse",
    planned: "bg-[#171717]/30",
  };

  const statusText = {
    merged: "✓",
    "in-progress": "→",
    planned: "○",
  };

  return (
    <div className={`relative pl-6 sm:pl-8 ${placeholder ? "opacity-60" : ""}`}>
      {/* Dot */}
      <div
        className={`absolute left-1 sm:left-1.5 top-1 w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full ${statusColors[status]}`}
      />

      <div className="space-y-0.5 sm:space-y-1">
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
          <span className="text-[10px] sm:text-xs font-mono text-[#6B7280]">{year}</span>
          <span className="text-[10px] sm:text-xs px-1 sm:px-1.5 py-0.5 bg-[#171717]/5 rounded-sm">
            {statusText[status]} {status}
          </span>
        </div>
        <p className="font-medium text-sm sm:text-base">{title}</p>
        <p className="text-xs sm:text-sm text-[#6B7280]">{description}</p>
      </div>
    </div>
  );
}

// Progress Item Component
function ProgressItem({ label, progress }: { label: string; progress: number }) {
  return (
    <div className="space-y-0.5 sm:space-y-1">
      <div className="flex justify-between text-xs sm:text-sm">
        <span>{label}</span>
        <span className="text-[#6B7280]">{progress}%</span>
      </div>
      <div className="h-1 sm:h-1.5 bg-[#171717]/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#171717]/60 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

// Goal Item Component
function GoalItem({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-2 sm:gap-3 items-start">
      <span className="text-base sm:text-xl">{icon}</span>
      <div>
        <p className="font-medium text-sm sm:text-base">{title}</p>
        <p className="text-xs sm:text-sm text-[#6B7280]">{description}</p>
      </div>
    </div>
  );
}
