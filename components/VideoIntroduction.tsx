"use client";

import { motion } from "framer-motion";
import { Play, Clock, Volume2 } from "lucide-react";
import { useState } from "react";

export default function VideoIntroduction() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="section-title">Executive Introduction</h2>
            <p className="section-subtitle">
              Learn about my vision for AI-driven transformation in 2 minutes
            </p>
          </div>

          <div className="card overflow-hidden">
            <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
              {/* Video Placeholder - Replace with actual video */}
              {!isPlaying ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsPlaying(true)}
                      className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors mb-4"
                    >
                      <Play className="w-8 h-8 text-white ml-1" />
                    </motion.button>
                    <p className="text-gray-600 mb-2">Click to play video introduction</p>
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        2:00
                      </span>
                      <span className="flex items-center gap-1">
                        <Volume2 className="w-4 h-4" />
                        With audio
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full">
                  <video
                    controls
                    autoPlay
                    className="w-full h-full"
                    onEnded={() => setIsPlaying(false)}
                  >
                    <source src="/videos/executive-intro.mp4" type="video/mp4" />
                    <div className="flex items-center justify-center h-full">
                      <p className="text-gray-600 text-center p-8">
                        Video coming soon. Upload your executive introduction to:<br />
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm">/public/videos/executive-intro.mp4</code>
                      </p>
                    </div>
                  </video>
                </div>
              )}
            </div>

            {/* Video Highlights */}
            <div className="p-6 bg-gray-50">
              <h3 className="font-semibold text-gray-900 mb-3">In This Video:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-blue-600">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">My AI Vision</h4>
                    <p className="text-sm text-gray-600">How AI transforms business at scale</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-blue-600">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Key Achievements</h4>
                    <p className="text-sm text-gray-600">$200M impact through AI initiatives</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-blue-600">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Future Goals</h4>
                    <p className="text-sm text-gray-600">Leading AI transformation at scale</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Script - Ready to Use */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 p-6 bg-blue-50 rounded-lg"
          >
            <h4 className="font-semibold text-gray-900 mb-2">Your Video Script - "The Strategic Pivot"</h4>
            <ol className="space-y-3 text-sm text-gray-700">
              <li><strong>0:00-0:15</strong> - "At Expedia Group, I've driven $200 million in analytics transformation while leading teams across 5 global markets. But my real journey began when I started using AI at Vrbo to generate insights for executive strategy."</li>
              <li><strong>0:15-0:35</strong> - "Over the past 12 months, I've evolved from using AI to building AI. I now create the tools and agents that enable others to find insights and make decisions. From enterprise data assistants to multi-agent systems, I've built 5+ production AI solutions."</li>
              <li><strong>0:35-0:55</strong> - "What makes me different? I'm a senior leader who can architect and implement AI solutions. I've led 6 direct reports and collaborated with 100+ cross-functional partners. I understand both the boardroom and the codebase."</li>
              <li><strong>0:55-1:15</strong> - "Organizations need leaders who've walked the AI journey—from adoption to implementation. Someone who can translate business needs into AI solutions and actually build them. That's the unique value I bring."</li>
              <li><strong>1:15-1:30</strong> - "If you're looking for an AI leader who combines strategic thinking with hands-on building, let's explore how I can help your organization master AI implementation."</li>
            </ol>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}