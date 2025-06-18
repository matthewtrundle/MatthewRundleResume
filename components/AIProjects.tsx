"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Sparkles, Zap, MessageSquare, BarChart3, ExternalLink } from "lucide-react";

const aiProjects = [
  {
    title: "Enterprise Data Assistant",
    icon: BarChart3,
    description: "Production AI system for complex data analysis and visualization. Enables non-technical users to query databases using natural language",
    technologies: ["Claude API", "Next.js", "TypeScript", "Vercel"],
    impact: "Live Production System",
    category: "Enterprise AI",
    link: "https://enterprise-data-assistant-6ima.vercel.app/"
  },
  {
    title: "AI-Powered Social Media Platform",
    icon: MessageSquare,
    description: "Built AI content generation and scheduling platform for real estate professionals to establish thought leadership",
    technologies: ["GPT-4", "Next.js", "Tailwind", "Vercel"],
    impact: "Automated Content Creation",
    category: "Content AI",
    link: "https://hintz-pa.vercel.app/"
  },
  {
    title: "Multi-Agent Ticketing System",
    icon: Brain,
    description: "Developing advanced multi-agent architecture for intelligent ticket routing, resolution, and knowledge management",
    technologies: ["LangChain", "Claude 3", "Python", "FastAPI"],
    impact: "In Development",
    category: "Multi-Agent AI"
  },
  {
    title: "Full-Stack Business Solutions",
    icon: Zap,
    description: "Delivered complete web presence for psychology practice, demonstrating ability to ship end-to-end solutions",
    technologies: ["Next.js", "React", "TypeScript", "SEO"],
    impact: "Live Business Site",
    category: "Full-Stack",
    link: "https://www.bloompsychologynorthaustin.com/"
  }
];

const aiJourneyMilestones = [
  {
    date: "Early 2023",
    title: "AI for Analytics",
    description: "Started using AI at Vrbo for insights generation to support executive strategy"
  },
  {
    date: "Mid 2023",
    title: "The Evolution",
    description: "Transitioned from using AI to building AI tools and agents"
  },
  {
    date: "2023-2024",
    title: "Deep Implementation",
    description: "Built 5+ production AI systems enabling others to find insights"
  },
  {
    date: "Now",
    title: "AI Builder & Leader",
    description: "Senior leader who architects and implements AI solutions"
  }
];

export default function AIProjects() {
  return (
    <section id="ai-projects" className="section-padding bg-gray-50">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">AI Innovation Lab</h2>
          <p className="section-subtitle">
            Hands-on AI projects demonstrating technical depth and business impact
          </p>
        </motion.div>

        {/* AI Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="card p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">My AI Journey</h3>
          <p className="text-gray-600 text-center mb-8">From analytics leader to AI architect</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {aiJourneyMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.date}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{milestone.date}</h4>
                <h5 className="font-semibold text-blue-600 mb-2">{milestone.title}</h5>
                <p className="text-sm text-gray-600">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {aiProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-bordered p-6 hover-lift"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <project.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                    <span className="badge badge-primary text-xs">{project.category}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  {/* Impact Metric */}
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-semibold text-gray-900">Impact:</span>
                    <span className="text-sm text-blue-600">{project.impact}</span>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Link */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View Live Project
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card bg-gradient-to-br from-blue-50 to-purple-50 p-8 text-center"
        >
          <Code2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">My AI Implementation Philosophy</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            "My AI journey evolved naturally: from using AI to find insights at Vrbo, to building 
            the AI tools that enable others to discover insights. This progression—from consumer 
            to creator—combined with my senior leadership experience, positions me uniquely to 
            help organizations not just adopt AI, but master it."
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">12+ Months AI Journey</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="font-semibold">From Using to Building</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-600" />
              <span className="font-semibold">5+ Production Systems</span>
            </div>
          </div>
        </motion.div>

        {/* Tools Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600">
            Built with modern AI development tools including Claude Code CLI, Cline, and more.
            <a href="#tech-stack" className="text-blue-600 hover:text-blue-700 font-medium ml-1">
              View my complete toolkit →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}