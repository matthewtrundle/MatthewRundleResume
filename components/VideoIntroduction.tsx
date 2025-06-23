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
            <h4 className="font-semibold text-gray-900 mb-2">Your Video Script - "The Bridge Builder"</h4>
            <ol className="space-y-3 text-sm text-gray-700">
              <li><strong>0:00-0:10</strong> - "Hi, I'm Matt. After 5+ years leading analytics and data science teams, I watched a pattern: brilliant analysts spending 20 hours building reports that executives spent 20 seconds reviewing. I knew there had to be a better way."</li>
              <li><strong>0:10-0:30</strong> - "At Expedia Group, I led analytics transformation worth $200 million, built predictive models that drove supply growth, and managed teams across 5 global markets. But my real breakthrough came when I started using AI to democratize these insights - suddenly, everyone could think like a data scientist."</li>
              <li><strong>0:30-0:50</strong> - "That sparked something. Since then, I've built 5 production AI systems that put analytical power directly in users' hands. My favorite? 'Agents Being Salty' - where AI agents literally debate their way to better decisions. It's unconventional, but that's the point. Real innovation happens when you combine analytical rigor with creative implementation."</li>
              <li><strong>0:50-1:10</strong> - "Here's what 6 years of data science leadership taught me: Most AI fails because of the gap between technical teams building and business teams using. I live in that gap. I've presented to C-suites, built ML models, managed P&Ls, and shipped production code. I translate executive vision into working systems."</li>
              <li><strong>1:10-1:25</strong> - "I'm not claiming to be a PhD researcher. I'm the leader who's been in the trenches - who's built segmentation models, fraud detection systems, and demand forecasts. Who knows that the best AI solution is the one that actually gets used. Who gets teams excited about AI augmentation, not fearful of replacement."</li>
              <li><strong>1:25-1:30</strong> - "If you need someone to bridge analytics, data science, and AI in your organization - someone who's done it before - let's talk. I'm ready to help you turn AI potential into measurable impact."</li>
            </ol>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}