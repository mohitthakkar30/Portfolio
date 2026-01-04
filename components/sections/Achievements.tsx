'use client';

import { motion } from 'framer-motion';
import { achievements } from '@/lib/data/achievements';
import { Card } from '../ui/Card';
import { AnimatedSection } from '../ui/AnimatedSection';

export function Achievements() {
  return (
    <section id="achievements" className="relative min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Recognition and community contributions
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, rotateY: 180 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
                ease: "easeOut"
              }}
            >
              <Card className="p-6 text-center h-full">
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 15
                  }}
                >
                  {achievement.icon}
                </motion.div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{achievement.title}</h3>
                <p className="text-primary font-semibold mb-2">{achievement.organization}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {achievement.date}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {achievement.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
