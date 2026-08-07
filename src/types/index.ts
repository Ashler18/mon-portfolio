export type SectionId =
  | 'design'
  | 'projects'
  | 'skills'
  | 'about'
  | 'business'
  | 'gallery'
  | 'publications'
  | 'contact';

export type ProjectFilter = 'Tout' | 'UX/UI' | 'Graphisme' | 'Développement';

export type CreativeWorkType = 'design' | 'print' | 'logo' | 'web' | 'product';

export type SkillIconKey =
  | 'palette'
  | 'sparkles'
  | 'code'
  | 'award'
  | 'zap'
  | 'headset'
  | 'office';

export interface NavItem {
  key: SectionId;
  label: string;
}

export interface ProjectLinks {
  github?: string;
  demo?: string;
  figma?: string;
}

export interface CreativeWork {
  type: CreativeWorkType;
  title: string;
  image: string;
  category: string;
  description: string;
  gallery?: string[];
  hasVideo?: boolean;
}

export interface CaseStudy {
  challenge: string;
  /** Short narrative of the process — no tag lists */
  method?: string;
  result: string;
}

export interface ProjectSurface {
  label: string;
  image: string;
}

export interface UxProject {
  title: string;
  period: string;
  summary: string;
  caseStudy: CaseStudy;
  links: ProjectLinks;
  category?: string;
  featured?: boolean;
  comingSoon?: boolean;
  comingSoonNote?: string;
  surfaces?: ProjectSurface[];
  preview?: string;
  gallery?: string[];
}

export interface DevProject {
  title: string;
  period: string;
  summary: string;
  caseStudy: CaseStudy;
  links: ProjectLinks;
  preview: string;
  gallery?: string[];
}

export interface SkillGroup {
  category: string;
  icon: SkillIconKey;
  description?: string;
  items: string[];
}

export interface BusinessVenture {
  id: string;
  title: string;
  role: string;
  description: string;
  tags?: string[];
  cta?: { label: string; href: string };
  logo?: string;
  icon?: 'shopping';
  accent?: 'orange' | 'neutral';
  images?: string[];
  media?: Array<
    | { type: 'image'; src: string; alt: string }
    | { type: 'video'; src: string }
  >;
}
