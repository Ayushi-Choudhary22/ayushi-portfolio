import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8E1E46]/10 text-[#8E1E46] text-xs font-semibold uppercase tracking-wider">
          <Briefcase className="w-3 h-3" />
          <span>Practical Experience</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18181B] tracking-tight">
          Development experience & community work.
        </h2>
        <p className="text-sm text-[#52525B] max-w-2xl">
          Real hands-on development on practical full-stack projects alongside student community and social media leadership.
        </p>
      </div>

      <div className="space-y-6">
        {experience.map((exp) => (
          <div
            key={exp.id}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E3D9] shadow-xs card-hover"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#EBE7DF]">
              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="text-lg sm:text-xl font-bold text-[#18181B]">
                    {exp.role}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#8E1E46]/10 text-[#8E1E46]">
                    {exp.mode}
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#52525B] mt-0.5">
                  {exp.organization}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-[#71717A]">
                <Calendar className="w-3.5 h-3.5 text-[#8E1E46]" />
                <span>{exp.period}</span>
              </div>
            </div>

            <div className="py-4 space-y-4">
              <p className="text-sm text-[#52525B] leading-relaxed">
                {exp.summary}
              </p>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#71717A] block">
                  Responsibilities & Activities
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#52525B]">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8E3D9] flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-[#71717A] mr-1">Skills & Tools:</span>
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-md bg-[#FAF9F6] text-xs font-medium text-[#18181B] border border-[#E8E3D9]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
