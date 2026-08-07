import { asset } from '../utils/asset';
import type { CreativeWork } from '../types';

// FunkyFlip n'apparait plus ici : c'est desormais une etude de cas UX/UI a part
// entiere dans projectsUX, avec ses ecrans et son prototype.
export const creativeWorks: CreativeWork[] = [
  {
    type: 'print',
    title: 'Carnet B.O.W - Action Caritative',
    image: asset('/images/flyers/carnet-bow.jpg'),
    category: 'Design Print',
    description:
      "Carnet créatif que j'ai conçu et offert aux enfants d'un orphelinat au Bénin lors d'une action caritative du B.O.W. Illustrations cute et colorées d'animé pour encourager les enfants à dessiner, écrire et exprimer leur créativité.",
    gallery: [
      asset('/images/flyers/carnet-bow.jpg'),
      asset('/images/flyers/carnet-bow-video.mp4'),
    ],
    hasVideo: true,
  },
  {
    type: 'print',
    title: 'Afrolux - Campagne Publicitaire',
    image: asset('/images/flyers/affiche-afrolux-1.jpg'),
    category: 'Design Print',
    description:
      "Affiches promotionnelles que j'ai créées pour Afrolux pommade capillaire. Design épuré et apaisant avec visuels de vagues pour évoquer la douceur et le soin des cheveux naturels.",
    gallery: [
      asset('/images/flyers/affiche-afrolux-1.jpg'),
      asset('/images/flyers/affiche-afrolux-2.png'),
    ],
  },
  {
    type: 'print',
    title: 'Jeu Concours Afrolux',
    image: asset('/images/flyers/jeu-concours-afrolux.png'),
    category: 'Design Print',
    description:
      "Visuel Instagram que j'ai designé pour le jeu concours Afrolux. Design engageant avec appel à l'action clair pour booster la participation et la visibilité de la marque.",
  },
  {
    type: 'print',
    title: 'Affiche Anniversaire 50 ans',
    image: asset('/images/flyers/affiche-anniversaire.png'),
    category: 'Design Print',
    description:
      "Invitation élégante que j'ai créée pour une célébration de 50 ans. Design sophistiqué noir et or avec typographie Art Déco et éléments décoratifs premium.",
  },
  {
    type: 'print',
    title: 'Flyers Services Livraison',
    image: asset('/images/flyers/affiche-livraison.jpg'),
    category: 'Design Print',
    description:
      "Flyer promotionnel que j'ai conçu pour des services de livraison à domicile. Design coloré et informatif présentant clairement les services : colis, courses, repas, et récupération de vélo.",
  },
  {
    type: 'print',
    title: 'Solve Mode - MH',
    image: asset('/images/flyers/soldes-flyer-1.png'),
    category: 'Design Print',
    description:
      "Visuels promotionnels que j'ai créés pour Solve, la boutique MH. Design minimaliste chic mettant en valeur les produits mode avec appel à l'action WhatsApp.",
    gallery: [
      asset('/images/flyers/soldes-flyer-1.png'),
      asset('/images/flyers/soldes-flyer-2.png'),
    ],
  },
  {
    type: 'print',
    title: 'Affiche Confidentielle',
    image: asset('/images/flyers/affiche-perso.png'),
    category: 'Design Print',
    description:
      "Communication personnalisée que j'ai designée avec message de confidentialité professionnelle. Design épuré et typographie élégante pour projets nécessitant discrétion.",
  },
  {
    type: 'logo',
    title: 'N-kû - Brand Identity',
    image: asset('/images/logo-N-ku.jpg'),
    category: 'Branding',
    description: 'Logo et identité de marque pour N-kû e-commerce',
  },
  {
    type: 'web',
    title: 'WIVE - Site Vitrine React',
    image: asset('/images/projet-wive-1.png'),
    category: 'Web Design',
    description: 'Design et intégration frontend',
    gallery: [
      asset('/images/projet-wive-1.png'),
      asset('/images/projet-wive-2.png'),
    ],
  },
  {
    type: 'logo',
    title: "C'create - Services Créatifs",
    image: asset('/images/c-create.jpg'),
    category: 'Branding',
    description: 'Identité visuelle pour services créatifs',
  },
  {
    type: 'web',
    title: 'World Ecology Women',
    image: asset('/images/projet-wecow.jpg'),
    category: 'Web Design',
    description: 'Site web ONG - Design moderne',
  },
  {
    type: 'product',
    title: 'N-kû - Collection Mode',
    image: asset('/images/nku-mode-1.jpg'),
    category: 'Product Design',
    description: 'Curation et mise en scène produits',
  },
  {
    type: 'product',
    title: 'N-kû - Otaku Collection',
    image: asset('/images/nku-otaku-1.jpg'),
    category: 'Product Design',
    description: 'Merchandising et sélection produits',
  },
  {
    type: 'web',
    title: 'Site RGAA Accessible',
    image: asset('/images/projet-rgaa.png'),
    category: 'Web Design',
    description: 'Accessibilité et normes RGAA',
  },
];
