import type { RefObject } from 'react';
import {
  Award,
  Code,
  FileSpreadsheet,
  Headset,
  Heart,
  Palette,
  Sparkles,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { interests } from '../../data/interests';
import { skills } from '../../data/skills';
import type { SkillIconKey } from '../../types';
import { SectionHeader } from '../layout/SectionHeader';

const SKILL_ICONS: Record<SkillIconKey, LucideIcon> = {
  palette: Palette,
  sparkles: Sparkles,
  code: Code,
  award: Award,
  zap: Zap,
  headset: Headset,
  office: FileSpreadsheet,
};

interface SkillsSectionProps {
  sectionRef: RefObject<HTMLElement | null>;
}

export function SkillsSection({ sectionRef }: SkillsSectionProps) {
  return (
    <section className="section-shell" ref={sectionRef} aria-labelledby="skills-title">
      <SectionHeader
        id="skills-title"
        title="Compétences"
        subtitle="Un socle design, complété par le front-end, l’accessibilité et les outils du quotidien"
        icon={<Sparkles className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.75} />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10">
        {skills.map((skillGroup) => {
          const Icon = SKILL_ICONS[skillGroup.icon];
          return (
            <article key={skillGroup.category} className="skill-card">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="skill-icon">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.75} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                  {skillGroup.category}
                </h3>
              </div>
              {skillGroup.description && (
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  {skillGroup.description}
                </p>
              )}
              <p className="text-sm text-gray-600 leading-relaxed">
                {skillGroup.items.join(', ')}.
              </p>
            </article>
          );
        })}
      </div>

      <div className="card p-6 sm:p-8">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-5 flex items-center gap-2.5">
          <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 shrink-0" strokeWidth={1.75} />
          Centres d&apos;intérêt
        </h3>
        <div className="text-sm sm:text-[15px] text-gray-600 leading-relaxed">
          {interests.join(' · ')}
        </div>
      </div>
    </section>
  );
}
