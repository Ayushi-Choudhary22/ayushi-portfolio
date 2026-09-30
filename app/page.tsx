import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import AchievementsSection from "@/components/AchievementsSection";
import ProblemSolvingSection from "@/components/ProblemSolvingSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#18181B] selection:bg-[#8E1E46]/15 selection:text-[#8E1E46]">
      {/* Top Sticky Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. HERO */}
        <HeroSection />

        {/* 2. ABOUT */}
        <AboutSection />

        {/* 3. SKILLS */}
        <SkillsSection />

        {/* 4. FEATURED PROJECTS */}
        <ProjectsSection />

        {/* 5. EXPERIENCE */}
        <ExperienceSection />

        {/* 6. ACHIEVEMENTS */}
        <AchievementsSection />

        {/* 7. PROBLEM SOLVING / DSA */}
        <ProblemSolvingSection />

        {/* 8. EDUCATION */}
        <EducationSection />

        {/* 9. CONTACT */}
        <ContactSection />
      </main>

      {/* 10. FOOTER */}
      <Footer />
    </div>
  );
}
