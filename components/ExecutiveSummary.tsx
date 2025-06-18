"use client";

import { motion } from "framer-motion";
import { Target, Briefcase, Award, ArrowRight } from "lucide-react";

export default function ExecutiveSummary() {
  return (
    <section id="executive-summary" className="py-20 relative">
      <div className="max-width-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Executive Summary</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Current Role */}
            <div className="text-center">
              <Briefcase className="w-12 h-12 text-primary-400 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Current Focus</h3>
              <p className="text-gray-300">
                Senior Manager leading global analytics & AI transformation at Expedia Group
              </p>
            </div>

            {/* Target Role */}
            <div className="text-center">
              <Target className="w-12 h-12 text-accent-400 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Target Role</h3>
              <p className="text-gray-300">
                VP/Director of AI Strategy at innovative, AI-first organizations
              </p>
            </div>

            {/* Unique Value */}
            <div className="text-center">
              <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Unique Value</h3>
              <p className="text-gray-300">
                Proven ability to bridge technical AI implementation with C-suite strategy
              </p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 mb-6">
              I'm an AI and analytics executive who transforms organizations through strategic, 
              scalable AI implementations. At Expedia Group, I've led initiatives generating 
              <span className="text-white font-semibold"> $200M+ in measurable impact</span> by 
              combining deep technical expertise with executive leadership.
            </p>

            <p className="text-lg text-gray-300 mb-6">
              My approach is unique: I don't just theorize about AI—I build it. From architecting 
              ML systems processing 570K+ listings to leading 100+ cross-functional contributors, 
              I've proven that successful AI transformation requires both 
              <span className="text-white font-semibold"> hands-on technical fluency</span> and 
              <span className="text-white font-semibold"> strategic executive vision</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="glass-effect rounded-xl p-6">
                <h4 className="font-semibold mb-3 text-primary-400">What I Bring</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                    <span>10+ years translating business needs into technical solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                    <span>Track record of building and scaling high-performing global teams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                    <span>Experience presenting to and influencing C-suite decisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                    <span>Proven framework for de-risking enterprise AI deployments</span>
                  </li>
                </ul>
              </div>

              <div className="glass-effect rounded-xl p-6">
                <h4 className="font-semibold mb-3 text-accent-400">Where I Excel</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-accent-400 mt-0.5 flex-shrink-0" />
                    <span>Turning ambiguous business problems into clear AI strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-accent-400 mt-0.5 flex-shrink-0" />
                    <span>Building consensus between technical teams and executives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-accent-400 mt-0.5 flex-shrink-0" />
                    <span>Delivering measurable ROI through phased implementations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-accent-400 mt-0.5 flex-shrink-0" />
                    <span>Creating AI-first cultures that attract top talent</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-gray-300 mt-8 text-center">
              <span className="font-semibold">Ready to lead your AI transformation?</span> 
              <br />
              Let's discuss how I can drive similar results for your organization.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}