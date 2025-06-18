"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Matthew's ability to translate complex AI concepts into actionable business strategies is unmatched. His supply growth initiative didn't just hit targets—it redefined how we approach market expansion.",
    author: "VP of Product",
    role: "Expedia Group",
    rating: 5
  },
  {
    quote: "I've worked with many analytics leaders, but Matthew stands out for his unique combination of technical depth and strategic vision. He doesn't just build models—he builds movements.",
    author: "Director of Engineering",
    role: "Vrbo",
    rating: 5
  },
  {
    quote: "Matthew transformed our approach to data-driven decision making. His executive dashboards became the foundation for every quarterly planning session.",
    author: "CFO",
    role: "Vrbo",
    rating: 5
  }
];

const achievements = [
  "Led highest-impact analytics initiative in Vrbo history",
  "Selected to present AI strategy to board of directors",
  "Mentored 15+ team members to promotions",
  "Established first ML Center of Excellence"
];

export default function ModernTestimonials() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">What Leaders Say</h2>
          <p className="section-subtitle">
            Testimonials from executives and partners
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card p-6 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-gray-200" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 italic relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="card p-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Key Recognition & Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <Star className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-700">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* LinkedIn CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-gray-600 mb-2">Want to see more recommendations?</p>
          <a
            href="https://www.linkedin.com/in/matthewtrundle/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            View all on LinkedIn →
          </a>
        </motion.div>
      </div>
    </section>
  );
}