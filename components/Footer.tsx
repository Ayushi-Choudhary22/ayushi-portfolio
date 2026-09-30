import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-[#E8E3D9] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
        <div>
          <p className="font-semibold text-[#18181B]">
            Built by Ayushi Choudhary
          </p>
          <p className="text-[11px] text-[#71717A] mt-0.5">
            Full-Stack Developer • Jaipur, Rajasthan, India
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={PORTFOLIO_DATA.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#52525B] hover:text-[#18181B] transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <span>•</span>
          <a
            href={PORTFOLIO_DATA.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#52525B] hover:text-[#0A66C2] transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <span>•</span>
          <a
            href={PORTFOLIO_DATA.socialLinks.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#52525B] hover:text-[#FFA116] transition-colors"
          >
            <LeetCodeIcon className="w-3.5 h-3.5" />
            <span>LeetCode</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
