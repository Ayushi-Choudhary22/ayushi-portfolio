"use client";

import HeroCharacter from "./HeroCharacter";
import { ArrowDown, Code2, Trophy, MousePointer, GraduationCap } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex flex-col justify-between pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden hero-vignette-edges"
    >
      {/* Background Soft Center Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] hero-glow-center rounded-full pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full my-auto flex flex-col items-center text-center space-y-8">
        {/* Top Centered Header */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E3D9] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-[#52525B]">
              B.Tech CSE @ JECRC University • Jaipur, India
            </span>
          </div>

          <div className="space-y-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#18181B]">
              {PORTFOLIO_DATA.personal.heroHeading}
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-[#8E1E46]">
              {PORTFOLIO_DATA.personal.heroSubheading}
            </p>
          </div>

          <p className="text-sm sm:text-base text-[#52525B] leading-relaxed max-w-xl mx-auto">
            {PORTFOLIO_DATA.personal.heroIntro}
          </p>
        </div>

        {/* Middle: Side-by-Side Content with Face in the Middle */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center justify-center">
          {/* Left Side Info Card */}
          <div className="lg:col-span-3 flex flex-col gap-3 order-2 lg:order-1 text-left">
            <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#E8E3D9] shadow-2xs space-y-2 card-hover">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8E1E46]">
                <GraduationCap className="w-4 h-4" />
                <span>Academics</span>
              </div>
              <h3 className="text-sm font-bold text-[#18181B]">JECRC University</h3>
              <p className="text-xs text-[#52525B]">B.Tech in Computer Science & Engineering (2023–2027)</p>
              <div className="inline-block px-2.5 py-0.5 rounded-md bg-[#8E1E46]/10 text-[#8E1E46] text-xs font-bold">
                CGPA: 9.19
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#E8E3D9] shadow-2xs space-y-2 card-hover">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8E1E46]">
                <Code2 className="w-4 h-4" />
                <span>Core Stack</span>
              </div>
              <p className="text-xs text-[#52525B] leading-relaxed">
                Full-stack web applications with React, Next.js, Node.js, Express, MongoDB Atlas, and REST APIs.
              </p>
            </div>
          </div>

          {/* CENTER: Main Head & Face with Eye & Cursor Tracking */}
          <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
            <HeroCharacter />
          </div>

          {/* Right Side Info Card */}
          <div className="lg:col-span-3 flex flex-col gap-3 order-3 text-left">
            <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#E8E3D9] shadow-2xs space-y-2 card-hover">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8E1E46]">
                <Code2 className="w-4 h-4" />
                <span>DSA Practice</span>
              </div>
              <h3 className="text-sm font-bold text-[#18181B]">Problem Solving in C++</h3>
              <p className="text-xs text-[#52525B]">
                Regular practice on LeetCode focusing on arrays, pointers, hashing, and algorithms.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#E8E3D9] shadow-2xs space-y-2 card-hover">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8E1E46]">
                <Trophy className="w-4 h-4" />
                <span>Key Milestones</span>
              </div>
              <p className="text-xs text-[#52525B] leading-relaxed">
                Smart India Hackathon 2024 National Finalist (Rakshak) & Amazon ML Challenge 2025 AIR 60.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Cue & Action CTAs */}
        <div className="flex flex-col items-center gap-4 pt-2">
          <div className="flex items-center gap-2 text-xs font-medium text-[#71717A]">
            <MousePointer className="w-3.5 h-3.5 text-[#8E1E46] animate-pulse" />
            <span>Move your cursor anywhere across the screen to guide her gaze</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#18181B] text-white text-xs sm:text-sm font-semibold hover:bg-[#8E1E46] transition-colors shadow-xs"
            >
              <span>Explore 3 Featured Projects</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#18181B] text-xs sm:text-sm font-semibold border border-[#E8E3D9] hover:bg-[#F5F3EE] transition-colors"
            >
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Exploration Anchor */}
      <div className="w-full flex justify-center items-center pt-4">
        <a
          href="#about"
          className="group inline-flex items-center gap-1.5 text-xs font-medium text-[#71717A] hover:text-[#8E1E46] transition-colors"
        >
          <span>Explore about me</span>
          <ArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
}
