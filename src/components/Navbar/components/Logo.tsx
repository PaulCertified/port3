import React from 'react';
import { Code2 } from 'lucide-react';

export const Logo = () => (
  <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
    <Code2 className="w-8 h-8 text-purple-400" />
    <span className="font-bold text-xl">Paul Certified</span>
  </a>
);