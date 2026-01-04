'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { Project } from '@/lib/types';
import { Badge } from './Badge';
import { cn } from '@/lib/utils/cn';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative group"
    >
      <motion.div
        className={cn(
          'relative overflow-hidden rounded-2xl',
          'bg-white/80 dark:bg-gray-900/80',
          'border border-gray-200 dark:border-gray-800',
          'backdrop-blur-sm p-6',
          'shadow-lg transition-shadow duration-300'
        )}
        whileHover={{ scale: 1.02 }}
      >
        {/* Project Content */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
          {project.featured && (
            <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full whitespace-nowrap">
              Featured
            </span>
          )}
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
            >
              <FiGithub size={20} />
              <span>Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
            >
              <FiExternalLink size={20} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
