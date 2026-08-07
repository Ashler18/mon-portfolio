import type { ReactNode } from 'react';

interface SectionHeaderProps {
  id: string;
  title: string;
  subtitle?: string;
  icon: ReactNode;
  className?: string;
}

export function SectionHeader({
  id,
  title,
  subtitle,
  icon,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`section-header ${className}`.trim()}>
      <div className="section-icon">{icon}</div>
      <div>
        <h2 id={id} className="section-title">
          {title}
        </h2>
        {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
      </div>
    </div>
  );
}
