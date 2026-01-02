interface BentoCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function BentoCard({ title, children, className }: BentoCardProps) {
  return (
    <div
      className={`
        relative p-4 sm:p-5 md:p-6
        border border-[#171717]/20
        rounded-sm
        group
        transition-all duration-300 ease-linear
        hover:border-[#171717]/50
        hover:shadow-[4px_4px_0px_0px_rgba(23,23,23,0.1)]
        ${className}
      `}
    >
      <h2 className="text-[#6B7280] text-xs sm:text-sm mb-3 sm:mb-4 uppercase tracking-wide">
        {"// "}{title}
      </h2>

      <span className="absolute top-0 left-0 w-0 h-0.5 bg-[#171717] transition-all duration-300 ease-linear group-hover:w-8" />
      <span className="absolute top-0 left-0 w-0.5 h-0 bg-[#171717] transition-all duration-300 ease-linear group-hover:h-8" />
      <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#171717] transition-all duration-300 ease-linear group-hover:w-8" />
      <span className="absolute bottom-0 right-0 w-0.5 h-0 bg-[#171717] transition-all duration-300 ease-linear group-hover:h-8" />

      {children}
    </div>
  );
}
