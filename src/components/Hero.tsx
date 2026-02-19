"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const roles = [
  "Senior Product Engineer",
  "AI/ML Enthusiast",
  "Full Stack Developer",
  "Open Source Contributor",
];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl float" style={{ animationDelay: "-1.5s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(99, 102, 241, 0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm text-gray-300">Available for opportunities</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Ashwani</span>
        </motion.h1>

        {/* Animated Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-12 md:h-16 mb-8 overflow-hidden"
        >
          <motion.div
            animate={{ y: ["0%", "-75%"] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
            className="flex flex-col"
          >
            {roles.map((role, i) => (
              <div
                key={i}
                className="h-12 md:h-16 flex items-center justify-center text-xl md:text-3xl text-gray-400"
              >
                {role}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Building AI-powered products and scalable systems.
          Led development of{" "}
          <span className="text-indigo-400 font-medium">MEL AI</span> that increased
          daily active usage by <span className="text-cyan-400 font-medium">150%</span>.
          Passionate about developer tools and open source.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-xl font-medium flex items-center gap-2 glow-sm hover:shadow-indigo-500/50 transition-all duration-300"
          >
            <Sparkles size={20} className="group-hover:animate-pulse" />
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-gray-700 rounded-xl font-medium hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300"
          >
            Let&apos;s Connect
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-gray-800"
        >
          {[
            { value: "8+", label: "Years Experience" },
            { value: "150%", label: "Usage Growth (MEL AI)" },
            { value: "40%", label: "Time Saved" },
            { value: "4+", label: "Products Built" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
