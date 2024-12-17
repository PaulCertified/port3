import React from 'react';
import { ProjectCard } from './components';
import { projectsConfig } from './config';
import { GradientText } from '../ui';

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        A small selection of{' '}
        <GradientText>recent projects</GradientText>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsConfig.projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;