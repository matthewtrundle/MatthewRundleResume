"use client";

import { motion } from "framer-motion";
import { Download, Linkedin, Mail, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ModernHero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container-width">
        <div className="pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Name & Title */}
              <div className="mb-6">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                  Matthew Rundle
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-700 mb-2">
                  Data Science & AI Leader
                </h2>
                <p className="text-lg text-gray-600">
                  Enterprise Analytics Leadership + Hands-on AI Implementation
                </p>
              </div>

              {/* Value Proposition */}
              <div className="mb-8">
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Senior leader at Expedia Group who drove <span className="font-semibold text-gray-900">$200M+ in analytics transformation</span>. 
                  Currently on a <span className="font-semibold text-gray-900">strategic sabbatical</span> mastering hands-on AI implementation.
                </p>
                <p className="text-lg text-gray-600 mb-3">
                  Built <span className="font-semibold">5+ production AI systems</span> while preparing to lead 
                  enterprise AI transformation at scale.
                </p>
                <p className="text-sm text-blue-600 font-medium">
                  ✨ Turning career transition into competitive advantage through hands-on AI building
                </p>
              </div>

              {/* Key Metrics - Immediate Impact */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="metric-card">
                  <p className="text-3xl font-bold text-blue-600">$200M+</p>
                  <p className="text-sm text-gray-600 mt-1">Enterprise Impact at Expedia</p>
                </div>
                <div className="metric-card">
                  <p className="text-3xl font-bold text-blue-600">100+</p>
                  <p className="text-sm text-gray-600 mt-1">Cross-functional Partners</p>
                </div>
                <div className="metric-card">
                  <p className="text-3xl font-bold text-blue-600">5+</p>
                  <p className="text-sm text-gray-600 mt-1">Production AI Systems Built</p>
                </div>
                <div className="metric-card">
                  <p className="text-3xl font-bold text-blue-600">12mo+</p>
                  <p className="text-sm text-gray-600 mt-1">AI Journey: Using → Building</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="/matthew-rundle-resume.docx"
                  download
                  className="btn-primary flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/matthewtrundle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </motion.a>
              </div>
            </motion.div>

            {/* Right Column - Professional Headshot */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Background Shape - Professional gradient */}
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/20 to-teal-600/20 rounded-3xl blur-2xl"></div>
                
                {/* Professional Headshot Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-700 to-teal-800">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src="/images/headshot.jpeg"
                      alt="Matthew Rundle - AI Implementation Leader"
                      width={400}
                      height={500}
                      className="w-full h-full object-cover object-top"
                      priority
                    />
                    
                    {/* Professional Text Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/95 via-slate-900/80 to-transparent p-8 pt-20">
                      <h3 className="text-white text-2xl font-bold mb-2">Matthew Rundle</h3>
                      <p className="text-blue-200 font-medium mb-1">AI Implementation Leader</p>
                      <p className="text-gray-300 text-sm">Bridging Enterprise Strategy & AI Development</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-gray-900">10+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">6</p>
                  <p className="text-sm text-gray-600">Direct Reports</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">5</p>
                  <p className="text-sm text-gray-600">Global Markets</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-16 text-center"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <p className="text-sm text-gray-500 mb-2">Explore my work</p>
            <ArrowRight className="w-5 h-5 text-gray-400 mx-auto rotate-90" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}