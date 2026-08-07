import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../../constants/nav';
import { SITE } from '../../constants/site';
import type { SectionId } from '../../types';

interface NavbarProps {
  activeSection: SectionId;
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onNavigate: (section: SectionId) => void;
}

export function Navbar({
  activeSection,
  mobileMenuOpen,
  onToggleMobileMenu,
  onNavigate,
}: NavbarProps) {
  return (
    <nav
      className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-gray-200/50"
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-sm shadow-orange-500/20 shrink-0 transition-transform duration-300 hover:scale-105"
              aria-hidden="true"
            >
              <span className="text-white font-bold text-sm sm:text-base tracking-tight">A</span>
            </div>
            <div className="min-w-0">
              <span className="block text-base sm:text-lg font-bold text-gray-900 tracking-tight truncate">
                {SITE.name}
              </span>
              <span className="block text-[11px] sm:text-xs text-gray-500 font-medium truncate">
                {SITE.shortRole}
              </span>
            </div>
          </div>


          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_ITEMS.map((section) => (
              <button
                key={section.key}
                type="button"
                onClick={() => onNavigate(section.key)}
                className={`nav-link ${
                  activeSection === section.key ? 'nav-link-active' : 'nav-link-idle'
                }`}
                aria-label={`Aller à la section ${section.label}`}
                aria-current={activeSection === section.key ? 'true' : undefined}
              >
                {section.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="lg:hidden p-2.5 text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-xl min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-orange-50 transition-colors"
            onClick={onToggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={1.75} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={1.75} />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div
            id="mobile-nav"
            className="lg:hidden mt-3 space-y-1 pb-2 animate-menu border-t border-gray-100 pt-3"
          >
            {NAV_ITEMS.map((section) => (
              <button
                key={section.key}
                type="button"
                onClick={() => onNavigate(section.key)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-colors duration-200 font-medium text-[15px] min-h-[44px] ${
                  activeSection === section.key
                    ? 'bg-orange-50 text-orange-700'
                    : 'text-gray-700 hover:bg-orange-50/80'
                }`}
                aria-label={`Aller à la section ${section.label}`}
                aria-current={activeSection === section.key ? 'true' : undefined}
              >
                {section.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
