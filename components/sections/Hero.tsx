'use client';

import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import { GradientText } from '../ui/GradientText';
import { Button } from '../ui/Button';
import { ParticleField } from '../effects/ParticleField';
import { GradientOrb } from '../effects/GradientOrb';
import { heroText } from '@/lib/utils/animation-variants';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <GradientOrb />
      <ParticleField />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div variants={heroText} initial="initial" animate="animate">
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GradientText>Mohit Thakkar</GradientText>
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Developer Relations Engineer | Web3 Builder
          </motion.p>

            <br/>
          {/* <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building the future of decentralized applications, one integration at a time
          </motion.p> */}

          <motion.div
            className="flex gap-6 justify-center flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button onClick={() => scrollToSection('projects')}>View Projects</Button>
            <Button variant="outline" onClick={() => scrollToSection('contact')}>
              Contact Me
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FiArrowDown size={40} className="text-primary" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
