import Image from "next/image";
import { BentoCard } from "./bento-card";

export function ProjectsCard() {
  return (
    <BentoCard title="PROJECTS" className="col-span-1 relative">
      <Image
        src="/sentinal-logo.svg"
        alt="Sentinal"
        width={36}
        height={36}
        className="absolute top-3 right-3"
      />
      <div className="space-y-3">
        <a
          href="https://github.com/lilfourn/Sentinal"
          target="_blank"
          rel="noopener noreferrer"
          className="group cursor-pointer block"
        >
          <p className="font-medium">
            <span className="text-[#374151]">export</span>{" "}
            <span className="transition-all duration-300 ease-linear group-hover:underline">
              Sentinal
            </span>
          </p>
          <p className="pl-4 text-sm text-[#6B7280]">
            {"// Tauri, Rust, React, Claude"}
          </p>
          <p className="pl-4 text-sm">
            AI-powered desktop file manager
          </p>
          <p className="pl-4 text-xs text-[#6B7280] mt-1">
            Semantic search & auto-organization
          </p>
        </a>
      </div>
    </BentoCard>
  );
}
