import { Download, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { SITE } from '../../constants/site';
import { asset } from '../../utils/asset';
import { LazyImage } from '../ui/LazyImage';

export function HeroSection() {
  return (
    <section
      className="section-shell !pt-12 sm:!pt-16 lg:!pt-20 !pb-10 sm:!pb-14"
      aria-labelledby="hero-title"
    >
      <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16 xl:gap-20">
        <div className="relative group animate-fadeInUp shrink-0">
          <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur-2xl opacity-20 group-hover:opacity-35 transition duration-700" />
          <LazyImage
            priority
            src={asset('/images/photo-profil.jpg')}
            alt={`${SITE.name}, ${SITE.role}`}
            className="relative w-44 h-44 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full object-cover shadow-2xl border-[5px] sm:border-[6px] border-white transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex-1 text-center lg:text-left max-w-2xl w-full">
          <p
            className="text-sm sm:text-base font-medium text-orange-600 mb-3 sm:mb-4 animate-fadeInUp"
            style={{ animationDelay: '0.06s' }}
          >
            {SITE.availability}
          </p>

          <p
            className="text-sm sm:text-base font-semibold tracking-[0.04em] uppercase text-slate-500 mb-2 animate-fadeInUp"
            style={{ animationDelay: '0.12s' }}
          >
            {SITE.name}
          </p>

          <h1
            id="hero-title"
            className="text-display text-gray-900 mb-4 sm:mb-5 animate-fadeInUp text-balance"
            style={{ animationDelay: '0.18s' }}
          >
            {SITE.role}
          </h1>

          <p
            className="text-base sm:text-[1.0625rem] text-gray-600 mb-6 sm:mb-7 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fadeInUp text-balance"
            style={{ animationDelay: '0.26s' }}
          >
            {SITE.heroIntro}
          </p>

          <div
            className="flex gap-3 sm:gap-3.5 justify-center lg:justify-start flex-wrap items-center animate-fadeInUp"
            style={{ animationDelay: '0.34s' }}
          >
            <a
              href={asset(SITE.cvFile)}
              download="CV_Ashler_Deleke.pdf"
              className="btn-primary"
              aria-label="Télécharger mon CV au format PDF"
            >
              <Download className="w-4 h-4" strokeWidth={1.75} />
              Télécharger mon CV
            </a>
            <a
              href={asset(SITE.cvPage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              aria-label="Consulter mon CV en ligne dans un nouvel onglet"
            >
              <FileText className="w-4 h-4" strokeWidth={1.75} />
              Voir en ligne
            </a>
            <div className="flex gap-2 sm:gap-2.5 items-center" role="list" aria-label="Réseaux">
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="Voir mon profil GitHub"
              >
                <Github className="w-5 h-5" strokeWidth={1.75} />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="Voir mon profil LinkedIn"
              >
                <Linkedin className="w-5 h-5" strokeWidth={1.75} />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="btn-icon"
                aria-label="M'envoyer un email"
              >
                <Mail className="w-5 h-5" strokeWidth={1.75} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
