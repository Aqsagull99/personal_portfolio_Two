// components/ProjectShowcase.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  tagline: string;
  tech: string[];
  color: string;
}

const ProjectShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Video Analytics Dashboard",
      tagline: "Real-time insights for content performance",
      tech: ["React", "TypeScript", "Next.js", "Tailwind"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Creator Collaboration Platform",
      tagline: "Connect brands with top video creators",
      tech: ["Next.js", "GraphQL", "Prisma", "AWS"],
      color: "from-blue-500 to-teal-400"
    },
    {
      id: 3,
      title: "AI Video Enhancement",
      tagline: "Automated editing with machine learning",
      tech: ["Python", "TensorFlow", "FastAPI", "React"],
      color: "from-green-500 to-emerald-400"
    },
    {
      id: 4,
      title: "Content Scheduling System",
      tagline: "Optimize posting times for maximum engagement",
      tech: ["Node.js", "MongoDB", "Redis", "Vue.js"],
      color: "from-orange-500 to-red-500"
    }
  ];


  // Floating animation function
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
 

  return (
    <>
     
    <section className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
       
        {/* Floating Elements */}
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
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover how our expert content creators can propel your business forward with stunning video solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative bg-gray-800 rounded-xl overflow-hidden transition-all duration-500 ease-in-out transform ${
                hoveredProject === project.id 
                  ? 'scale-105 shadow-2xl' 
                  : 'scale-100 shadow-lg'
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Glow effect on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 transition-opacity duration-500 ${
                  hoveredProject === project.id ? 'opacity-20' : ''
                }`}
              ></div>
              
              <div className="relative p-6 z-10">
                {/* Project title with animation */}
                <h3 className={`text-2xl font-bold mb-2 transition-all duration-300 ${
                  hoveredProject === project.id ? 'text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300' : 'text-white'
                }`}>
                  {project.title}
                </h3>
                
                {/* Tagline */}
                <p className="text-gray-300 mb-4">{project.tagline}</p>
                
                {/* Tech badges with staggered animation */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm font-medium bg-gray-700 text-gray-200 transition-all duration-300 ${
                        hoveredProject === project.id 
                          ? `translate-y-0 opacity-100 bg-gradient-to-r ${project.color} text-white` 
                          : 'translate-y-2 opacity-90'
                      }`}
                      style={{
                        transitionDelay: hoveredProject === project.id ? `${index * 100}ms` : '0ms'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Hover indicator */}
                <div className={`absolute bottom-4 right-4 transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex items-center text-sm text-gray-300">
                    <span>View Project</span>
                    <svg 
                      className="w-4 h-4 ml-1 transform transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Projects
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default ProjectShowcase;