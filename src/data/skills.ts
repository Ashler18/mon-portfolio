import type { SkillGroup } from '../types';

export const skills: SkillGroup[] = [
  {
    category: 'Design & expérience',
    icon: 'palette',
    description: 'Du besoin utilisateur à l’interface prête à développer.',
    items: [
      'Recherche utilisateur',
      'Personas & parcours',
      'Wireframes',
      'Prototypes interactifs',
      'Design Systems',
      'Identité visuelle',
      'Maquettes Figma',
    ],
  },
  {
    category: 'Outils de design',
    icon: 'sparkles',
    items: [
      'Figma',
      'FigJam',
      'Miro',
      'Inkscape',
      'Photoshop',
      'Canva',
      'Montage vidéo',
      'Design textile',
    ],
  },
  {
    category: 'Front-end',
    icon: 'code',
    description: 'Une compétence complémentaire pour dialoguer avec le code et livrer des interfaces soignées.',
    items: [
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Responsive',
      'Notions Angular / Node / WordPress',
    ],
  },
  {
    category: 'Accessibilité',
    icon: 'award',
    items: [
      'Critères RGAA',
      'Contrastes',
      'Typographie lisible',
      'Multimédia accessible',
      'Web Accessibility Basics',
    ],
  },
  {
    category: 'Outils techniques',
    icon: 'zap',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Notions PHP / MySQL'],
  },
  {
    category: 'Support applicatif',
    icon: 'headset',
    description:
      "Bases solides pour analyser un incident, reproduire un bug et collaborer avec les équipes produit.",
    items: [
      'Analyse d’anomalies',
      'Assistance utilisateur',
      'Gestion de tickets',
      'Tests fonctionnels',
      'Documentation',
      'SQL (bases)',
      'Git & GitHub',
    ],
  },
  {
    category: 'Bureautique',
    icon: 'office',
    items: [
      'Microsoft Word',
      'Microsoft Excel (bases)',
      'Microsoft PowerPoint',
      'Microsoft Teams',
      'Google Docs',
      'Google Sheets',
      'Google Slides',
    ],
  },
];
