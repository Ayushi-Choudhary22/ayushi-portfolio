import { Project } from "@/data/portfolioData";
import { GithubIcon } from "@/components/Icons";
import { ExternalLink, AlertCircle, CheckCircle2, UserCheck, Layers } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      id={project.id}
      className="bg-white rounded-3xl border border-[#E8E3D9] shadow-xs p-6 sm:p-8 card-hover transition-all duration-300 space-y-6"
    >
      {/* Header: Type, Title, Badge, Links */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-[#EBE7DF]">
        <div className="space-y-1">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-bold text-[#8E1E46] uppercase tracking-wider">
              {project.type}
            </span>
            {project.badge && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#8E1E46]/10 text-[#8E1E46] border border-[#8E1E46]/20">
                {project.badge}
              </span>
            )}
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#18181B] tracking-tight">
            {project.name}
          </h3>
          <p className="text-sm text-[#52525B] font-medium">
            {project.tagline}
          </p>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-2.5 shrink-0 pt-1">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-[#18181B] text-white hover:bg-[#8E1E46] transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Repository</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-white text-[#18181B] border border-[#E8E3D9] hover:bg-[#F5F3EE] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#8E1E46]" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>

      {/* Case Study Grid: Problem vs Solution vs Contribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* The Problem */}
        <div className="bg-[#FAF9F6] p-4 sm:p-5 rounded-2xl border border-[#EBE7DF] space-y-2">
          <div className="flex items-center gap-2 font-bold text-sm text-[#18181B]">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <span>The Problem & Need</span>
          </div>
          <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* My Contribution */}
        <div className="bg-[#FAF9F6] p-4 sm:p-5 rounded-2xl border border-[#EBE7DF] space-y-2">
          <div className="flex items-center gap-2 font-bold text-sm text-[#18181B]">
            <UserCheck className="w-4 h-4 text-[#8E1E46]" />
            <span>My Technical Contribution</span>
          </div>
          <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
            {project.myContribution}
          </p>
        </div>
      </div>

      {/* Full Solution Summary */}
      <div className="bg-white p-4 rounded-xl border border-[#E8E3D9] space-y-1">
        <span className="text-xs font-bold uppercase tracking-wider text-[#71717A] block">
          Architecture & Implementation
        </span>
        <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
          {project.solution}
        </p>
      </div>

      {/* Key Features & Tech Stack Footer */}
      <div className="space-y-4 pt-2 border-t border-[#E8E3D9]">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#71717A] block">
            Key Features Implemented
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs text-[#52525B]">
            {project.keyFeatures.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-[#FAF9F6] p-2 rounded-lg border border-[#EBE7DF]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="text-xs font-medium text-[#71717A] mr-1">Stack:</span>
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-[#F5F3EE] text-xs font-semibold text-[#18181B] border border-[#E8E3D9]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
