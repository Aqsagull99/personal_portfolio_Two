"use client";

import { useState, useRef, useEffect, MouseEvent, TouchEvent } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaArrowLeft,
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiGraphql,
  SiTensorflow,
  SiPrisma,
  SiFastapi,
  SiVuedotjs,
  SiRedis,
} from "react-icons/si";

const ProjectSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const projects = [
    {
      id: 1,
      title: "Video Analytics Dashboard",
      tagline: "Real-time insights for content performance tracking",
      tech: ["React", "TypeScript", "Next.js", "Tailwind"],
      icons: [FaReact, SiTypescript, SiNextdotjs, SiTailwindcss],
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "Creator Collaboration Platform",
      tagline: "Connect brands with top video creators worldwide",
      tech: ["Next.js", "GraphQL", "Prisma", "AWS"],
      icons: [SiNextdotjs, SiGraphql, SiPrisma, FaAws],
      gradient: "bg-gradient-to-r from-blue-500 to-teal-400",
    },
    {
      id: 3,
      title: "AI Video Enhancement",
      tagline: "Automated editing with machine learning algorithms",
      tech: ["Python", "TensorFlow", "FastAPI", "React"],
      icons: [FaPython, SiTensorflow, SiFastapi, FaReact],
      gradient: "bg-gradient-to-r from-green-500 to-emerald-400",
    },
    {
      id: 4,
      title: "Content Scheduling System",
      tagline: "Optimize posting times for maximum engagement",
      tech: ["Node.js", "MongoDB", "Redis", "Vue.js"],
      icons: [FaNodeJs, SiMongodb, SiRedis, SiVuedotjs],
      gradient: "bg-gradient-to-r from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "Brand Design System",
      tagline: "Consistent visual identity across all platforms",
      tech: ["Figma", "React", "TypeScript", "Tailwind"],
      icons: [FaFigma, FaReact, SiTypescript, SiTailwindcss],
      gradient: "bg-gradient-to-r from-indigo-500 to-purple-500",
    },
    {
      id: 6,
      title: "Data Analytics Platform",
      tagline: "Advanced analytics for content performance",
      tech: ["Python", "MongoDB", "React", "AWS"],
      icons: [FaPython, SiMongodb, FaReact, FaAws],
      gradient: "bg-gradient-to-r from-cyan-500 to-blue-500",
    },
  ];

  // 👇 Dragging Start
  const handleDragStart = (
    e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>
  ) => {
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    dragStartX.current = clientX;
  };

  // 👇 Dragging End
  const handleDragEnd = (
    e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>
  ) => {
    if (!isDragging) return;
    const clientX =
      "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
    const dragDistance = clientX - dragStartX.current;

    if (Math.abs(dragDistance) > 50) {
      if (dragDistance > 0 && currentIndex > 0) setCurrentIndex(currentIndex - 1);
      else if (dragDistance < 0 && currentIndex < projects.length - 1)
        setCurrentIndex(currentIndex + 1);
    }
    setIsDragging(false);
  };

  // 👇 Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDragging) {
        setCurrentIndex((prev) =>
          prev === projects.length - 1 ? 0 : prev + 1
        );
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [isDragging, projects.length]);

  const nextSlide = () =>
    currentIndex < projects.length - 1 && setCurrentIndex(currentIndex + 1);
  const prevSlide = () =>
    currentIndex > 0 && setCurrentIndex(currentIndex - 1);

  // 👇 Floating Animation Function
  const floatingShape = (delay = 0) => ({
    y: [0, -25, 0],
    x: [0, 15, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 5,
      ease: "easeInOut" as const,
      repeat: Infinity,
      delay,
    },
  });

  return (
    <section
      id="projects"
      className="relative px-4 md:px-8 lg:px-20 py-20 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <span className="bg-gray-800 text-purple-300 px-4 py-2 rounded-full text-sm border border-gray-700 mb-4 inline-block">
            Explore My Latest Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Innovative solutions designed to make a real impact ✨
          </p>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="hidden md:flex absolute left-10 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gray-800/70 hover:bg-purple-600/70 transition-all duration-300 items-center justify-center shadow-lg disabled:opacity-30"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentIndex === projects.length - 1}
          className="hidden md:flex absolute right-10 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gray-800/70 hover:bg-pink-600/70 transition-all duration-300 items-center justify-center shadow-lg disabled:opacity-30"
        >
          <FaArrowRight />
        </button>

        {/* Cards */}
        <div
          ref={containerRef}
          className="flex gap-4 md:gap-6 overflow-x-hidden py-4 cursor-grab active:cursor-grabbing"
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
        >
          {projects.map((project, index) => {
            const position = index - currentIndex;
            const isActive = position === 0;
            return (
              <motion.div
                key={project.id}
                className={`flex-shrink-0 w-[85vw] sm:w-80 md:w-96 ${
                  isActive ? "z-20" : "z-10"
                }`}
                animate={{
                  x: `calc(-${currentIndex * 100}% + ${currentIndex * 16}px)`,
                  scale: isActive ? 1 : 0.9,
                  opacity: isActive ? 1 : 0.5,
                  y: isActive ? 0 : 15,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div
                  className={`rounded-xl overflow-hidden border ${
                    isActive
                      ? "border-purple-500/50 shadow-lg shadow-purple-500/20"
                      : "border-gray-700/40"
                  } backdrop-blur-sm`}
                >
                  <div className={`h-36 ${project.gradient} relative`}>
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      {project.icons.map((Icon, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.15 }}
                          className="w-8 h-8 bg-black/30 rounded-lg flex items-center justify-center"
                        >
                          <Icon className="text-white text-sm" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {project.tagline}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="px-3 py-1 rounded-full text-xs bg-gray-700/60 border border-gray-600/50"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 flex items-center gap-2 text-sm font-medium"
                    >
                      View Case Study
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <FaArrowRight size={12} />
                      </motion.span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-purple-400 to-pink-400 w-6 md:w-8"
                  : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* 🌸 Floating Background Elements */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-pink-500 rounded-full opacity-60"
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
    </section>
  );
};

export default ProjectSection;



