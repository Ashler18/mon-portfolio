import { lazy, Suspense } from 'react';
import { SECTION_ORDER } from './constants/nav';
import { SITE } from './constants/site';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { SkipLink } from './components/layout/SkipLink';
import { Lightbox } from './components/lightbox/Lightbox';
import { HeroSection } from './components/sections/HeroSection';
import { useActiveSection } from './hooks/useActiveSection';
import { useDocumentMeta } from './hooks/useDocumentMeta';
import { useLightbox } from './hooks/useLightbox';
import { useSingleVideoPlayback } from './hooks/useSingleVideoPlayback';

const ProjectsSection = lazy(() =>
  import('./components/sections/ProjectsSection').then((m) => ({ default: m.ProjectsSection }))
);
const SkillsSection = lazy(() =>
  import('./components/sections/SkillsSection').then((m) => ({ default: m.SkillsSection }))
);
const AboutSection = lazy(() =>
  import('./components/sections/AboutSection').then((m) => ({ default: m.AboutSection }))
);
const BusinessSection = lazy(() =>
  import('./components/sections/BusinessSection').then((m) => ({ default: m.BusinessSection }))
);
const GallerySection = lazy(() =>
  import('./components/sections/GallerySection').then((m) => ({ default: m.GallerySection }))
);
const PublicationsSection = lazy(() =>
  import('./components/sections/PublicationsSection').then((m) => ({
    default: m.PublicationsSection,
  }))
);
const ContactSection = lazy(() =>
  import('./components/sections/ContactSection').then((m) => ({ default: m.ContactSection }))
);

function App() {
  useDocumentMeta(SITE.title);

  const {
    activeSection,
    mobileMenuOpen,
    setMobileMenuOpen,
    sectionRefs,
    scrollToSection,
  } = useActiveSection(SECTION_ORDER);

  const lightbox = useLightbox();
  const { setVideoRef, handlePlay } = useSingleVideoPlayback();

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-blue-50/30 to-orange-50/20 text-gray-900">
      <SkipLink />

      <Lightbox
        isOpen={lightbox.isOpen}
        currentImage={lightbox.currentImage}
        gallery={lightbox.gallery}
        index={lightbox.index}
        onClose={lightbox.close}
        onNext={lightbox.next}
        onPrev={lightbox.prev}
      />

      <Navbar
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen((open) => !open)}
        onNavigate={scrollToSection}
      />

      <main id="main-content">
        <HeroSection />

        <Suspense fallback={<div className="section-shell min-h-[32vh]" aria-hidden="true" />}>
          <ProjectsSection
            designRef={sectionRefs.design}
            projectsRef={sectionRefs.projects}
            onOpenLightbox={lightbox.open}
          />
          <SkillsSection sectionRef={sectionRefs.skills} />
          <AboutSection sectionRef={sectionRefs.about} />
          <BusinessSection
            sectionRef={sectionRefs.business}
            onOpenLightbox={lightbox.open}
            setVideoRef={setVideoRef}
            onVideoPlay={handlePlay}
          />
          <GallerySection
            sectionRef={sectionRefs.gallery}
            onOpenLightbox={lightbox.open}
          />
          <PublicationsSection sectionRef={sectionRefs.publications} />
          <ContactSection sectionRef={sectionRefs.contact} />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
