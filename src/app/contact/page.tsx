"use client";
import { motion, Variants } from "framer-motion";
import React, { useState } from "react";
import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Header_Two from "../components/Header_Two";

// ✅ Icon Animation
const iconAnimation = {
  whileHover: {
    rotate: 360,
    scale: 1.2,
    transition: { duration: 1 },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Floating animation
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        console.log("Form submitted:", formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    }
  };



 // ✅ Window-safe WhatsApp function
  const openWhatsApp = () => {
    if (typeof window !== "undefined") {
      const phoneNumber = "03172813709";
      const message =
        "Hello! I came across your portfolio and wanted to connect.";
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");
    }
  }; 

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen">
      <Header_Two />
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        id="contact"
      >
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
              className="text-lg font-medium text-emerald-400 mb-3 flex items-center justify-center gap-2"
            >
              <motion.div {...iconAnimation}>
                <FaEnvelope className="text-xl" />
              </motion.div>{" "}
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
              Have a project in mind or want to collaborate? Reach out through
              any of these channels.
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
              {[
                {
                  Icon: FaMapMarkerAlt,
                  title: "Location",
                  text: "karachi, Pakistan",
                  color: "emerald",
                },
                {
                  Icon: FaEnvelope,
                  title: "Email",
                  text: "aqsa.gull.dev.ai99@gmail.com",
                  color: "emerald",
                  link: "mailto:contact@example.com",
                },
                {
                  Icon: FaPhoneAlt,
                  title: "Phone",
                  text: "+1 (234) 567-890",
                  color: "emerald",
                  link: "tel:+1234567890",
                },
              ].map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 hover:border-emerald-400/30 transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <motion.div
                        {...iconAnimation}
                        className="bg-emerald-500/10 p-3 rounded-lg"
                      >
                        <item.Icon className="text-emerald-400 text-xl" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {item.title}
                        </h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-gray-300 hover:text-emerald-400 transition-colors"
                          >
                            {item.text}
                          </a>
                        ) : (
                          <p className="text-gray-300">{item.text}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Social Icons */}
              <motion.div variants={itemVariants} className="pt-4">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Connect via Socials
                </h3>
                <div className="flex gap-4">
                  <motion.button
                    {...iconAnimation}
                    onClick={openWhatsApp}
                    className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-all"
                  >
                    <FaWhatsapp className="text-xl" />
                  </motion.button>

                  <motion.a
                    {...iconAnimation}
                    href="https://www.linkedin.com/in/aqsa-gullofficial99"
                    target="_blank"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all"
                  >
                    <FaLinkedin className="text-xl" />
                  </motion.a>

                  <motion.a
                    {...iconAnimation}
                    href="https://github.com/Aqsagull99"
                    target="_blank"
                    className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all"
                  >
                    <FaGithub className="text-xl" />
                  </motion.a>

                  <motion.a
                    {...iconAnimation}
                    href="aqsa.gull.dev.ai99@gmail.com"
                    className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-all"
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
            >
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 hover:border-emerald-400/30 transition-all duration-500 h-full">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Send me a message
                </h3>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-emerald-500/10 border border-emerald-400/30 rounded-lg text-emerald-400"
                  >
                    ✅ Thank you! Your message has been sent successfully.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    {
                      id: "name",
                      label: "Full Name",
                      type: "text",
                      placeholder: "Your name",
                    },
                    {
                      id: "email",
                      label: "Email Address",
                      type: "email",
                      placeholder: "user-email",
                    },
                  ].map((field) => (
                    <div key={field.id}>
                      <label
                        htmlFor={field.id}
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        value={formData[field.id as keyof typeof formData]}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-gray-800/50 border ${
                          errors[field.id]
                            ? "border-red-500"
                            : "border-white/10"
                        } rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-white`}
                        placeholder={field.placeholder}
                      />
                      {errors[field.id] && (
                        <p className="mt-1 text-sm text-red-400">
                          {errors[field.id]}
                        </p>
                      )}
                    </div>
                  ))}

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-800/50 border ${
                        errors.message ? "border-red-500" : "border-white/10"
                      } rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-white`}
                      placeholder="Hello, I'd like to talk about..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg transition-all ${
                      isSubmitting
                        ? "opacity-70 cursor-not-allowed"
                        : "hover:shadow-lg hover:shadow-emerald-500/20"
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}






