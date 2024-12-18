import { ReactNode } from 'react';

export interface NavbarWrapperProps {
  children: ReactNode;
}

export interface GradientTextProps {
  children: ReactNode;
}

export interface NavItem {
  href: string;
  label: string;
}

export interface NavLinkProps extends NavItem {
  onClick?: () => void;
}