'use client';

import { motion } from 'framer-motion';
import { SkillItem } from '@/lib/types';

interface SkillBarProps {
  skill: SkillItem;
  index: number;
}

export function SkillBar({ skill, index }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="mb-4"
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium text-foreground">{skill.name}</span>
        <span className="text-gray-600 dark:text-gray-400">{skill.proficiency}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: skill.color || 'var(--gradient-primary)',
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2, duration: 1, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}
