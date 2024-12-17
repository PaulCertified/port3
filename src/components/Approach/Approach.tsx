import React, { useState } from 'react';
import { PhaseCard } from './components';
import { approachConfig } from './config';
import { GradientText } from '../ui';
import { motion } from 'framer-motion';

const VARIANTS = ['purple', 'blue', 'cyan'] as const;

const Approach = () => {
  const [activePhase, setActivePhase] = useState(2);

  return (
    <section className="py-24 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          {approachConfig.title}{' '}
          <GradientText>{approachConfig.highlightedWord}</GradientText>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {approachConfig.phases.map((phase, index) => (
            <PhaseCard
              key={phase.number}
              {...phase}
              isActive={activePhase === phase.number}
              onHover={() => setActivePhase(phase.number)}
              variant={VARIANTS[index]}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Approach;