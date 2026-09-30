"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/Icons";
import { Mail, Copy, Check, Send, MessageSquare } from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      formState.subject || `Portfolio Inquiry from ${formState.name || "Visitor"}`
    );
    const body = encodeURIComponent(
      `Hi Ayushi,\n\n${formState.message}\n\nFrom: ${formState.name} (${formState.email})`
    );
    window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8E1E46]/10 text-[#8E1E46] text-xs font-semibold uppercase tracking-wider">
          <MessageSquare className="w-3 h-3" />
          <span>Get in Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight">
          Let’s build something useful.
        </h2>
        <p className="text-sm text-[#52525B] max-w-2xl">
          Whether you want to discuss full-stack web opportunities, hackathons, or project collaboration, feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info & Social Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8E3D9] shadow-xs space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#71717A] block mb-2">
                Direct Email
              </span>
              <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-[#FAF9F6] border border-[#E8E3D9]">
                <div className="flex items-center gap-2 overflow-hidden">
                  <Mail className="w-4 h-4 text-[#8E1E46] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-[#18181B] truncate">
                    {PORTFOLIO_DATA.personal.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-lg bg-white border border-[#E8E3D9] text-xs font-medium text-[#18181B] hover:bg-[#F5F3EE] transition-colors flex items-center gap-1 shrink-0"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#71717A]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#71717A] block mb-3">
                Developer Profiles
              </span>
              <div className="space-y-2.5">
                <a
                  href={PORTFOLIO_DATA.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#FAF9F6] border border-[#E8E3D9] hover:bg-[#F5F3EE] hover:border-[#8E1E46]/30 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-[#18181B]" />
                    <span className="text-xs sm:text-sm font-semibold text-[#18181B]">
                      GitHub: @Ayushi-Choudhary22
                    </span>
                  </div>
                  <span className="text-xs font-medium text-[#8E1E46] group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </a>

                <a
                  href={PORTFOLIO_DATA.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#FAF9F6] border border-[#E8E3D9] hover:bg-[#F5F3EE] hover:border-[#8E1E46]/30 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                    <span className="text-xs sm:text-sm font-semibold text-[#18181B]">
                      LinkedIn: Ayushi Choudhary
                    </span>
                  </div>
                  <span className="text-xs font-medium text-[#8E1E46] group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </a>

                <a
                  href={PORTFOLIO_DATA.socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#FAF9F6] border border-[#E8E3D9] hover:bg-[#F5F3EE] hover:border-[#8E1E46]/30 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <LeetCodeIcon className="w-4 h-4 text-[#FFA116]" />
                    <span className="text-xs sm:text-sm font-semibold text-[#18181B]">
                      LeetCode: @Ayushi-Choudhary
                    </span>
                  </div>
                  <span className="text-xs font-medium text-[#8E1E46] group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Working Contact Form (Direct Mailto Dispatch) */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleFormSubmit}
            className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E3D9] shadow-xs space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-bold uppercase tracking-wider text-[#71717A] mb-1.5"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#E8E3D9] text-xs sm:text-sm text-[#18181B] focus:outline-none focus:border-[#8E1E46] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold uppercase tracking-wider text-[#71717A] mb-1.5"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#E8E3D9] text-xs sm:text-sm text-[#18181B] focus:outline-none focus:border-[#8E1E46] transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-xs font-bold uppercase tracking-wider text-[#71717A] mb-1.5"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                required
                placeholder="Collaboration / Project / Question"
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#E8E3D9] text-xs sm:text-sm text-[#18181B] focus:outline-none focus:border-[#8E1E46] transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-bold uppercase tracking-wider text-[#71717A] mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                placeholder="Write your note or project requirements here..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#E8E3D9] text-xs sm:text-sm text-[#18181B] focus:outline-none focus:border-[#8E1E46] transition-colors resize-y"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <span className="text-[11px] text-[#71717A]">
                Prepares and launches your native email client with no fake submissions.
              </span>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#18181B] text-white text-xs sm:text-sm font-semibold hover:bg-[#8E1E46] transition-colors shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
