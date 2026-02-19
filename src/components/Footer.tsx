"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text cursor-pointer"
            >
              AK
            </motion.span>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              Built with <Heart size={14} className="text-red-500" /> using Next.js & Tailwind
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-8">
            {["About", "Experience", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/ashwinsingh2007"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ashwani-kumar-97465186/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              href="mailto:kmr.ashwin2019@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
            >
              <Mail size={18} />
            </motion.a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-8 border-t border-gray-800/50 text-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Ashwani Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
