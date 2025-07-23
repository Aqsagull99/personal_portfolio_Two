"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code, Paintbrush, Settings2 ,BrainCircuit, Bot} from "lucide-react";

export default function Header() {
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
      <header className="relative w-full h-screen text-white overflow-hidden">
        <Image
          src="/image.png" // Add a high-quality background image in public folder
          alt="Background"
          fill
          className="object-cover -z-10 blur-sm"
        />
        



        <nav className="flex justify-between items-center px-10 py-6 backdrop-blur-md bg-black/40 ">
  <h1 className="text-3xl font-bold tracking-wider">Aqsa</h1>
  <ul className="flex gap-6 text-lg font-medium">
    <li className="hover:text-gray-300 cursor-pointer transition-all duration-300">
      <Link href="/">Home</Link>
    </li>
    <li className="hover:text-gray-300 cursor-pointer transition-all duration-300">
      <Link href="/expertise">Expertise</Link>
    </li>
    <li className="hover:text-gray-300 cursor-pointer transition-all duration-300">
      <Link href="/experience">Experience</Link>
    </li>
    <li className="hover:text-gray-300 cursor-pointer transition-all duration-300">
      <Link href="/about">About</Link>
    </li>
    <li className="hover:text-gray-300 cursor-pointer transition-all duration-300">
      <Link href="/services">Services</Link>
    </li>
  </ul>
</nav>

        <motion.div
          className="flex flex-col items-center justify-center h-[80%] text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-bold mb-4 drop-shadow-md">
            Hi, I'm Aqsa
          </h2>
          <p className="text-xl text-gray-200 drop-shadow-sm">
            Creative Web Developer | UI/UX Enthusiast | Tech Explorer
          </p>
        </motion.div>
      </header>



      
      



    </>
  );
}


