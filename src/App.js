import React, { useState, useRef, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Star, Sparkles, BookOpen, Code, Briefcase, Heart, Download, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentGallery, setCurrentGallery] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const videoRefs = useRef([]);
  const sectionRefs = {
    about: useRef(null),
    projects: useRef(null),
    business: useRef(null),
    skills: useRef(null),
    contact: useRef(null)
  };

  const scrollToSection = (section) => {
    setActiveSection(section);
    sectionRefs[section].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    document.title = "Portfolio - Ashler DELEKE M. N. | Développeuse Web";
    document.documentElement.lang = "fr";
  }, []);

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
      preview: "/images/projet-rgaa.png"
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
      preview: "/images/projet-wecow.jpg"
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
      preview: "/images/projet-todo.png"
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
      preview: "/images/logo-N-kû.jpg"
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
      preview: "/images/projet-wive-1.png",
      gallery: ["/images/projet-wive-1.png", "/images/projet-wive-2.png"]
    }
  ];



const skills = [
  {
    category: "Langages & Technologies Web",
    items: ["HTML5 & CSS3", "JavaScript", "TypeScript", "PHP", "MySQL"]
  },
  {
    category: "Frameworks & Bibliothèques",
    items: ["React (Router, composants)", "Angular", "JavaSpark", "WordPress", "Node.js"]
  },
  {
    category: "Design & UX/UI",
    items: ["Figma", "Maquettage", "Workflows", "Accessibilité RGAA", "Responsive Design"]
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
      {/* Skip Link pour accessibilité */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-900 focus:text-white focus:rounded-lg"
      >
        Aller au contenu principal
      </a>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" 
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Visionneuse d'image agrandie"
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded-lg p-2"
            aria-label="Fermer la visionneuse"
          >
            <X className="w-8 h-8" />
          </button>
          
          {currentGallery.length > 1 && (
            <>
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 text-white hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded-lg p-2"
                aria-label="Image précédente"
              >
                <ChevronLeft className="w-12 h-12" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 text-white hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded-lg p-2"
                aria-label="Image suivante"
              >
                <ChevronRight className="w-12 h-12" />
              </button>
            </>
          )}
          
          <img 
            src={currentImage} 
            alt="Agrandissement du projet sélectionné" 
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          
          {currentGallery.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg" aria-live="polite">
              {currentIndex + 1} sur {currentGallery.length}
            </div>
          )}
        </div>
      )}

      {/* Starry Background Effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/5 via-transparent to-blue-950/10"></div>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-900/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-900/10 shadow-sm" role="navigation" aria-label="Navigation principale">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-blue-900" aria-hidden="true" />
              <span className="text-xl font-bold text-blue-950">Ashler DELEKE</span>
            </div>
            <div className="flex gap-6">
              {[
                { key: 'about', label: 'À propos' },
                { key: 'projects', label: 'Projets' },
                { key: 'business', label: 'Entreprise' },
                { key: 'skills', label: 'Compétences' },
                { key: 'contact', label: 'Contact' }
              ].map((section) => (
                <button
                  key={section.key}
                  onClick={() => scrollToSection(section.key)}
                  className={`capitalize transition-colors focus:outline-none focus:ring-2 focus:ring-blue-900 rounded px-2 py-1 ${
                    activeSection === section.key 
                      ? 'text-blue-900 font-semibold' 
                      : 'text-gray-600 hover:text-blue-900'
                  }`}
                  aria-label={`Aller à la section ${section.label}`}
                  aria-current={activeSection === section.key ? 'page' : undefined}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main id="main-content" className="relative z-10">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 py-20" ref={sectionRefs.about} aria-labelledby="hero-title">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <img 
              src="/images/photo-profil.jpg" 
              alt="Ashler DELEKE, développeuse web" 
              className="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-blue-100"
            />
            <div className="flex-1 text-center md:text-left">
              <h1 id="hero-title" className="text-5xl font-bold text-blue-950 mb-4">
                Ashler DELEKE M. N.
              </h1>
              <p className="text-2xl text-blue-900 mb-4">
                Conceptrice Développeuse d'Applications
              </p>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl">
                Étudiante passionnée à IPI-Lyon, créant des expériences numériques accessibles et innovantes. 
                Entrepreneure, développeuse et écrivaine, je transforme les idées en réalité.
              </p>
              <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                <a 
                  href="/cv-ashler-deleke.pdf" 
                  download
                  className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors flex items-center gap-2 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
                  aria-label="Télécharger mon CV au format PDF"
                >
                  <Download className="w-5 h-5" aria-hidden="true" /> Télécharger mon CV
                </a>
                <a 
                  href="https://github.com/ashler18" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
                  aria-label="Voir mon profil GitHub (Ouvre dans un nouvel onglet)"
                >
                  <Github className="w-5 h-5" aria-hidden="true" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ashler/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
                  aria-label="Voir mon profil LinkedIn (Ouvre dans un nouvel onglet)"
                >
                  <Linkedin className="w-5 h-5" aria-hidden="true" />
                </a>
                <a 
                  href="mailto:ashler.deleke@edu.igensia.com"
                  className="p-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
                  aria-label="M'envoyer un email"
                >
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-6xl mx-auto px-4 py-16 bg-gradient-to-r from-blue-50 to-white rounded-3xl my-8" aria-labelledby="about-title">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-8 h-8 text-blue-900" aria-hidden="true" />
            <h2 id="about-title" className="text-4xl font-bold text-blue-950">À propos de moi</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Actuellement étudiante en <strong>Concepteur Développeur d'Application Numérique</strong> à IPI-Lyon, 
              je suis passionnée par la création d'expériences numériques qui allient esthétique, accessibilité et innovation.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mon parcours combine développement web, design UI/UX et entrepreneuriat. Je crois fermement que la technologie 
              doit être accessible à tous, c'est pourquoi je me spécialise dans l'accessibilité web (RGAA) et l'expérience utilisateur.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Au-delà du code, je suis CEO de N-kû, une entreprise e-commerce au Bénin, et écrivaine à mes heures perdues. 
              Passionnée d'astronomie, de design et d'intelligence artificielle, j'aime explorer de nouveaux horizons, 
              que ce soit dans le code ou dans les étoiles. ✨
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="max-w-6xl mx-auto px-4 py-16" ref={sectionRefs.projects} aria-labelledby="projects-title">
          <div className="flex items-center gap-3 mb-8">
            <Code className="w-8 h-8 text-blue-900" aria-hidden="true" />
            <h2 id="projects-title" className="text-4xl font-bold text-blue-950">Mes Projets</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <article key={index} className="bg-white border-2 border-blue-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
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
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-lg font-semibold">
                      🔍 Cliquez pour agrandir {project.gallery && project.gallery.length > 1 ? `(${project.gallery.length} images)` : ''}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-950 mb-2">{project.title}</h3>
                  <p className="text-sm text-blue-700 mb-3">{project.period}</p>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Technologies utilisées">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-50 text-blue-900 text-sm rounded-full" role="listitem">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-900 hover:text-blue-700 transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-blue-900 rounded px-2 py-1"
                        aria-label={`Voir le code source de ${project.title} sur GitHub (Ouvre dans un nouvel onglet)`}
                      >
                        <Github className="w-5 h-5" aria-hidden="true" /> GitHub
                      </a>
                    )}
                    {project.links.demo && (
                      <a 
                        href={project.links.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-900 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-900 rounded px-2 py-1"
                        aria-label={`Voir le site en ligne de ${project.title} (Ouvre dans un nouvel onglet)`}
                      >
                        <ExternalLink className="w-4 h-4" aria-hidden="true" /> Voir le site
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Business Section */}
        <section className="max-w-6xl mx-auto px-4 py-16 bg-gradient-to-l from-blue-50 to-white rounded-3xl my-8" ref={sectionRefs.business} aria-labelledby="business-title">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-blue-900" aria-hidden="true" />
            <h2 id="business-title" className="text-4xl font-bold text-blue-950">Mon Aventure Entrepreneuriale</h2>
          </div>
          
          <div className="space-y-6">
            <article className="bg-white border-2 border-blue-100 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <img src="/images/logo-N-kû.jpg" alt="N-kû, entreprise e-commerce au Bénin" className="w-20 h-20 rounded-lg object-contain bg-white" />
                <div>
                  <h3 className="text-3xl font-bold text-blue-950">N-Kû 🛍️</h3>
                  <p className="text-lg text-blue-800">Fondatrice & Créatrice | Bénin</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                N-kû est mon projet entrepreneurial e-commerce au Bénin, où je propose des produits diversifiés via WhatsApp pour le moment. Une aventure qui allie passion du commerce et apprentissage de l'entrepreneuriat.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6" role="list" aria-label="Galerie de produits N-kû">
                {[
                  { src: "/images/nku-otaku-1.jpg", alt: "Produits Otaku disponibles chez N-kû" },
                  { src: "/images/nku-mode-1.jpg", alt: "Articles de mode élégante N-kû" },
                  { src: "/images/nku-mode-2.jpg", alt: "Collection mode N-kû" },
                  { src: "/images/nku-otaku-2.jpg", alt: "Accessoires et articles Otaku N-kû" }
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

            <article className="bg-white border-2 border-blue-100 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <img src="/images/c-create.jpg" alt="C'create N-kû, services créatifs et événements" className="w-20 h-20 rounded-lg object-cover" />
                <div>
                  <h3 className="text-3xl font-bold text-blue-950">C'create N-Kû 🎬</h3>
                  <p className="text-lg text-blue-800">Filiale de N-Kû | Services créatifs</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Services de montage vidéo et organisation d'événements. Nous créons des montages vidéos créatifs 
                et organisons des petites fêtes entre collègues, amis et famille avec professionnalisme et humour.
              </p>
              <div className="flex flex-wrap gap-3 mb-6" role="list" aria-label="Services proposés par C'create">
                <span className="px-4 py-2 bg-blue-50 text-blue-900 rounded-full" role="listitem">Montages vidéo</span>
                <span className="px-4 py-2 bg-blue-50 text-blue-900 rounded-full" role="listitem">Création de CV</span>
                <span className="px-4 py-2 bg-blue-50 text-blue-900 rounded-full" role="listitem">Conception d'affiches</span>
                <span className="px-4 py-2 bg-blue-50 text-blue-900 rounded-full" role="listitem">Organisation d'événements</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4" role="list" aria-label="Exemples de réalisations C'create">
                <div className="relative group" role="listitem">
                  <video 
                    ref={(el) => (videoRefs.current[0] = el)}
                    src="/images/ccreate-video1.mp4" 
                    className="w-full aspect-video object-contain bg-black rounded-lg shadow-md"
                    controls
                    poster="/images/c-create.jpg"
                    onPlay={() => handleVideoPlay(0)}
                    aria-label="Vidéo de présentation des montages C'create, partie 1"
                  />
                </div>
                <img 
                  src="/images/service create.jpg" 
                  alt="Services créatifs proposés par C'create" 
                  className="w-full aspect-video object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-900"
                  onClick={() => openLightbox("/images/service create.jpg")}
                  role="listitem"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openLightbox("/images/service create.jpg");
                    }
                  }}
                />
                <div className="relative group" role="listitem">
                  <video 
                    ref={(el) => (videoRefs.current[1] = el)}
                    src="/images/ccreate-video2.mp4" 
                    className="w-full aspect-video object-contain bg-black rounded-lg shadow-md"
                    controls
                    poster="/images/c-create.jpg"
                    onPlay={() => handleVideoPlay(1)}
                    aria-label="Vidéo de présentation des montages C'create, partie 2"
                  />
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Publications Section */}
        <section className="max-w-6xl mx-auto px-4 py-16" aria-labelledby="publications-title">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-8 h-8 text-blue-900" aria-hidden="true" />
            <h2 id="publications-title" className="text-4xl font-bold text-blue-950">Publications</h2>
          </div>
          <article className="bg-white border-2 border-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-950 mb-4">✍️ Écrivaine à mes temps libres</h3>
            <p className="text-gray-700 mb-6">
              J'ai publié un essai disponible sur Amazon et Wattpad. L'écriture est ma façon d'explorer 
              d'autres univers et de partager mes réflexions.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a 
                href="https://amzn.to/43Z190P" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
                aria-label="Acheter la version payante de mon livre sur Amazon (Ouvre dans un nouvel onglet)"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" /> Version Amazon (payante)
              </a>
              <a 
                href="https://www.wattpad.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-100 text-blue-900 rounded-lg hover:bg-blue-200 transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
                aria-label="Lire gratuitement mon livre sur Wattpad (Ouvre dans un nouvel onglet)"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" /> Wattpad (gratuite)
              </a>
            </div>
          </article>
        </section>

        {/* Skills Section */}
        <section className="max-w-6xl mx-auto px-4 py-16 bg-gradient-to-r from-blue-50 to-white rounded-3xl my-8" ref={sectionRefs.skills} aria-labelledby="skills-title">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-8 h-8 text-blue-900" aria-hidden="true" />
            <h2 id="skills-title" className="text-4xl font-bold text-blue-950">Compétences & Passions</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skills.map((skillGroup, index) => (
              <article key={index} className="bg-white border-2 border-blue-100 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-blue-950 mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2" role="list" aria-label={`Compétences en ${skillGroup.category}`}>
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-blue-50 text-blue-900 rounded-full" role="listitem">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-950 mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6 text-blue-900" aria-hidden="true" /> Centres d'intérêt
            </h3>
            <div className="flex flex-wrap gap-3" role="list" aria-label="Mes centres d'intérêt">
              {interests.map((interest, index) => (
                <span key={index} className="px-4 py-2 bg-white border-2 border-blue-100 text-blue-900 rounded-full hover:bg-blue-50 transition-colors" role="listitem">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-6xl mx-auto px-4 py-16" ref={sectionRefs.contact} aria-labelledby="contact-title">
          <div className="text-center bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-3xl p-12">
            <h2 id="contact-title" className="text-4xl font-bold mb-4">Travaillons ensemble ! ✨</h2>
            <p className="text-xl mb-8 opacity-90">
              Vous avez un projet en tête ? N'hésitez pas à me contacter.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a 
                  href="mailto:ashler.deleke@edu.igensia.com"
                className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                aria-label="M'envoyer un email pour me contacter"
              >
                Me contacter
              </a>
              <a 
                href="https://github.com/ashler18" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-blue-800 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                aria-label="Visiter mon profil GitHub (Ouvre dans un nouvel onglet)"
              >
                Voir mon GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-600 border-t border-blue-100 mt-16" role="contentinfo">
        <p className="mb-2">© 2025 Ashler DELEKE M. N. - Tous droits réservés</p>
        <p className="text-sm">Conçu avec passion et une touche d'étoiles ⭐</p>
      </footer>
    </div>
  );
}