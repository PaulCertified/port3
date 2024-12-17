import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TechBadge } from './TechBadge';
import type { Project } from '../types';

export const ProjectCard: React.FC<Project> = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white/5 p-6 backdrop-blur-sm">
      <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech) => (
          <TechBadge key={tech.name} {...tech} />
        ))}
      </div>

      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
      >
        Check Live Site
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </div>
  );
};