import React from 'react';
import { Code2 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code2 className="w-8 h-8 text-purple-400" />
          <span className="font-bold text-xl">Paul Certified</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-purple-400 after:transition-all hover:after:w-full"
  >
    {children}
  </a>
);

export default Navbar;