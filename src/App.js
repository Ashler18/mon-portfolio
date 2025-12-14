import React, { useState, useRef, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Star, Sparkles, BookOpen, Code, Briefcase, Heart, Download, X, ChevronLeft, ChevronRight, Menu, Palette } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentGallery, setCurrentGallery] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  
  const videoRefs = useRef([]);
  const sectionRefs = {
    about: useRef(null),
    design: useRef(null),
    projects: useRef(null),
    business: useRef(null),
    publications: useRef(null),
    skills: useRef(null),
    contact: useRef(null)
  };

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
    document.title = "Portfolio - Ashler DELEKE M. N. | UX/UI Designer & Frontend Developer";
    document.documentElement.lang = "fr";

    const handleScroll = () => {
      const sections = ['about', 'design', 'projects', 'business', 'publications', 'skills', 'contact'];
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const projectUX = {
    title: "FunkyFlip - Application Mobile de Bien-être",
    period: "Projet UX/UI - 2025",
    description: "Application mobile de santé mentale utilisant la thérapie par le rire pour améliorer l'humeur quotidienne des actifs stressés. Conception complète : recherche utilisateur, personas, wireframes, prototypes interactifs Figma.",
    tech: ["Recherche UX", "Personas", "Wireframes", "Figma", "Miro", "Prototypage", "Architecture info"],
    links: {
      figma: "https://www.figma.com/proto/tncINUA2POhlpEizWdBiSv/FunkyFlip---Wireframes?node-id=17-3",
      demo: null
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
      title: "Site Web Accessible – RGAA",
      period: "Fév. – Mars 2025",
      description: "Projet académique centré sur l'accessibilité numérique avec navigation clavier, ARIA, contraste optimal et validation AA du RGAA.",
      tech: ["HTML", "CSS", "JavaScript", "ARIA", "RGAA"],
      links: {
        github: "https://github.com/ashler18",
        demo: "https://ashler18.github.io/citations-inspirantes/"
      },
      preview: `${process.env.PUBLIC_URL}/images/projet-rgaa.png`
    },
    {
      title: "Site ONG – World Ecology Women",
      period: "2025",
      description: "Site web complet pour l'ONG WORLD ECOLOGY WOMEN au Bénin, avec design moderne et interface intuitive.",
      tech: ["React", "JavaScript", "CSS"],
      links: {
        github: null,
        demo: "https://www.benin-wecow.org/"
      },
      preview: `${process.env.PUBLIC_URL}/images/projet-wecow.jpg`
    },
    {
      title: "Application To-Do List React",
      period: "Projet personnel",
      description: "Application de gestion de tâches avec création, modification, suppression. Utilisation hooks useState et useEffect, interface responsive.",
      tech: ["React", "Hooks", "CSS", "Responsive"],
      links: {
        github: "https://github.com/ashler18",
        demo: "https://ashler18.github.io/my-todo-app/"
      },
      preview: `${process.env.PUBLIC_URL}/images/projet-todo.png`
    },
    {
      title: "Application N-kû",
      period: "En cours",
      description: "Application e-commerce pour mon entreprise N-kû. Projet personnel en développement actif.",
      tech: ["React", "Node.js", "En développement"],
      links: {
        github: null,
        demo: null
      },
      preview: `${process.env.PUBLIC_URL}/images/logo-N-ku.jpg`
    },
    {
      title: "Site Vitrine React – WIVE",
      period: "Avril – Juin 2025",
      description: "Stage de 2 mois : modification de code sur template React, intégration responsive, création de composants, ajustements UX/UI selon besoins client. Galerie de captures d'écran disponible.",
      tech: ["React", "JavaScript", "CSS", "Responsive"],
      links: {
        github: null,
        demo: "https://wive.fr"
      },
      preview: `${process.env.PUBLIC_URL}/images/projet-wive-1.png`,
      gallery: [`${process.env.PUBLIC_URL}/images/projet-wive-1.png`, `${process.env.PUBLIC_URL}/images/projet-wive-2.png`]
    }
  ];

  const skills = [
    {
      category: "Design UX/UI",
      items: ["Recherche utilisateur & Personas", "Wireframes & Prototypes", "Figma & Miro", "Architecture de l'information", "Design Systems", "Tests d'usabilité"]
    },
    {
      category: "Langages & Technologies Web",
      items: ["HTML5 & CSS3", "JavaScript", "TypeScript", "PHP", "MySQL"]
    },
    {
      category: "Frameworks & Bibliothèques",
      items: ["React (Router, composants)", "Angular", "JavaSpark", "WordPress", "Node.js"]
    },
    {
      category: "Outils de développement",
      items: ["Git / GitHub", "VS Code", "Postman"]
    },
    {
      category: "Systèmes & Suite bureautique",
      items: ["Windows 10", "Windows Server", "Office 365"]
    }
  ];

  const interests = [
    "UI/UX Design", "Accessibilité Web", "Intelligence Artificielle", 
    "Jeux vidéo", "Lecture", "Musique", "Dessin", "Astronomie", "Cuisine"
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-900 focus:text-white focus:rounded-lg"
      >
        Aller au contenu principal
      </a>

      {cvModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-2 sm:p-4" 
          onClick={() => setCvModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Prévisualisation du CV"
        >
          <div className="bg-white rounded-xl sm:rounded-2xl w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-3 sm:p-4 md:p-6 border-b border-gray-200">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-950">Mon CV</h3>
              <button 
                onClick={() => setCvModalOpen(false)}
                className="p-2 text-gray-600 hover:text-blue-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-900 rounded-lg"
                aria-label="Fermer"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-auto p-2 sm:p-4 md:p-6 bg-gray-50">
              <iframe
                src={`${process.env.PUBLIC_URL}/cv-ashler-deleke.pdf`}
                className="w-full h-[400px] sm:h-[500px] md:h-[600px] border-0 rounded-lg bg-white"
                title="Prévisualisation du CV"
              />
            </div>

            <div className="p-3 sm:p-4 md:p-6 border-t border-gray-200 bg-white flex flex-col sm:flex-row justify-center gap-2 sm:gap-3">
              <a 
                href={`${process.env.PUBLIC_URL}/cv-ashler-deleke.pdf`}
                download="CV-Ashler-DELEKE.pdf"
                className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm sm:text-base"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" /> Télécharger le CV
              </a>
              <button 
                onClick={() => setCvModalOpen(false)}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm sm:text-base"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-2" 
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Visionneuse d'image agrandie"
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded-lg p-1 sm:p-2 z-10"
            aria-label="Fermer la visionneuse"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          
          {currentGallery.length > 1 && (
            <>
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-1 sm:left-2 md:left-4 text-white hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded-lg p-1 sm:p-2 bg-black/50"
                aria-label="Image précédente"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-1 sm:right-2 md:right-4 text-white hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded-lg p-1 sm:p-2 bg-black/50"
                aria-label="Image suivante"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12" />
              </button>
            </>
          )}
          
          <img 
            src={currentImage} 
            alt="Agrandissement du projet sélectionné" 
            className="max-w-[95vw] max-h-[85vh] sm:max-w-[90vw] sm:max-h-[80vh] md:max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          
          {currentGallery.length > 1 && (
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xs sm:text-sm md:text-lg bg-black/50 px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded-full" aria-live="polite">
              {currentIndex + 1} sur {currentGallery.length}
            </div>
          )}
        </div>
      )}

      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/5 via-transparent to-blue-950/10"></div>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-900/20 rounded-full animate-pulse hidden sm:block"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-900/10 shadow-sm" role="navigation" aria-label="Navigation principale">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-blue-900" aria-hidden="true" />
              <span className="text-base sm:text-lg md:text-xl font-bold text-blue-950">Ashler DELEKE</span>
            </div>
            
            <div className="hidden lg:flex gap-4 xl:gap-6">
              {[
                { key: 'about', label: 'À propos' },
                { key: 'design', label: 'Design UX/UI' },
                { key: 'projects', label: 'Développement' },
                { key: 'business', label: 'Entreprise' },
                { key: 'publications', label: 'Publications' },
                { key: 'skills', label: 'Compétences' },
                { key: 'contact', label: 'Contact' }
              ].map((section) => (
                <button
                  key={section.key}
                  onClick={() => scrollToSection(section.key)}
                  className={`text-sm xl:text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-900 rounded px-2 py-1 ${
                    activeSection === section.key 
                      ? 'text-blue-900 font-bold border-b-2 border-blue-900' 
                      : 'text-gray-600 hover:text-blue-900'
                  }`}
                  aria-label={`Aller à la section ${section.label}`}
                  aria-current={activeSection === section.key ? 'page' : undefined}
                >
                  {section.label}
                </button>
              ))}
            </div>

            <button 
              className="lg:hidden p-2 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900 rounded"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu de navigation"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 pb-3 space-y-2">
              {[
                { key: 'about', label: 'À propos' },
                { key: 'design', label: 'Design UX/UI' },
                { key: 'projects', label: 'Développement' },
                { key: 'business', label: 'Entreprise' },
                { key: 'publications', label: 'Publications' },
                { key: 'skills', label: 'Compétences' },
                { key: 'contact', label: 'Contact' }
              ].map((section) => (
                <button
                  key={section.key}
                  onClick={() => scrollToSection(section.key)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm sm:text-base ${
                    activeSection === section.key 
                      ? 'bg-blue-900 text-white font-semibold' 
                      : 'text-gray-600 hover:bg-blue-50'
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

      <main id="main-content" className="relative z-10">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20" ref={sectionRefs.about} aria-labelledby="hero-title">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
            <img 
              src={`${process.env.PUBLIC_URL}/images/photo-profil.jpg`}
              alt="Ashler DELEKE, UX/UI Designer & Frontend Developer" 
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover shadow-2xl border-4 border-blue-100"
            />
            <div className="flex-1 text-center md:text-left">
              <h1 id="hero-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 mb-2 sm:mb-3 md:mb-4">
                Ashler DELEKE M. N.
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-blue-900 mb-2 sm:mb-3 md:mb-4">
                UX/UI Designer & Frontend React Developer
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-5 md:mb-6 max-w-2xl mx-auto md:mx-0">
                Étudiante passionnée créant des expériences numériques accessibles et innovantes. 
                Entrepreneure, développeuse et écrivaine, je transforme les idées en réalité.
              </p>
              <div className="flex gap-2 sm:gap-3 md:gap-4 justify-center md:justify-start flex-wrap">
                <button
                  onClick={() => setCvModalOpen(true)}
                  className="px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors flex items-center gap-2 text-xs sm:text-sm md:text-base font-semibold focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
                  aria-label="Voir mon CV"
                >
                  <Download className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" aria-hidden="true" /> Voir mon CV
                </button>
                <a 
                  href="https://github.com/ashler18" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 sm:p-2.5 md:p-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
                  aria-label="Voir mon profil GitHub (Ouvre dans un nouvel onglet)"
                >
                  <Github className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" aria-hidden="true" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ashler/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 sm:p-2.5 md:p-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
                  aria-label="Voir mon profil LinkedIn (Ouvre dans un nouvel onglet)"
                >
                  <Linkedin className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" aria-hidden="true" />
                </a>
                <a 
                  href="mailto:delekeashler@gmail.com"
                  className="p-2 sm:p-2.5 md:p-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
                  aria-label="M'envoyer un email"
                >
                  <Mail className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 bg-gradient-to-r from-blue-50 to-white rounded-2xl sm:rounded-3xl my-4 sm:my-6 md:my-8" aria-labelledby="about-title">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
            <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-900" aria-hidden="true" />
            <h2 id="about-title" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950">À propos de moi</h2>
          </div>
          <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
              Je suis Ashler DELEKE, passionnée par la création d'expériences numériques qui allient esthétique, accessibilité et innovation.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
              Issue d'une formation en Réseaux Informatiques et Télécommunication, j'ai développé une solide base technique avant de me spécialiser dans le design UX/UI et le développement frontend. Cette double compétence me permet de créer des interfaces non seulement esthétiques, mais aussi techniquement optimisées et accessibles.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
              De la recherche utilisateur aux prototypes Figma, jusqu'au développement React, je maîtrise toute la chaîne de conception avec une attention particulière aux normes RGAA. Au-delà du numérique, je dirige N-kû, mon projet e-commerce au Bénin via WhatsApp, une aventure entrepreneuriale qui allie commerce et apprentissage. Écrivaine à mes temps perdus, je m'inspire de l'astronomie, la musique et l'IA pour explorer sans cesse de nouveaux horizons. ✨
            </p>
          </div>

          <div className="mt-6 sm:mt-8 bg-blue-50 border-2 border-blue-100 rounded-xl p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-blue-950 mb-4">Formation & Certifications</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-blue-900 text-sm sm:text-base">📚 Formation en Réseaux Informatiques et Télécommunication</p>
                <p className="text-xs sm:text-sm text-gray-600">HECM - Bénin</p>
              </div>
              <div>
                <p className="font-semibold text-blue-900 text-sm sm:text-base">🎓 Bachelor Développeur</p>
                <p className="text-xs sm:text-sm text-gray-600">IPI-Lyon </p>
              </div>
              <div>
                <p className="font-semibold text-blue-900 text-sm sm:text-base">📜Web Accessibility Basics</p>
                <p className="text-xs sm:text-sm text-gray-600">Contentsquare</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16" ref={sectionRefs.design} aria-labelledby="design-title">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
            <Palette className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-900" aria-hidden="true" />
            <h2 id="design-title" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950">Design UX/UI</h2>
          </div>

          <article className="bg-white border-2 border-blue-100 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
            <div 
              className="relative cursor-pointer group"
              onClick={() => openLightbox(projectUX.preview, projectUX.gallery)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(projectUX.preview, projectUX.gallery);
                }
              }}
              aria-label={`Agrandir l'image du projet ${projectUX.title}`}
            >
              <img 
                src={projectUX.preview} 
                alt={`Projet ${projectUX.title}`}
                className="w-full h-40 sm:h-48 object-cover object-top"
              />
              <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xs sm:text-sm md:text-base lg:text-lg font-semibold px-3 sm:px-4 text-center">
                  🔍 Cliquez pour agrandir ({projectUX.gallery.length} images)
                </span>
              </div>
            </div>
            
            <div className="p-3 sm:p-4 md:p-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-950 mb-1 sm:mb-2">{projectUX.title}</h3>
              <p className="text-xs sm:text-sm text-blue-700 mb-2 md:mb-3">{projectUX.period}</p>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-3 md:mb-4">{projectUX.description}</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3 md:mb-4" role="list" aria-label="Technologies utilisées">
                {projectUX.tech.map((tech, i) => (
                  <span key={i} className="px-2 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1 bg-blue-50 text-blue-900 text-xs sm:text-sm rounded-full" role="listitem">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 sm:gap-3 text-xs sm:text-sm md:text-base flex-wrap">
                {projectUX.links.figma && (
                  <a 
                    href={projectUX.links.figma} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 sm:gap-2 text-blue-900 hover:text-blue-700 transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-blue-900 rounded px-2 py-1"
                    aria-label={`Voir le prototype Figma de ${projectUX.title} (Ouvre dans un nouvel onglet)`}
                  >
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" /> Voir le prototype Figma
                  </a>
                )}
              </div>
            </div>
          </article>

          <div className="mt-6 p-4 sm:p-6 bg-blue-50 border-2 border-blue-100 rounded-xl">
            <p className="text-sm sm:text-base text-gray-700">
              💼 <strong>Autres projets design</strong> : J'ai également réalisé de nombreuses affiches, montages vidéo et créations visuelles pour des clients via mon entreprise C'create N-kû. Ces projets ne peuvent être présentés publiquement en raison de leur caractère confidentiel.
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16" ref={sectionRefs.projects} aria-labelledby="projects-title">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
            <Code className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-900" aria-hidden="true" />
            <h2 id="projects-title" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950">Développement Frontend</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {projects.map((project, index) => (
              <article key={index} className="bg-white border-2 border-blue-100 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <div 
                  className="relative cursor-pointer group"
                  onClick={() => openLightbox(project.preview, project.gallery || [project.preview])}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openLightbox(project.preview, project.gallery || [project.preview]);
                    }
                  }}
                  aria-label={`Agrandir l'image du projet ${project.title}`}
                >
                  <img 
                    src={project.preview} 
                    alt={`Projet ${project.title}`}
                    className="w-full h-40 sm:h-48 object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xs sm:text-sm md:text-base lg:text-lg font-semibold px-3 sm:px-4 text-center">
                      🔍 Cliquez pour agrandir {project.gallery && project.gallery.length > 1 ? `(${project.gallery.length} images)` : ''}
                    </span>
                  </div>
                </div>
                
                <div className="p-3 sm:p-4 md:p-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-950 mb-1 sm:mb-2">{project.title}</h3>
                  <p className="text-xs sm:text-sm text-blue-700 mb-2 md:mb-3">{project.period}</p>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-3 md:mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3 md:mb-4" role="list" aria-label="Technologies utilisées">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1 bg-blue-50 text-blue-900 text-xs sm:text-sm rounded-full" role="listitem">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 sm:gap-3 text-xs sm:text-sm md:text-base flex-wrap">
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 sm:gap-2 text-blue-900 hover:text-blue-700 transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-blue-900 rounded px-2 py-1"
                        aria-label={`Voir le code source de ${project.title} sur GitHub (Ouvre dans un nouvel onglet)`}
                      >
                        <Github className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" /> GitHub
                      </a>
                    )}
                    {project.links.demo && (
                      <a 
                        href={project.links.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 sm:gap-2 text-blue-900 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-900 rounded px-2 py-1"
                        aria-label={`Voir le site en ligne de ${project.title} (Ouvre dans un nouvel onglet)`}
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" /> Voir le site
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 bg-gradient-to-l from-blue-50 to-white rounded-2xl sm:rounded-3xl my-4 sm:my-6 md:my-8" ref={sectionRefs.business} aria-labelledby="business-title">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
            <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-900" aria-hidden="true" />
            <h2 id="business-title" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950">Mon Aventure Entrepreneuriale</h2>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            <article className="bg-white border-2 border-blue-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                <img src={`${process.env.PUBLIC_URL}/images/logo-N-ku.jpg`} alt="N-kû, entreprise e-commerce au Bénin" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg object-contain bg-white" />
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-950">N-Kû 🛍️</h3>
                  <p className="text-sm sm:text-base md:text-lg text-blue-800">Fondatrice & Créatrice | Bénin</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4 md:mb-6">
                N-kû est mon projet entrepreneurial e-commerce au Bénin, où je propose des produits diversifiés via WhatsApp pour le moment. Une aventure qui allie passion du commerce et apprentissage de l'entrepreneuriat.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6" role="list" aria-label="Galerie de produits N-kû">
                {[
                  { src: `${process.env.PUBLIC_URL}/images/nku-otaku-1.jpg`, alt: "Produits Otaku disponibles chez N-kû" },
                  { src: `${process.env.PUBLIC_URL}/images/nku-mode-1.jpg`, alt: "Articles de mode élégante N-kû" },
                  { src: `${process.env.PUBLIC_URL}/images/nku-mode-2.jpg`, alt: "Collection mode N-kû" },
                  { src: `${process.env.PUBLIC_URL}/images/nku-otaku-2.jpg`, alt: "Accessoires et articles Otaku N-kû" }
                ].map((img, idx) => (
                  <img 
                    key={idx}
                    src={img.src} 
                    alt={img.alt}
                    className="aspect-square object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-900"
                    onClick={() => openLightbox(img.src)}
                    role="listitem"
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openLightbox(img.src);
                      }
                    }}
                  />
                ))}
              </div>
            </article>

            <article className="bg-white border-2 border-blue-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                <img src={`${process.env.PUBLIC_URL}/images/c-create.jpg`} alt="C'create N-kû, services créatifs et événements" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg object-cover" />
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-950">C'create N-Kû 🎬</h3>
                  <p className="text-sm sm:text-base md:text-lg text-blue-800">Filiale de N-Kû | Services créatifs</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-2 sm:mb-3 md:mb-4">
                Services de montage vidéo et organisation d'événements. Nous créons des montages vidéos créatifs 
                et organisons des petites fêtes entre collègues, amis et famille avec professionnalisme et humour.
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 mb-3 sm:mb-4 md:mb-6" role="list" aria-label="Services proposés par C'create">
                <span className="px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 bg-blue-50 text-blue-900 text-xs sm:text-sm rounded-full" role="listitem">Montages vidéo</span>
                <span className="px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 bg-blue-50 text-blue-900 text-xs sm:text-sm rounded-full" role="listitem">Création de CV</span>
                <span className="px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 bg-blue-50 text-blue-900 text-xs sm:text-sm rounded-full" role="listitem">Conception d'affiches</span>
                <span className="px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 bg-blue-50 text-blue-900 text-xs sm:text-sm rounded-full" role="listitem">Organisation d'événements</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4" role="list" aria-label="Exemples de réalisations C'create">
                <div className="relative group" role="listitem">
                  <video 
                    ref={(el) => (videoRefs.current[0] = el)}
                    src={`${process.env.PUBLIC_URL}/images/ccreate-video1.mp4`}
                    className="w-full aspect-video object-contain bg-black rounded-lg shadow-md"
                    controls
                    poster={`${process.env.PUBLIC_URL}/images/c-create.jpg`}
                    onPlay={() => handleVideoPlay(0)}
                    aria-label="Vidéo de présentation des montages C'create, partie 1"
                  />
                </div>
                <img 
                  src={`${process.env.PUBLIC_URL}/images/service create.jpg`}
                  alt="Services créatifs proposés par C'create" 
                  className="w-full aspect-video object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-900"
                  onClick={() => openLightbox(`${process.env.PUBLIC_URL}/images/service create.jpg`)}
                  role="listitem"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openLightbox(`${process.env.PUBLIC_URL}/images/service create.jpg`);
                    }
                  }}
                />
                <div className="relative group" role="listitem">
                  <video 
                    ref={(el) => (videoRefs.current[1] = el)}
                    src={`${process.env.PUBLIC_URL}/images/ccreate-video2.mp4`}
                    className="w-full aspect-video object-contain bg-black rounded-lg shadow-md"
                    controls
                    poster={`${process.env.PUBLIC_URL}/images/c-create.jpg`}
                    onPlay={() => handleVideoPlay(1)}
                    aria-label="Vidéo de présentation des montages C'create, partie 2"
                  />
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16" ref={sectionRefs.publications} aria-labelledby="publications-title">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-900" aria-hidden="true" />
            <h2 id="publications-title" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950">Publications</h2>
          </div>
          <article className="bg-white border-2 border-blue-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-950 mb-2 sm:mb-3 md:mb-4">✍️ Écrivaine à mes temps libres</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-3 sm:mb-4 md:mb-6">
              J'ai publié un essai disponible sur Amazon et Wattpad. L'écriture est ma façon d'explorer 
              d'autres univers et de partager mes réflexions.
            </p>
            <div className="flex gap-2 sm:gap-3 md:gap-4 flex-wrap">
              <a 
                href="https://amzn.to/43Z190P" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-blue-900 text-white text-xs sm:text-sm md:text-base rounded-lg hover:bg-blue-800 transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
                aria-label="Acheter la version payante de mon livre sur Amazon (Ouvre dans un nouvel onglet)"
              >
                <ExternalLink className="w-3 h-3 md:w-4 md:h-4" aria-hidden="true" /> Version Amazon (payante)
              </a>
              <a 
                href="https://www.wattpad.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-blue-100 text-blue-900 text-xs sm:text-sm md:text-base rounded-lg hover:bg-blue-200 transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
                aria-label="Lire gratuitement mon livre sur Wattpad (Ouvre dans un nouvel onglet)"
              >
                <ExternalLink className="w-3 h-3 md:w-4 md:h-4" aria-hidden="true" /> Wattpad (gratuite)
              </a>
            </div>
          </article>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 bg-gradient-to-r from-blue-50 to-white rounded-2xl sm:rounded-3xl my-4 sm:my-6 md:my-8" ref={sectionRefs.skills} aria-labelledby="skills-title">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-900" aria-hidden="true" />
            <h2 id="skills-title" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950">Compétences & Passions</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
            {skills.map((skillGroup, index) => (
              <article key={index} className="bg-white border-2 border-blue-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-950 mb-2 sm:mb-3 md:mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2" role="list" aria-label={`Compétences en ${skillGroup.category}`}>
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 bg-blue-50 text-blue-900 text-xs sm:text-sm rounded-full" role="listitem">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-950 mb-2 sm:mb-3 md:mb-4 flex items-center gap-2">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-900" aria-hidden="true" /> Centres d'intérêt
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3" role="list" aria-label="Mes centres d'intérêt">
              {interests.map((interest, index) => (
                <span key={index} className="px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 bg-white border-2 border-blue-100 text-blue-900 text-xs sm:text-sm rounded-full hover:bg-blue-50 transition-colors" role="listitem">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              Envie de travailler sur un projet ensemble ? 🚀
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 opacity-90 max-w-2xl mx-auto">
              Que ce soit pour du design UX/UI, du développement React, ou les deux, je serais ravie d'échanger sur votre projet. Discutons de vos besoins !
            </p>
            <a 
              href="mailto:delekeashler@gmail.com"
              className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-white text-blue-900 rounded-lg text-sm sm:text-base font-semibold hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
            >
              Contactez-moi
            </a>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16" ref={sectionRefs.contact} aria-labelledby="contact-title">
          <div className="text-center bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12">
            <h2 id="contact-title" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">Travaillons ensemble ! ✨</h2>
            <p className="text-sm sm:text-base md:text-xl mb-4 sm:mb-6 md:mb-8 opacity-90">
              Vous avez un projet en tête ? N'hésitez pas à me contacter.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 md:gap-4">
              <a 
                href="mailto:delekeashler@gmail.com"
                className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-white text-blue-900 rounded-lg text-xs sm:text-sm md:text-base font-semibold hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                aria-label="M'envoyer un email pour me contacter"
              >
                Me contacter
              </a>
              <a 
                href="https://github.com/ashler18" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-blue-800 text-white rounded-lg text-xs sm:text-sm md:text-base font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                aria-label="Visiter mon profil GitHub (Ouvre dans un nouvel onglet)"
              >
                Voir mon GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6 md:py-8 text-center text-gray-600 border-t border-blue-100 mt-8 sm:mt-12 md:mt-16" role="contentinfo">
        <p className="mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">© 2025 Ashler DELEKE M. N. - Tous droits réservés</p>
        <p className="text-xs sm:text-sm">Conçu avec passion et une touche d'étoiles ⭐</p>
      </footer>
    </div>
  );
}