"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <header className="h-14 flex items-center justify-between p-4 relative z-50">
      <Link
        href="/"
        className="uppercase relative group font-bold text-lg cursor-pointer"
        aria-current={isActive("/") ? "page" : undefined}
      >
        LUKE FOURNIER
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-current transition-all duration-300 ease-linear group-hover:w-full" />
      </Link>

      {/* Mobile menu button */}
      <button
        type="button"
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation-mobile"
      >
        <span className={`block w-5 h-0.5 bg-[#171717] transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1" : ""}`} />
        <span className={`block w-5 h-0.5 bg-[#171717] my-1 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-0.5 bg-[#171717] transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1" : ""}`} />
      </button>

      {/* Desktop navigation */}
      <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
        <Link
          href="/experience"
          className="px-4 py-2 cursor-pointer text-sm hover:opacity-70 transition-opacity"
          aria-current={isActive("/experience") ? "page" : undefined}
        >
          Experience
        </Link>
        <Link
          href="/projects"
          className="px-4 py-2 cursor-pointer text-sm hover:opacity-70 transition-opacity"
          aria-current={isActive("/projects") ? "page" : undefined}
        >
          Projects
        </Link>
        <Link
          href="/about"
          className="px-4 py-2 cursor-pointer text-sm hover:opacity-70 transition-opacity"
          aria-current={isActive("/about") ? "page" : undefined}
        >
          About
        </Link>
        <Link
          href="/contact"
          className="relative px-4 py-2 text-sm font-medium cursor-pointer group"
          aria-current={isActive("/contact") ? "page" : undefined}
        >
          <span className="absolute inset-0 rounded-md">
            <span className="absolute top-0 left-0 w-0 h-0.5 bg-[#252525] transition-all duration-300 ease-linear group-hover:w-full" />
            <span className="absolute top-0 left-0 w-0.5 h-0 bg-[#252525] transition-all duration-300 ease-linear group-hover:h-full" />
            <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#252525] transition-all duration-300 ease-linear group-hover:w-full" />
            <span className="absolute bottom-0 right-0 w-0.5 h-0 bg-[#252525] transition-all duration-300 ease-linear group-hover:h-full" />
          </span>
          Contact
        </Link>
      </nav>

      {/* Mobile navigation dropdown */}
      <nav
        id="primary-navigation-mobile"
        aria-label="Primary"
        aria-hidden={!isMenuOpen}
        className={`absolute top-14 left-0 right-0 bg-[#CCCCCC] border-b border-[#171717]/20 md:hidden flex flex-col transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <Link
          href="/experience"
          onClick={() => setIsMenuOpen(false)}
          className="px-4 py-3 cursor-pointer text-sm hover:bg-[#171717]/5 transition-colors border-b border-[#171717]/10"
          aria-current={isActive("/experience") ? "page" : undefined}
        >
          Experience
        </Link>
        <Link
          href="/projects"
          onClick={() => setIsMenuOpen(false)}
          className="px-4 py-3 cursor-pointer text-sm hover:bg-[#171717]/5 transition-colors border-b border-[#171717]/10"
          aria-current={isActive("/projects") ? "page" : undefined}
        >
          Projects
        </Link>
        <Link
          href="/about"
          onClick={() => setIsMenuOpen(false)}
          className="px-4 py-3 cursor-pointer text-sm hover:bg-[#171717]/5 transition-colors border-b border-[#171717]/10"
          aria-current={isActive("/about") ? "page" : undefined}
        >
          About
        </Link>
        <Link
          href="/contact"
          onClick={() => setIsMenuOpen(false)}
          className="px-4 py-3 cursor-pointer text-sm font-medium hover:bg-[#171717]/5 transition-colors"
          aria-current={isActive("/contact") ? "page" : undefined}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
