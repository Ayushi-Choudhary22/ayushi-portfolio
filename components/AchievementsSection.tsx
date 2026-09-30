import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Trophy, Award, CheckCircle, ExternalLink, ShieldCheck, Flame } from "lucide-react";

export default function AchievementsSection() {
  const { achievements } = PORTFOLIO_DATA;

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8E1E46]/10 text-[#8E1E46] text-xs font-semibold uppercase tracking-wider">
          <Trophy className="w-3 h-3" />
          <span>Milestones & Recognition</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18181B] tracking-tight">
          Hackathons, team competitions, and community work.
        </h2>
        <p className="text-sm text-[#52525B] max-w-2xl">
          Verified milestones earned through collaborative engineering challenges, open source contributions, and student community initiatives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8E3D9] shadow-xs card-hover flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-[#F5F3EE] text-[#8E1E46]">
                    {item.category === "hackathon" && <Trophy className="w-4 h-4" />}
                    {item.category === "competition" && <Flame className="w-4 h-4 text-orange-600" />}
                    {item.category === "certification" && <Award className="w-4 h-4 text-indigo-600" />}
                    {item.category === "community" && <ShieldCheck className="w-4 h-4 text-emerald-600" />}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#71717A] uppercase tracking-wider block">
                      {item.organization}
                    </span>
                    <span className="text-xs text-[#52525B]">{item.period}</span>
                  </div>
                </div>

                {item.badgeText && (
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#FAF9F6] text-[#8E1E46] border border-[#E8E3D9]">
                    {item.badgeText}
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#18181B]">
                  {item.title}
                </h3>
                {item.team && (
                  <p className="text-xs font-semibold text-[#8E1E46] mt-0.5">
                    Team: {item.team}
                  </p>
                )}
                {item.metric && (
                  <p className="text-xs font-bold text-emerald-700 bg-emerald-50 inline-block px-2 py-0.5 rounded-md border border-emerald-200 mt-1">
                    {item.metric}
                  </p>
                )}
              </div>

              <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                {item.description}
              </p>

              {item.highlights && item.highlights.length > 0 && (
                <ul className="space-y-1.5 pt-2 border-t border-[#EBE7DF]">
                  {item.highlights.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#52525B]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#8E1E46] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
