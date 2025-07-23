"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Code, Paintbrush, Settings2, BrainCircuit, Bot } from "lucide-react";
import { motion } from "framer-motion";

export default function Header_Two() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Invert Cursor */}
      <motion.div
        className="fixed w-16 h-16 rounded-full pointer-events-none z-[9999] mix-blend-difference bg-white"
        animate={{
          x: position.x - 32,
          y: position.y - 32,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />

      {/* Header Section */}
      <header className="relative w-full  text-white overflow-hidden">
        <nav className="flex justify-between items-center px-10 py-6 backdrop-blur-md bg-black/40">
          <h1 className="text-3xl font-bold tracking-wider">Aqsa</h1>
          <ul className="flex gap-6 text-lg font-medium">
            <li className="hover:text-gray-300 transition-all duration-300">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-gray-300 transition-all duration-300">
              <Link href="/expertise">Expertise</Link>
            </li>
            <li className="hover:text-gray-300 transition-all duration-300">
              <Link href="/experience">Experience</Link>
            </li>
            <li className="hover:text-gray-300 transition-all duration-300">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-gray-300 transition-all duration-300">
              <Link href="/services">Services</Link>
            </li>
          </ul>
        </nav>
      </header>
      
    </>
  );
}
