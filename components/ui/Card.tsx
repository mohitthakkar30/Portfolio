'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      className={cn(
        'relative overflow-hidden rounded-2xl',
        'bg-white/80 dark:bg-gray-900/80',
        'border border-gray-200 dark:border-gray-800',
        'backdrop-blur-sm',
        'shadow-lg transition-all duration-300',
        hover && 'hover:shadow-2xl',
        className
      )}
      whileHover={hover ? { y: -5 } : undefined}
    >
      {children}
    </motion.div>
  );
}
