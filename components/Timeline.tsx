"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase, GraduationCap, Rocket, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const timelineEvents = [
  {
    date: "2013-2016",
    title: "Analytics Foundation",
    company: "Healthcare Analytics Sector",
    description: "Built analytics products across 8 hospital systems, establishing expertise in data-driven decision making",
    icon: Briefcase,
    highlight: false,
  },
  {
    date: "2016-2018",
    title: "Senior Analytics Consultant",
    company: "National Instruments",
    description: "Reduced manual reporting by 40% through standardized workflows, first exposure to automation potential",
    icon: Briefcase,
    highlight: false,
  },
  {
    date: "2018-2019",
    title: "Data Analyst II",
    company: "Vrbo (Expedia Group)",
    description: "Created dashboards for listing quality, laid foundation for ML-powered readiness scores",
    icon: Briefcase,
    highlight: false,
  },
  {
    date: "2019-2021",
    title: "Manager, Analytics & Data Science",
    company: "Vrbo (Expedia Group)",
    description: "The AI awakening - designed segmentation frameworks and built opportunity models with measurable ROI",
    icon: Rocket,
    highlight: true,
  },
  {
    date: "2021-Present",
    title: "Senior Manager, Supply & Commercial Analytics",
    company: "Vrbo (Expedia Group)",
    description: "Leading global team, driving $200M+ impact through AI-powered analytics and ML solutions",
    icon: Star,
    highlight: true,
  },
  {
    date: "2023-2024",
    title: "500+ Hours AI Deep Dive",
    company: "Personal Development",
    description: "Intensive hands-on AI/ML development, building production-ready solutions across multiple domains",
    icon: GraduationCap,
    highlight: true,
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 relative overflow-hidden">
      <div className="max-width-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">The Journey to AI Leadership</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From analytics foundations to AI architecture - a decade of continuous growth
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500/20 via-primary-500/50 to-primary-500/20" />

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.date}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
                  index % 2 === 0 ? "md:text-right" : ""
                )}
              >
                {/* Content */}
                <div className={cn(
                  "space-y-2",
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                )}>
                  <div className={cn(
                    "inline-flex items-center gap-2 text-sm",
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  )}>
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400">{event.date}</span>
                  </div>
                  <h3 className={cn(
                    "text-2xl font-bold",
                    event.highlight ? "text-primary-400" : ""
                  )}>
                    {event.title}
                  </h3>
                  <p className="text-lg text-gray-300">{event.company}</p>
                  <p className="text-gray-400">{event.description}</p>
                </div>

                {/* Icon */}
                <div className={cn(
                  "flex justify-center",
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                )}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={cn(
                      "w-16 h-16 rounded-full flex items-center justify-center relative z-10",
                      event.highlight 
                        ? "bg-gradient-to-br from-primary-500 to-accent-500" 
                        : "glass-effect"
                    )}
                  >
                    <event.icon className="w-8 h-8" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}