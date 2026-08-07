import type { ProjectFilter } from '../../types';

interface FilterChipsProps {
  filters: ProjectFilter[];
  active: ProjectFilter;
  onChange: (filter: ProjectFilter) => void;
}

export function FilterChips({ filters, active, onChange }: FilterChipsProps) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-8 sm:mb-10" role="tablist" aria-label="Filtrer les projets">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => onChange(filter)}
          role="tab"
          aria-selected={active === filter}
          className={`chip-filter ${
            active === filter ? 'chip-filter-active' : 'chip-filter-idle'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
