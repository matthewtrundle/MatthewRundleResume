"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users, DollarSign, Calendar, TrendingUp, ChevronDown, ChevronUp, Building2 } from "lucide-react";
import { executiveCaseStudies } from "@/lib/executive-case-studies";

export default function ExecutiveCaseStudies() {
  const [expandedStudy, setExpandedStudy] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedStudy(expandedStudy === id ? null : id);
  };

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
            <span className="gradient-text">Strategic AI Initiatives</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Executive-led transformations driving measurable business impact at scale
          </p>
        </motion.div>

        <div className="space-y-8">
          {executiveCaseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-2xl overflow-hidden"
            >
              {/* Case Study Header */}
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {study.title}
                    </h3>
                    <p className="text-lg text-gray-300 mb-6">
                      {study.executiveSummary}
                    </p>

                    {/* Key Metrics Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="glass-effect rounded-lg p-4 text-center">
                        <DollarSign className="w-6 h-6 text-green-400 mx-auto mb-2" />
                        <p className="text-2xl font-bold">{study.impact.financial[0].value}</p>
                        <p className="text-sm text-gray-400">{study.impact.financial[0].metric}</p>
                      </div>
                      <div className="glass-effect rounded-lg p-4 text-center">
                        <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                        <p className="text-2xl font-bold">{study.implementation.teamSize}</p>
                        <p className="text-sm text-gray-400">Team Scale</p>
                      </div>
                      <div className="glass-effect rounded-lg p-4 text-center">
                        <Calendar className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                        <p className="text-2xl font-bold">{study.businessContext.timeline}</p>
                        <p className="text-sm text-gray-400">Delivery</p>
                      </div>
                      <div className="glass-effect rounded-lg p-4 text-center">
                        <TrendingUp className="w-6 h-6 text-accent-400 mx-auto mb-2" />
                        <p className="text-2xl font-bold">{study.impact.financial[1]?.value || study.impact.operational[0].improvement}</p>
                        <p className="text-sm text-gray-400">Efficiency</p>
                      </div>
                    </div>

                    {/* Stakeholders */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="text-sm text-gray-400">Key Stakeholders:</span>
                      {study.businessContext.stakeholders.map((stakeholder) => (
                        <span key={stakeholder} className="px-3 py-1 glass-effect rounded-full text-sm">
                          {stakeholder}
                        </span>
                      ))}
                    </div>

                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => toggleExpand(study.id)}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all"
                    >
                      <span>View Full Case Study</span>
                      {expandedStudy === study.id ? <ChevronUp /> : <ChevronDown />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedStudy === study.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-white/10"
                >
                  <div className="p-8 space-y-8">
                    {/* Business Context */}
                    <div>
                      <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-primary-400" />
                        Business Context
                      </h4>
                      <div className="glass-effect rounded-xl p-6 space-y-4">
                        <div>
                          <span className="font-semibold text-primary-400">Challenge:</span>
                          <p className="text-gray-300 mt-1">{study.businessContext.challenge}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <span className="font-semibold text-primary-400">Budget:</span>
                            <p className="text-gray-300">{study.businessContext.budget}</p>
                          </div>
                          <div>
                            <span className="font-semibold text-primary-400">Timeline:</span>
                            <p className="text-gray-300">{study.businessContext.timeline}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Solution Architecture */}
                    <div>
                      <h4 className="text-xl font-bold mb-4">Solution Architecture</h4>
                      <div className="glass-effect rounded-xl p-6 space-y-4">
                        <div>
                          <span className="font-semibold text-primary-400">Strategy:</span>
                          <p className="text-gray-300 mt-1">{study.solution.strategy}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-primary-400">Technical Approach:</span>
                          <p className="text-gray-300 mt-1">{study.solution.techApproach}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-primary-400">Key Decisions:</span>
                          <ul className="mt-2 space-y-2">
                            {study.solution.keyDecisions.map((decision, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-accent-400 mt-1">•</span>
                                <span className="text-gray-300">{decision}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Implementation Phases */}
                    <div>
                      <h4 className="text-xl font-bold mb-4">Implementation Journey</h4>
                      <div className="space-y-4">
                        {study.implementation.phases.map((phase, i) => (
                          <div key={i} className="glass-effect rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex-1">
                              <h5 className="font-semibold text-lg text-primary-400">{phase.phase}</h5>
                              <p className="text-gray-400">Duration: {phase.duration}</p>
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-300">{phase.outcome}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Verified Impact */}
                    <div>
                      <h4 className="text-xl font-bold mb-4">Verified Business Impact</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="glass-effect rounded-xl p-6">
                          <h5 className="font-semibold mb-4 text-green-400">Financial Impact</h5>
                          <div className="space-y-3">
                            {study.impact.financial.map((item, i) => (
                              <div key={i}>
                                <div className="flex justify-between items-start mb-1">
                                  <span className="font-medium">{item.metric}</span>
                                  <span className="text-xl font-bold text-green-400">{item.value}</span>
                                </div>
                                <p className="text-sm text-gray-400">{item.verification}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="glass-effect rounded-xl p-6">
                          <h5 className="font-semibold mb-4 text-blue-400">Operational Impact</h5>
                          <div className="space-y-3">
                            {study.impact.operational.map((item, i) => (
                              <div key={i}>
                                <p className="font-medium">{item.metric}</p>
                                <p className="text-lg text-blue-400">{item.improvement}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Strategic Outcomes */}
                    <div>
                      <h4 className="text-xl font-bold mb-4">Strategic Outcomes</h4>
                      <div className="glass-effect rounded-xl p-6">
                        <ul className="space-y-2">
                          {study.impact.strategic.map((outcome, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <ArrowRight className="w-5 h-5 text-accent-400 mt-0.5" />
                              <span className="text-gray-300">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Lessons Learned */}
                    <div>
                      <h4 className="text-xl font-bold mb-4">Executive Lessons Learned</h4>
                      <div className="glass-effect rounded-xl p-6">
                        <ul className="space-y-2">
                          {study.lessonsLearned.map((lesson, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary-400 mt-1">→</span>
                              <span className="text-gray-300">{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}