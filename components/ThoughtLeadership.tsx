"use client";

import { motion } from "framer-motion";
import { Lightbulb, TrendingUp, AlertCircle, Target } from "lucide-react";

const insights = [
  {
    icon: Lightbulb,
    title: "AI Success = 20% Tech, 80% Change Management",
    content: "After leading 100+ person teams through AI transformation, I've learned that the technology is the easy part. The real challenge is organizational readiness, stakeholder alignment, and creating a culture that embraces data-driven decision making. Companies that focus solely on the tech stack fail.",
    category: "Leadership"
  },
  {
    icon: TrendingUp,
    title: "The $100M Lesson: Start with Business Outcomes, Not Models",
    content: "Too many AI initiatives begin with 'let's try this cool algorithm.' My $100M supply growth success came from inverting the approach: define the business outcome first, then work backwards to the simplest technical solution. Sometimes a regression beats a neural network.",
    category: "Strategy"
  },
  {
    icon: AlertCircle,
    title: "Why 70% of Enterprise AI Projects Fail (And How to Be in the 30%)",
    content: "Most failures stem from three mistakes: no executive sponsor, no clear success metrics, and no plan for productionization. Every successful AI initiative I've led started with C-suite alignment, defined KPIs before writing code, and had MLOps planned from day one.",
    category: "Implementation"
  },
  {
    icon: Target,
    title: "The AI Talent Paradox: Stop Hiring Unicorns, Build Teams",
    content: "Everyone wants the mythical 'full-stack AI engineer.' I've found more success building diverse teams: pair a strong ML researcher with a systems engineer and a domain expert. The magic happens at the intersection of deep technical knowledge and business understanding.",
    category: "Team Building"
  }
];

const frameworkHighlight = {
  title: "The SCALE Framework for AI Success",
  subtitle: "My proven methodology for enterprise AI transformation",
  components: [
    { letter: "S", word: "Stakeholder", description: "Align C-suite vision with technical roadmap" },
    { letter: "C", word: "Capability", description: "Assess and build organizational AI maturity" },
    { letter: "A", word: "Architecture", description: "Design for scale, not just proof-of-concept" },
    { letter: "L", word: "Learning", description: "Implement continuous improvement loops" },
    { letter: "E", word: "Execution", description: "Deliver value incrementally with clear metrics" }
  ]
};

export default function ThoughtLeadership() {
  return (
    <section id="insights" className="py-20 relative">
      <div className="max-width-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Executive Insights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Lessons learned from leading AI transformation at scale
          </p>
        </motion.div>

        {/* Key Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-xl p-6 hover-glow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                  <insight.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-sm text-primary-400 font-medium">{insight.category}</span>
                  <h3 className="text-xl font-bold mt-1 mb-3">{insight.title}</h3>
                  <p className="text-gray-300">{insight.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SCALE Framework */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-2">{frameworkHighlight.title}</h3>
            <p className="text-gray-300">{frameworkHighlight.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {frameworkHighlight.components.map((component, index) => (
              <motion.div
                key={component.letter}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{component.letter}</span>
                </div>
                <h4 className="font-semibold mb-2">{component.word}</h4>
                <p className="text-sm text-gray-400">{component.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-6">
            Want to discuss AI strategy for your organization?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg font-semibold hover:from-primary-600 hover:to-accent-600 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk Strategy
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}