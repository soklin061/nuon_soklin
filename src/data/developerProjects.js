export const developerProjectsData = [
  {
    id: "dev-1",
    title: "Learning Management System (LMS)",
    category: "Full-Stack Web App",
    badge: "Production Live",
    description: "Real-time task board with drag-and-drop kanban, markdown notes, team chat, role-based access control, and webhook integrations.",
    image: "/images/project/p01.jpg",
    techStack: ["React", "Vite", "Tailwind CSS", "Laravel", "MySQL"],
    webUrl: "http://dpdc720.dpdatacenter.com",
    // githubUrl: "https://github.com/example/apexflow",
    stats: { stars: "320+", users: "1.2k" },
    highlights: [
      "User login , Email : tester@gmail.com , Password : tester123",
      "Drag-and-drop kanban with optimistic UI",
      "Tailwind responsive layout with dark mode toggle",
      "Hosting Service by Duan Penh Data Center (DPDC) in Cambodia"
    ]
  },
  {
    id: "dev-2",
    title: "News Management System",
    category: "Full-Stack Web App",
    badge: "Featured App",
    description: "Ultra-fast headless online storefront featuring instant search filtering, multi-currency cart, Stripe payment checkout, and animated transitions.",
    image: "/images/project/p02.jpg",
    techStack: ["React", "Vite", "Tailwind CSS", "Laravel", "MySQL"],
    webUrl: "https://newsl.wuaze.com",
    githubUrl: "",
    stats: { stars: "450+", speed: "99 Lighthouse" },
    highlights: [
      "User login , Email : admin@gmail.com , Password : password",
      "Drag-and-drop kanban with optimistic UI",
      "Tailwind responsive layout with dark mode toggle",
      "Hosting Service by InfinityFree"
    ]
  },
  {
    id: "dev-5",
    title: "Personal Portfolio & Showcase",
    category: "Frontend Application",
    badge: "Featured",
    description: "Modern, high-performance personal portfolio showcasing interactive project demos, responsive case studies, dynamic filtering, and polished motion transitions.",
    image: "/images/project/p05.jpg",
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    webUrl: "",
    githubUrl: "",
    stats: { performance: "99 Lighthouse", accessibility: "100%" },
    highlights: [
      "Near-perfect Lighthouse audit scores for performance, SEO, and accessibility",
      "Tailwind CSS responsive design with seamless dark/light theme toggle",
      "Modular component architecture optimized for fast asset delivery"
    ]
  },
  {
    id: "dev-3",
    title: "News Application (Web App)",
    category: "Web Application",
    badge: "Interactive Demo",
    description: "Interactive front-end prototype designed for demonstration purposes, showcasing dynamic financial charting, mock PDF report generation, and modular layout previews using local mock datasets.",
    image: "/images/project/p03.jpg",
    techStack: ["React", "Vite", "Tailwind CSS", "Chart.js"],
    webUrl: "https://dailynews-two.vercel.app",
    githubUrl: "",
    stats: { latency: "< 50ms", reports: "15k+" },
    highlights: [
      "Interactive UI prototype powered entirely by mock data",
      "Client-side PDF export demonstration",
      "Modular dashboard widget grid layout"
    ]
  },
  {
    id: "e-learning-ui",
    title: "E-Learning Platform (UI Demo)",
    category: "Web Application / Frontend Concept",
    badge: "UI Demo",
    description: "Interactive frontend prototype for a modern e-learning portal, featuring responsive course catalogs, lesson navigation, student dashboards, and simulated playback states.",
    image: "/images/project/p04.jpg",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    webUrl: "https://learningapp-lemon-phi.vercel.app",
    githubUrl: "",
    stats: { screens: "12+ Pages", components: "15+ UI Cards" },
    highlights: [
      "Pixel-perfect responsive layout built from custom Figma design tokens",
      "Interactive mock states for course progress, video player, and quiz modules",
      "Zero backend dependencies with clean, modular component architecture"
    ]
  }
];
