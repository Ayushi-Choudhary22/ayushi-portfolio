import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GraduationCap, Code2, Users, Layers, MapPin, Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8E1E46]/10 text-[#8E1E46] text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3 h-3" />
          <span>About Me</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18181B] tracking-tight">
          How I build and what I care about.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Natural first-person narrative */}
        <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#52525B] leading-relaxed">
          {PORTFOLIO_DATA.about.paragraphs.map((p, idx) => (
            <p key={idx} className="bg-white/60 p-4 rounded-xl border border-[#E8E3D9]">
              {p}
            </p>
          ))}

          {/* Quick statement on architecture */}
          <div className="p-4 rounded-xl bg-[#F5F3EE] border border-[#E8E3D9] text-xs sm:text-sm text-[#18181B] font-medium flex items-center gap-3">
            <Layers className="w-5 h-5 text-[#8E1E46] shrink-0" />
            <span>
              Primary focus: Practical web architecture, authentication pipelines, state management, and robust backend CRUD workflows.
            </span>
          </div>
        </div>

        {/* Right Column: Grounded Academic & Focus Details */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-2xl p-6 border border-[#E8E3D9] shadow-xs space-y-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#71717A]">
              Academic & Community Overview
            </h3>

            <div className="space-y-4 divide-y divide-[#EBE7DF]">
              <div className="flex items-start gap-3.5 pt-1">
                <GraduationCap className="w-5 h-5 text-[#8E1E46] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#18181B]">B.Tech Computer Science & Engineering</h4>
                  <p className="text-xs text-[#52525B]">JECRC University, Jaipur (2023–2027)</p>
                  <p className="text-xs font-semibold text-[#8E1E46] mt-0.5">CGPA: 9.19</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4">
                <Code2 className="w-5 h-5 text-[#8E1E46] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#18181B]">Core Stack & Problem Solving</h4>
                  <p className="text-xs text-[#52525B]">
                    MERN/Next.js, Node.js, Express, MongoDB Atlas, REST APIs, and DSA in C++.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4">
                <Users className="w-5 h-5 text-[#8E1E46] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#18181B]">Developer Communities</h4>
                  <p className="text-xs text-[#52525B]">
                    DevCrest core team, GDSC JU CP volunteer, Coding Ninjas JU volunteer.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4">
                <MapPin className="w-5 h-5 text-[#8E1E46] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#18181B]">Location</h4>
                  <p className="text-xs text-[#52525B]">Jaipur, Rajasthan, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
