"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    company: "Radius Agent",
    role: "Senior Product Engineer",
    period: "May 2021 - Present",
    location: "Bangalore, India",
    highlights: [
      {
        metric: "150%",
        text: "increase in daily active usage by building MEL AI, an NLP-based contract intelligence system",
      },
      {
        metric: "40%",
        text: "reduction in contract review time through embeddings-driven document parsing",
      },
      {
        metric: "70%",
        text: "improvement in engineering productivity via AI workshops and reusable prompt frameworks",
      },
      {
        metric: "50%",
        text: "cut in debugging time with OpenTelemetry-based tracing and performance monitoring",
      },
    ],
    tech: ["Node.js", "OpenAI", "OpenTelemetry", "Redis", "PostgreSQL"],
  },
  {
    company: "Rentomojo",
    role: "Senior Software Engineer",
    period: "Aug 2019 - May 2021",
    location: "Bangalore, India",
    highlights: [
      {
        metric: "27% → 88%",
        text: "KYC automation improvement by re-architecting verification pipeline",
      },
      {
        metric: "20%",
        text: "ETL cost reduction through AWS to Azure migration and pipeline optimization",
      },
      {
        metric: "30%",
        text: "support workload reduction via chatbot and IVR automation systems",
      },
    ],
    tech: ["Microservices", "Azure", "Node.js", "Python", "MongoDB"],
  },
  {
    company: "Peoplegrove",
    role: "Full Stack Developer",
    period: "Aug 2017 - Aug 2019",
    location: "Bangalore, India",
    highlights: [
      {
        metric: "2hr → 15sec",
        text: "bulk matching time reduction by redesigning algorithm and optimizing database queries",
      },
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 px-6 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-indigo-400 font-mono text-sm tracking-wider uppercase">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            8+ years of building products that scale, from startups to enterprise solutions
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className={`relative mb-16 last:mb-0 ${
                i % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: i * 0.2 + 0.3 }}
                  className="w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20"
                />
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className={`glass rounded-2xl p-8 relative group hover:border-indigo-500/30 transition-all duration-300 ${
                  i % 2 === 0 ? "md:mr-12" : "md:ml-12"
                }`}
              >
                {/* Company badge */}
                <div className={`flex items-center gap-3 mb-4 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <Briefcase size={20} className="text-white" />
                  </div>
                  <div className={`${i % 2 === 0 ? "md:text-right" : ""}`}>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-gray-500">{exp.location}</p>
                  </div>
                </div>

                <div className={`mb-4 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                  <p className="text-indigo-400 font-medium">{exp.role}</p>
                  <p className="text-sm text-gray-500">{exp.period}</p>
                </div>

                {/* Highlights */}
                <ul className={`space-y-3 mb-6 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                  {exp.highlights.map((highlight, j) => (
                    <li key={j} className="text-gray-300 text-sm">
                      <span className="text-cyan-400 font-bold">{highlight.metric}</span>{" "}
                      {highlight.text}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover decoration */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="/resume.pdf"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-700 text-gray-300 hover:border-indigo-500 hover:text-indigo-400 transition-all duration-300"
          >
            View Full Resume
            <ArrowUpRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
