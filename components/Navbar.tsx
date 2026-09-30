"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/Icons";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "DSA", href: "#problem-solving" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#E8E3D9] shadow-xs py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="#hero"
          className="group flex items-center gap-2 font-bold tracking-tight text-lg text-[#18181B] hover:text-[#8E1E46] transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-[#8E1E46] group-hover:scale-125 transition-transform" />
          <span className="tracking-wider">AYUSHI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#F5F3EE]/80 px-3 py-1.5 rounded-full border border-[#E8E3D9]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-[#52525B] hover:text-[#18181B] hover:bg-[#FFFFFF] px-3 py-1.5 rounded-full transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right side social links & CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={PORTFOLIO_DATA.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-[#52525B] hover:text-[#18181B] hover:bg-[#F5F3EE] rounded-lg transition-colors border border-transparent hover:border-[#E8E3D9]"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 text-[#52525B] hover:text-[#0A66C2] hover:bg-[#F5F3EE] rounded-lg transition-colors border border-transparent hover:border-[#E8E3D9]"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.socialLinks.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode Profile"
            className="p-2 text-[#52525B] hover:text-[#FFA116] hover:bg-[#F5F3EE] rounded-lg transition-colors border border-transparent hover:border-[#E8E3D9]"
          >
            <LeetCodeIcon className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-[#18181B] text-white hover:bg-[#8E1E46] transition-colors shadow-xs"
          >
            <span>Let’s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="#contact"
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#18181B] text-white hover:bg-[#8E1E46] transition-colors"
          >
            Contact
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="p-2 rounded-lg text-[#18181B] hover:bg-[#F5F3EE] border border-[#E8E3D9]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAF9F6] border-b border-[#E8E3D9] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#52525B] hover:text-[#8E1E46] hover:bg-[#F5F3EE] px-3 py-2 rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-3 border-t border-[#E8E3D9] flex items-center justify-between">
            <span className="text-xs text-[#71717A]">Profiles</span>
            <div className="flex items-center gap-3">
              <a
                href={PORTFOLIO_DATA.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-[#52525B] hover:text-[#18181B]"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-[#52525B] hover:text-[#0A66C2]"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-[#52525B] hover:text-[#FFA116]"
                aria-label="LeetCode"
              >
                <LeetCodeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
