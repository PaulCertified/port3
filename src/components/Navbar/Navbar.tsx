import React from 'react';
import { Logo, NavLinks } from './components';
import { useScrollEffect } from './hooks';
import { navbarStyles as styles } from './styles';
import { motion } from 'framer-motion';

const Navbar = () => {
  const isScrolled = useScrollEffect();

  return (
    <motion.header
      className={`${styles.wrapper} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <Logo />
          <NavLinks />
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;