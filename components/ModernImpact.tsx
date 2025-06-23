"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Zap, Target, BarChart3 } from "lucide-react";

const impactStories = [
  {
    title: "20% Supply Growth Initiative",
    icon: TrendingUp,
    category: "Revenue Growth",
    impact: "$100M+ GMV",
    description: "Led cross-functional initiative to strategically grow global supply by 20%, adding 400K properties",
    details: [
      "Developed AI-powered market opportunity scoring across 50+ factors",
      "Improved partner acquisition efficiency by 40% through data-driven targeting",
      "Standardized analytics framework adopted by 5 regional teams globally",
      "Secured executive sponsorship for expanded analytics capabilities and headcount"
    ],
    color: "blue"
  },
  {
    title: "ML-Powered Readiness Platform",
    icon: BarChart3,
    category: "Product Innovation",
    impact: "12% Conversion Lift",
    description: "Built ML platform analyzing 570K+ listings to improve partner onboarding and conversion",
    details: [
      "Reduced time-to-first-booking by 35% (45 → 29 days)",
      "Processed 10K+ new listings daily with real-time scoring and recommendations",
      "Enabled 60% of partners to achieve 'booking ready' status within first week",
      "Automated quality assessments that previously required manual review"
    ],
    color: "green"
  },
  {
    title: "Executive Analytics Platform",
    icon: Target,
    category: "Strategic Leadership",
    impact: "$500M Influenced",
    description: "Created C-suite dashboard that became foundation for quarterly planning and strategic pivots",
    details: [
      "Reduced executive decision time by 80%",
      "Standardized KPIs across organization",
      "Delivered weekly insights supporting quarterly business reviews",
      "Integrated data from 30+ disparate sources into unified view"
    ],
    color: "purple"
  }
];

const metrics = [
  { value: "$200M+", label: "Total Impact", icon: DollarSign },
  { value: "100+", label: "Team Members", icon: Users },
  { value: "570K", label: "Listings Optimized", icon: Zap },
  { value: "5", label: "Global Markets", icon: Target }
];

export default function ModernImpact() {
  return (
    <section id="impact" className="section-padding bg-white">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Enterprise Impact at Expedia</h2>
          <p className="section-subtitle">
            Proven track record of transforming analytics into business value
          </p>
        </motion.div>

        {/* Key Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <metric.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
              <p className="text-gray-600">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Impact Stories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {impactStories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-bordered p-6 hover-lift"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-${story.color}-100 rounded-lg flex items-center justify-center`}>
                  <story.icon className={`w-6 h-6 text-${story.color}-600`} />
                </div>
                <span className={`badge badge-${story.color === 'blue' ? 'primary' : story.color === 'green' ? 'success' : 'secondary'}`}>
                  {story.category}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h3>
              <p className="text-2xl font-bold text-blue-600 mb-3">{story.impact}</p>
              <p className="text-gray-600 mb-4">{story.description}</p>

              {/* Details */}
              <ul className="space-y-2">
                {story.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className={`text-${story.color}-600 mt-1`}>•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}