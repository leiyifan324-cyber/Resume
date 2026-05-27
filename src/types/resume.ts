export interface ResumeData {
  meta: {
    siteTitle: string;
    lang: string;
  };
  profile: {
    name: string;
    nameEn?: string;
    headline: string;
    bio: string;
    avatar?: string;
  };
  nav: { label: string; section: string }[];
  competencies: string[];
  techStack: string[];
  projects: Project[];
  life: LifeSection;
  contact: {
    intro: string;
    items: { label: string; value: string; href?: string }[];
  };
  footer: string;
}

export interface Project {
  title: string;
  period: string;
  status: "Completed" | "In Progress" | "Planned";
  url?: string;
  star: {
    situation: string;
    task: string;
    action: string[];
    result: string;
  };
  tags: string[];
}

export interface LifeSection {
  title: string;
  subtitle: string;
  intro: string;
  items: LifeItem[];
}

export interface LifeItem {
  icon: string;
  title: string;
  badge?: string;
  description: string;
  highlights?: string[];
}
