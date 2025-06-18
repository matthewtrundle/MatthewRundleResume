"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Cpu, Database, Cloud, Palette, Zap, MessageSquare } from "lucide-react";

const toolCategories = [
  {
    title: "AI Development Environments",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    tools: [
      "Claude Code CLI",
      "Cline (AI Coding Assistant)",
      "VS Code + AI Extensions",
      "Cursor IDE",
      "GitHub Copilot"
    ]
  },
  {
    title: "LLM & AI APIs",
    icon: MessageSquare,
    color: "from-blue-500 to-cyan-500",
    tools: [
      "Claude API (Anthropic)",
      "GPT-4 API (OpenAI)",
      "LangChain",
      "LlamaIndex",
      "Hugging Face"
    ]
  },
  {
    title: "Full-Stack Development",
    icon: Code2,
    color: "from-green-500 to-emerald-500",
    tools: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion"
    ]
  },
  {
    title: "Backend & Infrastructure",
    icon: Database,
    color: "from-orange-500 to-red-500",
    tools: [
      "Supabase",
      "Prisma ORM",
      "PostgreSQL",
      "Resend (Email)",
      "NextAuth"
    ]
  },
  {
    title: "Deployment & DevOps",
    icon: Cloud,
    color: "from-indigo-500 to-purple-500",
    tools: [
      "Vercel",
      "GitHub Actions",
      "Docker",
      "AWS Services",
      "Cloudflare"
    ]
  },
  {
    title: "AI Engineering Concepts",
    icon: Cpu,
    color: "from-yellow-500 to-orange-500",
    tools: [
      "Prompt Engineering",
      "RAG (Retrieval Augmented Generation)",
      "Vector Databases",
      "Fine-tuning",
      "Multi-Agent Systems"
    ]
  }
];

const aiCapabilities = [
  {
    category: "AI Implementation Skills",
    skills: [
      "Prompt Engineering & Optimization",
      "Context Window Management",
      "Token Optimization",
      "Chain-of-Thought Prompting",
      "Few-Shot Learning",
      "RAG Implementation",
      "Vector Embeddings",
      "Semantic Search",
      "Agent Orchestration",
      "Memory Management",
      "Tool Use & Function Calling",
      "Streaming Responses"
    ]
  },
  {
    category: "Production AI Patterns",
    skills: [
      "Error Handling & Fallbacks",
      "Rate Limiting & Caching",
      "Cost Optimization",
      "Response Validation",
      "Security & Safety Filters",
      "Multi-Model Strategies",
      "A/B Testing AI Features",
      "Performance Monitoring",
      "User Feedback Loops",
      "Continuous Improvement",
      "Compliance & Ethics",
      "Scalability Planning"
    ]
  }
];

export default function AIToolsStack() {
  return (
    <section id="tech-stack" className="section-padding bg-white">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">AI Development Toolkit</h2>
          <p className="section-subtitle">
            Modern tools and techniques for building production AI systems
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {toolCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-bordered p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.tools.map((tool) => (
                  <div key={tool} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    <span className="text-gray-700">{tool}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Capabilities */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="card bg-gradient-to-br from-gray-50 to-gray-100 p-8"
        >
          <div className="text-center mb-8">
            <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">Production AI Engineering Expertise</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiCapabilities.map((capability) => (
              <div key={capability.category}>
                <h4 className="font-semibold text-gray-900 mb-4">{capability.category}</h4>
                <div className="grid grid-cols-2 gap-3">
                  {capability.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Differentiator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full">
            <Palette className="w-5 h-5 text-blue-600" />
            <p className="text-gray-700 font-medium">
              Daily driver: <span className="font-semibold">Claude Code CLI + VS Code + Vercel</span> for rapid AI prototyping
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}