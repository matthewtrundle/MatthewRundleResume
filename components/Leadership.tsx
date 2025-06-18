"use client";

import { motion } from "framer-motion";
import { Users, Globe, Building2, Target, Briefcase, Award } from "lucide-react";

const leadershipHighlights = [
  {
    icon: Users,
    title: "Team Leadership",
    items: [
      "6 direct reports (data scientists, analytics engineers)",
      "100+ cross-functional contributors",
      "Mentored 15+ team members to promotions",
      "Built diverse, high-performing global team"
    ]
  },
  {
    icon: Globe,
    title: "Global Scope",
    items: [
      "Led initiatives across 5 markets",
      "Seattle, Madrid, Geneva, India, Sydney",
      "24/7 global operations coverage",
      "Cross-cultural team management"
    ]
  },
  {
    icon: Building2,
    title: "Executive Partnership",
    items: [
      "Direct reporting to VP Analytics",
      "Regular presentations to C-suite",
      "Board-level strategic planning",
      "Cross-functional exec alignment"
    ]
  },
  {
    icon: Target,
    title: "Strategic Initiatives",
    items: [
      "$78K annual budget ownership",
      "Quarterly roadmap planning",
      "P&L impact modeling",
      "3-year vision development"
    ]
  }
];

const stakeholderMap = {
  "Executive Leadership": ["CEO", "CFO", "CPO", "CTO"],
  "Cross-Functional Partners": ["Product", "Engineering", "Finance", "Legal"],
  "Direct Team": ["Data Scientists", "ML Engineers", "Analytics Engineers"],
  "Global Teams": ["London", "Madrid", "Geneva", "Sydney"]
};

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 relative">
      <div className="max-width-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Executive Leadership at Scale</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Orchestrating global teams and driving strategic initiatives across Fortune 500 enterprise
          </p>
        </motion.div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {leadershipHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{highlight.title}</h3>
              </div>
              <ul className="space-y-2">
                {highlight.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary-400 mt-1">•</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Stakeholder Network Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Stakeholder Network</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(stakeholderMap).map(([category, stakeholders], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h4 className="font-semibold mb-3 text-primary-400">{category}</h4>
                <div className="space-y-2">
                  {stakeholders.map((stakeholder) => (
                    <div
                      key={stakeholder}
                      className="px-3 py-1 glass-effect rounded-full text-sm"
                    >
                      {stakeholder}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Leadership Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Leadership Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-effect rounded-xl p-6">
              <Briefcase className="w-8 h-8 text-primary-400 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Data-Driven Decisions</h4>
              <p className="text-gray-400 text-sm">
                Every initiative backed by rigorous A/B testing and incremental modeling
              </p>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <Award className="w-8 h-8 text-accent-400 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Team Empowerment</h4>
              <p className="text-gray-400 text-sm">
                Building T-shaped experts who bridge technical depth with business acumen
              </p>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <Target className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Strategic Alignment</h4>
              <p className="text-gray-400 text-sm">
                Translating C-suite vision into executable technical roadmaps
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}