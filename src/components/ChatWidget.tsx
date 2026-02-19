"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const quickQuestions = [
  "What are your skills?",
  "Tell me about your experience",
  "What projects have you built?",
  "How can I contact you?",
];

// Knowledge base about Ashwani
const knowledgeBase: Record<string, string> = {
  skills: `I'm proficient in:
• Languages: JavaScript, TypeScript, Python, Go
• Frontend: React, Next.js, Vue.js, Redux, Zustand
• Backend: Node.js, Express, NestJS
• Databases: PostgreSQL, MySQL, MongoDB, Redis
• Infrastructure: Docker, Kubernetes, AWS, Azure
• AI/ML: OpenAI, NLP, Embeddings, LangChain`,

  experience: `I have 8+ years of experience:

🏢 Radius Agent (2021-Present) - Senior Product Engineer
• Led MEL AI development - 150% DAU increase
• Built NLP contract intelligence system
• Improved team productivity by 70%

🏢 Rentomojo (2019-2021) - Senior Software Engineer
• Increased KYC automation from 27% to 88%
• Reduced ETL costs by 20%

🏢 Peoplegrove (2017-2019) - Full Stack Developer
• Reduced matching time from 2hrs to 15sec`,

  projects: `Here are my key projects:

🤖 Scrapebit - AI-powered web data SDK for programmatic scraping
💰 Sanchay - Open source AI finance co-pilot
📚 Airtribe.live - Cohort-based learning platform MVP
🧠 MEL AI - Contract intelligence system (at Radius Agent)

Check out my GitHub: github.com/ashwinsingh2007`,

  contact: `You can reach me at:

📧 Email: kmr.ashwin2019@gmail.com
📱 Phone: +91-8369115820
💼 LinkedIn: linkedin.com/in/ashwani-kumar-97465186
🐙 GitHub: github.com/ashwinsingh2007
📝 Blog: medium.com/@ashwinsingh632

I'm currently open to new opportunities!`,

  hello: `Hey there! 👋 I'm Ashwani's AI assistant. I can tell you about his skills, experience, projects, or how to contact him. What would you like to know?`,

  default: `I can help you learn about Ashwani! Try asking about:
• His technical skills
• Work experience
• Projects he's built
• How to contact him

Or click one of the quick questions below!`,
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();

  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
    return knowledgeBase.hello;
  }
  if (lower.includes("skill") || lower.includes("tech") || lower.includes("stack") || lower.includes("know")) {
    return knowledgeBase.skills;
  }
  if (lower.includes("experience") || lower.includes("work") || lower.includes("job") || lower.includes("company")) {
    return knowledgeBase.experience;
  }
  if (lower.includes("project") || lower.includes("built") || lower.includes("portfolio") || lower.includes("made")) {
    return knowledgeBase.projects;
  }
  if (lower.includes("contact") || lower.includes("email") || lower.includes("reach") || lower.includes("hire") || lower.includes("connect")) {
    return knowledgeBase.contact;
  }
  if (lower.includes("resume") || lower.includes("cv")) {
    return `You can download Ashwani's resume by clicking the Resume link in the navbar, or visit the Contact section to get in touch directly!`;
  }
  if (lower.includes("location") || lower.includes("where") || lower.includes("based")) {
    return `Ashwani is based in Bangalore, India 🇮🇳 and is open to remote opportunities worldwide!`;
  }
  if (lower.includes("ai") || lower.includes("ml") || lower.includes("machine learning")) {
    return `Ashwani has extensive AI/ML experience:
• Built MEL AI - NLP contract intelligence (150% DAU growth)
• Created Sanchay - AI finance co-pilot
• Conducts AI workshops (70% productivity improvement)
• Works with OpenAI, embeddings, and LangChain`;
  }

  return knowledgeBase.default;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hey! 👋 I'm Ashwani's AI assistant. Ask me anything about his skills, experience, or projects!",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const response = getResponse(messageText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 800 + Math.random() * 500);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg glow chat-bounce ${
          isOpen ? "hidden" : ""
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={24} className="text-white" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0a0a0f]" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[600px] max-h-[calc(100vh-100px)] glass rounded-2xl overflow-hidden flex flex-col shadow-2xl glow"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Ask Ashwani AI</h3>
                  <p className="text-xs text-white/70 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full" />
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X size={18} className="text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${message.isBot ? "" : "flex-row-reverse"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.isBot
                        ? "bg-gradient-to-br from-indigo-500 to-purple-600"
                        : "bg-gray-700"
                    }`}
                  >
                    {message.isBot ? (
                      <Sparkles size={14} className="text-white" />
                    ) : (
                      <User size={14} className="text-white" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.isBot
                        ? "bg-gray-800/50 text-gray-200"
                        : "bg-indigo-600 text-white"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <Sparkles size={14} className="text-white" />
                  </div>
                  <div className="bg-gray-800/50 rounded-2xl px-4 py-3 flex items-center gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            <div className="px-4 pb-2">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {quickQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="flex-shrink-0 px-3 py-1.5 text-xs rounded-full border border-gray-700 text-gray-400 hover:border-indigo-500 hover:text-indigo-400 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-800">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about skills, experience..."
                  className="flex-1 bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
                <motion.button
                  onClick={() => handleSend()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!input.trim()}
                  className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} className="text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
