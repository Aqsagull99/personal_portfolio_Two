"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FaPython,
  FaServer,
  FaTimes,
  FaReact,
  FaKey,
  FaDatabase,
  FaAws,
  FaFilePdf,
  FaCheckCircle,
  FaExpandAlt,
} from "react-icons/fa";
import {
  SiFastapi,
  SiPostgresql,
  SiNextdotjs,
  SiThreedotjs,
  SiPrisma,
  SiTypescript,
  SiTailwindcss,
  SiSqlalchemy,
  SiSupabase,
  SiVercel,
  SiRailway,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

type Project = {
  id: number;
  title: string;
  role: string;
  tag: string;
  description: string;
  highlights: string[];
  tech: string[];
  image: string;
  gradient: string;
  budget: string;
};

const realProjects: Project[] = [
  {
    id: 3,
    title: "FS ERP — Import/Export Operations Platform",
    role: "Full Stack Developer",
    tag: "Latest Project",
    description:
      "A complete ERP built for an Astro Turf import/export business operating across UAE, KSA and Pakistan. It runs the full money trail end to end — purchase orders and supplier invoices, sales quotations through invoicing, warehouse stock with weighted-average costing, and a double-entry accounts core where every voucher posts to cash, bank and party ledgers automatically.",
    highlights: [
      "15 modules — customers, suppliers, inventory, finance, payroll, loans, assets, reports & document management",
      "Double-entry accounts core — every voucher auto-posts to cash, bank & party ledgers",
      "Purchase orders → supplier invoices, sales quotations → invoicing pipeline",
      "Warehouse stock with weighted-average costing",
      "Database-driven role permissions with a full audit trail",
      "PDF generation on every document",
      "End-to-end solo delivery — design, frontend, backend, database & deployment",
    ],
    tech: [
      "Next.js 14",
      "TypeScript",
      "React 18",
      "FastAPI",
      "Python",
      "PostgreSQL (Supabase)",
      "SQLAlchemy",
      "Alembic",
      "JWT Auth",
      "AWS S3",
      "jsPDF",
      "Vercel",
      "Railway",
    ],
    image: "/Erp-softwere.PNG",
    gradient: "from-[#8B0000] to-[#D4A017]",
    budget: "$1,400",
  },
  {
    id: 1,
    title: "AI-Powered Real Estate Cold Email Automation",
    role: "Developer",
    tag: "Client Project",
    description:
      "Daily scrapes 200+ real estate leads from Google Maps via Apify. AI audits websites for chatbots & social media activity, generates personalized cold emails, and sends via Brevo API with BCC tracking. Fully automatic with cron-job + APScheduler (Pakistan timezone). Dashboard with auto-refresh to monitor all activity.",
    highlights: [
      "Daily scraping of 200+ real estate leads from Google Maps via Apify",
      "AI website audit — detects chatbots & social media activity",
      "Personalized cold email generation sent via Brevo API with BCC tracking",
      "Fully automatic scheduling with Cron Job + APScheduler (Pakistan timezone)",
      "Auto-refresh dashboard to monitor all activity",
    ],
    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL (Neon)",
      "Apify",
      "Brevo API",
      "Clerk Auth",
      "APScheduler",
      "Cron Job",
      "Next.js",
    ],
    image: "/email-automation.png",
    gradient: "from-emerald-500 to-teal-600",
    budget: "$800",
  },
  {
    id: 2,
    title: "Tech Force Pakistan — Course Website & LMS",
    role: "Full Stack Developer",
    tag: "Enterprise Scale",
    description:
      "A full-featured educational platform for Pakistani students offering project-based courses in Graphic Design, Web Development, Digital Marketing, Spoken English, Daraz E-commerce, and AI. Includes public marketing site (3D animated hero, course catalog, blog, contact with lead capture), student learning portal (LMS with video lessons, task tracking, progress bars, certificates), and admin dashboard (course/module/lesson CRUD, lead & enrollment management).",
    highlights: [
      "Public marketing site — 3D animated hero, course catalog, blog & lead capture",
      "Student LMS — video lessons, task tracking, progress bars & certificates",
      "Admin dashboard — course/module/lesson CRUD, lead & enrollment management",
      "6 project-based course categories including Graphic Design, Web Dev & AI",
    ],
    tech: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion",
      "Three.js",
      "Clerk Auth",
      "Prisma",
      "PostgreSQL",
    ],
    image: "/tech-force-pakistan-caurse-website.png",
    gradient: "from-blue-500 to-cyan-600",
    budget: "$5,000 – $15,000",
  },
];

const getTechIcon = (techName: string) => {
  const t = techName.toLowerCase();
  if (t.includes("supabase")) return SiSupabase;
  if (t.includes("postgres")) return SiPostgresql;
  if (t.includes("next")) return SiNextdotjs;
  if (t.includes("typescript")) return SiTypescript;
  if (t.includes("react")) return FaReact;
  if (t.includes("fastapi")) return SiFastapi;
  if (t.includes("python") || t.includes("apscheduler")) return FaPython;
  if (t.includes("sqlalchemy")) return SiSqlalchemy;
  if (t.includes("alembic")) return FaDatabase;
  if (t.includes("jwt") || t.includes("clerk") || t.includes("auth")) return FaKey;
  if (t.includes("aws")) return FaAws;
  if (t.includes("pdf")) return FaFilePdf;
  if (t.includes("vercel")) return SiVercel;
  if (t.includes("railway")) return SiRailway;
  if (t.includes("tailwind")) return SiTailwindcss;
  if (t.includes("framer")) return TbBrandFramerMotion;
  if (t.includes("three")) return SiThreedotjs;
  if (t.includes("prisma")) return SiPrisma;
  return FaServer;
};

const floatingShape = (delay = 0) => ({
  y: [0, -20, 0],
  x: [0, 10, 0],
  scale: [1, 1.1, 1],
  transition: { duration: 4, ease: "easeInOut" as const, repeat: Infinity, delay },
});

export default function RealProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selectedProject]);

  return (
    <section className="relative px-4 md:px-8 lg:px-20 py-20 bg-gradient-to-br from-gray-950 to-black text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <span className="bg-gray-800 text-emerald-300 px-4 py-2 rounded-full text-sm border border-gray-700 mb-4 inline-block">
            Real Client Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
              Production Projects
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Real-world applications built for clients with production deployment
          </p>
        </div>

        <div className="space-y-12">
          {realProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div
                onClick={() => setSelectedProject(project)}
                className="group rounded-2xl overflow-hidden border border-gray-700/60 bg-gray-900/50 backdrop-blur-sm shadow-2xl cursor-pointer hover:border-gray-500/80 hover:shadow-emerald-500/10 transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent md:bg-gradient-to-r md:from-gray-900/80 md:via-transparent md:to-transparent" />
                    <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-black/50 backdrop-blur-[2px] transition-all duration-300">
                      <span className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg">
                        <FaExpandAlt />
                        View Full Details
                      </span>
                    </div>
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white`}
                      >
                        Budget: {project.budget}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/60 border border-white/20 text-gray-200 backdrop-blur-sm">
                        {project.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-emerald-400 font-medium uppercase tracking-wider">
                        {project.role}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-xs text-gray-500">{project.tag}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-emerald-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 6).map((tech, i) => {
                        const Icon = getTechIcon(tech);
                        return (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-xs bg-gray-800 border border-gray-700 text-gray-300 flex items-center gap-1.5"
                          >
                            <Icon className="text-emerald-400" />
                            {tech}
                          </span>
                        );
                      })}
                      {project.tech.length > 6 && (
                        <span className="px-3 py-1 rounded-full text-xs bg-gray-800 border border-gray-700 text-emerald-400 font-medium">
                          +{project.tech.length - 6} more
                        </span>
                      )}
                    </div>
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="text-emerald-400 flex items-center gap-2 text-sm font-medium w-fit cursor-pointer"
                    >
                      Click card to view full case study
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <FaExpandAlt size={12} />
                      </motion.span>
                    </motion.span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md"
          >
            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto overscroll-contain rounded-2xl border border-gray-700/70 bg-gray-900 shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close details"
                className="sticky top-4 float-right mr-4 z-10 w-10 h-10 rounded-full bg-black/70 border border-white/10 hover:bg-red-600/80 text-white flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
              >
                <FaTimes />
              </button>

              <div className="relative h-56 md:h-72">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover object-top"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${selectedProject.gradient} opacity-40 mix-blend-multiply`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center gap-3">
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r ${selectedProject.gradient} text-white shadow-lg`}
                  >
                    Budget: {selectedProject.budget}
                  </span>
                  <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-black/60 border border-white/20 text-gray-200 backdrop-blur-sm">
                    {selectedProject.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8 -mt-4 relative">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-emerald-400 font-medium uppercase tracking-wider">
                    {selectedProject.role}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <h3 className="text-2xl md:text-4xl font-bold mb-4 text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                <h4 className="text-lg font-semibold mb-4 text-emerald-400">
                  Key Highlights
                </h4>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                  {selectedProject.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaCheckCircle className="mt-0.5 shrink-0 text-emerald-400" size={16} />
                      <span className="text-sm text-gray-300 leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-lg font-semibold mb-4 text-emerald-400">
                  Tech Stack
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {selectedProject.tech.map((tech, i) => {
                    const Icon = getTechIcon(tech);
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 * i, duration: 0.3 }}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-gray-800/80 border border-gray-700 text-xs text-gray-200"
                      >
                        <Icon className="shrink-0 text-base text-emerald-400" />
                        <span>{tech}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute top-20 right-10 w-24 h-24 bg-emerald-500/20 rounded-full blur-3xl"
        animate={floatingShape(0)}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl"
        animate={floatingShape(1)}
      />
    </section>
  );
}
