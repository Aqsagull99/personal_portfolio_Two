"use client";
import { motion, Variants } from "framer-motion";
import React from "react";

import Image from "next/image";
import Header_Two from "../components/Header_Two";
import Link from "next/link";
import { FaLightbulb } from "react-icons/fa";
import { FaGlobe, FaPaintBrush, FaRobot, FaBolt } from "react-icons/fa";

function Services() {
  // ✅ Type safe Variants
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

  // ✨ Floating background animation
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

  const iconAnimation = {
    whileHover: {
      rotate: 360,
      scale: 1.2,
      transition: { duration: 1 },
    },
  };

  const services = [
    {
      title: "Website Development",
      icon: (
        <motion.div {...iconAnimation}>
          <FaGlobe className="text-3xl text-purple-400" />
        </motion.div>
      ),
      description:
        "Custom websites built with modern tools tailored to your needs using React, Next.js, and more.",
      image: "/undraw_web-development_0wdh.svg",
      color: "from-indigo-500/10 to-purple-500/10",
      delay: 0.1,
    },
    {
      title: "UI/UX Design",
      icon: (
        <motion.div {...iconAnimation}>
          <FaPaintBrush className="text-3xl text-rose-400" />
        </motion.div>
      ),
      description:
        "Creating modern, responsive, and user-focused designs with tools like Figma and Adobe XD.",
      image: "/undraw_user-flow_d1ya.svg",
      color: "from-rose-500/10 to-pink-500/10",
      reverse: true,
      delay: 0.2,
    },
    {
      title: "AI Automation",
      icon: (
        <motion.div {...iconAnimation}>
          <FaRobot className="text-3xl text-emerald-400" />
        </motion.div>
      ),
      description:
        "Build smart automation workflows using Agentic AI and tools like n8n to save time and boost productivity.",
      image: "/undraw_responsive_csbt.svg",
      color: "from-emerald-500/10 to-teal-500/10",
      delay: 0.3,
    },
    {
      title: "Performance Optimization",
      icon: (
        <motion.div {...iconAnimation}>
          <FaBolt className="text-3xl text-amber-400" />
        </motion.div>
      ),
      description:
        "Make your website blazing fast with performance tuning and modern optimization techniques.",
      image: "/undraw_speed_test_re_pe1f.svg",
      color: "from-amber-500/10 to-orange-500/10",
      reverse: true,
      delay: 0.4,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800">
      <Header_Two />
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        id="services"
      >
        {/* ✨ Floating Elements */}
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
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-pink-400 rounded-full opacity-50"
          animate={floatingShape(1.5)}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-7 h-7 bg-purple-400 rounded-full opacity-50"
          animate={floatingShape(0.5)}
        />

        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600/20 rounded-full filter blur-3xl"></div>
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
              className="text-lg font-medium text-purple-400 mb-3 flex items-center justify-center gap-2"
            >
              <FaLightbulb className="text-xl" /> My Expertise
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              Services I Offer
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Comprehensive solutions designed to elevate your digital presence
            </motion.p>
          </motion.div>

          {/* Services List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: false, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ delay: service.delay }}
                className={`flex flex-col ${
                  service.reverse ? "md:flex-row-reverse" : "md:flex-row"
                } rounded-2xl overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 hover:border-purple-400/30 transition-all duration-500`}
                whileHover={{ y: -5 }}
              >
                {/* Text Content */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="text-3xl mb-4 text-purple-400">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-1 w-fit"
                  >
                    Learn more <span className="text-lg">→</span>
                  </motion.button>
                </div>

                {/* Image */}
                <div
                  className={`md:w-1/2 h-64 relative bg-gradient-to-br ${service.color}`}
                >
                  <motion.div
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 flex items-center justify-center p-8"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-24 text-center"
          >
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 hover:border-purple-400/50 transition-all duration-500">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to start your project?
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Lets collaborate to create something extraordinary Get in
                touch today!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                {/* Contact Me Button */}
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                  >
                    Contact Me
                  </motion.button>
                </Link>

                {/* Explore My Work Button */}
                <Link href="/project">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/5 hover:border-white/50 transition-all duration-300"
                  >
                    Explore My Work
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Services;




