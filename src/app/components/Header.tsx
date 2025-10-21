"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ProjectSection from "./Card";
import About from "./About";
import Hero from "./Hero";
import ProjectShowcase from "./Project";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate cursor position based on window size
  const cursorSize = windowSize.width < 768 ? 16 : 32;

  return (
    <main className="min-h-screen text-white font-sans relative overflow-x-hidden">
      {/* Custom Cursor - Only render on client side */}
      {windowSize.width > 0 && (
        <motion.div
          className="fixed w-8 h-8 md:w-16 md:h-16 rounded-full pointer-events-none z-[9999] mix-blend-difference bg-white"
          animate={{
            x: position.x - cursorSize,
            y: position.y - cursorSize,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}

      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 backdrop-blur-md bg-black/40 sticky top-0 z-50">
        <h1 className="text-xl font-bold text-white mb-2 md:mb-0">
          <span className="text-gray-300">Future</span>
          <span className="text-green-400">Scape</span>
        </h1>
        <nav className="flex flex-wrap justify-center gap-2 md:gap-6 text-sm">
          <Link
            href="#projects"
            className="hover:text-green-400 transition-colors"
          >
            Home
          </Link>
          <Link
            href="#projects"
            className="hover:text-green-400 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/experience"
            className="hover:text-green-400 transition-colors"
          >
            Experience
          </Link>
          <Link
            href="/about"
            className="hover:text-green-400 transition-colors"
          >
            About
          </Link>
          <Link
            href="/services"
            className="hover:text-green-400 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="hover:text-green-400 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </header>
      
      <Hero />
      {/* Featured Work Section */}
      <ProjectSection /> 
      {/* Project Showcase Section */}
      <ProjectShowcase />
      {/* About Section */}
      <About />  
    </main>
  );
}


