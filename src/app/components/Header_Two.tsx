'use client';

import Link from 'next/link';

export default function Header_Two() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 backdrop-blur-md bg-black/40 sticky top-0 z-50">
      <h1 className="text-xl font-bold text-white mb-2 md:mb-0">
        <span className="text-gray-300">laura</span>
        <span className="text-green-400">gonzález</span>
      </h1>
      <nav className="flex flex-wrap justify-center gap-2 md:gap-6 text-sm">
         <Link href="/" className="text-white hover:text-green-400 transition-colors">
  Home
</Link>
        <Link href="#projects" className=" text-white hover:text-green-400 transition-colors">
          Projects
        </Link>
        <Link href="/experience" className="text-white hover:text-green-400 transition-colors">
          Experience
        </Link>
        <Link href="/expertise" className="text-white hover:text-green-400 transition-colors">
          Expertise
        </Link>
        <Link href="/services" className="text-white hover:text-green-400 transition-colors">
          Services
        </Link>
        <Link href="/contact" className="text-white hover:text-green-400 transition-colors">
          Contact
        </Link>
      </nav>
    </header>
  );
}