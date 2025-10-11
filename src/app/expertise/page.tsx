"use client";
import { motion, Variants } from 'framer-motion';
import React from 'react';
import Header_Two from '../components/Header_Two';

function Expertise() {
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
        ease: "easeOut" // ✅ type-safe
      }
    }
  };

  const timelineItems = [
    {
      title: "Freelance Web Developer",
      period: "2023 - Present",
      description: "Worked with clients worldwide on stunning, responsive websites using React, TypeScript, and modern UI/UX practices.",
      icon: "💻",
      color: "from-indigo-500/20 to-purple-500/20"
    },
    {
      title: "Python & AI Projects",
      period: "2024 - Present",
      description: "Currently exploring Python and Generative AI with a focus on automation, data handling, and AI-driven web apps.",
      icon: "🤖",
      color: "from-emerald-500/20 to-teal-500/20"
    },
    {
      title: "Student @ GIC",
      period: "Govt Initiative Program",
      description: "Learning advanced web development and contributing to real-world projects with a focus on innovation and tech growth.",
      icon: "🎓",
      color: "from-amber-500/20 to-orange-500/20"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800">
      <Header_Two/>
      
      {/* Expertise Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="expertise">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-600/20 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: false, margin: "-100px" }}
            className="text-center mb-20"
          >
            <motion.p 
              variants={itemVariants}
              className="text-lg font-medium text-emerald-400 mb-3"
            >
              My Professional Path
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              Experience & Expertise
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              A timeline of my journey through technology and development
            </motion.p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: false, margin: "-100px" }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 to-emerald-500 -translate-x-1/2"></div>

            <div className="space-y-12 max-w-4xl mx-auto">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  transition={{ delay: index * 0.15 }}
                  className={`relative pl-16 md:pl-0 md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 border-4 border-gray-800 -translate-x-1/2 z-10 flex items-center justify-center">
                    <span className="text-xs">{item.icon}</span>
                  </div>

                  {/* Content card */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className={`p-6 rounded-xl backdrop-blur-sm bg-gradient-to-br ${item.color} border border-white/10 hover:border-emerald-400/30 transition-all duration-500`}
                    >
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-emerald-400 text-sm mb-3">{item.period}</p>
                      <p className="text-gray-300">{item.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-24"
          >
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 hover:border-emerald-400/50 transition-all duration-500">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Technical Skills</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Python', 'Node.js', 'Figma', 'AI/ML'].map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-gray-800/50 border border-white/10 rounded-lg p-4 text-center hover:bg-emerald-500/10 hover:border-emerald-400/30 transition-all"
                  >
                    <span className="text-emerald-400 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Expertise;
