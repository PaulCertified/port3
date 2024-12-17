import { Instagram, Github, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import type { SocialLink } from './types';

export const footerConfig = {
  name: 'Paul Certified',
  socialLinks: [
    {
      name: 'Instagram',
      url: '#',
      icon: Instagram,
    },
    {
      name: 'Twitter',
      url: '#',
      icon: Twitter,
    },
    {
      name: 'GitHub',
      url: '#',
      icon: Github,
    },
    {
      name: 'WhatsApp',
      url: '#',
      icon: MessageCircle,
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: Linkedin,
    },
  ] as SocialLink[],
};