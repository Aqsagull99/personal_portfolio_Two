"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight, FaPython, FaServer, FaGraduationCap } from "react-icons/fa";
import { SiFastapi, SiPostgresql, SiNextdotjs, SiThreedotjs, SiAuth0, SiPrisma } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const realProjects = [
  {
    id: 1,
    title: "AI-Powered Real Estate Cold Email Automation",
    role: "Developer",
    description:
      "Daily scrapes 200+ real estate leads from Google Maps via Apify. AI audits websites for chatbots & social media activity, generates personalized cold emails, and sends via Brevo API with BCC tracking. Fully automatic with cron-job + APScheduler (Pakistan timezone). Dashboard with auto-refresh to monitor all activity.",
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
    icons: [FaPython, SiFastapi, SiPostgresql, FaServer, FaServer, SiAuth0, FaServer, FaServer, SiNextdotjs],
    image: "/email-automation.png",
    gradient: "from-emerald-500 to-teal-600",
    budget: "$800",
  },
  {
    id: 2,
    title: "Tech Force Pakistan — Course Website & LMS",
    role: "Full Stack Developer",
    description:
      "A full-featured educational platform for Pakistani students offering project-based courses in Graphic Design, Web Development, Digital Marketing, Spoken English, Daraz E-commerce, and AI. Includes public marketing site (3D animated hero, course catalog, blog, contact with lead capture), student learning portal (LMS with video lessons, task tracking, progress bars, certificates), and admin dashboard (course/module/lesson CRUD, lead & enrollment management).",
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
    icons: [SiNextdotjs, FaGraduationCap, FaServer, TbBrandFramerMotion, SiThreedotjs, SiAuth0, SiPrisma, SiPostgresql],
    image: "/tech-force-pakistan-caurse-website.png",
    gradient: "from-blue-500 to-cyan-600",
    budget: "$5,000 – $15,000",
  },
];

const floatingShape = (delay = 0) => ({
  y: [0, -20, 0],
  x: [0, 10, 0],
  scale: [1, 1.1, 1],
  transition: { duration: 4, ease: "easeInOut" as const, repeat: Infinity, delay },
});

export default function RealProjects() {
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
            <div className="rounded-2xl overflow-hidden border border-gray-700/60 bg-gray-900/50 backdrop-blur-sm shadow-2xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full min-h-[300px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent md:bg-gradient-to-r md:from-gray-900/80 md:via-transparent md:to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white`}
                    >
                      Budget: {project.budget}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-emerald-400 font-medium uppercase tracking-wider">
                      {project.role}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs text-gray-500">{project.id === 1 ? "Latest Project" : "Enterprise Scale"}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs bg-gray-800 border border-gray-700 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="text-emerald-400 flex items-center gap-2 text-sm font-medium group w-fit"
                  >
                    View Case Study
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FaArrowRight size={12} />
                    </motion.span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        </div>
      </motion.div>

      <motion.div className="absolute top-20 right-10 w-24 h-24 bg-emerald-500/20 rounded-full blur-3xl" animate={floatingShape(0)} />
      <motion.div className="absolute bottom-20 left-10 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl" animate={floatingShape(1)} />
    </section>
  );
}
