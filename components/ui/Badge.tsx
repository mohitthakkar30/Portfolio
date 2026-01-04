'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export function Badge({ children, className, color }: BadgeProps) {
  return (
    <motion.span
      className={cn(
        'inline-block px-3 py-1 rounded-full text-sm font-medium',
        'bg-primary/10 text-primary border border-primary/20',
        className
      )}
      style={color ? { backgroundColor: `${color}20`, color, borderColor: `${color}40` } : {}}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.span>
  );
}
