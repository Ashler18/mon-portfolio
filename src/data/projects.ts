import { asset } from '../utils/asset';
import type { DevProject, UxProject } from '../types';

/**
 * Prototype interactif de la refonte FunkyFlip (Figma).
 * `scaling=scale-down` : le telephone se reduit pour tenir dans la fenetre du
 * visiteur sans jamais depasser sa taille reelle de 390 x 844.
 */
const FUNKYFLIP_PROTOTYPE =
  'https://www.figma.com/proto/INVBtWEcnhV4FxJT9Kl0NE/Funkyflip-amelioration?page-id=0%3A1&node-id=37-74&t=oWtVLKFcvOLIgwmH-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=37%3A74';

export const projectsUX: UxProject[] = [
  {
    title: 'Kredy',
    period: 'UX/UI · Front-end · Fintech',
    category: 'Projet phare',
    featured: true,
    summary:
      "Kredy est une plateforme de micro-financement pour commerçants, artisans et indépendants exclus du crédit bancaire. J'ai conçu l'expérience de bout en bout — mobile, dashboard et landing — puis collaboré à l'intégration front-end pour que le design tienne réellement à l'écran.",
    caseStudy: {
      challenge:
        'Rendre le crédit accessible sans historique bancaire, avec un parcours simple, rassurant, et assez précis pour guider le développement.',
      method:
        "J'ai commencé par comprendre les freins au crédit, puis j'ai structuré les parcours (mobile et institution), prototyé les écrans clés et posé un Design System avant d'accompagner l'intégration React.",
      result:
        "Trois interfaces cohérentes, un Design System partagé, et une démo front-end live qui matérialise les décisions UX — scoring alternatif, biométrie et confiance intégrés dans l'expérience.",
    },
    links: {
      demo: 'https://ashler18.github.io/kredy/',
      github: 'https://github.com/Ashler18/kredy',
    },
    surfaces: [
      { label: 'Dashboard', image: asset('/images/kredy/dashboard.png') },
      { label: 'Landing page', image: asset('/images/kredy/landing.png') },
    ],
    phones: [
      { label: 'Accueil', image: asset('/images/kredy/phone-accueil.png') },
      { label: 'Demande de crédit', image: asset('/images/kredy/phone-demande.png') },
      { label: 'Crédit accordé', image: asset('/images/kredy/phone-accorde.png') },
    ],
    preview: asset('/images/kredy/dashboard.png'),
    gallery: [
      asset('/images/kredy/dashboard.png'),
      asset('/images/kredy/dossiers.png'),
      asset('/images/kredy/rapports.png'),
      asset('/images/kredy/phone-accueil.png'),
      asset('/images/kredy/phone-demande.png'),
      asset('/images/kredy/phone-accorde.png'),
      asset('/images/kredy/landing.png'),
    ],
  },
  {
    title: 'FunkyFlip',
    period: 'Application mobile · Bien-être · 18 écrans',
    category: 'UX/UI',
    summary:
      "Refonte d’une application de bien-être mental qui propose des micro-histoires drôles à lire en deux minutes.",
    caseStudy: {
      challenge:
        "L’application tenait sa promesse — des histoires absurdes, satiriques ou pleines de jeux de mots — mais l’interface la desservait : des écrans étirés sur toute la hauteur, une barre de navigation surdimensionnée et des blocs très espacés qui obligeaient à faire défiler avant de comprendre ce que l’on pouvait y faire.",
      method:
        "J’ai réorganisé le parcours autour de quatre entrées lisibles — Accueil, Explorer, Bien-être et Profil — puis resserré le rythme vertical de tous les écrans : barre de navigation ramenée de 88 à 64 px avec des icônes agrandies, marges et espacements réduits, contenu aligné en haut plutôt que réparti sur la hauteur. La navigation est devenue un composant unique, réutilisé sur les dix-huit écrans pour garantir la cohérence.",
      result:
        "Un parcours de dix-huit écrans maquettés et prototypés, où l’accueil met immédiatement une histoire à portée de lecture. L’ensemble est manipulable en interaction dans le prototype Figma.",
    },
    links: {
      figma: FUNKYFLIP_PROTOTYPE,
    },
    phones: [
      { label: 'Explorer', image: asset('/images/funkyflip/phone-explorer.png') },
      { label: 'Accueil', image: asset('/images/funkyflip/phone-accueil.png') },
      { label: 'Bien-être', image: asset('/images/funkyflip/phone-bienetre.png') },
    ],
    preview: asset('/images/funkyflip/phone-accueil.png'),
    gallery: [
      asset('/images/funkyflip/phone-explorer.png'),
      asset('/images/funkyflip/phone-accueil.png'),
      asset('/images/funkyflip/phone-bienetre.png'),
    ],
  },
];

export const projects: DevProject[] = [
  {
    title: 'Kredy',
    period: 'Front-end · React · Fintech',
    summary:
      "Après la conception UX/UI, j'ai participé à l'intégration front-end de Kredy : interfaces React fidèles aux maquettes, parcours responsive et démo déployée pour présenter le produit.",
    caseStudy: {
      challenge:
        'Transformer les maquettes en interface utilisable, cohérente et crédible pour une démo produit.',
      method:
        "Intégration React à partir du Design System, attention au responsive et déploiement de la démo sur GitHub Pages.",
      result:
        'Une démo live (dashboard, mobile, landing) qui prouve le passage du design au code.',
    },
    links: {
      demo: 'https://ashler18.github.io/kredy/',
      github: 'https://github.com/Ashler18/kredy',
    },
    preview: asset('/images/kredy/landing.png'),
    gallery: [
      asset('/images/kredy/landing.png'),
      asset('/images/kredy/dashboard.png'),
      asset('/images/kredy/dossiers.png'),
      asset('/images/kredy/phone-accueil.png'),
      asset('/images/kredy/phone-demande.png'),
      asset('/images/kredy/phone-accorde.png'),
    ],
  },
  {
    title: 'S.A.S WIVE-Lyon',
    period: 'Stage · Avril – Juin 2025',
    summary:
      "Pendant deux mois, j'ai travaillé sur le site vitrine de WIVE : améliorer l'ergonomie, renforcer l'accessibilité et intégrer des composants React au plus près des besoins client.",
    caseStudy: {
      challenge:
        'Faire évoluer une interface existante pour qu’elle soit plus claire, plus accessible et plus simple à maintenir.',
      method:
        "Travail sur l'UX/UI existante, intégration de composants React et passages accessibilité.",
      result:
        "Composants mis à jour, meilleure lisibilité sur mobile et desktop, et une base front plus cohérente pour l'équipe.",
    },
    links: {
      demo: 'https://wive.fr',
    },
    // La capture pleine page a ete redecoupee section par section : on parcourt
    // le site comme une suite d'ecrans lisibles plutot qu'un seul visuel etire.
    preview: asset('/images/wive/section-1.png'),
    gallery: [
      asset('/images/wive/section-1.png'),
      asset('/images/wive/section-2.png'),
      asset('/images/wive/section-3.png'),
      asset('/images/wive/section-4.png'),
      asset('/images/wive/section-5.png'),
      asset('/images/wive/section-6.png'),
      asset('/images/projet-wive-2.png'),
    ],
  },
  {
    title: 'Site accessible RGAA',
    period: 'Projet académique · 2025',
    summary:
      "Un projet centré sur l'accessibilité numérique : navigation clavier, contrastes, multimédia accessible et critères RGAA appliqués concrètement.",
    caseStudy: {
      challenge:
        "Concevoir une page web compréhensible et utilisable, y compris sans souris et avec des besoins d'accessibilité.",
      method:
        "HTML sémantique, CSS soigné, ARIA quand nécessaire, et vérification des critères RGAA au fil du développement.",
      result:
        "Une interface qui respecte les bases RGAA et m'a permis de relier design inclusif et code propre.",
    },
    links: {
      github: 'https://github.com/ashler18',
      demo: 'https://ashler18.github.io/citations-inspirantes/',
    },
    preview: asset('/images/projet-rgaa.png'),
  },
  {
    title: 'World Ecology Women',
    period: 'ONG · 2025',
    summary:
      "Conception et développement du site de l'ONG World Ecology Women au Bénin : une vitrine moderne pour rendre leur action visible et accessible.",
    caseStudy: {
      challenge:
        "Donner une présence web claire à une ONG, avec une navigation simple et un rendu soigné sur mobile.",
      method:
        "Direction visuelle, maquettes, puis développement React responsive autour du contenu de l'organisation.",
      result:
        "Un site publié, lisible et responsive, au service du message de l'organisation.",
    },
    links: {
      demo: 'https://www.benin-wecow.org/',
    },
    preview: asset('/images/projet-wecow.jpg'),
  },
  {
    title: 'To-Do List React',
    period: 'Projet personnel',
    summary:
      "Une petite app de gestion de tâches pour pratiquer les hooks React et peaufiner une interface simple, claire et responsive.",
    caseStudy: {
      challenge:
        'Créer une expérience de productivité minimale sans surcharge visuelle.',
      method:
        'Interface React légère, hooks pour l’état, et CSS responsive pour rester lisible sur mobile.',
      result:
        'Ajout, modification et suppression de tâches dans une interface intuitive.',
    },
    links: {
      github: 'https://github.com/ashler18',
      demo: 'https://ashler18.github.io/my-todo-app/',
    },
    preview: asset('/images/projet-todo.png'),
  },
];
