"use client";
import { motion, Variants } from "framer-motion";
import React from "react";
import { SiReact, SiNextdotjs, SiN8N } from "react-icons/si";
import { MdWork } from "react-icons/md";
import Header_Two from "../components/Header_Two";

function Experience() {
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

  const floatingShape = (delay = 0, xMove = 30, yMove = 30) => ({
    y: [0, yMove, 0],
    x: [0, xMove, 0],
    transition: {
      duration: 10 + delay * 2,
      ease: "easeInOut" as const,
      repeat: Infinity,
      delay,
    },
  });
  const iconAnimation = {
    whileHover: {
      rotate: 360,
      scale: 1.2,
      transition: { duration: 1 },
    },
  };

  const experiences = [
    {
      role: "Agentic AI & Automation",
      company: "Self-Employed",
      period: "2023 - Present",
      description: [
        "Developed 20+ responsive websites using React, Next.js, and Tailwind CSS",
        "Integrated LLM-based solutions to streamline real-world business processes",
        "Built intelligent workflows and AI-powered agents using n8n and automation frameworks",
      ],
      Icon: SiReact,
      color: "from-indigo-700/30 to-purple-700/30",
      borderColor: "border-indigo-500/40",
      iconColor: "text-sky-400",
    },
    {
      role: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - 2023",
      description: [
        "Created multiple responsive web apps with modern front-end & back-end stacks.",
        "Collaborated with UX team to implement design systems",
        "Focused on clean UI/UX and scalable architecture",
      ],
      Icon: SiNextdotjs,
      color: "from-rose-700/30 to-pink-700/30",
      borderColor: "border-rose-500/40",
      iconColor: "text-rose-500",
    },
    {
      role: "Automation & No-Code Intern",
      company: "Digital Agency",
      period: "2021 - 2022",
      description: [
        "Built automated workflows using n8n and OpenAI Agent Kit",
        "Developed intelligent agents to streamline business operations",
        "Collaborated with team to integrate no-code solutions with web platforms",
      ],
      Icon: SiN8N,
      color: "from-emerald-700/30 to-teal-700/30",
      borderColor: "border-emerald-500/40 bg-red-700/10",
      iconColor: "text-indigo-500",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-950 to-gray-900 min-h-screen relative overflow-hidden">
      <Header_Two />

      <section className="py-20 px-4 sm:px-6 lg:px-8 relative" id="experience">
        {/* Floating Background Elements */}
        <motion.div
          className="absolute top-10 left-10 w-8 h-8 bg-pink-500 rounded-full opacity-60"
          animate={floatingShape(0)}
        />
        <motion.div
          className="absolute bottom-20 right-16 w-40 h-40 bg-purple-500 rounded-full opacity-60"
          animate={floatingShape(1)}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-6 h-6 bg-blue-500 rounded-full opacity-50"
          animate={floatingShape(2)}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-pink-400 rounded-full opacity-50"
          animate={floatingShape(1.5)}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-40 h-40 bg-purple-400 rounded-full opacity-50"
          animate={floatingShape(0.5)}
        />

        {/* Section Content */}
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16 lg:mb-20"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg font-medium text-purple-400 mb-3 flex items-center justify-center gap-2"
            >
              <MdWork className="text-xl" /> Professional Journey
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              Work Experience
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            >
              My career growth and key milestones in building smart AI-powered
              solutions.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8 md:space-y-10"
          >
            {experiences.map((exp, index) => {
              const { Icon } = exp;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  {index !== experiences.length - 1 && (
                    <div
                      className={`absolute left-6 top-12 h-full w-0.5 bg-gradient-to-b ${exp.color} md:left-1/2 md:-translate-x-1/2`}
                    ></div>
                  )}

                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="md:hidden text-sm text-gray-400 pl-14 -mb-4">
                      {exp.period}
                    </div>

                    <motion.div
                      {...iconAnimation}
                      className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl border border-white/20 z-10 md:left-1/2 md:-translate-x-1/2"
                    >
                      <Icon
                        className={`text-2xl drop-shadow-lg ${exp.iconColor}`}
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ y: -8, scale: 1.03 }}
                      className={`flex-1 p-6 rounded-xl backdrop-blur-sm bg-gradient-to-br ${
                        exp.color
                      } border ${
                        exp.borderColor
                      } transition-all duration-300 md:max-w-[45%] ${
                        index % 2 === 0
                          ? "md:mr-auto md:pr-12"
                          : "md:ml-auto md:pl-12"
                      }`}
                    >
                      <div className="flex flex-col gap-2 mb-4">
                        <h3 className="text-xl font-bold text-white">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="text-purple-300 bg-purple-900/40 px-3 py-1 rounded-full text-sm">
                            {exp.company}
                          </span>
                          <span className="hidden md:inline text-gray-300 text-sm">
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-2.5">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start text-gray-300"
                          >
                            <span
                              className={`text-xs mt-1.5 mr-2 ${exp.borderColor.replace(
                                "border",
                                "text"
                              )}`}
                            >
                              ▹
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
