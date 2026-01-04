'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data/skills';
import { Badge } from '../ui/Badge';
import { AnimatedSection } from '../ui/AnimatedSection';

export function Skills() {
  return (
    <section id="skills" className="relative min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Technologies I work with
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills.map((skillCategory, categoryIndex) => (
            <AnimatedSection key={skillCategory.category} delay={categoryIndex * 0.1}>
              <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  {skillCategory.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillCategory.items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + index * 0.05, duration: 0.3 }}
                    >
                      <Badge color={skill.color}>{skill.name}</Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
