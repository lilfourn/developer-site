"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="h-14 flex items-center justify-between p-4 relative z-50">
      <a href="/" className="uppercase relative group font-bold text-lg cursor-pointer">
        LUKE FOURNIER
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-current transition-all duration-300 ease-linear group-hover:w-full" />
      </a>

      {/* Mobile menu button */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-0.5 bg-[#171717] transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1" : ""}`} />
        <span className={`block w-5 h-0.5 bg-[#171717] my-1 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-0.5 bg-[#171717] transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1" : ""}`} />
      </button>

      {/* Desktop navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <a href="#experience" className="px-4 py-2 cursor-pointer text-sm hover:opacity-70 transition-opacity">
          Experience
        </a>
        <a href="#projects" className="px-4 py-2 cursor-pointer text-sm hover:opacity-70 transition-opacity">
          Projects
        </a>
        <a href="/about" className="px-4 py-2 cursor-pointer text-sm hover:opacity-70 transition-opacity">
          About
        </a>
        <a
          href="/contact"
          className="relative px-4 py-2 text-sm font-medium cursor-pointer group"
        >
          <span className="absolute inset-0 rounded-md">
            <span className="absolute top-0 left-0 w-0 h-0.5 bg-[#252525] transition-all duration-300 ease-linear group-hover:w-full" />
            <span className="absolute top-0 left-0 w-0.5 h-0 bg-[#252525] transition-all duration-300 ease-linear group-hover:h-full" />
            <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#252525] transition-all duration-300 ease-linear group-hover:w-full" />
            <span className="absolute bottom-0 right-0 w-0.5 h-0 bg-[#252525] transition-all duration-300 ease-linear group-hover:h-full" />
          </span>
          Contact
        </a>
      </nav>

      {/* Mobile navigation dropdown */}
      <nav className={`absolute top-14 left-0 right-0 bg-[#CCCCCC] border-b border-[#171717]/20 md:hidden flex flex-col transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
        <a href="#experience" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 cursor-pointer text-sm hover:bg-[#171717]/5 transition-colors border-b border-[#171717]/10">
          Experience
        </a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 cursor-pointer text-sm hover:bg-[#171717]/5 transition-colors border-b border-[#171717]/10">
          Projects
        </a>
        <a href="/about" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 cursor-pointer text-sm hover:bg-[#171717]/5 transition-colors border-b border-[#171717]/10">
          About
        </a>
        <a href="/contact" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 cursor-pointer text-sm font-medium hover:bg-[#171717]/5 transition-colors">
          Contact
        </a>
      </nav>
    </header>
  );
}
