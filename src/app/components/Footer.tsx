'use client';

import Image from 'next/image';
import { FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane, FaInstagram, FaNewspaper, FaInfoCircle, FaArrowRight ,FaQuoteLeft} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-16 pb-8 px-4 md:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
      >

        {/* About Company */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 p-2 rounded-lg">
              <FaInfoCircle className="text-white" />
            </span>
            <span>About Us</span>
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed text-xs">
            We build digital experiences that connect, inspire, and deliver results — powered by a passionate team of designers and developers.
          </p>
          <div className="space-y-3">
            <p className="flex items-center gap-3 text-gray-300 text-xs">
              <FaMapMarkerAlt className="text-blue-400" />
              <span>203 Fake St. Mountain View, San Francisco</span>
            </p>
            <p className="flex items-center gap-3 text-gray-300 text-xs">
              <FaPhoneAlt className="text-blue-400" />
              <span>03172813709</span>
            </p>
            <p className="flex items-center gap-3 text-gray-300 text-xs">
              <FaPaperPlane className="text-blue-400" />
              <span>aqsa.gull.dev.ai99@gmail.com</span>
            </p>
          </div>
        </motion.div>

        {/* Testimonials */}
<motion.div variants={itemVariants}>
  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
    <span className="bg-gradient-to-r from-blue-400 to-cyan-500 p-2 rounded-lg">
      <FaQuoteLeft className="text-white" />
    </span>
    <span>Testimonials</span>
  </h3>

  <div className="space-y-5">
    {[
      {
        name: "Sarah Khan",
        role: "CEO, TechSoft",
        feedback: "They delivered exactly what we needed! Highly recommend.",
        image: "/testi1.png",
      },
      {
        name: "Ali Raza",
        role: "Founder, Webify",
        feedback: "Amazing design skills and professional approach.",
        image: "/testi2.png",
      },
    ].map((client, index) => (
      <motion.div
        key={index}
        whileHover={{ x: 5 }}
        className="flex gap-4 items-start group cursor-pointer"
      >
        <div className="min-w-[50px] h-[50px] relative overflow-hidden rounded-full">
          <Image
            src={client.image}
            alt={client.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div>
          <p className="text-gray-300 italic text-sm">
            "{client.feedback}"
          </p>
          <h4 className="font-medium text-white mt-2">{client.name}</h4>
          <p className="text-xs text-gray-400">{client.role}</p>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 p-2 rounded-lg">
              <FaInfoCircle className="text-white" />
            </span>
            <span>Quick Links</span>
          </h3>
          <ul className="space-y-3 text-xs">
            {['About Us', 'Services', 'Portfolio', 'Our Team', 'Blog', 'Contact'].map((link) => (
              <motion.li 
                key={link}
                whileHover={{ x: 5 }}
                className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-2"
              >
                <FaArrowRight className="text-xs text-blue-400" />
                <a href="#">{link}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 p-2 rounded-lg">
              <FaInstagram className="text-white" />
            </span>
            <span>Instagram Feed</span>
          </h3>
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="aspect-square relative overflow-hidden rounded-lg cursor-pointer"
              >
                <Image
                  src={`/feed${i + 1}.png`}
                  alt={`Instagram ${i + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 pr-12 text-xs"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-400 to-cyan-500 p-2 rounded-lg hover:opacity-90 transition-opacity">
              <FaPaperPlane className="text-white" />
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-700 text-center"
      >
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} All Rights Reserved. Designed with <span className="text-blue-400">♥</span> by <a href="#" className="text-blue-400 hover:underline">Aqsa Gull</a>
        </p>
        <p className="text-gray-500 text-xs mt-2">
          Images shown are for illustrative purposes only.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;