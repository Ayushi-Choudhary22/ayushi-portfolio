import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Code, Layout, Server, Database, Wrench, BookOpen } from "lucide-react";

export default function SkillsSection() {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8E1E46]/10 text-[#8E1E46] text-xs font-semibold uppercase tracking-wider">
          <Wrench className="w-3 h-3" />
          <span>Technical Skills</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18181B] tracking-tight">
          Technologies I actually use and understand.
        </h2>
        <p className="text-sm text-[#52525B] max-w-2xl">
          Grounded in practical full-stack web development, backend APIs, and computer science fundamentals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Programming Languages */}
        <div className="bg-white rounded-2xl p-6 border border-[#E8E3D9] shadow-xs card-hover flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#F5F3EE] text-[#8E1E46]">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#18181B]">Languages</h3>
                <p className="text-xs text-[#71717A]">Core problem solving & programming</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {skills.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="px-3 py-1.5 rounded-lg bg-[#FAF9F6] border border-[#E8E3D9] text-xs font-medium text-[#18181B] flex items-center justify-between gap-2"
                >
                  <span className="font-semibold">{lang.name}</span>
                  <span className="text-[10px] text-[#71717A]">({lang.level})</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Frontend Development */}
        <div className="bg-white rounded-2xl p-6 border border-[#E8E3D9] shadow-xs card-hover flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#F5F3EE] text-[#8E1E46]">
                <Layout className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#18181B]">Frontend</h3>
                <p className="text-xs text-[#71717A]">Component architecture & user interfaces</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {skills.frontend.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg bg-[#FAF9F6] border border-[#E8E3D9] text-xs font-medium text-[#18181B]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Backend & API Development */}
        <div className="bg-white rounded-2xl p-6 border border-[#E8E3D9] shadow-xs card-hover flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#F5F3EE] text-[#8E1E46]">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#18181B]">Backend & APIs</h3>
                <p className="text-xs text-[#71717A]">Server logic, authentication & routes</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {skills.backend.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg bg-[#FAF9F6] border border-[#E8E3D9] text-xs font-medium text-[#18181B]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Databases & Services */}
        <div className="bg-white rounded-2xl p-6 border border-[#E8E3D9] shadow-xs card-hover flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#F5F3EE] text-[#8E1E46]">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#18181B]">Databases & Services</h3>
                <p className="text-xs text-[#71717A]">Data modeling, cloud DBs & integrations</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {skills.databasesAndServices.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg bg-[#FAF9F6] border border-[#E8E3D9] text-xs font-medium text-[#18181B]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Developer Tools */}
        <div className="bg-white rounded-2xl p-6 border border-[#E8E3D9] shadow-xs card-hover flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#F5F3EE] text-[#8E1E46]">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#18181B]">Tools & Workflow</h3>
                <p className="text-xs text-[#71717A]">Daily development & testing tools</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {skills.tools.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg bg-[#FAF9F6] border border-[#E8E3D9] text-xs font-medium text-[#18181B]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Computer Science Fundamentals */}
        <div className="bg-white rounded-2xl p-6 border border-[#E8E3D9] shadow-xs card-hover flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#F5F3EE] text-[#8E1E46]">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#18181B]">Computer Science</h3>
                <p className="text-xs text-[#71717A]">Core academic foundation & systems</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {skills.computerScience.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg bg-[#FAF9F6] border border-[#E8E3D9] text-xs font-medium text-[#18181B]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
