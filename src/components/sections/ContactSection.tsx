import type { RefObject } from 'react';
import { SITE } from '../../constants/site';

interface ContactSectionProps {
  sectionRef: RefObject<HTMLElement | null>;
}

export function ContactSection({ sectionRef }: ContactSectionProps) {
  return (
    <section className="section-shell" ref={sectionRef} aria-labelledby="contact-title">
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.25),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.12),transparent_40%)]" />
        <div className="relative px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-14 text-center text-white">
          <p className="text-orange-300/90 text-xs font-semibold uppercase tracking-[0.14em] mb-3">
            Contact
          </p>
          <h2
            id="contact-title"
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold mb-4 tracking-tight text-balance"
          >
            Parlons de votre prochain projet
          </h2>
          <p className="text-base sm:text-lg text-slate-200/90 mb-8 sm:mb-9 max-w-lg mx-auto leading-relaxed font-medium text-balance">
            Une idée UX/UI, une interface à concevoir ou un besoin front-end ? Écrivons-nous.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-3.5">
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-orange-500 hover:bg-orange-400 text-white rounded-xl font-semibold transition-all duration-300 shadow-md hover:-translate-y-0.5 text-[15px] min-h-[48px]"
            >
              Me contacter
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white/10 hover:bg-white/15 text-white rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 text-[15px] min-h-[48px] border border-white/15"
            >
              Voir mon GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
