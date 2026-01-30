"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header_Two from "../components/Header_Two";

export default function ProjectsPage() {
  return (
    <>
      {/* Header */}
      <Header_Two />

      {/* Page Content */}
      <section className="min-h-screen px-4 md:px-8 lg:px-20 pt-32 pb-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Project Demos
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 max-w-3xl mx-auto mb-14 text-lg"
          >
            Explore real-world AI agents, n8n automations, and full-stack
            applications — demonstrated through detailed video walkthroughs.
          </motion.p>

          {/* Video Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="relative rounded-2xl border border-gray-700 bg-gray-800/30 backdrop-blur-md p-10 shadow-xl"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-2xl rounded-2xl" />

            <h3 className="text-2xl font-semibold mb-4 text-white relative z-10">
              Watch Projects in Action
            </h3>

            <p className="text-gray-400 mb-8 relative z-10">
              Each video showcases problem-solving, system design, and real
              implementations — not just theory.
            </p>

            <Link
              href="https://www.youtube.com/@Aqsagull-e6j"
              target="_blank"
              className="relative z-10 inline-flex items-center gap-2 px-8 py-4 rounded-xl
              bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold
              hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Open YouTube Channel →
            </Link>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mt-12 text-sm"
          >
            {["Agentic AI", "n8n Automation", "Next.js", "Full Stack", "Real Demos"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full border border-gray-700 text-gray-300 bg-gray-800/40"
                >
                  {tag}
                </span>
              )
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
