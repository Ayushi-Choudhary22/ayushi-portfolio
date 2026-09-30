import { PORTFOLIO_DATA } from "@/data/portfolioData";
import ProjectCard from "./ProjectCard";
import { FolderGit2, Sparkles } from "lucide-react";

export default function ProjectsSection() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8E1E46]/10 text-[#8E1E46] text-xs font-semibold uppercase tracking-wider">
          <FolderGit2 className="w-3 h-3" />
          <span>Featured Work</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18181B] tracking-tight">
          Practical applications built from real needs.
        </h2>
        <p className="text-sm text-[#52525B] max-w-2xl">
          Each project represents hands-on full-stack development, integrating frontend interfaces with Node.js backends, databases, authentication, and state management.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
