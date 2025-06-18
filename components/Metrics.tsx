"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Zap } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  {
    icon: DollarSign,
    value: "$100M+",
    label: "Incremental GMV",
    description: "From 20% supply growth (400K new listings)",
    color: "text-green-400",
  },
  {
    icon: Users,
    value: "100+",
    label: "Cross-Functional Team",
    description: "Engineers, analysts, designers, PMs led globally",
    color: "text-blue-400",
  },
  {
    icon: TrendingUp,
    value: "12%",
    label: "Conversion Uplift",
    description: "ML-powered readiness scores deployed globally",
    color: "text-purple-400",
  },
  {
    icon: Zap,
    value: "40%",
    label: "Efficiency Gain",
    description: "Reduction in manual reporting through automation",
    color: "text-yellow-400",
  },
];

export default function Metrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="metrics" className="py-20 relative">
      <div className="max-width-container section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Measurable Impact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Driving real business value through strategic AI implementation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="metric-card group"
            >
              <div className="flex items-center justify-between mb-4">
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
                <motion.span
                  className="text-3xl font-bold"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                >
                  {metric.value}
                </motion.span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{metric.label}</h3>
              <p className="text-sm text-gray-400">{metric.description}</p>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}