"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, Users, DollarSign, TrendingUp, Award } from "lucide-react";

const experiences = [
  {
    company: "Expedia Group (Vrbo)",
    logo: Building2,
    role: "Senior Manager, Supply & Commercial Analytics",
    duration: "2021 - January 2025",
    location: "Seattle, WA",
    highlights: [
      {
        icon: DollarSign,
        metric: "$100M+",
        description: "Incremental GMV from 20% supply growth"
      },
      {
        icon: Users,
        metric: "100+",
        description: "Cross-functional team members led"
      },
      {
        icon: TrendingUp,
        metric: "12%",
        description: "Conversion uplift from ML models"
      }
    ],
    achievements: [
      "Led global initiative adding 400K properties through AI-powered market scoring",
      "Built ML platform processing 570K+ listings with real-time recommendations",
      "Established C-suite analytics dashboard influencing $500M+ in strategic decisions",
      "Reduced manual reporting by 40% through automation and self-service tools"
    ],
    technologies: ["Python", "TensorFlow", "AWS SageMaker", "Snowflake", "Tableau"]
  },
  {
    company: "Expedia Group (Vrbo)",
    logo: Building2,
    role: "Manager, Analytics & Data Science",
    duration: "2019 - 2021",
    location: "Seattle, WA",
    highlights: [
      {
        icon: Award,
        metric: "First",
        description: "ML Center of Excellence"
      },
      {
        icon: Users,
        metric: "6",
        description: "Direct reports mentored"
      },
      {
        icon: TrendingUp,
        metric: "35%",
        description: "Faster time to first booking"
      }
    ],
    achievements: [
      "Designed segmentation frameworks for targeted market expansion",
      "Built opportunity models with measurable commercial ROI",
      "Established data science best practices across organization",
      "Launched cross-functional AI literacy program"
    ],
    technologies: ["Python", "scikit-learn", "XGBoost", "SQL", "dbt"]
  }
];

export default function ModernExperience() {
  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            From enterprise analytics leadership to hands-on AI implementation
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card p-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Company Info */}
                <div className="lg:w-1/4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <exp.logo className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">{exp.company}</h3>
                  </div>
                  <p className="text-gray-600 mb-1">{exp.location}</p>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </p>
                </div>

                {/* Role Details */}
                <div className="lg:w-3/4">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    {exp.role}
                  </h4>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {exp.highlights.map((highlight) => (
                      <div key={highlight.description} className="text-center">
                        <div className="flex justify-center mb-2">
                          <highlight.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{highlight.metric}</p>
                        <p className="text-xs text-gray-600">{highlight.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Key Achievements</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="badge badge-secondary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Experience */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href="https://www.linkedin.com/in/matthewtrundle/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            View complete work history on LinkedIn →
          </a>
        </motion.div>
      </div>
    </section>
  );
}