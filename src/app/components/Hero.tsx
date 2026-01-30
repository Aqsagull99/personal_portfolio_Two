"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// 🟡 Fade Up Animation
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" as const },
  }),
};

// 🟡 Floating Animation for Cards
const floatAnim: Variants = {
  floating: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      ease: "easeInOut" as const,
      repeat: Infinity,
    },
  },
};

// 🟡 Floating Shapes Function
const floatingShape = (delay = 0) => ({
  y: [0, -20, 0],
  x: [0, 10, 0],
  scale: [1, 1.1, 1],
  transition: {
    duration: 4,
    ease: "easeInOut" as const,
    repeat: Infinity,
    delay,
  },
});

export default function Hero() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-96 h-96 bg-purple-600/20 blur-3xl rounded-full -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-pink-600/20 blur-3xl rounded-full bottom-0 right-0"></div>
      </div>

      {/* Floating Elements */}
      <motion.div className="absolute top-10 left-10 w-8 h-8 bg-pink-500 rounded-full opacity-60" animate={floatingShape(0)} />
      <motion.div className="absolute bottom-20 right-16 w-10 h-10 bg-purple-500 rounded-full opacity-60" animate={floatingShape(1)} />
      <motion.div className="absolute top-1/2 left-1/4 w-6 h-6 bg-blue-500 rounded-full opacity-50" animate={floatingShape(2)} />
      <motion.div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-pink-400 rounded-full opacity-50" animate={floatingShape(1.5)} />
      <motion.div className="absolute top-1/3 right-1/4 w-7 h-7 bg-purple-400 rounded-full opacity-50" animate={floatingShape(0.5)} />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT SIDE */}
        <div className="lg:w-1/2">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
          >
            Hi &apos; I&apos;m{" "}
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut" as const,
              }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-[length:200%_200%]"
            >
              Aqsa Gull
            </motion.span>
          </motion.h1>

          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-blue-400 font-light mb-6"
          >
            Creative Web & AI Agent Developer
          </motion.h3>

          {/* Floating Yellow Ball */}
          <motion.div
            className="absolute top-5 right-1/2 w-40 h-40 bg-yellow-400 rounded-full opacity-50"
            animate={floatingShape(2.5)}
          />

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={3}
            viewport={{ once: true }}
            className="text-gray-300 leading-relaxed max-w-lg mb-6"
          >
            I specialize in building intelligent digital experiences, combining cutting-edge AI agents with clean, interactive web interfaces. My work merges smart automation, smooth UI, and modern technologies to transform ideas into impactful solutions. Let’s build the future together!
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={4}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Link href="/projects-demos">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white px-8 py-4 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 font-medium"
              >
                Watch My Projects
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <FaArrowRight />
                </motion.span>
              </motion.button>
            </Link>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-transparent bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-white font-medium flex items-center gap-2 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                Contact Me
                <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                  <FaArrowRight />
                </motion.span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Socials */}
          <div className="flex gap-5">
            {[ 
              { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/aqsa-gullofficial99" },
              { icon: <FaGithub size={20} />, href: "https://github.com/Aqsagull99" },
              { icon: <FaFacebook size={20} />, href: "https://www.facebook.com/Aqsagullofficial/" },
              { icon: <FaXTwitter size={20} />, href: "https://x.com/AqsaGull9889" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={5 + index}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.2,
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
                className="text-gray-400 border border-gray-700/50 p-3 rounded-full backdrop-blur-sm hover:text-white transition"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-4 relative">
          <motion.div animate="floating" variants={floatAnim} className="relative rounded-2xl overflow-hidden group">
            <Image src="/aicode.png" alt="Project 1" width={500} height={400} className="rounded-2xl object-cover w-full h-48 transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-3">
              <p className="text-white text-sm">AI Code Automation</p>
            </div>
          </motion.div>

          <motion.div animate="floating" variants={floatAnim} transition={{ delay: 1 }} className="relative rounded-2xl overflow-hidden group">
            <Image src="/sea.png" alt="Project 2" width={500} height={400} className="rounded-2xl object-cover w-full h-48 transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-3">
              <p className="text-white text-sm">Creative Portfolio Design</p>
            </div>
          </motion.div>

          <motion.div animate="floating" variants={floatAnim} transition={{ delay: 0.5 }} className="relative rounded-2xl overflow-hidden group col-span-2">
            <Image src="/car.png" alt="Project 3" width={800} height={400} className="rounded-2xl object-cover w-full h-52 md:h-64 transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-3">
              <p className="text-white text-sm">Smart Car Showcase with Smooth UI Animations</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}







