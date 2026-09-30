import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayushi Choudhary | Full-Stack Developer",
  description:
    "A personal portfolio showcasing Ayushi Choudhary's full-stack web development projects, problem-solving work, hackathon experience, and technical skills.",
  keywords: [
    "Ayushi Choudhary",
    "Full-Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Smart India Hackathon",
    "JECRC University",
    "Portfolio",
  ],
  authors: [{ name: "Ayushi Choudhary" }],
  creator: "Ayushi Choudhary",
  metadataBase: new URL("https://ayushichoudhary.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayushichoudhary.dev",
    title: "Ayushi Choudhary | Full-Stack Developer",
    description:
      "A personal portfolio showcasing Ayushi Choudhary's full-stack web development projects, problem-solving work, hackathon experience, and technical skills.",
    siteName: "Ayushi Choudhary Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayushi Choudhary | Full-Stack Developer",
    description:
      "A personal portfolio showcasing Ayushi Choudhary's full-stack web development projects, problem-solving work, hackathon experience, and technical skills.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sansFont.variable} ${monoFont.variable} scroll-smooth`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#FAF9F6] text-[#18181B] selection:bg-[#8E1E46]/15 selection:text-[#8E1E46]">
        {children}
      </body>
    </html>
  );
}
