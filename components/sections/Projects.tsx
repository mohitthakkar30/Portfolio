'use client';

import { projects } from '@/lib/data/projects';
import { ProjectCard } from '../ui/ProjectCard';
import { AnimatedSection } from '../ui/AnimatedSection';

export function Projects() {
  return (
    <section id="projects" className="relative min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Building innovative solutions in the Web3 ecosystem
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
