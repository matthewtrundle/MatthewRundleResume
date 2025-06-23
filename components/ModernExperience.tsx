"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, Users, DollarSign, TrendingUp, Award } from "lucide-react";

const experiences = [
  {
    company: "Expedia Group (Vrbo)",
    logo: Building2,
    role: "Senior Manager, Supply & Commercial Analytics",
    duration: "2021 - January 2025",
    location: "Austin, TX",
    highlights: [
      {
        icon: DollarSign,
        metric: "$100M+",
        description: "Incremental GMV influenced through analytics"
      },
      {
        icon: Users,
        metric: "100+",
        description: "Stakeholders across Product, Engineering, Marketing"
      },
      {
        icon: TrendingUp,
        metric: "12%",
        description: "Listing conversion improvement"
      }
    ],
    achievements: [
      "Spearheaded analytics strategy for 20% YoY supply growth initiative, directly influencing $100M+ incremental GMV through data-driven market prioritization",
      "Architected and deployed ML-powered listing quality scoring system processing 570K+ properties daily, improving conversion rates by 12%",
      "Established executive analytics function serving C-suite with weekly strategic insights, directly informing $500M+ in capital allocation decisions",
      "Transformed analytics operations by implementing automated pipelines and self-service tools, reducing reporting cycle time from days to hours"
    ],
    technologies: ["Python", "SQL", "Tableau", "Databricks", "Executive Presentations"]
  },
  {
    company: "Expedia Group (Vrbo)",
    logo: Building2,
    role: "Manager, Analytics & Data Science",
    duration: "2019 - 2021",
    location: "Austin, TX",
    highlights: [
      {
        icon: Award,
        metric: "First",
        description: "Analytics Center of Excellence at Vrbo"
      },
      {
        icon: Users,
        metric: "6→3",
        description: "Team members developed & promoted"
      },
      {
        icon: TrendingUp,
        metric: "35%",
        description: "Reduction in time to first booking"
      }
    ],
    achievements: [
      "Pioneered advanced market segmentation framework analyzing 50+ variables, identifying untapped markets representing $50M+ revenue opportunity",
      "Developed ensemble predictive models (XGBoost + Neural Networks) achieving 85% accuracy in identifying high-value property acquisition targets",
      "Founded and scaled Analytics Center of Excellence, establishing Python/SQL best practices adopted by 30+ analysts across the organization",
      "Built and mentored high-performing team of 6 data scientists, with 3 promoted to senior roles within 18 months"
    ],
    technologies: ["Python", "SQL", "Tableau", "Databricks", "Statistical Analysis"]
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