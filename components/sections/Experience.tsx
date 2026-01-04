'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/lib/data/experience';
import { TimelineNode } from '../ui/TimelineNode';
import { AnimatedSection } from '../ui/AnimatedSection';

export function Experience() {
  return (
    <section id="experience" className="relative min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            My journey in Web3 and Developer Relations
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          {/* Timeline Nodes */}
          {experiences.map((experience, index) => (
            <TimelineNode
              key={experience.id}
              experience={experience}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
