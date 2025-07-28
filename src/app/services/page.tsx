"use client";
import { motion } from 'framer-motion'
import React from 'react'
import Header_Two from '../components/Header_Two';
import Image from 'next/image';

function Services() {
  return (
    <div>
        <Header_Two/>
        {/* Services Section */}
      <section className="bg-gray-50 text-black py-20 px-10" id="services">
  <div className="max-w-6xl mx-auto">
    <motion.h3
      className="text-4xl font-semibold mb-14 text-center relative inline-block"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      My Services
    </motion.h3>

    <div className="space-y-20">
      {/* Service 1 */}
      <motion.div
        className="md:flex items-center gap-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="md:w-1/2 text-center md:text-right">
          <h4 className="text-2xl font-bold mb-2">🌐 Website Development</h4>
          <p className="text-gray-700">
            Custom websites built with modern tools tailored to your needs using React, Next.js, and more.
          </p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 text-center">
          <Image
            src="/undraw_web-development_0wdh.svg"
            alt="Web Development"
            width={80}
            height={80}
            className="w-60 mx-auto hover:scale-105 transition duration-300"
          />
        </div>
      </motion.div>

      {/* Service 2 */}
      <motion.div
        className="md:flex items-center gap-10 flex-row-reverse"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="md:w-1/2 text-center md:text-left">
          <h4 className="text-2xl font-bold mb-2">🎨 UI/UX Design</h4>
          <p className="text-gray-700">
            Creating modern, responsive, and user-focused designs with tools like Figma and Adobe XD.
          </p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 text-center">
          <Image
            src="/undraw_user-flow_d1ya.svg"
            alt="UI UX"
            width={80}
            height={80}
            className="w-60 mx-auto hover:scale-105 transition duration-300"
          />
        </div>
      </motion.div>

      {/* Service 3 */}
      <motion.div
        className="md:flex items-center gap-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="md:w-1/2 text-center md:text-right">
          <h4 className="text-2xl font-bold mb-2">📱 Responsive Design</h4>
          <p className="text-gray-700">
            Seamless designs that adapt across all devices for the best user experience.
          </p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 text-center">
          <Image
            src="/undraw_responsive_csbt.svg"
            alt="Responsive Design"
            width={80}
            height={80}
            className="w-60 mx-auto hover:scale-105 transition duration-300"
          />
        </div>
      </motion.div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Services


