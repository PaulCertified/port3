import React from 'react';
import { navigationLinks } from '../config';

export const NavLinks = () => (
  <div className="hidden md:flex items-center gap-8">
    {navigationLinks.map(({ href, label }) => (
      <a
        key={href}
        href={href}
        className="text-gray-300 hover:text-white transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-purple-400 after:transition-all hover:after:w-full"
      >
        {label}
      </a>
    ))}
  </div>
);