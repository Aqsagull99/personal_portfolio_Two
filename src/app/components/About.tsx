import { motion } from "framer-motion";
import Image from "next/image";
import React from 'react'

function About() {
  return (
    <section id="about" className="px-4 md:px-8 lg:px-20 py-16 bg-gradient-to-br from-gray-900 to-black">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col lg:flex-row gap-12 items-center"
    >
      {/* Image Section */}
      <motion.div 
        className="lg:w-1/2 relative"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="relative">
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-20 blur-xl"
            animate={{
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <Image 
            src="/about.png" 
            alt="Creative Team" 
            width={500} 
            height={500} 
            className="rounded-2xl shadow-2xl relative z-10 border border-gray-700"
          />
          {/* Floating Elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 bg-gray-500 rounded-full"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full"
            animate={{
              y: [0, 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div 
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Our Team</span>
        </motion.h2>
        
        <motion.p 
          className="text-gray-300 mb-8 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
         I’m a driven Agentic AI Developer, n8n Automation Builder, and Full Stack Developer dedicated to crafting intelligent and efficient digital solutions. My focus is on building smart agentic systems, automating complex workflows, and creating seamless web applications that solve real-world problems.
        </motion.p>
        
        <div className="space-y-6">
          {/* Feature 1 */}
          <motion.div 
            className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span 
                className="text-purple-400 text-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✓
              </motion.span>
            </motion.div>
            <div>
              <h4 className="font-bold text-white text-lg">Intelligent Automations</h4>
              <p className="text-gray-400 text-sm">Streamlining workflows with powerful agentic AI and no-code solutions.</p>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/30 transition-all duration-300"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center border border-pink-500/20"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span 
                className="text-pink-400 text-xl"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ✺
              </motion.span>
            </motion.div>
            <div>
              <h4 className="font-bold text-white text-lg">Smart & Scalable Solutions</h4>
              <p className="text-gray-400 text-sm">Building modern full stack applications designed for performance and growth</p>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span 
                className="text-blue-400 text-xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ↯
              </motion.span>
            </motion.div>
            <div>
              <h4 className="font-bold text-white text-lg">Fast & Efficient Delivery</h4>
              <p className="text-gray-400 text-sm">Delivering reliable solutions on time without compromising quality</p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-700/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <motion.div 
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 1.8 }}
              viewport={{ once: true }}
            >
              100K+
            </motion.div>
            <div className="text-gray-400 text-sm">Happy Creators</div>
          </div>
          <div className="text-center">
            <motion.div 
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 2.0 }}
              viewport={{ once: true }}
            >
              2+
            </motion.div>
            <div className="text-gray-400 text-sm">Learning & Building Experience</div>
          </div>
          <div className="text-center">
            <motion.div 
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 2.2 }}
              viewport={{ once: true }}
            >
              1M+
            </motion.div>
            <div className="text-gray-400 text-sm">Videos Created</div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  </div>
</section>
  )
}

export default About
