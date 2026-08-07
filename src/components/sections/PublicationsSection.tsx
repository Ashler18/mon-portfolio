import type { RefObject } from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { SectionHeader } from '../layout/SectionHeader';

interface PublicationsSectionProps {
  sectionRef: RefObject<HTMLElement | null>;
}

export function PublicationsSection({ sectionRef }: PublicationsSectionProps) {
  return (
    <section className="section-shell" ref={sectionRef} aria-labelledby="publications-title">
      <div className="card-panel p-5 sm:p-8 lg:p-12">
        <SectionHeader
          id="publications-title"
          title="Publications"
          icon={<BookOpen className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.75} />}
          className="!mb-6 sm:!mb-8"
        />

        <div className="max-w-2xl">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
            Écriture en parallèle
          </h3>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            J&apos;ai publié un essai disponible sur Amazon. L&apos;écriture m&apos;aide à
            explorer d&apos;autres univers et à partager mes réflexions — un complément
            naturel à mon travail de designer.
          </p>
          <a
            href="https://amzn.to/43Z190P"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <ExternalLink className="w-4 h-4" strokeWidth={1.75} /> Voir sur Amazon
          </a>
        </div>
      </div>
    </section>
  );
}
