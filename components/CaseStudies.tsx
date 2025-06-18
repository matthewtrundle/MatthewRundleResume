"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Filter, ChevronRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import { cn } from "@/lib/utils";

const categories = ["All", "Machine Learning", "Revenue Optimization", "Strategic Analytics", "Security & Trust", "Natural Language Processing"];

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedStudy, setExpandedStudy] = useState<string | null>(null);

  const filteredStudies = selectedCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <section id="case-studies" className="py-20 relative">
      <div className="max-width-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">AI Solutions Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real-world AI implementations driving business transformation
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-4 py-2 rounded-lg transition-all",
                selectedCategory === category
                  ? "bg-primary-500 text-white"
                  : "glass-effect hover-glow"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredStudies.filter(s => s.featured).map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="case-study-card group cursor-pointer"
              onClick={() => setExpandedStudy(expandedStudy === study.id ? null : study.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-400">{study.subtitle}</p>
                </div>
                <ChevronRight className={cn(
                  "w-6 h-6 transition-transform",
                  expandedStudy === study.id ? "rotate-90" : ""
                )} />
              </div>

              {/* Challenge Preview */}
              <p className="text-gray-300 mb-6">{study.challenge}</p>

              {/* Key Results */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {study.results.map((result) => (
                  <div key={result.metric} className="text-center">
                    <p className="text-2xl font-bold text-primary-400">{result.value}</p>
                    <p className="text-sm text-gray-400">{result.metric}</p>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {study.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 glass-effect rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Expanded Content */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expandedStudy === study.id ? "auto" : 0,
                  opacity: expandedStudy === study.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-6 border-t border-white/10">
                  <h4 className="font-semibold mb-3">Approach</h4>
                  <p className="text-gray-300 mb-6">{study.approach}</p>

                  <h4 className="font-semibold mb-3">Implementation</h4>
                  <ul className="space-y-2 mb-6">
                    {study.implementation.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary-400 mt-1">•</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4">
                    {study.demoUrl && (
                      <a
                        href={study.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary-500 rounded-lg hover:bg-primary-600 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {study.githubUrl && (
                      <a
                        href={study.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 glass-effect rounded-lg hover-glow"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Other Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredStudies.filter(s => !s.featured).map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-xl p-6 hover-glow group"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-400 transition-colors">
                {study.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{study.subtitle}</p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-primary-400">{study.results[0].value}</p>
                  <p className="text-xs text-gray-400">{study.results[0].metric}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}