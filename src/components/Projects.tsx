"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Bot, Coins, Code, Layers } from "lucide-react";

const projects = [
  {
    title: "Scrapebit",
    subtitle: "AI-Powered Web Data SDK",
    description:
      "Built an AI-driven web data extraction platform and SDK enabling developers to programmatically scrape, structure, and automate workflows across dynamic websites with anti-bot handling.",
    icon: Bot,
    gradient: "from-indigo-500 to-purple-600",
    features: [
      "Modular SDK architecture",
      "Proxy handling",
      "Queue-based execution",
      "Anti-bot challenges",
    ],
    tech: ["TypeScript", "Node.js", "Puppeteer", "AI/ML"],
    link: "#",
    github: "https://github.com/ashwinsingh2007",
  },
  {
    title: "Sanchay",
    subtitle: "Open Source AI Finance Co-Pilot",
    description:
      "AI-powered finance assistant that analyzes user financial data and generates spending insights using NLP workflows with extensible architecture for transaction parsing.",
    icon: Coins,
    gradient: "from-cyan-500 to-blue-600",
    features: [
      "NLP spending analysis",
      "Transaction categorization",
      "Financial insights",
      "Modular backend",
    ],
    tech: ["React", "Node.js", "OpenAI", "PostgreSQL"],
    link: "#",
    github: "https://github.com/ashwinsingh2007",
  },
  {
    title: "Airtribe.live",
    subtitle: "Cohort Platform MVP",
    description:
      "Built and shipped the MVP for a cohort-based learning platform from 0 to production, enabling educators to manage sessions, enrollments, and payments. 1,000+ unique visitors in first month.",
    icon: Layers,
    gradient: "from-green-500 to-emerald-600",
    features: [
      "Session management",
      "Payment integration",
      "Enrollment system",
      "Scalable architecture",
    ],
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://airtribe.live",
    github: "#",
  },
  {
    title: "MEL AI",
    subtitle: "Contract Intelligence System",
    description:
      "Led development of an NLP-based contract intelligence system at Radius Agent that increased daily active usage by 150% and reduced contract review time by 40%.",
    icon: Code,
    gradient: "from-orange-500 to-red-600",
    features: [
      "NLP contract analysis",
      "Embeddings search",
      "Document parsing",
      "Real-time insights",
    ],
    tech: ["Node.js", "OpenAI", "Vector DB", "Redis"],
    link: "#",
    github: "#",
    isWork: true,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-indigo-400 font-mono text-sm tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Products and tools I&apos;ve built - from AI-powered platforms to developer SDKs
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all duration-500"
            >
              {/* Header with gradient */}
              <div
                className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
              >
                {/* Pattern overlay */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                    backgroundSize: "24px 24px",
                  }}
                />

                {/* Icon */}
                <div className="absolute bottom-4 right-4 w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <project.icon size={32} className="text-white" />
                </div>

                {/* Work badge */}
                {project.isWork && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                    Work Project
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-indigo-400">{project.subtitle}</p>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 text-xs rounded bg-gray-800/50 text-gray-400"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full border border-gray-700 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.link !== "#" && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-indigo-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                  {project.github !== "#" && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-indigo-400 transition-colors"
                    >
                      <Github size={16} />
                      Source Code
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* More on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/ashwinsingh2007"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-800/50 text-gray-300 hover:bg-indigo-500/10 hover:text-indigo-400 hover:border-indigo-500/50 border border-gray-700 transition-all duration-300"
          >
            <Github size={20} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
