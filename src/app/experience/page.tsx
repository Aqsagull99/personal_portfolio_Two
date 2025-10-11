"use client";
import { motion, Variants } from 'framer-motion';
import React from 'react';
import Header_Two from '../components/Header_Two';
import { FaLaptopCode, FaDesktop, FaUserTie } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';

function Experience() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const experiences = [
    {
      role: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2023 - Present",
      description: [
        "Developed 20+ responsive websites using React, Next.js, and Tailwind CSS",
        "Implemented modern UI/UX principles with Figma prototypes",
        "Optimized websites for performance (90+ Lighthouse scores)"
      ],
      Icon: FaLaptopCode,
      color: "from-indigo-500/20 to-purple-500/20",
      borderColor: "border-indigo-400/30"
    },
    {
      role: "Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - 2023",
      description: [
        "Built enterprise dashboard with TypeScript and Redux",
        "Collaborated with UX team to implement design systems",
        "Reduced page load time by 40% through code optimization"
      ],
      Icon: FaDesktop,
      color: "from-rose-500/20 to-pink-500/20",
      borderColor: "border-rose-400/30"
    },
    {
      role: "Web Development Intern",
      company: "Digital Agency",
      period: "2021 - 2022",
      description: [
        "Developed WordPress themes and custom plugins",
        "Assisted in mobile-first responsive designs",
        "Participated in Agile development workflows"
      ],
      Icon: FaUserTie,
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-400/30"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen">
      <Header_Two/>
      
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="experience">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16 lg:mb-20"
          >
            <motion.p variants={itemVariants} className="text-lg font-medium text-purple-400 mb-3 flex items-center justify-center gap-2">
              <MdWork className="text-xl" /> Professional Journey
            </motion.p>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Work Experience
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              My career progression and key professional achievements
            </motion.p>
          </motion.div>

          {/* Experience Timeline */}
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
                  {/* Timeline line connector */}
                  {index !== experiences.length - 1 && (
                    <div className={`absolute left-6 top-12 h-full w-0.5 bg-gradient-to-b ${exp.color} md:left-1/2 md:-translate-x-1/2`}></div>
                  )}

                  {/* Content container */}
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Date (mobile) */}
                    <div className="md:hidden text-sm text-gray-400 pl-14 -mb-4">
                      {exp.period}
                    </div>

                    {/* Icon/dot */}
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg border border-white/10 z-10 md:left-1/2 md:-translate-x-1/2">
                      <Icon className={`text-xl ${exp.borderColor.replace('border', 'text').replace('/30', '')}`} />
                    </div>

                    {/* Content card */}
                    <motion.div
                      whileHover={{ y: -5 }}
                      className={`flex-1 p-6 rounded-xl backdrop-blur-sm bg-gradient-to-br ${exp.color} border ${exp.borderColor} transition-all duration-300 md:max-w-[45%] ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}
                    >
                      <div className="flex flex-col gap-2 mb-4">
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <div className="flex items-center gap-3">
                          <span className="text-purple-300 bg-purple-900/30 px-3 py-1 rounded-full text-sm">
                            {exp.company}
                          </span>
                          {/* Date (desktop) */}
                          <span className="hidden md:inline text-gray-300 text-sm">
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-2.5">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start text-gray-300">
                            <span className={`text-xs mt-1.5 mr-2 ${exp.borderColor.replace('border', 'text')}`}>▹</span>
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



