"use client";
import React from 'react'
import { motion } from "framer-motion";
import Header_Two from '../components/Header_Two';
function Expertise() {
  return (
    <div>
      <Header_Two/>

{/* Experience Section */}
      <section className="bg-gray-100 text-black py-20 px-10" id="experience">
  <div className="max-w-4xl mx-auto">
    <motion.h3
      className="text-4xl font-semibold mb-12 text-center"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      My Journey ✨
    </motion.h3>

    <div className="relative border-l-4 border-indigo-500 pl-12 space-y-10"> {/* Increased padding-left */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute left-[-1.6rem] top-1 w-6 h-6 bg-indigo-500 rounded-full border-4 border-white"></div> {/* Adjusted the left position */}
        <h4 className="text-xl font-bold text-indigo-600">Freelance Web Developer</h4>
        <p className="text-gray-600 text-sm">2023 - Present</p>
        <p className="text-gray-700 mt-1">
          Worked with clients worldwide on stunning, responsive websites using React, TypeScript, and modern UI/UX practices.
        </p>
      </motion.div>

      <motion.div
        className="relative"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="absolute left-[-1.6rem] top-1 w-6 h-6 bg-purple-500 rounded-full border-4 border-white"></div> {/* Adjusted the left position */}
        <h4 className="text-xl font-bold text-purple-600">Python & AI Projects</h4>
        <p className="text-gray-600 text-sm">2024 - Present</p>
        <p className="text-gray-700 mt-1">
          Currently exploring Python and Generative AI with a focus on automation, data handling, and AI-driven web apps.
        </p>
      </motion.div>

      <motion.div
        className="relative"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="absolute left-[-1.6rem] top-1 w-6 h-6 bg-pink-500 rounded-full border-4 border-white"></div> {/* Adjusted the left position */}
        <h4 className="text-xl font-bold text-pink-600">Student @ GIC</h4>
        <p className="text-gray-600 text-sm">Govt Initiative Program</p>
        <p className="text-gray-700 mt-1">
          Learning advanced web development and contributing to real-world projects with a focus on innovation and tech growth.
        </p>
      </motion.div>
    </div>
  </div>
</section>


    </div>
  )
}

export default Expertise;