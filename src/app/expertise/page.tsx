"use client";
import { motion, Variants } from "framer-motion";
import React from "react";
import Header_Two from "../components/Header_Two";
import { FaBriefcase, FaPython, FaUserGraduate } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";

const Expertise = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const timelineItems = [
    {
      title: "Prompt & Context Engineering",
      period: "2023 - Present",
      description:
        "Specializing in crafting effective prompts and context structures to optimize LLM performance for various applications.",
      Icon: SiOpenai,
      color: "from-indigo-500/20 to-purple-500/20",
    },
    {
      title: "Python & AI Projects",
      period: "2024 - Present",
      description:
        "Currently exploring Python and Generative AI with a focus on automation, data handling, and AI-driven web apps.",
      Icon: FaPython,
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      title: "Student @ GIAIC",
      period: "Government Initiative Program",
      description:
        "Learning advanced web development and contributing to real-world projects with a focus on innovation and tech growth.",
      Icon: FaUserGraduate,
      color: "from-amber-500/20 to-orange-500/20",
    },
  ];

  const floatingShape = (delay = 0, xMove = 20, yMove = 20) => ({
    y: [0, yMove, 0],
    x: [0, xMove, 0],
    transition: {
      duration: 8 + delay * 2,
      ease: "easeInOut" as const,
      repeat: Infinity,
      delay,
    },
  });

  // ✅ Icon Animation
  const iconAnimation = {
    whileHover: {
      rotate: 360,
      scale: 1.2,
      transition: { duration: 1 },
    },
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800">
      <Header_Two />
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        id="expertise"
      >
        {/* Floating Elements */}
        <motion.div
          className="absolute top-10 left-10 w-8 h-8 bg-pink-500 rounded-full opacity-60"
          animate={floatingShape(0)}
        />
        <motion.div
          className="absolute bottom-20 right-16 w-10 h-10 bg-purple-500 rounded-full opacity-60"
          animate={floatingShape(1)}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-6 h-6 bg-blue-500 rounded-full opacity-50"
          animate={floatingShape(2)}
        />

        {/* Timeline */}
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: false, margin: "-100px" }}
            className="text-center mb-20"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg font-medium text-purple-400 mb-3 flex items-center justify-center gap-2"
            >
              <FaBriefcase className="text-xl" /> My Expertise
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              Experience & Skills
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: false, margin: "-100px" }}
            className="relative"
          >
            <div className="absolute left-8 md:left-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 to-emerald-500 -translate-x-1/2"></div>

            <div className="space-y-12 max-w-4xl mx-auto">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  transition={{ delay: index * 0.15 }}
                  className={`relative pl-16 md:pl-0 md:flex ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center`}
                >
                  {/* ✅ Motion div for icon animation */}
                  <motion.div
                    {...iconAnimation}
                    className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 border-4 border-gray-800 -translate-x-1/2 z-10 flex items-center justify-center text-white cursor-pointer"
                  >
                    <item.Icon className="text-lg" />
                  </motion.div>

                  <div
                    className={`md:w-5/12 ${
                      index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`p-6 rounded-xl backdrop-blur-sm bg-gradient-to-br ${item.color} border border-white/10 hover:border-emerald-400/30 transition-all duration-500`}
                    >
                      <h3 className="text-xl font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-emerald-400 text-sm mb-3">
                        {item.period}
                      </p>
                      <p className="text-gray-300">{item.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Expertise;
