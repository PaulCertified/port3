import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from './NavLink';
import type { NavItem } from '../types';

interface MobileMenuProps {
  isOpen: boolean;
  links: NavItem[];
  onLinkClick: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, links, onLinkClick }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 right-0 bg-[#0A0A1B]/95 backdrop-blur-lg border-b border-white/5 md:hidden"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center py-6 gap-4"
          >
            {links.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink {...link} onClick={onLinkClick} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};