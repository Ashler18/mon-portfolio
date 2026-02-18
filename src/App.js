import React, { useState, useRef, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Star, Sparkles, BookOpen, Code, Briefcase, Heart, Download, X, ChevronLeft, ChevronRight, Menu, Palette, Award, Zap, ArrowRight, ShoppingBag } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('gallery');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentGallery, setCurrentGallery] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  // === AJOUT : état pour le carrousel Art-shler ===
  const [artshlerIndex, setArtshlerIndex] = useState(0);

  const videoRefs = useRef([]);
  const sectionRefs = {
    gallery: useRef(null),
    about: useRef(null),
    design: useRef(null),
    projects: useRef(null),
    business: useRef(null),
    publications: useRef(null),
    skills: useRef(null),
    contact: useRef(null)
  };

  // === AJOUT : images Art-shler (ordre : oush en premier) ===
  const artshlerImages = [
    { src: process.env.PUBLIC_URL + '/images/oush_image1.jpg', label: 'Oush' },
    { src: process.env.PUBLIC_URL + '/images/oush_image2.jpg', label: 'Oush' },
    { src: process.env.PUBLIC_URL + '/images/oush_image3.jpg', label: 'Oush' },
    { src: process.env.PUBLIC_URL + '/images/rbrea_image1.jpg', label: 'Rbrea' },
    { src: process.env.PUBLIC_URL + '/images/rbrea_image2.jpg', label: 'Rbrea' },
    { src: process.env.PUBLIC_URL + '/images/rbrea_image3.jpg', label: 'Rbrea' },
    { src: process.env.PUBLIC_URL + '/images/freearoa_image1.jpg', label: 'Freearoa' },
    { src: process.env.PUBLIC_URL + '/images/freearoa_image2.jpg', label: 'Freearoa' },
    { src: process.env.PUBLIC_URL + '/images/ugile_image1.jpg', label: 'Ugile' },
    { src: process.env.PUBLIC_URL + '/images/ugile_image2.jpg', label: 'Ugile' },
    { src: process.env.PUBLIC_URL + '/images/ugile_image3.jpg', label: 'Ugile' },
    { src: process.env.PUBLIC_URL + '/images/ugile_image4.jpg', label: 'Ugile' },
    { src: process.env.PUBLIC_URL + '/images/vdoa_image1.jpg', label: 'Vdoa' },
    { src: process.env.PUBLIC_URL + '/images/vdoa_image2.jpg', label: 'Vdoa' },
    { src: process.env.PUBLIC_URL + '/images/vdoa_image3.jpg', label: 'Vdoa' },
  ];

  // === AJOUT : défilement automatique toutes les 3 secondes ===
  useEffect(() => {
    const interval = setInterval(() => {
      setArtshlerIndex((prev) => (prev + 1) % artshlerImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [artshlerImages.length]);

  const artshlerPrev = () => setArtshlerIndex((prev) => (prev - 1 + artshlerImages.length) % artshlerImages.length);
  const artshlerNext = () => setArtshlerIndex((prev) => (prev + 1) % artshlerImages.length);

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    const element = sectionRefs[section].current;
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const handleVideoPlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index && !video.paused) {
        video.pause();
      }
    });
  };

  const openLightbox = (image, gallery = []) => {
    if (gallery.length > 0) {
      setCurrentGallery(gallery);
      setCurrentIndex(gallery.indexOf(image));
    } else {
      setCurrentGallery([image]);
      setCurrentIndex(0);
    }
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage('');
    setCurrentGallery([]);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % currentGallery.length;
    setCurrentIndex(newIndex);
    setCurrentImage(currentGallery[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    setCurrentIndex(newIndex);
    setCurrentImage(currentGallery[newIndex]);
  };

  useEffect(() => {
    document.title = "Ashler DELEKE - Designer UI/UX & Créatrice Visuelle";
    document.documentElement.lang = "fr";

    const handleScroll = () => {
      const sections = ['gallery', 'about', 'design', 'projects', 'business', 'publications', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = sectionRefs[section].current;
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const creativeWorks = [
    {
      type: 'design',
      title: 'FunkyFlip - UI/UX',
      image: `${process.env.PUBLIC_URL}/images/funkyflip-accueil.png`,
      category: 'UI/UX Design',
      description: 'Application mobile de bien-être mental',
      gallery: [
        `${process.env.PUBLIC_URL}/images/funkyflip-accueil.png`,
        `${process.env.PUBLIC_URL}/images/funkyflip-explorer.png`,
        `${process.env.PUBLIC_URL}/images/funkyflip-bienetre.png`,
        `${process.env.PUBLIC_URL}/images/funkyflip-profil.png`
      ]
    },
    {
      type: 'print',
      title: 'Carnet B.O.W - Action Caritative',
      image: `${process.env.PUBLIC_URL}/images/flyers/carnet-bow.jpg`,
      category: 'Design Print',
      description: 'Carnet créatif que j\'ai conçu et offert aux enfants d\'un orphelinat au Bénin lors d\'une action caritative du B.O.W. Illustrations cute et colorées d\'animé pour encourager les enfants à dessiner, écrire et exprimer leur créativité.',
      gallery: [
        `${process.env.PUBLIC_URL}/images/flyers/carnet-bow.jpg`,
        `${process.env.PUBLIC_URL}/images/flyers/carnet-bow-video.mp4`
      ],
      hasVideo: true
    },
    {
      type: 'print',
      title: 'Afrolux - Campagne Publicitaire',
      image: `${process.env.PUBLIC_URL}/images/flyers/affiche-afrolux-1.jpg`,
      category: 'Design Print',
      description: 'Affiches promotionnelles que j\'ai créées pour Afrolux pommade capillaire. Design épuré et apaisant avec visuels de vagues pour évoquer la douceur et le soin des cheveux naturels.',
      gallery: [
        `${process.env.PUBLIC_URL}/images/flyers/affiche-afrolux-1.jpg`,
        `${process.env.PUBLIC_URL}/images/flyers/affiche-afrolux-2.png`
      ]
    },
    {
      type: 'print',
      title: 'Jeu Concours Afrolux',
      image: `${process.env.PUBLIC_URL}/images/flyers/jeu-concours-afrolux.png`,
      category: 'Design Print',
      description: 'Visuel Instagram que j\'ai designé pour le jeu concours Afrolux. Design engageant avec appel à l\'action clair pour booster la participation et la visibilité de la marque.'
    },
    {
      type: 'print',
      title: 'Affiche Anniversaire 50 ans',
      image: `${process.env.PUBLIC_URL}/images/flyers/affiche-anniversaire.png`,
      category: 'Design Print',
      description: 'Invitation élégante que j\'ai créée pour une célébration de 50 ans. Design sophistiqué noir et or avec typographie Art Déco et éléments décoratifs premium.'
    },
    {
      type: 'print',
      title: 'Flyers Services Livraison',
      image: `${process.env.PUBLIC_URL}/images/flyers/affiche-livraison.jpg`,
      category: 'Design Print',
      description: 'Flyer promotionnel que j\'ai conçu pour des services de livraison à domicile. Design coloré et informatif présentant clairement les services : colis, courses, repas, et récupération de vélo.'
    },
    {
      type: 'print',
      title: 'Soldes Mode - MH',
      image: `${process.env.PUBLIC_URL}/images/flyers/soldes-flyer-1.png`,
      category: 'Design Print',
      description: 'Visuels promotionnels que j\'ai créés pour les soldes de la boutique MH. Design minimaliste chic mettant en valeur les produits mode avec appel à l\'action WhatsApp.',
      gallery: [
        `${process.env.PUBLIC_URL}/images/flyers/soldes-flyer-1.png`,
        `${process.env.PUBLIC_URL}/images/flyers/soldes-flyer-2.png`
      ]
    },
    {
      type: 'print',
      title: 'Affiche Confidentielle',
      image: `${process.env.PUBLIC_URL}/images/flyers/affiche-perso.png`,
      category: 'Design Print',
      description: 'Communication personnalisée que j\'ai designée avec message de confidentialité professionnelle. Design épuré et typographie élégante pour projets nécessitant discrétion.'
    },
    {
      type: 'logo',
      title: 'N-kû - Brand Identity',
      image: `${process.env.PUBLIC_URL}/images/logo-N-ku.jpg`,
      category: 'Branding',
      description: 'Logo et identité de marque pour N-kû e-commerce'
    },
    {
      type: 'web',
      title: 'WIVE - Site Vitrine React',
      image: `${process.env.PUBLIC_URL}/images/projet-wive-1.png`,
      category: 'Web Design',
      description: 'Design et intégration frontend',
      gallery: [
        `${process.env.PUBLIC_URL}/images/projet-wive-1.png`,
        `${process.env.PUBLIC_URL}/images/projet-wive-2.png`
      ]
    },
    {
      type: 'logo',
      title: "C'create - Services Créatifs",
      image: `${process.env.PUBLIC_URL}/images/c-create.jpg`,
      category: 'Branding',
      description: 'Identité visuelle pour services créatifs'
    },
    {
      type: 'web',
      title: 'World Ecology Women',
      image: `${process.env.PUBLIC_URL}/images/projet-wecow.jpg`,
      category: 'Web Design',
      description: 'Site web ONG - Design moderne'
    },
    {
      type: 'product',
      title: 'N-kû - Collection Mode',
      image: `${process.env.PUBLIC_URL}/images/nku-mode-1.jpg`,
      category: 'Product Design',
      description: 'Curation et mise en scène produits'
    },
    {
      type: 'product',
      title: 'N-kû - Otaku Collection',
      image: `${process.env.PUBLIC_URL}/images/nku-otaku-1.jpg`,
      category: 'Product Design',
      description: 'Merchandising et sélection produits'
    },
    {
      type: 'web',
      title: 'Site RGAA Accessible',
      image: `${process.env.PUBLIC_URL}/images/projet-rgaa.png`,
      category: 'Web Design',
      description: 'Accessibilité et normes RGAA'
    }
  ];

  const projectUX = {
    title: "FunkyFlip - Application Mobile de Bien-être",
    period: "Octobre 2025 - Novembre 2025",
    description: "Conception complète d'une application mobile de santé mentale utilisant la thérapie par le rire. Recherche utilisateur approfondie, création de personas, wireframes, prototypes interactifs Figma et tests d'usabilité.",
    tech: ["Recherche UX", "Personas", "Wireframes", "Figma", "Miro", "Prototypage", "Tests utilisateurs"],
    links: {
      figma: "https://www.figma.com/proto/tncINUA2POhlpEizWdBiSv/FunkyFlip---Wireframes?node-id=17-3"
    },
    preview: `${process.env.PUBLIC_URL}/images/funkyflip-accueil.png`,
    gallery: [
      `${process.env.PUBLIC_URL}/images/funkyflip-accueil.png`,
      `${process.env.PUBLIC_URL}/images/funkyflip-explorer.png`,
      `${process.env.PUBLIC_URL}/images/funkyflip-bienetre.png`,
      `${process.env.PUBLIC_URL}/images/funkyflip-profil.png`
    ]
  };

  const projects = [
    {
      title: "S.A.S WIVE-Lyon - Site Vitrine & Intégration",
      period: "Avril – Juin 2025",
      description: "Stage de 2 mois en design et intégration frontend. Amélioration de l'ergonomie visuelle pour une meilleure accessibilité, création et mise à jour de composants React, et intégration selon les besoins client.",
      tech: ["React", "JavaScript", "CSS", "Responsive Design", "UX/UI"],
      links: {
        demo: "https://wive.fr"
      },
      preview: `${process.env.PUBLIC_URL}/images/projet-wive-1.png`,
      gallery: [
        `${process.env.PUBLIC_URL}/images/projet-wive-1.png`,
        `${process.env.PUBLIC_URL}/images/projet-wive-2.png`
      ]
    },
    {
      title: "Site Web Accessible – RGAA",
      period: "Février – Mars 2025",
      description: "Projet académique centré sur l'accessibilité numérique : navigation clavier, application des critères RGAA (contrastes, typographies), multimédia avec légendes et descriptions.",
      tech: ["HTML5", "CSS3", "JavaScript", "ARIA", "RGAA"],
      links: {
        github: "https://github.com/ashler18",
        demo: "https://ashler18.github.io/citations-inspirantes/"
      },
      preview: `${process.env.PUBLIC_URL}/images/projet-rgaa.png`
    },
    {
      title: "Site ONG – World Ecology Women",
      period: "2025",
      description: "Conception et développement du site web pour l'ONG WORLD ECOLOGY WOMEN au Bénin. Design moderne, interface intuitive et responsive.",
      tech: ["React", "JavaScript", "CSS3", "Responsive"],
      links: {
        demo: "https://www.benin-wecow.org/"
      },
      preview: `${process.env.PUBLIC_URL}/images/projet-wecow.jpg`
    },
    {
      title: "Application To-Do List React",
      period: "Projet personnel",
      description: "Application de gestion de tâches avec création, modification, suppression. Utilisation des hooks useState et useEffect, interface responsive et intuitive.",
      tech: ["React", "Hooks", "CSS", "Responsive"],
      links: {
        github: "https://github.com/ashler18",
        demo: "https://ashler18.github.io/my-todo-app/"
      },
      preview: `${process.env.PUBLIC_URL}/images/projet-todo.png`
    }
  ];

  const skills = [
    {
      category: "Design & Graphisme",
      icon: <Palette className="w-6 h-6" />,
      items: [
        "UI/UX Design - Recherche utilisateur",
        "Wireframes & Prototypes interactifs",
        "Design Systems & Chartes graphiques",
        "Identité Visuelle - Création de logos",
        "Maquettes détaillées sur Figma"
      ]
    },
    {
      category: "Outils de Design",
      icon: <Sparkles className="w-6 h-6" />,
      items: [
        "Figma, Inkscape, Photoshop",
        "Miro, Canva, Adobe Photo",
        "Montage vidéo & storytelling",
        "Design textile"
      ]
    },
    {
      category: "Développement Web",
      icon: <Code className="w-6 h-6" />,
      items: [
        "HTML5, CSS3 & Tailwind CSS",
        "JavaScript & TypeScript",
        "React (Router, Hooks, composants)",
        "Angular, Node.js, WordPress"
      ]
    },
    {
      category: "Accessibilité",
      icon: <Award className="w-6 h-6" />,
      items: [
        "Application critères RGAA",
        "Contrastes & typographies",
        "Multimédia accessible",
        "Certifiée Web Accessibility Basics"
      ]
    },
    {
      category: "Outils Techniques",
      icon: <Zap className="w-6 h-6" />,
      items: [
        "Git / GitHub",
        "VS Code, Postman",
        "Notions de React.js & JavaScript",
        "PHP, MySQL"
      ]
    }
  ];

  const interests = [
    "UI/UX Design", "Accessibilité Web", "Intelligence Artificielle",
    "Jeux vidéo", "Écriture", "Musique", "Voyage", "Dessin", "Astronomie", "Cuisine"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-blue-50/30 to-sky-50 text-gray-900">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-orange-500 focus:text-white focus:rounded-lg font-semibold"
      >
        Aller au contenu principal
      </a>

      {/* Modal CV */}
      {cvModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4" 
          onClick={() => setCvModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Prévisualisation du CV"
        >
          <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900">Mon CV</h3>
              <button 
                onClick={() => setCvModalOpen(false)}
                className="p-2 text-gray-600 hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg"
                aria-label="Fermer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-auto p-6 bg-gray-50">
              <iframe
                src={`${process.env.PUBLIC_URL}/CV_Ashler_Deleke.pdf`}
                className="w-full h-[400px] sm:h-[500px] md:h-[600px] border-0 rounded-2xl bg-white shadow-lg"
                title="Prévisualisation du CV"
              />
            </div>

            <div className="p-6 border-t border-gray-100 flex flex-col sm:flex-row justify-center gap-3">
              <a 
                href={`${process.env.PUBLIC_URL}/CV_Ashler_Deleke.pdf`}
                download="CV_Ashler_Deleke.pdf"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl transition-all flex items-center justify-center gap-2 font-semibold shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 hover:scale-105 duration-300"
                aria-label="Télécharger le CV"
              >
                <Download className="w-5 h-5" /> Télécharger le CV
              </a>
              <button 
                onClick={() => setCvModalOpen(false)}
                className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl transition-all font-semibold"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4" 
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Visionneuse d'image agrandie"
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-orange-400 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg p-2 z-10"
            aria-label="Fermer la visionneuse"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          
          {currentGallery.length > 1 && (
            <>
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-2 sm:left-4 text-white hover:text-orange-400 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg p-2 bg-black/50 backdrop-blur-sm"
                aria-label="Image précédente"
              >
                <ChevronLeft className="w-8 h-8 sm:w-12 sm:h-12" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-2 sm:right-4 text-white hover:text-orange-400 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg p-2 bg-black/50 backdrop-blur-sm"
                aria-label="Image suivante"
              >
                <ChevronRight className="w-8 h-8 sm:w-12 sm:h-12" />
              </button>
            </>
          )}
          
          {currentImage && (currentImage.endsWith('.mp4') || currentImage.endsWith('.webm') || currentImage.endsWith('.mov')) ? (
            <video 
              src={currentImage} 
              className="max-w-[95vw] sm:max-w-[90vw] max-h-[85vh] sm:max-h-[80vh] rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              controls
              autoPlay
            >
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          ) : (
            <img 
              src={currentImage} 
              alt="Agrandissement du projet sélectionné" 
              className="max-w-[95vw] sm:max-w-[90vw] max-h-[85vh] sm:max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          )}
          
          {currentGallery.length > 1 && (
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm sm:text-lg bg-black/50 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium" aria-live="polite">
              {currentIndex + 1} / {currentGallery.length}
            </div>
          )}
        </div>
      )}

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm" role="navigation" aria-label="Navigation principale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <div>
                <span className="block text-xl font-bold text-gray-900 tracking-tight">Ashler DELEKE</span>
                <span className="block text-xs text-gray-600 font-medium">Designer UI/UX & Créatrice</span>
              </div>
            </div>
            
            <div className="hidden lg:flex gap-8">
              {[
                { key: 'gallery', label: 'Galerie' },
                { key: 'about', label: 'À propos' },
                { key: 'design', label: 'UX/UI' },
                { key: 'projects', label: 'Projets' },
                { key: 'skills', label: 'Compétences' },
                { key: 'contact', label: 'Contact' }
              ].map((section) => (
                <button
                  key={section.key}
                  onClick={() => scrollToSection(section.key)}
                  className={`text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg px-3 py-2 ${
                    activeSection === section.key 
                      ? 'text-orange-600 bg-orange-50' 
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                  aria-label={`Aller à la section ${section.label}`}
                  aria-current={activeSection === section.key ? 'page' : undefined}
                >
                  {section.label}
                </button>
              ))}
            </div>

            <button 
              className="lg:hidden p-2 text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu de navigation"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 space-y-2 pb-4">
              {[
                { key: 'gallery', label: 'Galerie' },
                { key: 'about', label: 'À propos' },
                { key: 'design', label: 'UX/UI' },
                { key: 'projects', label: 'Projets' },
                { key: 'skills', label: 'Compétences' },
                { key: 'contact', label: 'Contact' }
              ].map((section) => (
                <button
                  key={section.key}
                  onClick={() => scrollToSection(section.key)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all font-medium ${
                    activeSection === section.key 
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white' 
                      : 'text-gray-700 hover:bg-orange-50'
                  }`}
                  aria-label={`Aller à la section ${section.label}`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main id="main-content">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24" aria-labelledby="hero-title">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="relative group animate-fadeInUp">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition duration-700"></div>
              <img 
                src={`${process.env.PUBLIC_URL}/images/photo-profil.jpg`}
                alt="Ashler DELEKE, Designer UI/UX" 
                className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full object-cover shadow-2xl border-[6px] border-white"
              />
            </div>
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-full text-orange-700 text-sm mb-6 font-semibold animate-fadeInUp" style={{animationDelay: '0.1s'}}>
                <Sparkles className="w-4 h-4 animate-pulse" />
                Disponible en alternance 2026
              </div>
              <h1 id="hero-title" className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 tracking-tight leading-tight animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                ASHLER<br/>DELEKE
              </h1>
              <p className="text-2xl sm:text-3xl text-orange-600 mb-6 font-semibold tracking-tight animate-fadeInUp" style={{animationDelay: '0.3s'}}>
                Designer UI/UX & Créatrice Visuelle
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                Étudiante en MBA UI/UX, je conçois des interfaces claires, esthétiques et accessibles (normes RGAA). 
                Mon approche combine sensibilité artistique et compréhension des contraintes techniques.
              </p>
              <div className="flex gap-4 justify-center lg:justify-start flex-wrap animate-fadeInUp" style={{animationDelay: '0.5s'}}>
                <a
                  href={`${process.env.PUBLIC_URL}/CV_Ashler_Deleke.pdf`}
                  download="CV_Ashler_Deleke.pdf"
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl transition-all flex items-center gap-3 font-semibold shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 hover:scale-105 duration-300 text-lg"
                  aria-label="Télécharger mon CV"
                >
                  <Download className="w-5 h-5" /> Mon CV
                </a>
                <a 
                  href="https://github.com/ashler18" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 bg-white hover:bg-gray-50 text-gray-900 rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-105 duration-300 border border-gray-200"
                  aria-label="Voir mon profil GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ashler/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-white hover:bg-gray-50 text-gray-900 rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-105 duration-300 border border-gray-200"
                  aria-label="Voir mon profil LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:delekeashler@gmail.com"
                  className="p-4 bg-white hover:bg-gray-50 text-gray-900 rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-105 duration-300 border border-gray-200"
                  aria-label="M'envoyer un email"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Galerie créative */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20" ref={sectionRefs.gallery} aria-labelledby="gallery-title">
          <div className="text-center mb-16">
            <h2 id="gallery-title" className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 tracking-tight leading-tight">
              Créations & Réalisations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Une sélection de mes travaux en design, branding et développement web
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {creativeWorks.map((work, index) => (
              <article 
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-gray-100"
                onClick={() => openLightbox(work.image, work.gallery || [work.image])}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-gray-900/10 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute top-4 right-4 transform group-hover:scale-110 transition-transform duration-300">
                    <span className="px-4 py-2 bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-bold rounded-full shadow-lg">
                      {work.category}
                    </span>
                  </div>
                  
                  {work.hasVideo && (
                    <div className="absolute top-4 left-4 transform group-hover:scale-110 transition-transform duration-300">
                      <span className="px-3 py-2 bg-orange-500/95 backdrop-blur-sm text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                        </svg>
                        Vidéo
                      </span>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <Sparkles className="w-8 h-8 mx-auto mb-2" />
                      <span className="text-lg font-bold">Voir plus</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    {work.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {work.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* À propos */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20" ref={sectionRefs.about} aria-labelledby="about-title">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-14 shadow-xl border border-gray-100">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-orange-50 rounded-2xl">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h2 id="about-title" className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                À propos de moi
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Étudiante en MBA UI/UX, je conçois des interfaces claires, esthétiques et accessibles (normes RGAA). 
                Mon approche combine sensibilité artistique et compréhension des contraintes techniques.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Passionnée par le design visuel, j'accompagne mes projets de l'identité graphique au prototypage. 
                Issue d'une formation en Réseaux Informatiques et Télécommunication, j'ai développé une solide 
                base technique avant de me spécialiser en design UX/UI.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Au-delà du numérique, je dirige N-kû, mon projet e-commerce au Bénin, et explore l'écriture, 
                l'astronomie et l'IA dans mes temps libres. ✨
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-2xl p-5 sm:p-6 lg:p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="p-2 bg-orange-50 rounded-lg">
                    <Award className="w-5 h-5 text-orange-600" />
                  </div>
                  Formation
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-gray-900 mb-1">MBA Design UI/UX (En cours)</p>
                    <p className="text-sm text-gray-600">My Digital School - 2026/2027</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Bachelor Développeur d'Application</p>
                    <p className="text-sm text-gray-600">IPI-Lyon - 2024/2025</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Licence Réseaux Informatiques</p>
                    <p className="text-sm text-gray-600">HECM Bénin - 2021/2024</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-5 sm:p-6 lg:p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="p-2 bg-orange-50 rounded-lg">
                    <Sparkles className="w-5 h-5 text-orange-600" />
                  </div>
                  Certifications
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Web Accessibility Basics</p>
                    <p className="text-sm text-gray-600">Contentsquare - 2025</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Certificat Accessibilité Web RGAA</p>
                    <p className="text-sm text-gray-600">Contentsquare - 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SECTION ART-SHLER — MODIFIÉE
        ===================================================== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20" aria-labelledby="artshler-title">
          <div className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 rounded-3xl overflow-hidden shadow-2xl shadow-orange-500/30 animate-gradient">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            </div>

            <div className="relative p-8 sm:p-12 md:p-16">
              {/* En-tête */}
              <div className="text-center text-white mb-10">
                <h2
                  id="artshler-title"
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight leading-tight"
                >
                  Projet Entrepreneurial<br/>Art-shler
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-orange-50 max-w-3xl mx-auto leading-relaxed font-medium">
                  Marque textile alliant design visuel et vente de produits
                </p>
              </div>

              {/* Carrousel */}
              <div className="relative max-w-4xl mx-auto mb-10">
                {/* Image principale */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-black/20 shadow-2xl group/img cursor-zoom-in" onClick={() => openLightbox(artshlerImages[artshlerIndex].src, artshlerImages.map(i => i.src))}>
                  <img
                    src={artshlerImages[artshlerIndex].src}
                    alt={`Art-shler — ${artshlerImages[artshlerIndex].label}`}
                    className="w-full h-full object-cover transition-all duration-500 group-hover/img:scale-105"
                    key={artshlerIndex}
                  />
                  {/* Overlay dégradé bas */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  {/* Icône zoom au hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-black/20">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-xl">
                      <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>

                  {/* Badge collection */}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-orange-600 text-sm font-bold rounded-full shadow-lg">
                      {artshlerImages[artshlerIndex].label}
                    </span>
                  </div>

                  {/* Boutons prev/next */}
                  <button
                    onClick={artshlerPrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-all backdrop-blur-sm"
                    aria-label="Image précédente"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={artshlerNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-all backdrop-blur-sm"
                    aria-label="Image suivante"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Miniatures */}
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2 justify-center flex-wrap">
                  {artshlerImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => { setArtshlerIndex(idx); openLightbox(img.src, artshlerImages.map(i => i.src)); }}
                      className={`flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        idx === artshlerIndex
                          ? 'border-white scale-110 shadow-lg'
                          : 'border-white/30 opacity-60 hover:opacity-90'
                      }`}
                      aria-label={`Voir image ${idx + 1}`}
                    >
                      <img
                        src={img.src}
                        alt={img.label}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* Compteur */}
                <div className="text-center text-white/80 text-sm mt-3 font-medium">
                  {artshlerIndex + 1} / {artshlerImages.length}
                </div>
              </div>

              {/* Bouton Voir la boutique */}
              <div className="text-center">
                <a
                  href="https://art-shler.myspreadshop.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white hover:bg-orange-50 text-orange-600 rounded-2xl text-xl font-bold shadow-2xl hover:scale-105 transition-all duration-300"
                  aria-label="Voir la boutique Art-shler"
                >
                  <ShoppingBag className="w-6 h-6" />
                  Voir la boutique
                  <ArrowRight className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* =====================================================
            FIN SECTION ART-SHLER
        ===================================================== */}

        {/* Design UX/UI */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20" ref={sectionRefs.design} aria-labelledby="design-title">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-orange-50 rounded-2xl">
              <Palette className="w-8 h-8 text-orange-600" />
            </div>
            <h2 id="design-title" className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Projet Design UX/UI
            </h2>
          </div>

          <article className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border border-gray-100">
            <div className="grid md:grid-cols-2 gap-0">
              <div 
                className="relative cursor-pointer overflow-hidden"
                onClick={() => openLightbox(projectUX.preview, projectUX.gallery)}
              >
                <img 
                  src={projectUX.preview} 
                  alt={projectUX.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-gray-900/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">{projectUX.title}</h3>
                <p className="text-orange-600 font-semibold mb-6">{projectUX.period}</p>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">{projectUX.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {projectUX.tech.map((tech, i) => (
                    <span key={i} className="px-4 py-2 bg-gray-50 border border-gray-200 text-gray-700 font-medium rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                {projectUX.links.figma && (
                  <a 
                    href={projectUX.links.figma} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl transition-all font-semibold shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 hover:scale-105 duration-300 text-lg"
                  >
                    Voir le prototype Figma <ArrowRight className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </article>
        </section>

        {/* Projets de développement */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20" ref={sectionRefs.projects} aria-labelledby="projects-title">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-orange-50 rounded-2xl">
              <Code className="w-8 h-8 text-orange-600" />
            </div>
            <h2 id="projects-title" className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Projets de Développement
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <article 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border border-gray-100"
              >
                <div 
                  className="relative cursor-pointer overflow-hidden h-56"
                  onClick={() => openLightbox(project.preview, project.gallery || [project.preview])}
                >
                  <img 
                    src={project.preview} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-gray-900/10 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-orange-600 font-semibold text-sm mb-4">{project.period}</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-50 text-gray-700 text-xs font-medium rounded-full border border-gray-200">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 flex-wrap">
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors font-semibold"
                      >
                        <Github className="w-5 h-5" /> Code source
                      </a>
                    )}
                    {project.links.demo && (
                      <a 
                        href={project.links.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors font-semibold"
                      >
                        <ExternalLink className="w-5 h-5" /> Voir le site
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Entreprise N-kû */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20" ref={sectionRefs.business} aria-labelledby="business-title">
          <div className="bg-white rounded-3xl p-10 sm:p-14 shadow-xl border border-gray-100">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-orange-50 rounded-2xl">
                <Briefcase className="w-8 h-8 text-orange-600" />
              </div>
              <h2 id="business-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                Aventure Entrepreneuriale
              </h2>
            </div>
            
            <div className="space-y-10">
              <article className="bg-gray-50 rounded-2xl p-5 sm:p-6 lg:p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={`${process.env.PUBLIC_URL}/images/logo-N-ku.jpg`} 
                    alt="N-kû" 
                    className="w-20 h-20 rounded-2xl object-contain bg-white p-3 shadow-md border border-gray-200" 
                  />
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">N-Kû 🛍️</h3>
                    <p className="text-orange-600 font-semibold text-sm sm:text-base">Fondatrice & Créatrice | Bénin</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  Projet e-commerce au Bénin proposant des produits diversifiés via WhatsApp. 
                  Une aventure qui allie passion du commerce et apprentissage de l'entrepreneuriat.
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    `${process.env.PUBLIC_URL}/images/nku-otaku-1.jpg`,
                    `${process.env.PUBLIC_URL}/images/nku-mode-1.jpg`,
                    `${process.env.PUBLIC_URL}/images/nku-mode-2.jpg`,
                    `${process.env.PUBLIC_URL}/images/nku-otaku-2.jpg`
                  ].map((img, idx) => (
                    <img 
                      key={idx}
                      src={img} 
                      alt={`Produit N-kû ${idx + 1}`}
                      className="aspect-square object-cover rounded-xl cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300 border-2 border-white shadow-md"
                      onClick={() => openLightbox(img)}
                    />
                  ))}
                </div>
              </article>

              <article className="bg-gray-50 rounded-2xl p-5 sm:p-6 lg:p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={`${process.env.PUBLIC_URL}/images/c-create.jpg`} 
                    alt="C'create" 
                    className="w-20 h-20 rounded-2xl object-cover shadow-md border-2 border-white" 
                  />
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">C'create N-Kû 🎬</h3>
                    <p className="text-orange-600 font-semibold text-sm sm:text-base">Services Créatifs & Événements</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  Montage vidéo, création de CV, conception d'affiches et organisation d'événements. 
                  Des services créatifs avec professionnalisme et humour.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {["Montages vidéo", "Création de CV", "Conception d'affiches", "Organisation d'événements"].map((service, i) => (
                    <span key={i} className="px-4 py-2 bg-white border border-gray-200 text-gray-700 font-medium rounded-full text-sm">
                      {service}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <video 
                    ref={(el) => (videoRefs.current[0] = el)}
                    src={`${process.env.PUBLIC_URL}/images/ccreate-video1.mp4`}
                    className="w-full aspect-video object-contain bg-gray-900 rounded-xl shadow-md border-2 border-white"
                    controls
                    onPlay={() => handleVideoPlay(0)}
                  />
                  <img 
                    src={`${process.env.PUBLIC_URL}/images/service create.jpg`}
                    alt="Services C'create" 
                    className="w-full aspect-video object-cover rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 shadow-md border-2 border-white"
                    onClick={() => openLightbox(`${process.env.PUBLIC_URL}/images/service create.jpg`)}
                  />
                  <video 
                    ref={(el) => (videoRefs.current[1] = el)}
                    src={`${process.env.PUBLIC_URL}/images/ccreate-video2.mp4`}
                    className="w-full aspect-video object-contain bg-gray-900 rounded-xl shadow-md border-2 border-white"
                    controls
                    onPlay={() => handleVideoPlay(1)}
                  />
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20" ref={sectionRefs.publications} aria-labelledby="publications-title">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-14 shadow-xl border border-gray-100">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-orange-50 rounded-2xl">
                <BookOpen className="w-8 h-8 text-orange-600" />
              </div>
              <h2 id="publications-title" className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                Publications
              </h2>
            </div>
            
            <div className="max-w-3xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">✍️ Écrivaine à mes temps libres</h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                J'ai publié un essai disponible sur Amazon et Wattpad. L'écriture est ma façon d'explorer 
                d'autres univers et de partager mes réflexions sur le monde qui m'entoure.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a 
                  href="https://amzn.to/43Z190P" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl transition-all flex items-center gap-3 font-semibold shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 hover:scale-105 duration-300 text-lg"
                >
                  <ExternalLink className="w-5 h-5" /> Version Amazon
                </a>
                <a 
                  href="https://www.wattpad.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 rounded-xl transition-all flex items-center gap-3 font-semibold shadow-md hover:shadow-lg border border-gray-200"
                >
                  <ExternalLink className="w-5 h-5" /> Lire sur Wattpad
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Compétences */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20" ref={sectionRefs.skills} aria-labelledby="skills-title">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-orange-50 rounded-2xl">
              <Sparkles className="w-8 h-8 text-orange-600" />
            </div>
            <h2 id="skills-title" className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Compétences & Passions
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {skills.map((skillGroup, index) => (
              <article 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-orange-50 rounded-xl">
                    {skillGroup.icon}
                    <span className="text-orange-600">{skillGroup.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{skillGroup.category}</h3>
                </div>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span className="text-orange-500 mt-1 font-bold">•</span>
                      <span className="leading-relaxed">{skill}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-md border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Heart className="w-8 h-8 text-orange-600" /> Centres d'intérêt
            </h3>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <span 
                  key={index} 
                  className="px-5 py-3 bg-gray-50 border border-gray-200 text-gray-700 font-medium rounded-full hover:bg-orange-50 hover:border-orange-200 hover:text-orange-700 transition-all cursor-default"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20" ref={sectionRefs.contact} aria-labelledby="contact-title">
          <div className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 rounded-3xl overflow-hidden shadow-2xl shadow-orange-500/30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="relative p-12 sm:p-16 text-center text-white">
              <h2 id="contact-title" className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight">
                Travaillons ensemble ! ✨
              </h2>
              <p className="text-xl text-orange-50 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                Vous avez un projet en design UI/UX ou développement frontend ? 
                N'hésitez pas à me contacter pour en discuter.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="mailto:delekeashler@gmail.com"
                  className="px-10 py-5 bg-white hover:bg-orange-50 text-orange-600 rounded-xl font-bold transition-all shadow-xl hover:scale-105 duration-300 text-lg"
                >
                  Me contacter
                </a>
                <a 
                  href="https://github.com/ashler18" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-orange-700 hover:bg-orange-800 text-white rounded-xl font-bold transition-all hover:scale-105 duration-300 text-lg"
                >
                  Voir mon GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 py-10 text-center border-t border-gray-200 mt-20" role="contentinfo">
        <p className="text-gray-600 mb-2 font-medium">© 2025 Ashler DELEKE - Tous droits réservés</p>
        <p className="text-gray-500 text-sm">Conçu avec passion et une touche d'étoiles ⭐</p>
      </footer>
    </div>
  );
}