
// before

'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <main className="min-h-screen text-white font-sans relative overflow-x-hidden">
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-8 h-8 md:w-16 md:h-16 rounded-full pointer-events-none z-[9999] mix-blend-difference bg-white"
        animate={{ x: position.x - (window.innerWidth < 768 ? 16 : 32), y: position.y - (window.innerWidth < 768 ? 16 : 32) }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />

      {/* Hero Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/image.png"
          alt="Background"
          fill
          className="object-cover blur-sm"
          priority
        />
      </div>

      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 backdrop-blur-md bg-black/40 sticky top-0 z-50">
        <h1 className="text-xl font-bold text-white mb-2 md:mb-0">
          <span className="text-gray-300">laura</span><span className="text-green-400">gonzález</span>
        </h1>
        <nav className="flex flex-wrap justify-center gap-2 md:gap-6 text-sm">
           <Link href="#projects" className="hover:text-green-400 transition-colors">
  Home
</Link>
         <Link href="#projects" className="hover:text-green-400 transition-colors">
  Projects
</Link>
<Link href="/experience" className="hover:text-green-400 transition-colors">
  Experience
</Link>
<Link href="/about" className="hover:text-green-400 transition-colors">
  About
</Link>
<Link href="/services" className="hover:text-green-400 transition-colors">
  Services
</Link>
<Link href="/contact" className="hover:text-green-400 transition-colors">
  Contact
</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-4 md:px-8 lg:px-20 py-12 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">

            {/* Left Content */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
                Hi, I'm <span className="text-green-400">Laura</span>
              </h2>
              <h3 className="text-xl md:text-2xl text-blue-400 mb-6">UX & Multimedia Designer</h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                I create human-centered designs that solve real problems and deliver meaningful experiences. Welcome to my creative space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="border-2 border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium text-sm md:text-base">
                  VIEW MY WORK
                </button>
                <button className="border-2 border-transparent bg-green-600 px-6 py-3 rounded-full hover:bg-green-700 transition-all duration-300 font-medium text-sm md:text-base flex items-center gap-2">
                  <FaArrowRight /> CONTACT ME
                </button>
              </div>
              
              {/* Social Links */}
              <div className="mt-10 flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaDribbble size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaGithub size={20} />
                </a>
              </div>
            </motion.div>

            {/* Right Visuals */}
            <motion.div
              className="lg:w-1/2 space-y-4 mt-10 lg:mt-0"
              ref={ref}
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              <motion.div 
                variants={item}
                className="relative rounded-xl bg-white/10 backdrop-blur-lg p-2 w-fit mx-auto lg:mx-0"
              >
                <Image 
                  src="/aicode.png" 
                  alt="Agile" 
                  width={120} 
                  height={120} 
                  className="rounded-lg"
                  priority
                />
                <p className="absolute top-2 left-2 text-xs bg-black/70 px-2 py-1 rounded">
                  User-centered designs and Agile methods
                </p>
              </motion.div>
              
              <motion.div 
                variants={item}
                className="relative rounded-xl bg-white/10 backdrop-blur-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300"
              >
                <Image 
                  src="/sea.png" 
                  alt="Portfolio Banner" 
                  width={600} 
                  height={300} 
                  className="object-cover w-full h-48 md:h-64"
                  priority
                />
                <div className="absolute bottom-4 left-4">
                  <p className="font-semibold text-lg md:text-xl">Have a nice trip visiting my portfolio</p>
                  <p className="text-sm md:text-base text-gray-300">Telling stories visually through meaningful experiences</p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={item}
                className="relative rounded-xl bg-white/10 backdrop-blur-lg p-4 flex items-center gap-4 hover:bg-white/20 transition-colors duration-300"
              >
                <div className="relative">
                  <Image 
                    src="/car.png" 
                    alt="Laura" 
                    width={70} 
                    height={70} 
                    className="rounded-full border-2 border-green-400"
                    priority
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-black"></div>
                </div>
                <div>
                  <p className="font-semibold text-lg">Laura González</p>
                  <p className="text-sm text-gray-300">UX DESIGNER | 5+ YEARS EXPERIENCE</p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={item}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-4 rounded-full flex items-center gap-2 w-fit mx-auto lg:mx-0 cursor-pointer shadow-lg hover:shadow-cyan-500/30 transition-all"
              >
                <FaArrowRight /> Let's start a project together!
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="projects" className="px-4 md:px-8 lg:px-20 py-16 bg-black/30 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured <span className="text-green-400">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -10 }}
                className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-green-400/30 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project Title {item}</h3>
                  <p className="text-gray-400 mb-4">UI/UX Design, Branding</p>
                  <button className="text-green-400 hover:text-green-300 text-sm font-medium flex items-center gap-1">
                    View Case Study <FaArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 md:px-8 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            <div className="lg:w-1/2">
              <Image 
                src="/car.png" 
                alt="Laura González" 
                width={500} 
                height={500} 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-green-400">Me</span>
              </h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                I'm a passionate UX designer with over 5 years of experience creating digital products that users love. My approach combines aesthetic sensibility with analytical thinking to solve complex problems.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-400/10 flex items-center justify-center">
                    <span className="text-green-400 text-xl">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold">User-Centered Approach</h4>
                    <p className="text-gray-400 text-sm">Focusing on real user needs and behaviors</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-400/10 flex items-center justify-center">
                    <span className="text-blue-400 text-xl">✺</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Creative Solutions</h4>
                    <p className="text-gray-400 text-sm">Innovative designs that stand out</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-400/10 flex items-center justify-center">
                    <span className="text-purple-400 text-xl">↯</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Fast Prototyping</h4>
                    <p className="text-gray-400 text-sm">Quick iteration and validation</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}