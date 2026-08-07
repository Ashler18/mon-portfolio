import { useCallback, useEffect, useRef, useState, type RefObject } from 'react';
import { NAV_OFFSET, SCROLL_SPY_OFFSET } from '../constants/site';
import type { SectionId } from '../types';

export type SectionRefs = Record<SectionId, RefObject<HTMLElement | null>>;

export function useActiveSection(sectionIds: readonly SectionId[]) {
  const [activeSection, setActiveSection] = useState<SectionId>('design');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const designRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const businessRef = useRef<HTMLElement | null>(null);
  const galleryRef = useRef<HTMLElement | null>(null);
  const publicationsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const sectionRefs: SectionRefs = {
    design: designRef,
    projects: projectsRef,
    skills: skillsRef,
    about: aboutRef,
    business: businessRef,
    gallery: galleryRef,
    publications: publicationsRef,
    contact: contactRef,
  };

  const scrollToSection = useCallback(
    (section: SectionId) => {
      setActiveSection(section);
      setMobileMenuOpen(false);
      const element = sectionRefs[section].current;
      if (element) {
        const offsetTop = element.offsetTop - NAV_OFFSET;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    },
    // sectionRefs identities are stable (useRef)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + SCROLL_SPY_OFFSET;

      for (let i = sectionIds.length - 1; i >= 0; i -= 1) {
        const section = sectionIds[i];
        const element = sectionRefs[section].current;
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds]);

  return {
    activeSection,
    mobileMenuOpen,
    setMobileMenuOpen,
    sectionRefs,
    scrollToSection,
  };
}
