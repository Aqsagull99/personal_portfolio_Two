"use client";
import { motion } from 'framer-motion'

import React from 'react'
import Header_Two from '../components/Header_Two';

function about() {
  return (

    <div>
        <Header_Two/>
        {/* About Section */}
      <section className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 text-black py-24 px-10" id="about">
  <div className="max-w-4xl mx-auto text-center">
    <motion.h3
      className="text-4xl font-semibold text-gray-800 mb-6"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      About Me
    </motion.h3>
    <motion.p
      className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      I'm Aqsa, a passionate Web Developer with a strong background in building
      modern, responsive, and interactive user interfaces. I love blending
      creativity with code to craft seamless user experiences. I'm driven by
      curiosity and always eager to explore new technologies and improve my
      craft.
    </motion.p>
    <div className="mt-10 flex justify-center space-x-8">
      <motion.a
        href="#portfolio"
        className="px-6 py-3 bg-indigo-600 text-white rounded-xl text-lg font-semibold hover:bg-indigo-700 transition duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        View Portfolio
      </motion.a>
      <motion.a
        href="#contact"
        className="px-6 py-3 bg-gray-800 text-white rounded-xl text-lg font-semibold hover:bg-gray-900 transition duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Contact Me
      </motion.a>
    </div>
  </div>
</section>

</div>
    



    
  )
}

export default about