"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Calendar, Download, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-width-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Let's Build the Future Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your organization with strategic AI leadership
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            
            <div className="space-y-4">
              <a
                href="https://www.linkedin.com/in/matthewtrundle/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass-effect rounded-lg hover-glow group"
              >
                <Linkedin className="w-6 h-6 text-primary-400" />
                <div>
                  <p className="font-semibold group-hover:text-primary-400 transition-colors">
                    LinkedIn
                  </p>
                  <p className="text-sm text-gray-400">Connect with me</p>
                </div>
              </a>

              <a
                href="https://github.com/matthewtrundle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass-effect rounded-lg hover-glow group"
              >
                <Github className="w-6 h-6 text-primary-400" />
                <div>
                  <p className="font-semibold group-hover:text-primary-400 transition-colors">
                    GitHub
                  </p>
                  <p className="text-sm text-gray-400">View my projects</p>
                </div>
              </a>

              <a
                href="mailto:matthew.rundle@gmail.com"
                className="flex items-center gap-4 p-4 glass-effect rounded-lg hover-glow group"
              >
                <Mail className="w-6 h-6 text-primary-400" />
                <div>
                  <p className="font-semibold group-hover:text-primary-400 transition-colors">
                    Email
                  </p>
                  <p className="text-sm text-gray-400">Get in touch directly</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Quick Actions Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
            
            <div className="space-y-4">
              <motion.a
                href="/matthew-rundle-resume.docx"
                download
                className="flex items-center justify-between p-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <Download className="w-5 h-5" />
                  <span className="font-semibold">Download Resume</span>
                </div>
                <span className="text-sm opacity-80">DOCX • 2 pages</span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/matthewtrundle/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 glass-effect rounded-lg hover-glow group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-accent-400" />
                  <span className="font-semibold group-hover:text-accent-400 transition-colors">
                    Schedule a Call
                  </span>
                </div>
                <span className="text-sm text-gray-400">via LinkedIn</span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/matthewtrundle/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 glass-effect rounded-lg hover-glow group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-accent-400" />
                  <span className="font-semibold group-hover:text-accent-400 transition-colors">
                    Start a Conversation
                  </span>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-gray-400">
            © 2024 Matthew Rundle. Built with Next.js, TypeScript, and Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}