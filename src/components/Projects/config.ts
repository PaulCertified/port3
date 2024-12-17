import {
  Atom,
  Waves,
  FileCode,
  Play,
  Monitor,
  Database,
  Shield,
  Cloud,
  Layout,
  Brain,
  Bot,
  Cpu
} from 'lucide-react';
import type { Project } from './types';

export const projectsConfig: { projects: Project[] } = {
  projects: [
    {
      title: 'AI-Powered Virtual Assistant Platform',
      description: 'Developed an enterprise-grade virtual assistant using advanced NLP and machine learning, improving customer service efficiency by 45%.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070',
      technologies: [
        { name: 'Python', icon: FileCode },
        { name: 'TensorFlow', icon: Brain },
        { name: 'OpenAI', icon: Bot },
        { name: 'FastAPI', icon: Cpu },
        { name: 'Docker', icon: Cloud },
      ],
      liveUrl: '#',
    },
    {
      title: 'Real-time AI Analytics Dashboard',
      description: 'Built a scalable analytics platform processing millions of data points in real-time, providing actionable insights through AI-driven visualizations.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
      technologies: [
        { name: 'React', icon: Atom },
        { name: 'TypeScript', icon: FileCode },
        { name: 'GraphQL', icon: Database },
        { name: 'TensorFlow', icon: Brain },
        { name: 'AWS', icon: Cloud },
      ],
      liveUrl: '#',
    },
    {
      title: 'Intelligent Document Processing System',
      description: 'Architected an AI-powered document processing system using computer vision and NLP, reducing manual processing time by 80%.',
      image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80&w=2070',
      technologies: [
        { name: 'Python', icon: FileCode },
        { name: 'PyTorch', icon: Brain },
        { name: 'FastAPI', icon: Cpu },
        { name: 'MongoDB', icon: Database },
        { name: 'Docker', icon: Cloud },
      ],
      liveUrl: '#',
    },
    {
      title: 'AI-Enhanced E-commerce Platform',
      description: 'Implemented AI-driven product recommendations and personalization features, resulting in a 35% increase in customer engagement.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070',
      technologies: [
        { name: 'Next.js', icon: Atom },
        { name: 'Python', icon: FileCode },
        { name: 'TensorFlow', icon: Brain },
        { name: 'GraphQL', icon: Database },
        { name: 'AWS', icon: Cloud },
      ],
      liveUrl: '#',
    },
  ],
};