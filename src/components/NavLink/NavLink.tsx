import React from 'react';
import { NavLinkProps } from './types';
import { navLinkStyles } from './styles';

export const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a href={href} className={navLinkStyles}>
    {children}
  </a>
);

export default NavLink;