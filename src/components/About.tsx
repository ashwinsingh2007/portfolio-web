"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Cloud, Brain, Wrench, Monitor } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "Python", "Go"],
    color: "from-indigo-500 to-indigo-600",
  },
  {
    title: "Frontend",
    icon: Monitor,
    skills: ["React", "Next.js", "Vue.js", "Redux-Saga", "Zustand"],
    color: "from-cyan-500 to-cyan-600",
  },
  {
    title: "Backend",
    icon: Wrench,
    skills: ["Node.js", "Express", "NestJS", "Jest", "Mocha"],
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    color: "from-green-500 to-green-600",
  },
  {
    title: "Infrastructure",
    icon: Cloud,
    skills: ["Docker", "Kubernetes", "AWS", "Azure", "Terraform"],
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "AI/ML",
    icon: Brain,
    skills: ["OpenAI", "NLP", "Embeddings", "LangChain"],
    color: "from-pink-500 to-pink-600",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-indigo-400 font-mono text-sm tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Building the <span className="gradient-text">Future</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            I&apos;m a Senior Product Engineer with 8+ years of experience building
            scalable systems and AI-powered products. I love turning complex problems
            into elegant solutions.
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Currently at <span className="text-indigo-400 font-medium">Radius Agent</span> as
                a Senior Product Engineer, where I led the development of{" "}
                <span className="text-cyan-400 font-medium">MEL AI</span> - an NLP-based
                contract intelligence system that increased daily active usage by 150%.
              </p>
              <p>
                I&apos;m passionate about building developer tools and have created several
                open-source projects including{" "}
                <span className="text-purple-400 font-medium">Scrapebit</span> (AI-powered
                web data SDK) and{" "}
                <span className="text-green-400 font-medium">Sanchay</span> (AI Finance Co-Pilot).
              </p>
              <p>
                When I&apos;m not coding, I conduct hands-on AI workshops to help teams
                integrate AI into their workflows - improving engineering productivity by ~70%
                at my current company.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { label: "Location", value: "Bangalore, India" },
                { label: "Education", value: "B.Tech CS, R.G.P.V" },
                { label: "Focus", value: "AI & Developer Tools" },
                { label: "Status", value: "Open to Opportunities" },
              ].map((fact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass rounded-lg p-4"
                >
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    {fact.label}
                  </div>
                  <div className="text-white font-medium">{fact.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Code Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass rounded-2xl overflow-hidden glow"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-3 text-gray-500 text-sm font-mono">ashwani.ts</span>
            </div>
            <div className="p-6 font-mono text-sm overflow-x-auto">
              <pre className="text-gray-300">
                <code>{`const ashwani = {
  role: "Senior Product Engineer",
  company: "Radius Agent",
  experience: "8+ years",

  skills: {
    frontend: ["React", "Next.js", "Vue"],
    backend: ["Node.js", "NestJS", "Go"],
    ai: ["OpenAI", "NLP", "Embeddings"],
    infra: ["AWS", "K8s", "Docker"]
  },

  achievements: [
    "150% DAU growth (MEL AI)",
    "40% reduced review time",
    "70% team productivity boost"
  ],

  passion: "Building AI-powered tools",
  status: "Open to opportunities"
};`}</code>
              </pre>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-10">
            Tech <span className="gradient-text">Stack</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-xl p-6 group hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-3">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-full bg-gray-800/50 text-gray-300 border border-gray-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
