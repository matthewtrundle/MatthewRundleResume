"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Calendar, Download, ArrowRight } from "lucide-react";

export default function ModernContact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-width">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-subtitle">
              Ready to discuss how I can drive AI transformation in your organization
            </p>
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="card p-8 mb-8 text-center bg-gradient-to-br from-blue-50 to-purple-50"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Available for AI Implementation Leadership Roles
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Seeking VP of AI Strategy, Head of Applied AI, or similar roles where I can 
              leverage my unique combination of enterprise leadership and hands-on AI expertise 
              to drive transformation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:matthew.rundle@gmail.com"
                className="btn-primary flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Me Directly
              </a>
              <a
                href="https://www.linkedin.com/in/matthewtrundle/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Contact Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.a
              href="mailto:matthew.rundle@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-bordered p-6 hover-lift text-center group"
            >
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
              <p className="text-gray-600 text-sm mb-3">For opportunities & inquiries</p>
              <span className="text-blue-600 text-sm group-hover:underline">
                matthew.rundle@gmail.com
              </span>
            </motion.a>

            <motion.a
              href="/matthew-rundle-resume.docx"
              download
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card-bordered p-6 hover-lift text-center group"
            >
              <Download className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-1">Resume</h4>
              <p className="text-gray-600 text-sm mb-3">Download full details</p>
              <span className="text-blue-600 text-sm group-hover:underline">
                Download DOCX
              </span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/matthewtrundle/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="card-bordered p-6 hover-lift text-center group"
            >
              <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-1">Schedule</h4>
              <p className="text-gray-600 text-sm mb-3">Let's discuss opportunities</p>
              <span className="text-blue-600 text-sm group-hover:underline">
                Book via LinkedIn
              </span>
            </motion.a>
          </div>

          {/* Additional Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 mt-8"
          >
            <a
              href="https://github.com/matthewtrundle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/matthewtrundle/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}