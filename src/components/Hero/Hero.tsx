import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { heroConfig } from './config';
import { GradientBadge, GradientText } from '../ui';
import { ProfileImage } from './components';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="pt-32 pb-16 text-center">
      <ProfileImage />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <GradientBadge>{heroConfig.badge}</GradientBadge>

        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
          {heroConfig.titleFirstPart}{' '}
          <span className="block mt-2">
            {heroConfig.titleSecondPart}{' '}
            <GradientText>{heroConfig.titleHighlight}</GradientText>
          </span>
        </h1>

        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          {heroConfig.description}
        </p>

        <motion.button
          onClick={scrollToProjects}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glow-button px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 text-white"
        >
          {heroConfig.ctaText}
          <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      </motion.div>
    </main>
  );
};

export default Hero;