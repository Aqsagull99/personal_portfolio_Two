"use client";
import { motion, Variants } from 'framer-motion';
import React, { useState } from 'react';
import Header_Two from '../components/Header_Two';
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as any // 👈 casting fixes TS type mismatch
    }
  }
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = '1234567890';
    const message = 'Hello! I came across your portfolio and wanted to connect.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };


  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen">
      <Header_Two/>
      
      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="contact">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-600/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-600/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: false, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p 
              variants={itemVariants}
              className="text-lg font-medium text-emerald-400 mb-3"
            >
              Get In Touch
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              Contact Me
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Have a project in mind or want to collaborate? Reach out through any of these channels.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: false }}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 hover:border-emerald-400/30 transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-500/10 p-3 rounded-lg">
                      <FaMapMarkerAlt className="text-emerald-400 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                      <p className="text-gray-300">Mumbai, India</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 hover:border-emerald-400/30 transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-500/10 p-3 rounded-lg">
                      <FaEnvelope className="text-emerald-400 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                      <a href="mailto:contact@example.com" className="text-gray-300 hover:text-emerald-400 transition-colors">
                        contact@example.com
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 hover:border-emerald-400/30 transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-500/10 p-3 rounded-lg">
                      <FaPhoneAlt className="text-emerald-400 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                      <a href="tel:+1234567890" className="text-gray-300 hover:text-emerald-400 transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-4">
                <h3 className="text-lg font-semibold text-white mb-4">Connect via Socials</h3>
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={openWhatsApp}
                    className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-all duration-300"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="text-xl" />
                  </motion.button>

                  <motion.a
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-xl" />
                  </motion.a>

                  <motion.a
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-xl" />
                  </motion.a>

                  <motion.a
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:contact@example.com"
                    className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-all duration-300"
                    aria-label="Email"
                  >
                    <SiGmail className="text-xl" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: false }}
            >
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 hover:border-emerald-400/30 transition-all duration-500 h-full">
                <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
                
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-emerald-500/10 border border-emerald-400/30 rounded-lg text-emerald-400"
                  >
                    Thank you! Your message has been sent successfully. I'll get back to you soon.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-800/50 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-white`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-800/50 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-white`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows= {5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-800/50 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-white`}
                      placeholder="Hello, I'd like to talk about..."
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-emerald-500/20'}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact;