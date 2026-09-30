# Ayushi Choudhary — Personal Developer Portfolio

A production-quality personal portfolio website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🌟 Highlights & Features

- **Interactive Developer Hero**:
  - Inspired by clean character interaction with fixed camera, warm natural lighting, and three horizontal interaction zones:
    - **Left Zone**: Character glances left with contextual prompt (*"Anyone here on the left?"*)
    - **Right Zone**: Character glances right (*"Anyone here on the right?"*)
    - **Center Zone**: Sequential greeting (*"Hey, it's you!"* → *"Hiiii! 👋"* → *"Check out the portfolio ↓"*), slipping headphones to neck, waving hello, and pointing to portfolio.
  - **Mobile & Touch**: One-tap trigger that waves and points gracefully.
- **Source of Truth Authenticity**:
  - Represents Ayushi Choudhary: B.Tech CSE (2023–2027) at JECRC University, Jaipur (CGPA: 9.19).
  - Accurate, uninflated full-stack technical background (React, Next.js, Node.js, Express, MongoDB Atlas, REST APIs, Firebase, C++ DSA).
  - No corporate buzzwords or artificial claims.
- **Curated Mini Case Studies**:
  - **MediMitra**: Full-stack hospital & OPD queue management system with role-based dashboards and QR patient history.
  - **Rakshak**: Smart India Hackathon 2024 National Finalist police asset inventory platform (GP Store workflow, status indicator threshold badges).
  - **Pawlx**: B2C Pet care & foster/adoption ecosystem.
  - **Evenza**: Campus events and clubs discovery platform (Live on Vercel).
  - **Collaborative Whiteboard**: Real-time canvas diagramming with Socket.IO.
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
