import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { heroConfig } from './config';
import { motion } from 'framer-motion';
import { HeroHeader, HeroContent } from './components';
import { useScrollToSection } from './hooks';

const Hero: React.FC = () => {
  const scrollToProjects = useScrollToSection('projects');

  return (
    <main className="min-h-[60vh] flex items-center justify-center pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <HeroHeader />
        <HeroContent />

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