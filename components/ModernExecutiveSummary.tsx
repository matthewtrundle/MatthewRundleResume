"use client";

import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Users, Target } from "lucide-react";

const highlights = [
  {
    icon: TrendingUp,
    title: "Analytics Leadership",
    description: "Drove $200M+ transformation with 6 direct reports and 100+ cross-functional partners"
  },
  {
    icon: Users,
    title: "AI Evolution",
    description: "12+ month journey from using AI for insights to building AI tools and agents"
  },
  {
    icon: Target,
    title: "Unique Value",
    description: "Senior leader who architects and implements production AI systems"
  }
];

const competencies = [
  "AI Strategy & Implementation",
  "Prompt Engineering",
  "RAG & Vector Databases",
  "Multi-Agent Systems",
  "Executive Stakeholder Management", 
  "P&L Ownership",
  "Global Team Leadership",
  "Full-Stack AI Development"
];

export default function ModernExecutiveSummary() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left - Summary */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Executive Summary</h2>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p className="mb-6">
                  As a senior leader at Expedia Group, I've driven $200M+ in analytics transformation 
                  while leading 6 direct reports and collaborating with 100+ cross-functional partners. 
                  My AI journey began at Vrbo using AI for analytics and insights to support executive 
                  strategy—but I saw the bigger opportunity.
                </p>
                <p className="mb-6">
                  Over the past 12+ months, I've evolved from using AI to building AI. I now create 
                  the tools and agents that enable others to find insights and drive decisions. From 
                  enterprise data assistants to multi-agent systems, I combine senior leadership 
                  experience with hands-on technical implementation—a rare and valuable combination.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="mt-8 space-y-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Core Competencies */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Core Competencies</h3>
              <div className="space-y-3">
                {competencies.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{skill}</span>
                  </motion.div>
                ))}
              </div>

              {/* Target Role */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Target Roles</h4>
                <p className="text-gray-600 mb-2">
                  VP of AI Strategy • Head of Applied AI • AI Implementation Leader
                </p>
                <p className="text-sm text-gray-500">
                  Organizations seeking leaders who can both strategize and build AI solutions
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}