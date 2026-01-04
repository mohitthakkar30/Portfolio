'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  href?: string;
}

export function Button({
  children,
  className,
  variant = 'primary',
  onClick,
  href,
}: ButtonProps) {
  const baseStyles = 'relative px-8 py-4 rounded-full font-semibold transition-all duration-300';

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-accent text-white shadow-lg hover:shadow-xl',
    outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(baseStyles, variantStyles[variant], className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </Component>
  );
}
