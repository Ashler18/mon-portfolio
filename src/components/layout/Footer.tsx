import { SITE } from '../../constants/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-9 text-center border-t border-slate-200/70 mt-4 sm:mt-8"
      role="contentinfo"
    >
      <p className="text-slate-500 mb-1 font-medium text-sm">
        © {year} {SITE.name}
      </p>
      <p className="text-slate-400 text-xs tracking-wide">
        Alternance en UX/UI Designer &amp; Product Designer · Front-end
      </p>
    </footer>
  );
}
