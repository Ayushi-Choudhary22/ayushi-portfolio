import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { LeetCodeIcon } from "@/components/Icons";
import { Code2, ExternalLink, Cpu, CheckCircle2, Terminal } from "lucide-react";

export default function ProblemSolvingSection() {
  const { problemSolving } = PORTFOLIO_DATA;

  return (
    <section id="problem-solving" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8E1E46]/10 text-[#8E1E46] text-xs font-semibold uppercase tracking-wider">
          <Cpu className="w-3 h-3" />
          <span>Problem Solving</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18181B] tracking-tight">
          Beyond Projects: Data Structures & Algorithms.
        </h2>
        <p className="text-sm text-[#52525B] max-w-2xl">
          Practicing DSA in C++ to write efficient logic, analyze time & space complexity, and build algorithmic discipline.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Problem Solving Approach */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E3D9] shadow-xs space-y-6 card-hover">
            <div className="flex items-center justify-between pb-4 border-b border-[#EBE7DF]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#71717A]">
                  Primary DSA Language
                </span>
                <h3 className="text-2xl font-extrabold text-[#18181B] mt-0.5">
                  C++ (Modern C++ Standard)
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#8E1E46] text-white">
                C++
              </span>
            </div>

            <p className="text-sm text-[#52525B] leading-relaxed">
              {problemSolving.description}
            </p>

            <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E8E3D9] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#FFF8EE] text-[#FFA116] border border-[#FFE2BA]">
                  <LeetCodeIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#71717A] block font-medium">LeetCode Platform</span>
                  <span className="text-sm font-bold text-[#18181B]">Regular DSA Practice</span>
                </div>
              </div>

              <a
                href={problemSolving.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#18181B] text-white text-xs font-semibold hover:bg-[#FFA116] hover:text-black transition-colors"
              >
                <span>Visit LeetCode</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Key Topic Areas (Clean card grid, no cheesy snippet) */}
        <div className="lg:col-span-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E3D9] shadow-xs space-y-5 card-hover">
            <div>
              <h3 className="text-base font-bold text-[#18181B]">
                Algorithmic Concepts & Patterns Practiced
              </h3>
              <p className="text-xs text-[#71717A] mt-0.5">
                Core structures explored during competitive and conceptual practice
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {problemSolving.topics.map((t) => (
                <div
                  key={t.name}
                  className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#E8E3D9] space-y-1 hover:border-[#8E1E46]/30 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8E1E46] shrink-0" />
                    <span className="text-xs font-bold text-[#18181B]">{t.name}</span>
                  </div>
                  <p className="text-[11px] text-[#52525B] pl-5">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
