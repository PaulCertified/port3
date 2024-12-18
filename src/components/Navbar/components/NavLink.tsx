import React from 'react';
import { motion } from 'framer-motion';
import type { NavLinkProps } from '../types';

export const NavLink: React.FC<NavLinkProps> = ({ href, label, onClick }) => (
  <motion.a
    href={href}
    onClick={onClick}
    className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors relative"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="relative z-10">{label}</span>
    <span className="absolute inset-0 bg-white/5 rounded-full opacity-0 hover:opacity-100 transition-opacity" />
  </motion.a>
);