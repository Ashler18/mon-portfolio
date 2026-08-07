import type { RefObject } from 'react';
import { Award, BadgeCheck, UserRound } from 'lucide-react';
import { SectionHeader } from '../layout/SectionHeader';

interface AboutSectionProps {
  sectionRef: RefObject<HTMLElement | null>;
}

export function AboutSection({ sectionRef }: AboutSectionProps) {
  return (
    <section className="section-shell" ref={sectionRef} aria-labelledby="about-title">
      <div className="card-panel p-5 sm:p-8 lg:p-12">
        <SectionHeader
          id="about-title"
          title="À propos"
          icon={<UserRound className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.75} />}
          className="!mb-6 sm:!mb-8"
        />

        <div className="max-w-3xl space-y-4 sm:space-y-5">
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Je suis Alternance en UX/UI Designer &amp; Product Designer. Mon fil rouge : comprendre les
            besoins, concevoir des interfaces claires, puis collaborer jusqu&apos;à la
            transmission au développement.
          </p>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Formée d&apos;abord aux réseaux informatiques, j&apos;ai ensuite choisi le design
            UX/UI - tout en gardant une vraie aisance côté front-end. Cette double lecture
            m&apos;aide à proposer des expériences à la fois belles, accessibles et réalistes
            à produire.
          </p>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            En parallèle, je mène des projets entrepreneuriaux (N-kû, Art-shler) où se
            croisent identité visuelle, produit et communication. L&apos;écriture, l&apos;IA
            et l&apos;astronomie nourrissent aussi mon regard créatif.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          <div className="bg-slate-50/90 rounded-2xl p-5 sm:p-6 lg:p-7 border border-gray-100 hover:border-orange-100 hover:shadow-md transition-all duration-300">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-5 flex items-center gap-2.5">
              <div className="p-2 bg-orange-50 rounded-lg">
                <Award className="w-5 h-5 text-orange-600" strokeWidth={1.75} />
              </div>
              Formation
            </h3>
            <div className="space-y-4">
              <div className="border-l-2 border-orange-200 pl-3">
                <p className="font-bold text-gray-900 mb-0.5 text-[15px]">
                  MBA Design UI/UX (en cours)
                </p>
                <p className="text-sm text-gray-500">My Digital School - 2026/2027</p>
              </div>
              <div className="border-l-2 border-gray-200 pl-3">
                <p className="font-bold text-gray-900 mb-0.5 text-[15px]">
                  Bachelor Développeur d&apos;Application
                </p>
                <p className="text-sm text-gray-500">IPI-Lyon - 2024/2025</p>
              </div>
              <div className="border-l-2 border-gray-200 pl-3">
                <p className="font-bold text-gray-900 mb-0.5 text-[15px]">
                  Licence Réseaux Informatiques
                </p>
                <p className="text-sm text-gray-500">HECM Bénin - 2021/2024</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50/90 rounded-2xl p-5 sm:p-6 lg:p-7 border border-gray-100 hover:border-orange-100 hover:shadow-md transition-all duration-300">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-5 flex items-center gap-2.5">
              <div className="p-2 bg-orange-50 rounded-lg">
                <BadgeCheck className="w-5 h-5 text-orange-600" strokeWidth={1.75} />
              </div>
              Certifications
            </h3>
            <div className="space-y-4">
              <div className="border-l-2 border-orange-200 pl-3">
                <p className="font-bold text-gray-900 mb-0.5 text-[15px]">
                  Web Accessibility Basics
                </p>
                <p className="text-sm text-gray-500">Contentsquare - 2025</p>
              </div>
              <div className="border-l-2 border-orange-200 pl-3">
                <p className="font-bold text-gray-900 mb-0.5 text-[15px]">
                  Accessibilité Web RGAA
                </p>
                <p className="text-sm text-gray-500">Contentsquare - 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
