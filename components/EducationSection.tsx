import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GraduationCap, BookOpen, Award, CheckCircle2 } from "lucide-react";

export default function EducationSection() {
  const { education } = PORTFOLIO_DATA;
  const edu = education[0];

  const coursework = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "Database Management Systems (DBMS)",
    "Operating Systems",
    "Computer Networks",
    "Discrete Mathematics",
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8E1E46]/10 text-[#8E1E46] text-xs font-semibold uppercase tracking-wider">
          <GraduationCap className="w-3 h-3" />
          <span>Academic Foundation</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18181B] tracking-tight">
          Computer science education & degree.
        </h2>
        <p className="text-sm text-[#52525B] max-w-2xl">
          Pursuing B.Tech in Computer Science & Engineering with strong academic standing and core CS fundamentals.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E3D9] shadow-xs card-hover max-w-4xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#EBE7DF]">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#71717A]">
              Undergraduate Degree
            </span>
            <h3 className="text-2xl font-extrabold text-[#18181B]">
              {edu.degree}
            </h3>
            <p className="text-sm font-semibold text-[#8E1E46]">
              {edu.institution} • {edu.location}
            </p>
          </div>

          <div className="flex flex-col sm:items-end gap-1">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#8E1E46] text-white shadow-2xs">
              {edu.grade}
            </span>
            <span className="text-xs font-medium text-[#71717A]">
              {edu.period}
            </span>
          </div>
        </div>

        <div className="py-6 space-y-4">
          <p className="text-sm text-[#52525B] leading-relaxed">
            {edu.details}
          </p>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#71717A] block">
              Core Technical Coursework
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {coursework.map((course) => (
                <div
                  key={course}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAF9F6] border border-[#EBE7DF] text-xs font-medium text-[#18181B]"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
