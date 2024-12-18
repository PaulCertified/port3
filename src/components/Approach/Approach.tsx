import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ApproachTitle } from './components/ApproachTitle';
import { PhaseGrid } from './components/PhaseGrid';
import { BackgroundGrid } from './components/BackgroundGrid';
import { approachConfig } from './config';

const Approach: React.FC = () => {
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 relative">
      <BackgroundGrid />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <ApproachTitle />
        <PhaseGrid
          phases={approachConfig.phases}
          hoveredPhase={hoveredPhase}
          onPhaseHover={setHoveredPhase}
        />
      </motion.div>
    </section>
  );
};

export default Approach;