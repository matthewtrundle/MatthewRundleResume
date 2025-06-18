"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cloud, Brain, Sparkles } from "lucide-react";

const techCategories = [
  {
    title: "AI/ML Frameworks",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "scikit-learn", level: 90 },
      { name: "Hugging Face", level: 75 },
      { name: "Claude/OpenAI APIs", level: 95 },
    ],
  },
  {
    title: "Data & Analytics",
    icon: Database,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Snowflake", level: 95 },
      { name: "SQL", level: 95 },
      { name: "Apache Spark", level: 80 },
      { name: "dbt", level: 85 },
      { name: "Tableau", level: 90 },
    ],
  },
  {
    title: "Development",
    icon: Code2,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Python", level: 90 },
      { name: "React/Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "FastAPI", level: 85 },
      { name: "Git/CI/CD", level: 90 },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "AWS SageMaker", level: 85 },
      { name: "Docker/Kubernetes", level: 75 },
      { name: "Airflow", level: 80 },
      { name: "Redis", level: 70 },
      { name: "PostgreSQL", level: 85 },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 relative">
      <div className="max-width-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Arsenal</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Deep expertise across the modern AI/ML stack
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="glass-effect rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Cloud Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 glass-effect rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-accent-400" />
            <h3 className="text-2xl font-bold">500+ Hours AI Implementation Experience</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Prompt Engineering",
              "RAG Systems",
              "Fine-tuning",
              "Vector Databases",
              "LangChain",
              "Embeddings",
              "MLOps",
              "A/B Testing",
              "Feature Engineering",
              "Model Deployment",
              "Data Pipelines",
              "API Development",
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.05 }}
                className="px-4 py-2 glass-effect rounded-full text-center text-sm hover-glow"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}