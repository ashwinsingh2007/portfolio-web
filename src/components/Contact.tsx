"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  FileText,
  Send,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "kmr.ashwin2019@gmail.com",
    href: "mailto:kmr.ashwin2019@gmail.com",
    copyable: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-8369115820",
    href: "tel:+918369115820",
    copyable: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, India",
    href: "#",
    copyable: false,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/ashwinsingh2007",
    username: "@ashwinsingh2007",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ashwani-kumar-97465186/",
    username: "ashwani-kumar",
  },
  {
    icon: FileText,
    label: "Medium",
    href: "https://medium.com/@ashwinsingh632",
    username: "@ashwinsingh632",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open email client with pre-filled message
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(`Hi Ashwani,\n\n${formState.message}\n\nBest,\n${formState.name}\n${formState.email}`);
    window.location.href = `mailto:kmr.ashwin2019@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-32 px-6 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-indigo-400 font-mono text-sm tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I&apos;m currently open to new opportunities. Whether you have a question
            or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass rounded-xl p-4 flex items-center justify-between group hover:border-indigo-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon size={22} className="text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.label}</p>
                      <a
                        href={item.href}
                        className="text-white font-medium hover:text-indigo-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                  {item.copyable && (
                    <button
                      onClick={() => handleCopy(item.value, item.label)}
                      className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      {copiedItem === item.label ? (
                        <Check size={18} className="text-green-400" />
                      ) : (
                        <Copy size={18} className="text-gray-500" />
                      )}
                    </button>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-white">Find me online</h3>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className="glass rounded-xl p-4 text-center group hover:border-indigo-500/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center mx-auto mb-2 group-hover:bg-indigo-500/20 transition-colors">
                      <link.icon size={20} className="text-gray-400 group-hover:text-indigo-400 transition-colors" />
                    </div>
                    <p className="text-sm font-medium text-white">{link.label}</p>
                    <p className="text-xs text-gray-500">{link.username}</p>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="glass rounded-xl p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Download Resume</h3>
                  <p className="text-sm text-gray-500">Get a copy of my full resume</p>
                </div>
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium flex items-center gap-2 glow-sm"
                >
                  <FileText size={18} />
                  Resume
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    placeholder="John Doe"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Message</label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    rows={5}
                    placeholder="Hi Ashwani, I'd like to discuss..."
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium flex items-center justify-center gap-2 glow-sm hover:shadow-indigo-500/30 transition-all duration-300"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
