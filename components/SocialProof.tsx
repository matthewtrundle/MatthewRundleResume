"use client";

import { motion } from "framer-motion";
import { Quote, Star, Building2 } from "lucide-react";

const testimonials = [
  {
    quote: "Matthew's ability to translate complex AI concepts into actionable business strategies is unmatched. His supply growth initiative didn't just hit targets—it redefined how we approach market expansion.",
    author: "VP of Product",
    company: "Expedia Group",
    context: "On the $100M supply growth initiative"
  },
  {
    quote: "I've worked with many analytics leaders, but Matthew stands out for his unique combination of technical depth and strategic vision. He doesn't just build models—he builds movements.",
    author: "Director of Engineering", 
    company: "Vrbo",
    context: "Cross-functional partnership"
  },
  {
    quote: "Matthew transformed our approach to data-driven decision making. His executive dashboards became the foundation for every quarterly planning session. Simply put: he makes the complex simple.",
    author: "CFO",
    company: "Vrbo",
    context: "Executive analytics platform"
  }
];

const recognitions = [
  "Led highest-impact analytics initiative in Vrbo history ($100M+ GMV)",
  "Selected to present AI strategy to Expedia Group board of directors",
  "Mentored 15+ team members to promotions within 18 months",
  "Established Vrbo's first ML Center of Excellence"
];

export default function SocialProof() {
  return (
    <section className="py-20 relative">
      <div className="max-width-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Validated Leadership</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            What executives and partners say about working with me
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-xl p-6 relative"
            >
              <Quote className="w-8 h-8 text-primary-400/20 absolute top-6 left-6" />
              <div className="pt-8">
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.company}</p>
                  <p className="text-xs text-primary-400 mt-1">{testimonial.context}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Recognitions */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Key Achievements & Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recognitions.map((recognition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <Star className="w-5 h-5 text-accent-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">{recognition}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partner Logos Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-400 mb-6">Proud to have partnered with</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {["Expedia Group", "Vrbo", "National Instruments"].map((company) => (
              <div key={company} className="flex items-center gap-2 glass-effect rounded-lg px-6 py-3">
                <Building2 className="w-5 h-5 text-primary-400" />
                <span className="font-semibold">{company}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Note about references */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm">
            * Full references and LinkedIn recommendations available upon request
          </p>
        </motion.div>
      </div>
    </section>
  );
}