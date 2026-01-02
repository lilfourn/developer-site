import type { Metadata } from "next";
import Image from "next/image";
import { BentoCard } from "@/components/resume/bento-card";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Luke Fournier's projects - Sentinal AI file manager and other software engineering work.",
};

const projects = [
  {
    name: "Sentinal",
    description: "AI-powered desktop file manager",
    fullDescription:
      "A desktop application that leverages Claude to intelligently analyze, organize, and search files. Users can describe their organization needs and preview all changes before execution.",
    technologies: ["Tauri", "Rust", "React", "TypeScript", "Claude AI"],
    status: "shipped" as const,
    link: "https://github.com/lilfourn/Sentinal",
    logo: "/sentinal-logo.svg",
    highlights: [
      "Semantic search beyond filenames",
      "AI-generated organization rules",
      "Virtual filesystem preview",
      "85-94% token savings with stratified sampling",
    ],
    year: "2025",
  },
  {
    name: "Todo App",
    description: "No-BS minimalist desktop todo app",
    fullDescription:
      "A minimalist desktop todo application built with Tauri that emphasizes simplicity and local data privacy. All you need to manage daily tasks.",
    technologies: ["Tauri", "React", "TypeScript", "Vite", "Supabase"],
    status: "shipped" as const,
    link: "https://github.com/lilfourn/Todo-App",
    highlights: [
      "Keyboard shortcuts (Cmd+N, Cmd+Z)",
      "Auto-cleanup of old tasks",
      "100% local data privacy",
      "Homebrew installable",
    ],
    year: "2025",
  },
  {
    name: "Lafayette Equipment Rentals",
    description: "Modern equipment rental website",
    fullDescription:
      "A responsive equipment rental website for a Lafayette, NJ business. Features advanced search, quote requests, and a custom theming system.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    status: "shipped" as const,
    link: "https://github.com/lilfourn/lafayette-equipment-rentals",
    highlights: [
      "Advanced search & filtering",
      "Quote request system",
      "Dark/light mode theming",
      "reCAPTCHA protected forms",
    ],
    year: "2025",
  },
  {
    name: "Portfolio",
    description: "This website you're looking at",
    fullDescription:
      "A code-themed personal portfolio built with Next.js 15, featuring bento-style cards, smooth animations, and a unique developer aesthetic.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    status: "shipped" as const,
    link: "https://github.com/lilfourn/luke-website",
    highlights: [
      "Bento grid layout",
      "Code-themed design system",
      "Fully responsive",
    ],
    year: "2025",
  },
  {
    name: "NCAA Lacrosse Analytics",
    description: "Performance tracking and analysis",
    fullDescription:
      "A data analytics platform for tracking lacrosse performance metrics, game statistics, and training progress.",
    technologies: ["Python", "Pandas", "Streamlit", "PostgreSQL"],
    status: "in-progress" as const,
    highlights: [
      "Game performance tracking",
      "Statistical analysis",
      "Training optimization",
    ],
    year: "2025",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 max-w-5xl mx-auto">
      {/* PROJECTS.md Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
          <span className="text-[#6B7280]"># </span>
          PROJECTS.md
        </h1>
        <p className="text-[#6B7280] text-xs sm:text-sm">
          {"// Things I've built and am building"}
        </p>
      </div>

      {/* Stats Bar */}
      <div className="flex flex-wrap gap-4 mb-8 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-[#6B7280]">
            {projects.filter((p) => p.status === "shipped").length} shipped
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
          <span className="text-[#6B7280]">
            {projects.filter((p) => p.status === "in-progress").length} in progress
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#6B7280]">
            {projects.reduce((acc, p) => acc + p.technologies.length, 0)}+ technologies
          </span>
        </div>
      </div>

      {/* Featured Project - Sentinal */}
      <div className="mb-8">
        <p className="text-[#6B7280] text-xs mb-3">{"// featured"}</p>
        <BentoCard title="SENTINAL" className="relative">
          <div className="absolute top-3 right-3">
            <Image
              src="/sentinal-logo.svg"
              alt="Sentinal"
              width={48}
              height={48}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left - Description */}
            <div className="space-y-4">
              <div>
                <p className="text-lg font-bold mb-1">
                  <span className="text-[#374151]">export default</span> Sentinal
                </p>
                <p className="text-[#6B7280] text-sm">
                  AI-powered desktop file manager
                </p>
              </div>

              <div className="text-sm space-y-2">
                <p className="text-[#6B7280]">{"/**"}</p>
                <p className="text-[#6B7280] pl-2">
                  * {projects[0].fullDescription}
                </p>
                <p className="text-[#6B7280]">{" */"}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {projects[0].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-[#171717]/5 border border-[#171717]/10 rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={projects[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            </div>

            {/* Right - Highlights */}
            <div className="space-y-4">
              <p className="text-[#6B7280] text-xs">{"// key features"}</p>
              <div className="space-y-2">
                {projects[0].highlights?.map((highlight, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-green-600 w-3 text-center">{">"}</span>
                    <span className="text-sm">{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#171717]/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs text-[#6B7280]">
                    Shipped {projects[0].year}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </BentoCard>
      </div>

      {/* Other Projects Grid */}
      <div className="mb-8">
        <p className="text-[#6B7280] text-xs mb-3">{"// all projects"}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.slice(1).map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}

          {/* Coming Soon Card */}
          <BentoCard title="COMING_SOON" className="opacity-60">
            <div className="space-y-3">
              <p className="font-medium">
                <span className="text-[#374151]">const</span> nextProject ={" "}
                <span className="text-[#6B7280]">null</span>;
              </p>
              <p className="text-sm text-[#6B7280]">
                {"// More projects brewing..."}
              </p>
              <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                <span className="w-2 h-2 rounded-full bg-[#171717]/30" />
                Ideas in backlog
              </div>
            </div>
          </BentoCard>
        </div>
      </div>

      {/* Tech Stack Overview */}
      <div className="mb-8">
        <BentoCard title="TECH_STACK">
          <div className="space-y-4">
            <p className="text-[#6B7280] text-xs">
              {"// technologies I work with"}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              <TechCategory
                name="Frontend"
                items={["React", "Next.js", "TypeScript", "Tailwind"]}
              />
              <TechCategory
                name="Backend"
                items={["Rust", "Python", "Node.js", "PostgreSQL"]}
              />
              <TechCategory
                name="AI/ML"
                items={["Claude API", "LangChain", "Embeddings"]}
              />
              <TechCategory
                name="Tools"
                items={["Git", "Docker", "AWS", "Tauri"]}
              />
            </div>
          </div>
        </BentoCard>
      </div>

      {/* CTA */}
      <div className="text-center py-8 border-t border-[#171717]/10 mt-8">
        <p className="text-[#6B7280] text-sm mb-4">
          {"// Want to collaborate?"}
        </p>
        <a
          href="/"
          className="inline-block group relative px-6 py-3 border border-[#171717]/20 rounded-sm hover:border-[#171717]/50 transition-all duration-300 ease-linear hover:shadow-[4px_4px_0px_0px_rgba(23,23,23,0.1)]"
        >
          <span className="text-[#374151]">git checkout</span> main
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

// Project Card Component
function ProjectCard({
  project,
}: {
  project: {
    name: string;
    description: string;
    fullDescription?: string;
    technologies: string[];
    status: "shipped" | "in-progress" | "planned";
    link?: string;
    highlights?: string[];
    year?: string;
  };
}) {
  const statusConfig = {
    shipped: { color: "bg-green-500", label: "Shipped" },
    "in-progress": { color: "bg-yellow-500 animate-pulse", label: "Building" },
    planned: { color: "bg-[#171717]/30", label: "Planned" },
  };

  const CardContent = (
    <div className="space-y-3">
      <div>
        <p className="font-medium">
          <span className="text-[#374151]">export</span> {project.name}
        </p>
        <p className="text-sm text-[#6B7280]">{project.description}</p>
      </div>

      <p className="text-xs text-[#6B7280]">
        {"// "}
        {project.technologies.join(", ")}
      </p>

      {project.highlights && (
        <div className="space-y-1">
          {project.highlights.slice(0, 2).map((h, i) => (
            <p key={i} className="text-xs text-[#6B7280] flex items-center gap-2">
              <span className="text-green-600">{">"}</span> {h}
            </p>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between pt-2 border-t border-[#171717]/10">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${statusConfig[project.status].color}`} />
          <span className="text-xs text-[#6B7280]">
            {statusConfig[project.status].label}
            {project.year && ` ${project.year}`}
          </span>
        </div>
        {project.link && (
          <svg className="w-4 h-4 text-[#6B7280]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        )}
      </div>
    </div>
  );

  if (project.link) {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <BentoCard title={project.name.toUpperCase()} className="h-full hover:border-[#171717]/50">
          {CardContent}
        </BentoCard>
      </a>
    );
  }

  return (
    <BentoCard title={project.name.toUpperCase()} className="h-full">
      {CardContent}
    </BentoCard>
  );
}

// Tech Category Component
function TechCategory({ name, items }: { name: string; items: string[] }) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-medium text-[#374151]">{name}</p>
      <div className="space-y-1">
        {items.map((item) => (
          <p key={item} className="text-xs text-[#6B7280]">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
