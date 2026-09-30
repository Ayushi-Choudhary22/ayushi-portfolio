# Ayushi Choudhary — Personal Developer Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live_Portfolio-ayushi--portfolio--rouge.vercel.app-8E1E46?style=for-the-badge&logo=vercel)](https://ayushi-portfolio-rouge.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

> 🌐 **Live Website:** [https://ayushi-portfolio-rouge.vercel.app](https://ayushi-portfolio-rouge.vercel.app)

A production-quality personal portfolio website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🌟 Highlights & Features

- **Interactive Centered Developer Hero**:
  - Central developer portrait with real-time cursor, gaze, and head perspective tracking.
  - Interactive reaction buttons (`[Look Left]`, `[Say Hi / Wave 👋]`, `[Look Right]`) and contextual status pills.
  - Flanked symmetrically by key academic credentials (JECRC University, CGPA: 9.19), full-stack core stack, DSA in C++, and hackathon milestones.
- **Source of Truth Authenticity**:
  - Represents Ayushi Choudhary: B.Tech CSE (2023–2027) at JECRC University, Jaipur (CGPA: 9.19).
  - Accurate, uninflated full-stack technical background (React, Next.js, Node.js, Express, MongoDB Atlas, REST APIs, Firebase, C++ DSA).
  - No corporate buzzwords or artificial claims.
- **Curated 3 Production Case Studies**:
  - **MediMitra**: Full-stack hospital & OPD queue management system with role-based dashboards and QR patient history.
  - **Rakshak**: Smart India Hackathon 2024 National Finalist police asset inventory platform (GP Store workflow, status indicator threshold badges).
  - **Pawlx**: B2C Pet care & foster/adoption ecosystem.
- **Beyond Projects (DSA)**:
  - C++ problem solving showcase with direct link to Ayushi's LeetCode profile.
- **Milestones & Recognition**:
  - Smart India Hackathon 2024 National Finalist (Team Code_Blooded)
  - Amazon ML Challenge 2025 (AIR 60 / 84,000+ participants, Top 0.1%, team competition experience)
  - GirlScript Summer of Code (500+ milestone points)
  - Postman API Fundamentals Student Expert
  - Google Cloud Computing Foundation
  - Campus Developer Communities (DevCrest, GDSC, Coding Ninjas)
- **Direct Contact Experience**:
  - Direct mail client dispatch with pre-filled message + one-click email copy button (`ayushichoudhary261@gmail.com`).

---

## 📂 Asset Structure & Personalized Character Replacement

All character and project assets are organized in:
```
public/
├── images/
│   ├── hero/
│   │   ├── hero-idle.jpg        # Normal focused working at laptop
│   │   ├── hero-look-left.jpg   # Looking left
│   │   ├── hero-look-right.jpg  # Looking right
│   │   ├── hero-greet.jpg       # Friendly wave, headphones at neck
│   │   ├── hero-point.jpg       # Pointing downward
│   │   └── hero-placeholder.png
│   ├── projects/
│   │   ├── medimitra.jpg
│   │   ├── rakshak.jpg
│   │   ├── pawlx.jpg
│   │   ├── evenza.jpg
│   │   └── whiteboard.jpg
│   └── ayushi-reference.jpg     # Drop your real photo here to update avatar
```

### To replace the character with your real photograph:
1. Save your photograph as:
   `public/images/ayushi-reference.jpg`
2. If you generate or extract new matching frames from video/photos, replace the 5 images in `public/images/hero/` maintaining the same names (`hero-idle.jpg`, `hero-look-left.jpg`, etc.).

---

## 🚀 Running Locally

1. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Modifying Content

All portfolio information is managed in one central file:
`data/portfolioData.ts`

Any edits to skills, projects, achievements, education, or links can be made directly in this file without modifying component logic.
