import { asset } from '../utils/asset';
import type { BusinessVenture } from '../types';

export const businessVentures: BusinessVenture[] = [
  {
    id: 'art-shler',
    title: 'Art-shler',
    role: 'Brand Designer & Fondatrice | Depuis 2026',
    description:
      'Marque textile née de mes créations graphiques originales. 05 collections imprimées à la demande sur Spreadshirt, de la conception du design jusqu\'à la mise en vente.',
    tags: [
      'Identité de marque',
      'Design textile',
      '5 collections',
      'Impression à la demande',
    ],
    cta: {
      label: 'Voir la boutique',
      href: 'https://art-shler.myspreadshop.fr/',
    },
    icon: 'shopping',
    accent: 'orange',
  },
  {
    id: 'nku',
    title: 'N-Kû',
    role: 'Fondatrice & Créatrice | Bénin',
    description:
      'Projet e-commerce au Bénin proposant des produits diversifiés via WhatsApp. Une aventure qui allie passion du commerce et apprentissage de l\'entrepreneuriat.',
    logo: asset('/images/logo-N-ku.jpg'),
    accent: 'neutral',
    images: [
      asset('/images/nku-otaku-1.jpg'),
      asset('/images/nku-mode-1.jpg'),
      asset('/images/nku-mode-2.jpg'),
      asset('/images/nku-otaku-2.jpg'),
    ],
  },
  {
    id: 'ccreate',
    title: "C'create N-Kû",
    role: 'Services Créatifs & Événements',
    description:
      "Montage vidéo, création de CV, conception d'affiches et organisation d'événements. Des services créatifs avec professionnalisme et humour.",
    logo: asset('/images/c-create.jpg'),
    tags: [
      'Montages vidéo',
      'Création de CV',
      "Conception d'affiches",
      "Organisation d'événements",
    ],
    accent: 'neutral',
    media: [
      { type: 'video', src: asset('/images/ccreate-video1.mp4') },
      {
        type: 'image',
        src: asset('/images/service create.jpg'),
        alt: "Services C'create",
      },
      { type: 'video', src: asset('/images/ccreate-video2.mp4') },
    ],
  },
];
