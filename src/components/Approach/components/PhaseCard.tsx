import React from 'react';
import type { Phase } from '../types';
import { motion } from 'framer-motion';
import { PixelMatrix } from './PixelMatrix';

interface PhaseCardProps extends Phase {
  isActive: boolean;
  onHover: () => void;
  variant: 'purple' | 'blue' | 'cyan';
}

export const PhaseCard: React.FC<PhaseCardProps> = ({
  number,
  title,
  description,
  isActive,
  onHover,
  variant,
}) => {
  return (
    <motion.div
      className="relative h-[400px] p-8 rounded-3xl bg-[#0F0F23] backdrop-blur-sm cursor-pointer overflow-hidden group perspective"
      onHoverStart={onHover}
      whileHover={{ 
        scale: 1.02,
        rotateX: 2,
        rotateY: 2,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-white/5 rounded-tl-3xl" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-white/5 rounded-br-3xl" />

      {/* Pixel Matrix Effect */}
      {isActive && <PixelMatrix variant={variant} />}

      <div className="relative z-10 h-full flex flex-col">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-white/80 mb-6 w-fit">
          Phase {number}
        </span>
        
        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        
        <p className={`text-white/70 transition-all duration-500 ${
          isActive ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
        }`}>
          {description}
        </p>

        {/* Subtle Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Softer Glowing Effect */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/[0.02] rounded-full blur-3xl group-hover:bg-white/[0.04] transition-all duration-500 group-hover:scale-150" />
      
      {/* Subtle Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent transform -rotate-45" />
      </div>
    </motion.div>
  );
};