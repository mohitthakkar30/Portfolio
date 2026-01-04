import { Variants } from 'framer-motion';

// Fade animations
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// Scale animations
export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const scaleInBounce: Variants = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  },
};

// Stagger animations
export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// 3D Card effects
export const card3D: Variants = {
  initial: { rotateX: 0, rotateY: 0 },
  whileHover: {
    scale: 1.05,
    rotateX: -5,
    rotateY: 5,
    transition: { duration: 0.3 },
  },
};

// Magnetic hover effect
export const magneticHover = {
  scale: 1.1,
  transition: { type: 'spring', stiffness: 400, damping: 10 },
};

// Pulse glow
export const pulseGlow: Variants = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(99, 102, 241, 0.3)',
      '0 0 40px rgba(99, 102, 241, 0.5)',
      '0 0 20px rgba(99, 102, 241, 0.3)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Shimmer effect
export const shimmer: Variants = {
  animate: {
    backgroundPosition: ['200% 0', '-200% 0'],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

// Flip card
export const cardFlip: Variants = {
  initial: { rotateY: 0 },
  animate: {
    rotateY: 180,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
};

// Slide animations
export const slideInFromBottom: Variants = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export const slideInFromTop: Variants = {
  initial: { opacity: 0, y: -100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

// Typewriter effect (for text reveal)
export const typewriter: Variants = {
  initial: { width: 0 },
  animate: {
    width: '100%',
    transition: {
      duration: 2,
      ease: 'linear',
    },
  },
};

// Hero section specific
export const heroText: Variants = {
  initial: { opacity: 0, y: 50, rotateX: -15 },
  animate: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

// Timeline drawing animation
export const drawLine: Variants = {
  initial: { pathLength: 0, opacity: 0 },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 2, ease: 'easeInOut' },
      opacity: { duration: 0.5 },
    },
  },
};

// Particle float
export const floatParticle: Variants = {
  animate: {
    y: [0, -20, 0],
    x: [0, 10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Rotate continuous
export const rotateContinuous: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};
