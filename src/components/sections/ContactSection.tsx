import type { RefObject } from 'react';
import { Github, Mail } from 'lucide-react';
import { SITE } from '../../constants/site';

interface ContactSectionProps {
  sectionRef: RefObject<HTMLElement | null>;
}

export function ContactSection({ sectionRef }: ContactSectionProps) {
  return (
    <section className="section-shell" ref={sectionRef} aria-labelledby="contact-title">
      <div className="contact-panel">
        <p className="contact-eyebrow">Contact</p>
        <h2 id="contact-title" className="contact-title">
          Parlons de votre prochain projet
        </h2>
        <p className="contact-lead">
          Une idée UX/UI, une interface à concevoir ou un besoin front-end&nbsp;?
          Écrivons-nous.
        </p>
        <div className="contact-actions">
          <a href={`mailto:${SITE.email}`} className="btn-primary">
            <Mail className="w-4 h-4" strokeWidth={1.75} />
            Me contacter
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Github className="w-4 h-4" strokeWidth={1.75} />
            Voir mon GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
