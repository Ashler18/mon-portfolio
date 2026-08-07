import type { CaseStudy } from '../../types';

interface CaseStudyBlocksProps {
  caseStudy: CaseStudy;
  compact?: boolean;
}

export function CaseStudyBlocks({ caseStudy, compact = false }: CaseStudyBlocksProps) {
  if (compact) {
    return null;
  }

  if (!caseStudy.challenge && !caseStudy.method && !caseStudy.result) return null;

  return (
    <div className="case-study">
      {caseStudy.challenge && (
        <div className="case-block">
          <p className="case-label">Le défi</p>
          <p className="case-text">{caseStudy.challenge}</p>
        </div>
      )}

      {caseStudy.method && (
        <div className="case-block">
          <p className="case-label">La démarche</p>
          <p className="case-text">{caseStudy.method}</p>
        </div>
      )}

      {caseStudy.result && (
        <div className="case-block">
          <p className="case-label">Le résultat</p>
          <p className="case-text">{caseStudy.result}</p>
        </div>
      )}
    </div>
  );
}
