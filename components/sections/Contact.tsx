'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiMedium } from 'react-icons/si';
import { socialLinks } from '@/lib/data/social';
import { AnimatedSection } from '../ui/AnimatedSection';

export function Contact() {
  const socials = [
    { icon: FiGithub, label: 'GitHub', href: socialLinks.github },
    { icon: FiLinkedin, label: 'LinkedIn', href: socialLinks.linkedin },
    { icon: SiMedium, label: 'Medium', href: socialLinks.medium },
    { icon: FiMail, label: 'Email', href: `mailto:${socialLinks.email}` },
  ];

  return (
    <section id="contact" className="relative min-h-screen py-20 px-6 flex items-center">
      <div className="max-w-4xl mx-auto w-full text-center">
        <AnimatedSection>
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Let's Build Together</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
     
            Let's connect!
          </p>

          <div className="flex justify-center gap-8 flex-wrap">
            {socials.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label !== 'Email' ? '_blank' : undefined}
                rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-shadow glow-primary">
                  <social.icon size={28} />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  {social.label}
                </p>
              </motion.a>
            ))}
          </div>

          {/* <motion.p
            className="mt-16 text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            © 2026 Mohit Thakkar. Built with Next.js and Framer Motion.
          </motion.p> */}
        </AnimatedSection>
      </div>
    </section>
  );
}
