export interface Project {
  id: string;
  name: string;
  tagline: string;
  type: string;
  badge?: string;
  problem: string;
  solution: string;
  myContribution: string;
  techStack: string[];
  keyFeatures: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlight?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  category: "competition" | "hackathon" | "certification" | "community";
  metric?: string;
  badgeText?: string;
  highlights?: string[];
  team?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  mode: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Ayushi Choudhary",
    title: "Full-Stack Developer | Problem Solver",
    heroHeading: "Hi, I’m Ayushi.",
    heroSubheading: "Full-Stack Developer | Problem Solver",
    heroIntro: "I build practical web applications, solve problems through code, and learn by turning ideas into working products.",
    email: "ayushichoudhary261@gmail.com",
    location: "Jaipur, Rajasthan, India",
    university: "JECRC University",
    degree: "B.Tech in Computer Science & Engineering",
    gradYear: "2023–2027",
    cgpa: "9.19",
  },
  socialLinks: {
    github: "https://github.com/Ayushi-Choudhary22",
    linkedin: "https://www.linkedin.com/in/ayushi-choudhary-3b7707285",
    leetcode: "https://leetcode.com/u/Ayushi-Choudhary/",
    email: "mailto:ayushichoudhary261@gmail.com",
  },
  about: {
    paragraphs: [
      "I am a B.Tech Computer Science and Engineering student at JECRC University, Jaipur (2023–2027). I enjoy building full-stack web applications and feel at home working across both the frontend and backend.",
      "I like building things that solve an actual problem. Most of my learning has happened by taking an idea, building the interface, connecting the backend, debugging what breaks, and gradually making the product better. I enjoy understanding how APIs, authentication, databases, and UI components connect into a cohesive, dependable web application.",
      "Beyond building projects, I practice Data Structures & Algorithms using C++, participate in hackathons, and contribute to developer communities on campus.",
    ],
    highlights: [
      { label: "Degree", value: "B.Tech CSE (2023–2027)" },
      { label: "University", value: "JECRC University, Jaipur" },
      { label: "Current CGPA", value: "9.19" },
      { label: "Focus", value: "Practical Full-Stack & Systems" },
    ],
  },
  skills: {
    languages: [
      { name: "C++", level: "DSA & Problem Solving" },
      { name: "JavaScript", level: "Web & Full-Stack" },
      { name: "TypeScript", level: "Typed Applications" },
      { name: "C", level: "Systems Fundamentals" },
      { name: "Java", level: "Object Oriented" },
      { name: "SQL", level: "Relational Queries" },
      { name: "Python", level: "Basic / Scripting" },
    ],
    frontend: [
      "HTML5",
      "CSS3",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Responsive Web Development",
      "Component-Based UI",
      "Client & Server Routing",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "CRUD Operations",
      "Middleware Architecture",
      "Authentication & JWT",
      "Firebase Authentication",
      "Role-Based Access Control (RBAC)",
      "API Testing (Postman)",
    ],
    databasesAndServices: [
      "MongoDB",
      "MongoDB Atlas",
      "Mongoose ORM",
      "Firebase Services",
      "Gemini API (Assistant Integration)",
    ],
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
      "Postman",
    ],
    computerScience: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Computer Networks",
      "TCP/IP & DNS",
    ],
  },
  projects: [
    {
      id: "medimitra",
      name: "MediMitra",
      tagline: "Full-Stack Hospital & OPD Queue Management System",
      type: "Full-Stack Healthcare Workflow Platform",
      badge: "Featured Project",
      problem:
        "Hospital queues and OPD waiting times can be exhausting and stressful for patients and their families. Without transparent queue updates and digital patient history, reception desks and doctors face bottlenecks.",
      solution:
        "A full-stack hospital management web application designed to connect patient, doctor, and receptionist workflows. Features live queue tracking, auto-generated token numbers, QR-based patient history, OPD test modules, and online consultation support with auto-generated meeting links.",
      myContribution:
        "Engineered the full-stack architecture using React (Vite) and Node.js/Express with MongoDB Atlas. Built role-based access control (Patient, Doctor, Receptionist), token counter and queue routes/controllers, patient registration flow, QR code history scanning, and an assistant feature using Gemini API.",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB Atlas",
        "Mongoose",
        "Firebase",
        "Gemini API",
        "REST APIs",
      ],
      keyFeatures: [
        "Role-based dashboards for Receptionists, Doctors, and Patients",
        "Live token queue tracking and consultation status updates",
        "QR-based patient medical record scanner for doctors",
        "OPD lab test and radiology/X-ray scheduling module",
        "Online consultation link generation for remote follow-ups",
      ],
      githubUrl: "https://github.com/Ayushi-Choudhary22/MediMitra",
      highlight: true,
    },
    {
      id: "rakshak",
      name: "Rakshak",
      tagline: "Police Inventory & Departmental Asset Management System",
      type: "Smart India Hackathon 2024 National Finalist",
      badge: "SIH '24 National Finalist",
      problem:
        "Police equipment, arms, uniforms, and station requisitions were historically logged manually, making stock levels across diverse police stations difficult to track in real time and prone to supply shortages.",
      solution:
        "A digitized police inventory and asset distribution platform connecting central department procurement with local police stations. Features real-time stock monitoring, automated requisitions, and threshold-based visual status alerts.",
      myContribution:
        "Worked on the GP Store inventory layer, GP Store user interface, Firebase authentication, station-level requisition flows, and visual inventory status indicators (Red for High Stock, Yellow for Low Stock, Green for Normal Stock), collaborating within team Code_Blooded.",
      techStack: [
        "TypeScript",
        "Next.js",
        "React",
        "Firebase Auth",
        "MongoDB Atlas",
        "Tailwind CSS",
        "Axios",
      ],
      keyFeatures: [
        "GP Store intermediary distribution workflow between department and stations",
        "Threshold-based visual indicators (Red: High, Yellow: Low, Green: Normal)",
        "Station asset distribution table and requisition approval pipeline",
        "Equipment allocation filters by station, category, and date range",
        "Role-based secure authentication with Firebase",
      ],
      githubUrl: "https://github.com/Ayushi-Choudhary22/Rakshak-Police-Inventory-System",
      liveUrl: "https://rakshak-police-inventory-system.vercel.app",
      highlight: true,
    },
    {
      id: "pawlx",
      name: "Pawlx",
      tagline: "Modern B2C Pet Care Ecosystem & Adoption Network",
      type: "Full-Stack Web Platform",
      badge: "Live Deployment",
      problem:
        "Pet care services—such as veterinary consultations, certified sitters, grooming, and pet foster/adoption—are scattered across unverified platforms, making trusted care difficult to coordinate.",
      solution:
        "A centralized MERN-stack pet care ecosystem offering veterinary bookings, verified pet sitters, foster and permanent adoption with identity verification, unified calendar scheduling, and a curated pet marketplace.",
      myContribution:
        "Developed full-stack features including service booking interfaces, foster and adoption listing workflows, verified user profile flows, calendar scheduling, and responsive UI components connected to an Express/MongoDB backend.",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB Atlas",
        "REST APIs",
        "Vercel",
        "Render",
      ],
      keyFeatures: [
        "Veterinary check-up and vaccination booking module",
        "Certified pet sitter profiles with ratings and hourly rates",
        "Verified foster & permanent pet adoption listings",
        "Unified appointment calendar and care alerts",
        "Curated pet marketplace with category filtering",
      ],
      githubUrl: "https://github.com/Ayushi-Choudhary22/Pawlx",
      liveUrl: "https://pawlx-xfoa.vercel.app/",
      highlight: true,
    },
  ] as Project[],
  experience: [
    {
      id: "devcrest-social",
      role: "Social Media & Community Outreach",
      organization: "DevCrest (Tech Community)",
      period: "2024–Present",
      mode: "Campus Community",
      summary:
        "Leading social media communication, technical event promotions, and community engagement for DevCrest at JECRC University.",
      responsibilities: [
        "Managing official social media channels, designing technical update posts, and driving student developer outreach.",
        "Promoting campus hackathons, technical workshops, and coding challenges across student networks.",
        "Collaborating with the core technical team to create engaging content on full-stack web development and open source.",
        "Facilitating community interaction and onboarding new members into campus developer initiatives.",
      ],
      technologies: ["Community Outreach", "Content Strategy", "Event Promotion", "Developer Engagement"],
    },
    {
      id: "pawlx-dev",
      role: "Full-Stack Project Development",
      organization: "Pawlx Project",
      period: "Independent Development",
      mode: "Full-Stack Experience",
      summary:
        "Hands-on architectural and feature development for the Pawlx pet care ecosystem, taking the platform from initial concept to a production MERN deployment.",
      responsibilities: [
        "Engineered end-to-end user workflows for foster/adoption listings and veterinary appointment bookings.",
        "Built and connected Node.js/Express REST endpoints with MongoDB Atlas collections.",
        "Designed responsive, accessible component interfaces in React with clean state management.",
        "Tested and deployed the production frontend on Vercel and backend microservices on Render.",
      ],
      technologies: ["React", "Node.js", "Express.js", "MongoDB Atlas", "REST APIs", "Vercel"],
    },
  ] as ExperienceItem[],
  achievements: [
    {
      id: "sih-2024",
      title: "Smart India Hackathon 2024 — National Finalist",
      organization: "Ministry of Education & AICTE",
      period: "2024",
      category: "hackathon",
      team: "Code_Blooded",
      badgeText: "National Finalist",
      description:
        "Selected as a National Finalist at Smart India Hackathon 2024 with team Code_Blooded for Rakshak, a digitized police inventory and departmental asset distribution management system.",
      highlights: [
        "Competed nationally among top engineering teams across India.",
        "Designed and implemented the GP Store inventory interface and status indicators.",
        "Collaborated on full-stack architecture and real-time asset tracking.",
      ],
    },
    {
      id: "amazon-ml-2025",
      title: "Amazon ML Challenge 2025 — AIR 60 (Top 0.1%)",
      organization: "Amazon",
      period: "2025",
      category: "competition",
      metric: "AIR 60 / 84,000+ Participants",
      badgeText: "AIR 60",
      description:
        "Participated in the Amazon ML Challenge 2025 competition as part of a competitive team, securing All India Rank 60 out of 84,000+ registered participants (top 0.1%) with a SMAPE score of 42.66.",
      highlights: [
        "Team competition experience working with multimodal modeling (Gemma and SigLIP).",
        "Collaborated on data pipeline handling, evaluation metrics, and submission workflows.",
        "Valuable hands-on exposure to competitive machine learning problem solving in a team setting.",
      ],
    },
    {
      id: "postman-expert",
      title: "Postman API Fundamentals Student Expert",
      organization: "Postman",
      period: "Certified",
      category: "certification",
      badgeText: "Certified",
      description:
        "Demonstrated proficiency in RESTful API fundamentals, requests, responses, headers, authentication, testing scripts, and automated collection runs in Postman.",
      highlights: [
        "Practical understanding of API contracts and debugging.",
        "Writing test assertions and monitoring endpoint status.",
      ],
    },
    {
      id: "gcp-foundation",
      title: "Google Cloud Computing Foundation",
      organization: "Google Cloud",
      period: "Completed",
      category: "certification",
      badgeText: "Foundation",
      description:
        "Completed foundational coursework covering cloud computing basics, compute, storage, networking fundamentals, and cloud resource management.",
      highlights: [
        "Gained clarity on cloud networking, storage buckets, and serverless concepts.",
      ],
    },
    {
      id: "gssoc-2024",
      title: "GirlScript Summer of Code 2024",
      organization: "GirlScript Foundation",
      period: "2024",
      category: "community",
      badgeText: "500+ Points Milestone",
      description:
        "Participated in open-source contributions across community repositories, solving issues, refining documentation, and collaborating with project maintainers.",
      highlights: [
        "Achieved the 500+ contribution points milestone.",
        "Enhanced Git/GitHub workflows, pull request reviews, and open-source collaboration.",
      ],
    },
    {
      id: "campus-communities",
      title: "Campus Tech Community Leadership & Volunteering",
      organization: "JECRC University Tech Communities",
      period: "2023–Present",
      category: "community",
      badgeText: "Active Community",
      description:
        "Actively contributing to campus developer culture as part of the DevCrest core & social media team, GDSC JECRC Competitive Programming volunteer, and Coding Ninjas JU volunteer.",
      highlights: [
        "DevCrest social media team: creating tech content, event promotions, and community announcements.",
        "Google Developer Student Clubs (GDSC) CP volunteer facilitating peer problem solving.",
        "Coding Ninjas JU community volunteer helping peers with programming basics.",
        "GitHub profile badges earned: YOLO and Quickdraw.",
      ],
    },
  ] as Achievement[],
  problemSolving: {
    title: "Problem Solving & DSA",
    subtitle: "Writing Clean, Optimal Code in C++",
    primaryLanguage: "C++",
    platform: "LeetCode",
    profileUrl: "https://leetcode.com/u/Ayushi-Choudhary/",
    description:
      "I actively practice Data Structures and Algorithms using C++. Problem solving helps me write efficient backend logic, select appropriate data structures, and approach software engineering with algorithmic clarity and discipline.",
    topics: [
      { name: "Arrays & Strings", desc: "Two pointers, sliding window, prefix sums" },
      { name: "Hashing & Maps", desc: "O(1) lookup efficiency, frequency maps" },
      { name: "Linked Lists & Stacks", desc: "Pointers, recursion, monotonic stacks" },
      { name: "Trees & Graphs", desc: "BFS, DFS, traversals, shortest path basics" },
      { name: "Dynamic Programming", desc: "Memoization and bottom-up state transitions" },
      { name: "Binary Search", desc: "Logarithmic bounds and predicate search" },
    ],
  },
  education: [
    {
      institution: "JECRC University",
      location: "Jaipur, Rajasthan, India",
      degree: "B.Tech in Computer Science & Engineering",
      period: "2023–2027",
      grade: "CGPA: 9.19",
      details:
        "Focusing on Core Computer Science: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks.",
    },
  ],
};
