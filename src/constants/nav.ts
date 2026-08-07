import type { NavItem, ProjectFilter, SectionId } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { key: 'design', label: 'UX/UI' },
  { key: 'projects', label: 'Projets Dev' },
  { key: 'skills', label: 'Compétences' },
  { key: 'about', label: 'À propos' },
  { key: 'business', label: 'Business' },
  { key: 'gallery', label: 'Galerie' },
  { key: 'contact', label: 'Contact' },
];

export const SECTION_ORDER: SectionId[] = [
  'design',
  'projects',
  'skills',
  'about',
  'business',
  'gallery',
  'publications',
  'contact',
];

export const PROJECT_FILTERS: ProjectFilter[] = [
  'Tout',
  'UX/UI',
  'Graphisme',
  'Développement',
];
