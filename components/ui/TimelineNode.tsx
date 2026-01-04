'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/lib/types';
import { Badge } from './Badge';

interface TimelineNodeProps {
  experience: Experience;
  index: number;
  isLeft: boolean;
}

export function TimelineNode({ experience, index, isLeft }: TimelineNodeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className={`flex ${isLeft ? 'flex-row-reverse' : 'flex-row'} items-center gap-8 mb-12`}
    >
      {/* Content */}
      <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
        <motion.div
          className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-lg"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-bold text-foreground mb-1">{experience.role}</h3>
          <p className="text-primary font-semibold mb-2">{experience.company}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{experience.duration}</p>

          <ul className={`space-y-2 mb-4 ${isLeft ? 'text-right' : 'text-left'}`}>
            {experience.description.map((item, i) => (
              <li key={i} className="text-gray-700 dark:text-gray-300 text-sm">
                {item}
              </li>
            ))}
          </ul>

          <div className={`flex flex-wrap gap-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
            {experience.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Timeline Node */}
      <motion.div
        className="relative z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 + 0.3, type: 'spring', stiffness: 260, damping: 20 }}
      >
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary glow-primary" />
      </motion.div>

      {/* Spacer */}
      <div className="flex-1" />
    </motion.div>
  );
}
